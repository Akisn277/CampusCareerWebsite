// Schema-strict type definitions for SRM DCC
// These types ONLY reflect the actual Supabase tables - no computed or derived fields

export interface Company {
  id: string;
  company_id: string;
  name: string;
  logo_url?: string;
  company_type: string;
  category: string;
  employee_size?: string;
  headquarters_address?: string;
  website?: string;
  founded_year?: number;
  description?: string;
  operating_countries?: string[];
  created_at?: string;
  updated_at?: string;
}

export interface CompanyBrandReputation {
  id: string;
  company_id: string;
  brand_visibility?: string;
  market_reputation?: string;
  awards?: string[];
  certifications?: string[];
  media_presence?: string;
  industry_recognition?: string;
}

export interface CompanyBusiness {
  id: string;
  company_id: string;
  business_model?: string;
  revenue_streams?: string[];
  target_market?: string;
  competitive_advantage?: string;
  strategic_focus?: string;
  partnerships?: string[];
  market_position?: string;
}

export interface CompanyCompensation {
  id: string;
  company_id: string;
  salary_range?: string;
  benefits?: string[];
  bonus_structure?: string;
  equity_options?: boolean;
  review_cycle?: string;
}

export interface CompanyCulture {
  id: string;
  company_id: string;
  work_environment?: string;
  values?: string[];
  diversity_initiatives?: string[];
  employee_engagement?: string;
  communication_style?: string;
  decision_making?: string;
}

export interface CompanyFinancials {
  id: string;
  company_id: string;
  revenue_range?: string;
  funding_stage?: string;
  total_funding?: string;
  profitability?: string;
  financial_stability?: string;
  growth_rate?: string;
}

export interface CompanyLogistics {
  id: string;
  company_id: string;
  work_model?: string;
  office_locations?: string[];
  remote_policy?: string;
  travel_requirements?: string;
  relocation_support?: boolean;
}

export interface CompanyPeople {
  id: string;
  company_id: string;
  leadership_team?: LeadershipMember[];
  team_size?: string;
  hiring_status?: string;
  org_structure?: string;
  reporting_style?: string;
}

export interface LeadershipMember {
  name: string;
  role: string;
  linkedin_url?: string;
}

export interface CompanyTalentGrowth {
  id: string;
  company_id: string;
  training_programs?: string[];
  career_paths?: string[];
  mentorship?: boolean;
  learning_budget?: string;
  promotion_frequency?: string;
  internal_mobility?: string;
}

export interface CompanyTechnologies {
  id: string;
  company_id: string;
  tech_stack?: string[];
  engineering_practices?: string[];
  development_methodology?: string;
  tools?: string[];
  infrastructure?: string;
}

// Aggregated view for company detail page
export interface CompanyDetail extends Company {
  brand_reputation?: CompanyBrandReputation;
  business?: CompanyBusiness;
  compensation?: CompanyCompensation;
  culture?: CompanyCulture;
  financials?: CompanyFinancials;
  logistics?: CompanyLogistics;
  people?: CompanyPeople;
  talent_growth?: CompanyTalentGrowth;
  technologies?: CompanyTechnologies;
}

// Filter options derived from schema fields
export interface CompanyFilters {
  company_type?: string;
  category?: string;
  employee_size?: string;
  operating_countries?: string;
}
