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
          <DataField label="Description" value={company.description} />
          <DataField label="Founded" value={company.founded_year} />
          <DataField label="Headquarters" value={company.headquarters_address} />
          <DataField label="Operating Countries" value={company.operating_countries} />
          <DataField label="Website" value={company.website} />
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
        <h3 className="font-medium mb-4">Business Model</h3>
        <div className="divide-y divide-border">
          <DataField label="Business Model" value={biz.business_model} />
          <DataField label="Revenue Streams" value={biz.revenue_streams} />
          <DataField label="Target Market" value={biz.target_market} />
        </div>
      </div>

      <div className="card-flat p-5">
        <h3 className="font-medium mb-4">Strategy</h3>
        <div className="divide-y divide-border">
          <DataField label="Competitive Advantage" value={biz.competitive_advantage} />
          <DataField label="Strategic Focus" value={biz.strategic_focus} />
          <DataField label="Market Position" value={biz.market_position} />
          <DataField label="Partnerships" value={biz.partnerships} />
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
          Tech Stack
        </h3>
        <div className="divide-y divide-border">
          <DataField label="Technologies" value={tech.tech_stack} />
          <DataField label="Tools" value={tech.tools} />
          <DataField label="Infrastructure" value={tech.infrastructure} />
        </div>
      </div>

      <div className="card-flat p-5">
        <h3 className="font-medium mb-4">Engineering Practices</h3>
        <div className="divide-y divide-border">
          <DataField label="Practices" value={tech.engineering_practices} />
          <DataField label="Development Methodology" value={tech.development_methodology} />
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
          Leadership Team
        </h3>
        {people.leadership_team && people.leadership_team.length > 0 ? (
          <div className="space-y-3">
            {people.leadership_team.map((leader, idx) => (
              <div key={idx} className="flex items-center gap-3 py-2">
                <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center">
                  <span className="text-sm font-medium text-muted-foreground">
                    {leader.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <div>
                  <p className="text-sm font-medium text-foreground">{leader.name}</p>
                  <p className="text-xs text-muted-foreground">{leader.role}</p>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-sm text-muted-foreground italic">Not available</p>
        )}
      </div>

      <div className="card-flat p-5">
        <h3 className="font-medium mb-4">Organization</h3>
        <div className="divide-y divide-border">
          <DataField label="Team Size" value={people.team_size} />
          <DataField label="Hiring Status" value={people.hiring_status} />
          <DataField label="Organization Structure" value={people.org_structure} />
          <DataField label="Reporting Style" value={people.reporting_style} />
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
          Values & Environment
        </h3>
        <div className="divide-y divide-border">
          <DataField label="Work Environment" value={culture.work_environment} />
          <DataField label="Values" value={culture.values} />
          <DataField label="Communication Style" value={culture.communication_style} />
        </div>
      </div>

      <div className="card-flat p-5">
        <h3 className="font-medium mb-4">Inclusion & Engagement</h3>
        <div className="divide-y divide-border">
          <DataField label="Diversity Initiatives" value={culture.diversity_initiatives} />
          <DataField label="Employee Engagement" value={culture.employee_engagement} />
          <DataField label="Decision Making" value={culture.decision_making} />
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
          Career Development
        </h3>
        <div className="divide-y divide-border">
          <DataField label="Training Programs" value={growth.training_programs} />
          <DataField label="Career Paths" value={growth.career_paths} />
          <DataField label="Mentorship" value={growth.mentorship} />
        </div>
      </div>

      <div className="card-flat p-5">
        <h3 className="font-medium mb-4">Advancement</h3>
        <div className="divide-y divide-border">
          <DataField label="Learning Budget" value={growth.learning_budget} />
          <DataField label="Promotion Frequency" value={growth.promotion_frequency} />
          <DataField label="Internal Mobility" value={growth.internal_mobility} />
        </div>
      </div>
    </div>
  );
}

function CompensationTab({ company }: { company: CompanyDetail }) {
  const comp = company.compensation;
  const logistics = company.logistics;
  
  if (!comp && !logistics) {
    return <EmptyState title="No Compensation Data" description="Compensation information is not available for this company." />;
  }

  return (
    <div className="grid md:grid-cols-2 gap-6">
      {comp && (
        <div className="card-flat p-5">
          <h3 className="font-medium mb-4 flex items-center gap-2">
            <DollarSign className="w-4 h-4 text-primary" />
            Compensation
          </h3>
          <div className="divide-y divide-border">
            <DataField label="Salary Range" value={comp.salary_range} />
            <DataField label="Benefits" value={comp.benefits} />
            <DataField label="Bonus Structure" value={comp.bonus_structure} />
            <DataField label="Equity Options" value={comp.equity_options} />
            <DataField label="Review Cycle" value={comp.review_cycle} />
          </div>
        </div>
      )}

      {logistics && (
        <div className="card-flat p-5">
          <h3 className="font-medium mb-4">Work Logistics</h3>
          <div className="divide-y divide-border">
            <DataField label="Work Model" value={logistics.work_model} />
            <DataField label="Office Locations" value={logistics.office_locations} />
            <DataField label="Remote Policy" value={logistics.remote_policy} />
            <DataField label="Travel Requirements" value={logistics.travel_requirements} />
            <DataField label="Relocation Support" value={logistics.relocation_support} />
          </div>
        </div>
      )}
    </div>
  );
}

function FinancialsTab({ company }: { company: CompanyDetail }) {
  const fin = company.financials;
  const brand = company.brand_reputation;
  
  if (!fin && !brand) {
    return <EmptyState title="No Financial Data" description="Financial information is not available for this company." />;
  }

  return (
    <div className="grid md:grid-cols-2 gap-6">
      {fin && (
        <div className="card-flat p-5">
          <h3 className="font-medium mb-4">Financial Health</h3>
          <div className="divide-y divide-border">
            <DataField label="Revenue Range" value={fin.revenue_range} />
            <DataField label="Funding Stage" value={fin.funding_stage} />
            <DataField label="Total Funding" value={fin.total_funding} />
            <DataField label="Profitability" value={fin.profitability} />
            <DataField label="Financial Stability" value={fin.financial_stability} />
            <DataField label="Growth Rate" value={fin.growth_rate} />
          </div>
        </div>
      )}

      {brand && (
        <div className="card-flat p-5">
          <h3 className="font-medium mb-4 flex items-center gap-2">
            <Award className="w-4 h-4 text-primary" />
            Brand & Reputation
          </h3>
          <div className="divide-y divide-border">
            <DataField label="Brand Visibility" value={brand.brand_visibility} />
            <DataField label="Market Reputation" value={brand.market_reputation} />
            <DataField label="Awards" value={brand.awards} />
            <DataField label="Certifications" value={brand.certifications} />
            <DataField label="Industry Recognition" value={brand.industry_recognition} />
          </div>
        </div>
      )}
    </div>
  );
}
