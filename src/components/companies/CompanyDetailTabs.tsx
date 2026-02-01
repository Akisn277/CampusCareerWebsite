import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { CompanyDetail } from '@/types/company';
import { DataField } from '@/components/common/DataField';
import { EmptyState } from '@/components/common/EmptyState';
import { Users, Award, Briefcase, Globe, DollarSign, TrendingUp, Code, Heart } from 'lucide-react';

interface CompanyDetailTabsProps {
  company: CompanyDetail;
}

export function CompanyDetailTabs({ company }: CompanyDetailTabsProps) {
  return (
    <Tabs defaultValue="overview" className="w-full">
      <div className="border-b border-border overflow-x-auto">
        <TabsList className="tab-list bg-transparent h-auto p-0 w-max min-w-full">
          <TabsTrigger value="overview" className="tab-trigger data-[state=active]:tab-trigger-active">
            Overview
          </TabsTrigger>
          <TabsTrigger value="business" className="tab-trigger data-[state=active]:tab-trigger-active">
            Business
          </TabsTrigger>
          <TabsTrigger value="technology" className="tab-trigger data-[state=active]:tab-trigger-active">
            Technology
          </TabsTrigger>
          <TabsTrigger value="people" className="tab-trigger data-[state=active]:tab-trigger-active">
            People
          </TabsTrigger>
          <TabsTrigger value="culture" className="tab-trigger data-[state=active]:tab-trigger-active">
            Culture
          </TabsTrigger>
          <TabsTrigger value="growth" className="tab-trigger data-[state=active]:tab-trigger-active">
            Growth
          </TabsTrigger>
          <TabsTrigger value="compensation" className="tab-trigger data-[state=active]:tab-trigger-active">
            Compensation
          </TabsTrigger>
          <TabsTrigger value="logistics" className="tab-trigger data-[state=active]:tab-trigger-active">
            Logistics
          </TabsTrigger>
          <TabsTrigger value="brand" className="tab-trigger data-[state=active]:tab-trigger-active">
            Brand Reputation
          </TabsTrigger>
          <TabsTrigger value="financials" className="tab-trigger data-[state=active]:tab-trigger-active">
            Financials
          </TabsTrigger>
        </TabsList>
      </div>

      <div className="py-6">
        <TabsContent value="overview" className="mt-0 animate-fade-in">
          <OverviewTab company={company} />
        </TabsContent>

        <TabsContent value="business" className="mt-0 animate-fade-in">
          <BusinessTab company={company} />
        </TabsContent>

        <TabsContent value="technology" className="mt-0 animate-fade-in">
          <TechnologyTab company={company} />
        </TabsContent>

        <TabsContent value="people" className="mt-0 animate-fade-in">
          <PeopleTab company={company} />
        </TabsContent>

        <TabsContent value="culture" className="mt-0 animate-fade-in">
          <CultureTab company={company} />
        </TabsContent>

        <TabsContent value="growth" className="mt-0 animate-fade-in">
          <GrowthTab company={company} />
        </TabsContent>

        <TabsContent value="compensation" className="mt-0 animate-fade-in">
          <CompensationTab company={company} />
        </TabsContent>

        <TabsContent value="logistics" className="mt-0 animate-fade-in">
          <LogisticsTab company={company} />
        </TabsContent>

        <TabsContent value="brand" className="mt-0 animate-fade-in">
          <BrandTab company={company} />
        </TabsContent>

        <TabsContent value="financials" className="mt-0 animate-fade-in">
          <FinancialsTab company={company} />
        </TabsContent>
      </div>
    </Tabs>
  );
}

function OverviewTab({ company }: { company: CompanyDetail }) {
  return (
    <div className="grid md:grid-cols-2 gap-6">
      <div className="card-flat p-5">
        <h3 className="font-medium mb-4 flex items-center gap-2">
          <Globe className="w-4 h-4 text-primary" />
          Company Overview
        </h3>
        <div className="divide-y divide-border">
          <DataField label="Overview" value={company.overview_text} />
          <DataField label="Incorporation Year" value={company.incorporation_year} />
          <DataField label="Headquarters" value={company.headquarters_address} />
          <DataField label="Operating Countries" value={company.operating_countries} />
          <DataField label="Website" value={company.website_url} />
        </div>
      </div>

      <div className="card-flat p-5">
        <h3 className="font-medium mb-4 flex items-center gap-2">
          <Briefcase className="w-4 h-4 text-primary" />
          Quick Facts
        </h3>
        <div className="divide-y divide-border">
          <DataField label="Company Type" value={company.company_type} />
          <DataField label="Category" value={company.category} />
          <DataField label="Employee Size" value={company.employee_size} />
          <DataField label="Nature of Company" value={company.nature_of_company} />
        </div>
      </div>
    </div>
  );
}

function BusinessTab({ company }: { company: CompanyDetail }) {
  const biz = company.business;

  if (!biz) {
    return <EmptyState title="No Business Data" description="Business information is not available for this company." />;
  }

  return (
    <div className="grid md:grid-cols-2 gap-6">
      <div className="card-flat p-5">
        <h3 className="font-medium mb-4">Business Focus</h3>
        <div className="divide-y divide-border">
          <DataField label="Pain Points Addressed" value={biz.pain_points_addressed} />
          <DataField label="Focus Sectors" value={biz.focus_sectors} />
          <DataField label="Offerings Description" value={biz.offerings_description} />
          <DataField label="Top Customers" value={biz.top_customers} />
        </div>
      </div>

      <div className="card-flat p-5">
        <h3 className="font-medium mb-4">Strategy & Market</h3>
        <div className="divide-y divide-border">
          <DataField label="Core Value Proposition" value={biz.core_value_proposition} />
          <DataField label="Unique Differentiators" value={biz.unique_differentiators} />
          <DataField label="Competitive Advantages" value={biz.competitive_advantages} />
          <DataField label="Key Competitors" value={biz.key_competitors} />
          <DataField label="Market Share %" value={biz.market_share_percentage} />
        </div>
      </div>

      <div className="card-flat p-5">
        <h3 className="font-medium mb-4">Sales & Operations</h3>
        <div className="divide-y divide-border">
          <DataField label="Sales Motion" value={biz.sales_motion} />
          <DataField label="Customer Concentration Risk" value={biz.customer_concentration_risk} />
          <DataField label="Exit Strategy History" value={biz.exit_strategy_history} />
        </div>
      </div>

      <div className="card-flat p-5">
        <h3 className="font-medium mb-4">Future & Growth</h3>
        <div className="divide-y divide-border">
          <DataField label="Benchmark vs Peers" value={biz.benchmark_vs_peers} />
          <DataField label="Future Projections" value={biz.future_projections} />
          <DataField label="Strategic Priorities" value={biz.strategic_priorities} />
          <DataField label="Industry Associations" value={biz.industry_associations} />
          <DataField label="Case Studies" value={biz.case_studies} />
          <DataField label="Go-to-Market Strategy" value={biz.go_to_market_strategy} />
          <DataField label="Innovation Roadmap" value={biz.innovation_roadmap} />
          <DataField label="Product Pipeline" value={biz.product_pipeline} />
          <DataField label="TAM" value={biz.tam} />
          <DataField label="SAM" value={biz.sam} />
          <DataField label="SOM" value={biz.som} />
        </div>
      </div>
    </div>
  );
}

function TechnologyTab({ company }: { company: CompanyDetail }) {
  const tech = company.technologies;

  if (!tech) {
    return <EmptyState title="No Technology Data" description="Technology information is not available for this company." />;
  }

  return (
    <div className="grid md:grid-cols-2 gap-6">
      <div className="card-flat p-5">
        <h3 className="font-medium mb-4 flex items-center gap-2">
          <Code className="w-4 h-4 text-primary" />
          Technology Stack
        </h3>
        <div className="divide-y divide-border">
          <DataField label="Technology Partners" value={tech.technology_partners} />
          <DataField label="Intellectual Property" value={tech.intellectual_property} />
          <DataField label="R&D Investment" value={tech.r_and_d_investment} />
          <DataField label="AI/ML Adoption Level" value={tech.ai_ml_adoption_level} />
          <DataField label="Tech Stack" value={tech.tech_stack} />
        </div>
      </div>

      <div className="card-flat p-5">
        <h3 className="font-medium mb-4">Security & Ecosystem</h3>
        <div className="divide-y divide-border">
          <DataField label="Cybersecurity Posture" value={tech.cybersecurity_posture} />
          <DataField label="Partnership Ecosystem" value={tech.partnership_ecosystem} />
          <DataField label="Tech Adoption Rating" value={tech.tech_adoption_rating} />
        </div>
      </div>
    </div>
  );
}

function PeopleTab({ company }: { company: CompanyDetail }) {
  const people = company.people;

  if (!people) {
    return <EmptyState title="No People Data" description="People information is not available for this company." />;
  }

  return (
    <div className="grid md:grid-cols-2 gap-6">
      <div className="card-flat p-5">
        <h3 className="font-medium mb-4 flex items-center gap-2">
          <Users className="w-4 h-4 text-primary" />
          Leadership
        </h3>
        <div className="divide-y divide-border">
          <DataField label="CEO Name" value={people.ceo_name} />
          <DataField label="CEO LinkedIn" value={people.ceo_linkedin_url} />
          <DataField label="Key Leaders" value={people.key_leaders} />
          <DataField label="Warm Intro Pathways" value={people.warm_intro_pathways} />
          <DataField label="Decision Maker Access" value={people.decision_maker_access} />
        </div>
      </div>

      <div className="card-flat p-5">
        <h3 className="font-medium mb-4">Contact & Board</h3>
        <div className="divide-y divide-border">
          <DataField label="Contact Person Name" value={people.contact_person_name} />
          <DataField label="Contact Person Title" value={people.contact_person_title} />
          <DataField label="Contact Person Email" value={people.contact_person_email} />
          <DataField label="Contact Person Phone" value={people.contact_person_phone} />
          <DataField label="Board Members" value={people.board_members} />
        </div>
      </div>
    </div>
  );
}

function CultureTab({ company }: { company: CompanyDetail }) {
  const culture = company.culture;

  if (!culture) {
    return <EmptyState title="No Culture Data" description="Culture information is not available for this company." />;
  }

  return (
    <div className="grid md:grid-cols-2 gap-6">
      <div className="card-flat p-5">
        <h3 className="font-medium mb-4 flex items-center gap-2">
          <Heart className="w-4 h-4 text-primary" />
          Hiring & Turnover
        </h3>
        <div className="divide-y divide-border">
          <DataField label="Hiring Velocity" value={culture.hiring_velocity} />
          <DataField label="Employee Turnover" value={culture.employee_turnover} />
          <DataField label="Avg Retention Tenure" value={culture.avg_retention_tenure} />
        </div>
      </div>

      <div className="card-flat p-5">
        <h3 className="font-medium mb-4">Diversity & Inclusion</h3>
        <div className="divide-y divide-border">
          <DataField label="Diversity Metrics" value={culture.diversity_metrics} />
          <DataField label="Diversity & Inclusion Score" value={culture.diversity_inclusion_score} />
        </div>
      </div>

      <div className="card-flat p-5">
        <h3 className="font-medium mb-4">Work Environment</h3>
        <div className="divide-y divide-border">
          <DataField label="Work Culture Summary" value={culture.work_culture_summary} />
          <DataField label="Manager Quality" value={culture.manager_quality} />
          <DataField label="Psychological Safety" value={culture.psychological_safety} />
          <DataField label="Feedback Culture" value={culture.feedback_culture} />
        </div>
      </div>

      <div className="card-flat p-5">
        <h3 className="font-medium mb-4">Standards & Behavior</h3>
        <div className="divide-y divide-border">
          <DataField label="Ethical Standards" value={culture.ethical_standards} />
          <DataField label="Burnout Risk" value={culture.burnout_risk} />
          <DataField label="Layoff History" value={culture.layoff_history} />
          <DataField label="Mission Clarity" value={culture.mission_clarity} />
          <DataField label="Sustainability & CSR" value={culture.sustainability_csr} />
          <DataField label="Crisis Behavior" value={culture.crisis_behavior} />
        </div>
      </div>
    </div>
  );
}

function GrowthTab({ company }: { company: CompanyDetail }) {
  const growth = company.talent_growth;

  if (!growth) {
    return <EmptyState title="No Growth Data" description="Growth information is not available for this company." />;
  }

  return (
    <div className="grid md:grid-cols-2 gap-6">
      <div className="card-flat p-5">
        <h3 className="font-medium mb-4 flex items-center gap-2">
          <TrendingUp className="w-4 h-4 text-primary" />
          Training & Development
        </h3>
        <div className="divide-y divide-border">
          <DataField label="Training Spend" value={growth.training_spend} />
          <DataField label="Onboarding Quality" value={growth.onboarding_quality} />
          <DataField label="Learning Culture" value={growth.learning_culture} />
          <DataField label="Exposure Quality" value={growth.exposure_quality} />
          <DataField label="Mentorship Availability" value={growth.mentorship_availability} />
        </div>
      </div>

      <div className="card-flat p-5">
        <h3 className="font-medium mb-4">Career Mobility</h3>
        <div className="divide-y divide-border">
          <DataField label="Internal Mobility" value={growth.internal_mobility} />
          <DataField label="Promotion Clarity" value={growth.promotion_clarity} />
          <DataField label="Tools Access" value={growth.tools_access} />
          <DataField label="Role Clarity" value={growth.role_clarity} />
          <DataField label="Early Ownership" value={growth.early_ownership} />
        </div>
      </div>

      <div className="card-flat p-5">
        <h3 className="font-medium mb-4">Work & Impact</h3>
        <div className="divide-y divide-border">
          <DataField label="Work Impact" value={growth.work_impact} />
          <DataField label="Execution vs Thinking Balance" value={growth.execution_thinking_balance} />
          <DataField label="Automation Level" value={growth.automation_level} />
          <DataField label="Cross-functional Exposure" value={growth.cross_functional_exposure} />
        </div>
      </div>

      <div className="card-flat p-5">
        <h3 className="font-medium mb-4">Company & Network</h3>
        <div className="divide-y divide-border">
          <DataField label="Company Maturity" value={growth.company_maturity} />
          <DataField label="Brand Value" value={growth.brand_value} />
          <DataField label="Client Quality" value={growth.client_quality} />
          <DataField label="Exit Opportunities" value={growth.exit_opportunities} />
          <DataField label="Skill Relevance" value={growth.skill_relevance} />
          <DataField label="External Recognition" value={growth.external_recognition} />
          <DataField label="Network Strength" value={growth.network_strength} />
          <DataField label="Global Exposure" value={growth.global_exposure} />
        </div>
      </div>
    </div>
  );
}

function CompensationTab({ company }: { company: CompanyDetail }) {
  const comp = company.compensation;

  if (!comp) {
    return <EmptyState title="No Compensation Data" description="Compensation information is not available for this company." />;
  }

  return (
    <div className="grid md:grid-cols-2 gap-6">
      <div className="card-flat p-5">
        <h3 className="font-medium mb-4 flex items-center gap-2">
          <DollarSign className="w-4 h-4 text-primary" />
          Policies & Pay
        </h3>
        <div className="divide-y divide-border">
          <DataField label="Leave Policy" value={comp.leave_policy} />
          <DataField label="Health Support" value={comp.health_support} />
          <DataField label="Fixed vs Variable Pay" value={comp.fixed_vs_variable_pay} />
          <DataField label="Bonus Predictability" value={comp.bonus_predictability} />
          <DataField label="ESOPs/Incentives" value={comp.esops_incentives} />
        </div>
      </div>

      <div className="card-flat p-5">
        <h3 className="font-medium mb-4">Benefits & Support</h3>
        <div className="divide-y divide-border">
          <DataField label="Family Health Insurance" value={comp.family_health_insurance} />
          <DataField label="Relocation Support" value={comp.relocation_support} />
          <DataField label="Lifestyle Benefits" value={comp.lifestyle_benefits} />
        </div>
      </div>
    </div>
  );
}

function LogisticsTab({ company }: { company: CompanyDetail }) {
  const logistics = company.logistics;

  if (!logistics) {
    return <EmptyState title="No Logistics Data" description="Logistics information is not available for this company." />;
  }

  return (
    <div className="grid md:grid-cols-2 gap-6">
      <div className="card-flat p-5">
        <h3 className="font-medium mb-4">Work Policies</h3>
        <div className="divide-y divide-border">
          <DataField label="Remote Policy Details" value={logistics.remote_policy_details} />
          <DataField label="Typical Hours" value={logistics.typical_hours} />
          <DataField label="Overtime Expectations" value={logistics.overtime_expectations} />
          <DataField label="Weekend Work" value={logistics.weekend_work} />
          <DataField label="Flexibility Level" value={logistics.flexibility_level} />
        </div>
      </div>

      <div className="card-flat p-5">
        <h3 className="font-medium mb-4">Location & Safety</h3>
        <div className="divide-y divide-border">
          <DataField label="Location Centrality" value={logistics.location_centrality} />
          <DataField label="Public Transport Access" value={logistics.public_transport_access} />
          <DataField label="Cab Policy" value={logistics.cab_policy} />
          <DataField label="Airport Commute Time" value={logistics.airport_commute_time} />
          <DataField label="Office Zone Type" value={logistics.office_zone_type} />
          <DataField label="Area Safety" value={logistics.area_safety} />
          <DataField label="Safety Policies" value={logistics.safety_policies} />
          <DataField label="Infrastructure Safety" value={logistics.infrastructure_safety} />
          <DataField label="Emergency Preparedness" value={logistics.emergency_preparedness} />
        </div>
      </div>
    </div>
  );
}

function BrandTab({ company }: { company: CompanyDetail }) {
  const brand = company.brand_reputation;

  if (!brand) {
    return <EmptyState title="No Brand Data" description="Brand reputation information is not available for this company." />;
  }

  return (
    <div className="grid md:grid-cols-2 gap-6">
      <div className="card-flat p-5">
        <h3 className="font-medium mb-4 flex items-center gap-2">
          <Award className="w-4 h-4 text-primary" />
          Online Presence
        </h3>
        <div className="divide-y divide-border">
          <DataField label="Website Quality" value={brand.website_quality} />
          <DataField label="Website Rating" value={brand.website_rating} />
          <DataField label="Website Traffic Rank" value={brand.website_traffic_rank} />
        </div>
      </div>

      <div className="card-flat p-5">
        <h3 className="font-medium mb-4">Social & Reviews</h3>
        <div className="divide-y divide-border">
          <DataField label="Social Media Followers" value={brand.social_media_followers} />
          <DataField label="Glassdoor Rating" value={brand.glassdoor_rating} />
          <DataField label="Indeed Rating" value={brand.indeed_rating} />
          <DataField label="Google Rating" value={brand.google_rating} />
        </div>
      </div>

      <div className="card-flat p-5">
        <h3 className="font-medium mb-4">Recognition & Events</h3>
        <div className="divide-y divide-border">
          <DataField label="Awards & Recognitions" value={brand.awards_recognitions} />
          <DataField label="Brand Sentiment Score" value={brand.brand_sentiment_score} />
          <DataField label="Event Participation" value={brand.event_participation} />
        </div>
      </div>
    </div>
  );
}

function FinancialsTab({ company }: { company: CompanyDetail }) {
  const fin = company.financials;

  if (!fin) {
    return <EmptyState title="No Financial Data" description="Financial information is not available for this company." />;
  }

  return (
    <div className="grid md:grid-cols-2 gap-6">
      <div className="card-flat p-5">
        <h3 className="font-medium mb-4">Revenue & Profit</h3>
        <div className="divide-y divide-border">
          <DataField label="Annual Revenue" value={fin.annual_revenue} />
          <DataField label="Annual Profit" value={fin.annual_profit} />
          <DataField label="Revenue Mix" value={fin.revenue_mix} />
          <DataField label="Valuation" value={fin.valuation} />
          <DataField label="YoY Growth Rate" value={fin.yoy_growth_rate} />
          <DataField label="Profitability Status" value={fin.profitability_status} />
        </div>
      </div>

      <div className="card-flat p-5">
        <h3 className="font-medium mb-4">Investments & Metrics</h3>
        <div className="divide-y divide-border">
          <DataField label="Key Investors" value={fin.key_investors} />
          <DataField label="Recent Funding Rounds" value={fin.recent_funding_rounds} />
          <DataField label="Total Capital Raised" value={fin.total_capital_raised} />
          <DataField label="Customer Acquisition Cost" value={fin.customer_acquisition_cost} />
          <DataField label="Customer Lifetime Value" value={fin.customer_lifetime_value} />
          <DataField label="CAC/LTV Ratio" value={fin.cac_ltv_ratio} />
        </div>
      </div>

      <div className="card-flat p-5">
        <h3 className="font-medium mb-4">Performance & Runway</h3>
        <div className="divide-y divide-border">
          <DataField label="Churn Rate" value={fin.churn_rate} />
          <DataField label="Net Promoter Score" value={fin.net_promoter_score} />
          <DataField label="Burn Rate" value={fin.burn_rate} />
          <DataField label="Runway Months" value={fin.runway_months} />
          <DataField label="Burn Multiplier" value={fin.burn_multiplier} />
        </div>
      </div>
    </div>
  );
}
