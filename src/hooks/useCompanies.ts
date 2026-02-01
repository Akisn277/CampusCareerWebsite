import { useQuery } from '@tanstack/react-query'
import { supabase } from '@/lib/supabase'
import { Company, CompanyDetail, CompanyFilters } from '@/types/company'

export const useCompanies = (filters?: CompanyFilters) => {
  return useQuery({
    queryKey: ['companies', filters],
    queryFn: async () => {
      let query = supabase
        .from('companies')
        .select('*')

      if (filters?.company_type) {
        query = query.eq('company_type', filters.company_type)
      }
      if (filters?.category) {
        query = query.eq('category', filters.category)
      }
      if (filters?.employee_size) {
        query = query.eq('employee_size', filters.employee_size)
      }
      if (filters?.operating_countries) {
        query = query.ilike('operating_countries', `%${filters.operating_countries}%`)
      }

      const { data, error } = await query
      if (error) throw error
      return data as Company[]
    }
  })
}

export const useCompanyDetail = (companyId: number) => {
  return useQuery({
    queryKey: ['company-detail', companyId],
    queryFn: async () => {
      const [companyRes, brandRes, businessRes, compRes, cultureRes, finRes, logRes, peopleRes, talentRes, techRes] = await Promise.all([
        supabase.from('companies').select('*').eq('company_id', companyId).single(),
        supabase.from('company_brand_reputation').select('*').eq('company_id', companyId).single(),
        supabase.from('company_business').select('*').eq('company_id', companyId).single(),
        supabase.from('company_compensation').select('*').eq('company_id', companyId).single(),
        supabase.from('company_culture').select('*').eq('company_id', companyId).single(),
        supabase.from('company_financials').select('*').eq('company_id', companyId).single(),
        supabase.from('company_logistics').select('*').eq('company_id', companyId).single(),
        supabase.from('company_people').select('*').eq('company_id', companyId).single(),
        supabase.from('company_talent_growth').select('*').eq('company_id', companyId).single(),
        supabase.from('company_technologies').select('*').eq('company_id', companyId).single(),
      ])

      const company = companyRes.data as Company
      const detail: CompanyDetail = {
        ...company,
        brand_reputation: brandRes.data || undefined,
        business: businessRes.data || undefined,
        compensation: compRes.data || undefined,
        culture: cultureRes.data || undefined,
        financials: finRes.data || undefined,
        logistics: logRes.data || undefined,
        people: peopleRes.data || undefined,
        talent_growth: talentRes.data || undefined,
        technologies: techRes.data || undefined,
      }

      return detail
    },
    enabled: !!companyId
  })
}

export const useCompanyStats = () => {
  return useQuery({
    queryKey: ['company-stats'],
    queryFn: async () => {
      const { data: companies, error } = await supabase
        .from('companies')
        .select('company_type, category, employee_size')

      if (error) throw error

      const totalCompanies = companies?.length || 0
      const typeDistribution = companies?.reduce((acc, company) => {
        const type = company.company_type || 'Unknown'
        acc[type] = (acc[type] || 0) + 1
        return acc
      }, {} as Record<string, number>) || {}

      const categoryDistribution = companies?.reduce((acc, company) => {
        const category = company.category || 'Unknown'
        acc[category] = (acc[category] || 0) + 1
        return acc
      }, {} as Record<string, number>) || {}

      const sizeDistribution = companies?.reduce((acc, company) => {
        const size = company.employee_size || 'Unknown'
        acc[size] = (acc[size] || 0) + 1
        return acc
      }, {} as Record<string, number>) || {}

      return {
        totalCompanies,
        typeDistribution,
        categoryDistribution,
        sizeDistribution
      }
    }
  })
}

export const useCompanyFilterOptions = () => {
  return useQuery({
    queryKey: ['company-filter-options'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('companies')
        .select('company_type, category, employee_size, operating_countries')

      if (error) throw error

      const companyTypes = [...new Set(data?.map(c => c.company_type).filter(Boolean))].sort()
      const categories = [...new Set(data?.map(c => c.category).filter(Boolean))].sort()
      const employeeSizes = [...new Set(data?.map(c => c.employee_size).filter(Boolean))].sort()
      const countries = [...new Set(data?.flatMap(c => c.operating_countries?.split(',') || []).map(s => s.trim()).filter(Boolean))].sort()

      return {
        companyTypes,
        categories,
        employeeSizes,
        countries
      }
    }
  })
}