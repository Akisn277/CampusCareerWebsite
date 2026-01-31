// Mock data for development - will be replaced with Supabase data
// This data strictly follows the schema structure

import { Company, CompanyDetail } from '@/types/company';

export const mockCompanies: Company[] = [
  {
    id: '1',
    company_id: 'comp_001',
    name: 'TechForward Solutions',
    logo_url: undefined,
    company_type: 'Product',
    category: 'Technology',
    employee_size: '1001-5000',
    headquarters_address: 'Bangalore, India',
    website: 'https://techforward.example.com',
    founded_year: 2015,
    description: 'Enterprise software solutions for digital transformation.',
    operating_countries: ['India', 'USA', 'UK'],
  },
  {
    id: '2',
    company_id: 'comp_002',
    name: 'DataDriven Analytics',
    logo_url: undefined,
    company_type: 'Service',
    category: 'Data Science',
    employee_size: '201-500',
    headquarters_address: 'Chennai, India',
    website: 'https://datadriven.example.com',
    founded_year: 2018,
    description: 'Advanced analytics and business intelligence consulting.',
    operating_countries: ['India', 'Singapore'],
  },
  {
    id: '3',
    company_id: 'comp_003',
    name: 'CloudScale Systems',
    logo_url: undefined,
    company_type: 'Product',
    category: 'Cloud Computing',
    employee_size: '501-1000',
    headquarters_address: 'Hyderabad, India',
    website: 'https://cloudscale.example.com',
    founded_year: 2016,
    description: 'Cloud infrastructure and DevOps automation platform.',
    operating_countries: ['India', 'USA', 'Germany'],
  },
  {
    id: '4',
    company_id: 'comp_004',
    name: 'FinTech Innovations',
    logo_url: undefined,
    company_type: 'Product',
    category: 'Finance',
    employee_size: '51-200',
    headquarters_address: 'Mumbai, India',
    website: 'https://fintechinno.example.com',
    founded_year: 2020,
    description: 'Digital payment and banking solutions.',
    operating_countries: ['India'],
  },
  {
    id: '5',
    company_id: 'comp_005',
    name: 'HealthTech Labs',
    logo_url: undefined,
    company_type: 'Product',
    category: 'Healthcare',
    employee_size: '201-500',
    headquarters_address: 'Delhi, India',
    website: 'https://healthtechlabs.example.com',
    founded_year: 2017,
    description: 'AI-powered healthcare diagnostics platform.',
    operating_countries: ['India', 'UAE', 'USA'],
  },
  {
    id: '6',
    company_id: 'comp_006',
    name: 'EduLearn Technologies',
    logo_url: undefined,
    company_type: 'Product',
    category: 'Education',
    employee_size: '51-200',
    headquarters_address: 'Pune, India',
    website: 'https://edulearn.example.com',
    founded_year: 2019,
    description: 'Online learning and skill development platform.',
    operating_countries: ['India', 'Nepal', 'Bangladesh'],
  },
  {
    id: '7',
    company_id: 'comp_007',
    name: 'SecureNet Cyber',
    logo_url: undefined,
    company_type: 'Service',
    category: 'Cybersecurity',
    employee_size: '201-500',
    headquarters_address: 'Bangalore, India',
    website: 'https://securenet.example.com',
    founded_year: 2014,
    description: 'Enterprise cybersecurity and threat intelligence.',
    operating_countries: ['India', 'USA', 'UK', 'Australia'],
  },
  {
    id: '8',
    company_id: 'comp_008',
    name: 'GreenEnergy Tech',
    logo_url: undefined,
    company_type: 'Product',
    category: 'Clean Energy',
    employee_size: '1001-5000',
    headquarters_address: 'Chennai, India',
    website: 'https://greenenergy.example.com',
    founded_year: 2012,
    description: 'Renewable energy management and optimization.',
    operating_countries: ['India', 'Germany', 'Netherlands'],
  },
];

// Extended detail data for individual company view
export const mockCompanyDetails: Record<string, CompanyDetail> = {
  'comp_001': {
    ...mockCompanies[0],
    business: {
      id: 'b1',
      company_id: 'comp_001',
      business_model: 'B2B SaaS',
      revenue_streams: ['Subscription', 'Professional Services', 'Training'],
      target_market: 'Enterprise',
      competitive_advantage: 'Proprietary AI engine for process automation',
      strategic_focus: 'Digital transformation for manufacturing sector',
      partnerships: ['Microsoft', 'AWS', 'SAP'],
      market_position: 'Leader in APAC region',
    },
    technologies: {
      id: 't1',
      company_id: 'comp_001',
      tech_stack: ['React', 'Node.js', 'Python', 'PostgreSQL', 'Kubernetes'],
      engineering_practices: ['CI/CD', 'Code Review', 'TDD', 'Microservices'],
      development_methodology: 'Agile Scrum',
      tools: ['GitHub', 'Jira', 'Confluence', 'Datadog'],
      infrastructure: 'Multi-cloud (AWS + Azure)',
    },
    people: {
      id: 'p1',
      company_id: 'comp_001',
      leadership_team: [
        { name: 'Priya Sharma', role: 'CEO', linkedin_url: '#' },
        { name: 'Rajesh Kumar', role: 'CTO', linkedin_url: '#' },
        { name: 'Anita Desai', role: 'VP Engineering', linkedin_url: '#' },
      ],
      team_size: '2500+',
      hiring_status: 'Actively Hiring',
      org_structure: 'Matrix',
      reporting_style: 'Quarterly OKRs',
    },
    culture: {
      id: 'c1',
      company_id: 'comp_001',
      work_environment: 'Collaborative and innovation-driven',
      values: ['Innovation', 'Integrity', 'Customer Focus', 'Excellence'],
      diversity_initiatives: ['Women in Tech', 'LGBTQ+ ERG', 'Disability Inclusion'],
      employee_engagement: 'High (85% satisfaction score)',
      communication_style: 'Open and transparent',
      decision_making: 'Data-driven with team input',
    },
    talent_growth: {
      id: 'tg1',
      company_id: 'comp_001',
      training_programs: ['Leadership Development', 'Technical Bootcamps', 'Soft Skills'],
      career_paths: ['Individual Contributor', 'Management', 'Architect'],
      mentorship: true,
      learning_budget: '₹50,000/year',
      promotion_frequency: 'Annual review cycles',
      internal_mobility: 'Encouraged - 30% internal transfers',
    },
    compensation: {
      id: 'co1',
      company_id: 'comp_001',
      salary_range: 'Competitive (75th percentile)',
      benefits: ['Health Insurance', 'Stock Options', 'Flexible PTO', 'Parental Leave'],
      bonus_structure: 'Performance-based (10-20% of base)',
      equity_options: true,
      review_cycle: 'Bi-annual',
    },
    logistics: {
      id: 'l1',
      company_id: 'comp_001',
      work_model: 'Hybrid',
      office_locations: ['Bangalore', 'Chennai', 'Hyderabad', 'San Francisco'],
      remote_policy: '2-3 days remote per week',
      travel_requirements: 'Occasional (10-15%)',
      relocation_support: true,
    },
    financials: {
      id: 'f1',
      company_id: 'comp_001',
      revenue_range: '$100M - $500M',
      funding_stage: 'Series D',
      total_funding: '$250M',
      profitability: 'Profitable',
      financial_stability: 'Strong',
      growth_rate: '35% YoY',
    },
    brand_reputation: {
      id: 'br1',
      company_id: 'comp_001',
      brand_visibility: 'High in enterprise segment',
      market_reputation: 'Trusted technology partner',
      awards: ['Best Workplace 2024', 'Innovation Award 2023', 'Top Employer'],
      certifications: ['ISO 27001', 'SOC 2 Type II', 'GDPR Compliant'],
      media_presence: 'Regular industry publications',
      industry_recognition: 'Gartner Magic Quadrant Leader',
    },
  },
};

// Get unique values for filters
export const getUniqueCompanyTypes = (): string[] => {
  return [...new Set(mockCompanies.map(c => c.company_type))];
};

export const getUniqueCategories = (): string[] => {
  return [...new Set(mockCompanies.map(c => c.category))];
};

export const getUniqueEmployeeSizes = (): string[] => {
  return [...new Set(mockCompanies.map(c => c.employee_size).filter(Boolean) as string[])];
};

export const getUniqueCountries = (): string[] => {
  const countries = mockCompanies.flatMap(c => c.operating_countries || []);
  return [...new Set(countries)];
};
