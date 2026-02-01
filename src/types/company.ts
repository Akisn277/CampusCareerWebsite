// Schema-strict type definitions for Supabase tables
// These types ONLY reflect the actual Supabase schema - no computed or derived fields

export interface Company {
  company_id: number;
  company_type?: string;
  name?: string;
  short_name?: string;
  logo_url?: string;
  category?: string;
  incorporation_year?: string;
  overview_text?: string;
  nature_of_company?: string;
  headquarters_address?: string;
  operating_countries?: string;
  office_count?: string;
  office_locations?: string;
  employee_size?: string;
  vision_statement?: string;
  mission_statement?: string;
  core_values?: string;
  history_timeline?: string;
  recent_news?: string;
  website_url?: string;
  linkedin_url?: string;
  twitter_handle?: string;
  facebook_url?: string;
  instagram_url?: string;
  primary_contact_email?: string;
  primary_phone_number?: string;
  regulatory_status?: string;
  legal_issues?: string;
  esg_ratings?: string;
  supply_chain_dependencies?: string;
  geopolitical_risks?: string;
  macro_risks?: string;
  carbon_footprint?: string;
  ethical_sourcing?: string;
  marketing_video_url?: string;
  customer_testimonials?: string;
}

export interface CompanyBrandReputation {
  company_id: number;
  website_quality?: string;
  website_rating?: string;
  website_traffic_rank?: string;
  social_media_followers?: string;
  glassdoor_rating?: string;
  indeed_rating?: string;
  google_rating?: string;
  awards_recognitions?: string;
  brand_sentiment_score?: string;
  event_participation?: string;
}

export interface CompanyBusiness {
  company_id: number;
  pain_points_addressed?: string;
  focus_sectors?: string;
  offerings_description?: string;
  top_customers?: string;
  core_value_proposition?: string;
  unique_differentiators?: string;
  competitive_advantages?: string;
  weaknesses_gaps?: string;
  key_challenges_needs?: string;
  key_competitors?: string;
  market_share_percentage?: string;
  sales_motion?: string;
  customer_concentration_risk?: string;
  exit_strategy_history?: string;
  benchmark_vs_peers?: string;
  future_projections?: string;
  strategic_priorities?: string;
  industry_associations?: string;
  case_studies?: string;
  go_to_market_strategy?: string;
  innovation_roadmap?: string;
  product_pipeline?: string;
  tam?: string;
  sam?: string;
  som?: string;
}

export interface CompanyCompensation {
  company_id: number;
  leave_policy?: string;
  health_support?: string;
  fixed_vs_variable_pay?: string;
  bonus_predictability?: string;
  esops_incentives?: string;
  family_health_insurance?: string;
  relocation_support?: string;
  lifestyle_benefits?: string;
}

export interface CompanyCulture {
  company_id: number;
  hiring_velocity?: string;
  employee_turnover?: string;
  avg_retention_tenure?: string;
  diversity_metrics?: string;
  work_culture_summary?: string;
  manager_quality?: string;
  psychological_safety?: string;
  feedback_culture?: string;
  diversity_inclusion_score?: string;
  ethical_standards?: string;
  burnout_risk?: string;
  layoff_history?: string;
  mission_clarity?: string;
  sustainability_csr?: string;
  crisis_behavior?: string;
}

export interface CompanyFinancials {
  company_id: number;
  annual_revenue?: string;
  annual_profit?: string;
  revenue_mix?: string;
  valuation?: string;
  yoy_growth_rate?: string;
  profitability_status?: string;
  key_investors?: string;
  recent_funding_rounds?: string;
  total_capital_raised?: string;
  customer_acquisition_cost?: string;
  customer_lifetime_value?: string;
  cac_ltv_ratio?: string;
  churn_rate?: string;
  net_promoter_score?: string;
  burn_rate?: string;
  runway_months?: string;
  burn_multiplier?: string;
}

export interface CompanyLogistics {
  company_id: number;
  remote_policy_details?: string;
  typical_hours?: string;
  overtime_expectations?: string;
  weekend_work?: string;
  flexibility_level?: string;
  location_centrality?: string;
  public_transport_access?: string;
  cab_policy?: string;
  airport_commute_time?: string;
  office_zone_type?: string;
  area_safety?: string;
  safety_policies?: string;
  infrastructure_safety?: string;
  emergency_preparedness?: string;
}

export interface CompanyPeople {
  company_id: number;
  ceo_name?: string;
  ceo_linkedin_url?: string;
  key_leaders?: string;
  warm_intro_pathways?: string;
  decision_maker_access?: string;
  contact_person_name?: string;
  contact_person_title?: string;
  contact_person_email?: string;
  contact_person_phone?: string;
  board_members?: string;
}

export interface CompanyTalentGrowth {
  company_id: number;
  training_spend?: string;
  onboarding_quality?: string;
  learning_culture?: string;
  exposure_quality?: string;
  mentorship_availability?: string;
  internal_mobility?: string;
  promotion_clarity?: string;
  tools_access?: string;
  role_clarity?: string;
  early_ownership?: string;
  work_impact?: string;
  execution_thinking_balance?: string;
  automation_level?: string;
  cross_functional_exposure?: string;
  company_maturity?: string;
  brand_value?: string;
  client_quality?: string;
  exit_opportunities?: string;
  skill_relevance?: string;
  external_recognition?: string;
  network_strength?: string;
  global_exposure?: string;
}

export interface CompanyTechnologies {
  company_id: number;
  technology_partners?: string;
  intellectual_property?: string;
  r_and_d_investment?: string;
  ai_ml_adoption_level?: string;
  tech_stack?: string;
  cybersecurity_posture?: string;
  partnership_ecosystem?: string;
  tech_adoption_rating?: string;
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
