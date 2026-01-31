import { Building2, Layers, Globe, Clock } from 'lucide-react';
import { AppLayout } from '@/components/layout/AppLayout';
import { StatCard } from '@/components/common/StatCard';
import { ComingSoonCard } from '@/components/common/ComingSoonCard';
import { CompanyCard } from '@/components/companies/CompanyCard';
import { mockCompanies, getUniqueCompanyTypes, getUniqueCategories } from '@/data/mockCompanies';

export default function Dashboard() {
  const companyTypes = getUniqueCompanyTypes();
  const categories = getUniqueCategories();
  const recentCompanies = mockCompanies.slice(0, 4);

  // Calculate type distribution
  const typeDistribution = companyTypes.map(type => ({
    type,
    count: mockCompanies.filter(c => c.company_type === type).length,
  }));

  // Calculate category distribution
  const categoryDistribution = categories.map(category => ({
    category,
    count: mockCompanies.filter(c => c.category === category).length,
  }));

  return (
    <AppLayout>
      <div className="p-6 space-y-8 max-w-7xl mx-auto">
        {/* Page Header */}
        <div>
          <h1 className="text-2xl font-medium text-foreground">System Overview</h1>
          <p className="text-sm text-muted-foreground mt-1">
            Aggregated view of companies and placement analytics
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <StatCard
            label="Total Companies"
            value={mockCompanies.length}
            icon={<Building2 className="w-5 h-5" />}
            sublabel="In database"
          />
          <StatCard
            label="Company Types"
            value={companyTypes.length}
            icon={<Layers className="w-5 h-5" />}
            sublabel="Categories tracked"
          />
          <StatCard
            label="Categories"
            value={categories.length}
            icon={<Globe className="w-5 h-5" />}
            sublabel="Industry sectors"
          />
          <StatCard
            label="Last Updated"
            value="Today"
            icon={<Clock className="w-5 h-5" />}
            sublabel="Data refresh"
          />
        </div>

        {/* Distribution Cards */}
        <div className="grid lg:grid-cols-2 gap-6">
          {/* By Type */}
          <div className="card-flat p-5">
            <h3 className="font-medium mb-4">Companies by Type</h3>
            <div className="space-y-3">
              {typeDistribution.map(({ type, count }) => (
                <div key={type} className="flex items-center justify-between">
                  <span className="text-sm text-foreground">{type}</span>
                  <div className="flex items-center gap-3">
                    <div className="w-32 h-2 bg-secondary rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-primary rounded-full"
                        style={{ width: `${(count / mockCompanies.length) * 100}%` }}
                      />
                    </div>
                    <span className="text-sm font-medium text-foreground w-8 text-right">{count}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* By Category */}
          <div className="card-flat p-5">
            <h3 className="font-medium mb-4">Companies by Category</h3>
            <div className="space-y-3">
              {categoryDistribution.slice(0, 6).map(({ category, count }) => (
                <div key={category} className="flex items-center justify-between">
                  <span className="text-sm text-foreground truncate max-w-[150px]">{category}</span>
                  <div className="flex items-center gap-3">
                    <div className="w-32 h-2 bg-secondary rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-primary rounded-full"
                        style={{ width: `${(count / mockCompanies.length) * 100}%` }}
                      />
                    </div>
                    <span className="text-sm font-medium text-foreground w-8 text-right">{count}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Recent Companies */}
        <div>
          <h3 className="font-medium mb-4">Recently Added Companies</h3>
          <div className="grid sm:grid-cols-2 gap-4">
            {recentCompanies.map((company) => (
              <CompanyCard key={company.id} company={company} />
            ))}
          </div>
        </div>

        {/* Coming Soon Features */}
        <div>
          <h3 className="font-medium mb-4 text-muted-foreground">Upcoming Features</h3>
          <div className="grid lg:grid-cols-3 gap-4">
            <ComingSoonCard
              title="Employability Snapshot"
              description="Personal career readiness score and improvement suggestions"
              requiredData="Student profiles & skill assessment datasets"
            />
            <ComingSoonCard
              title="Skill Readiness"
              description="Gap analysis between your skills and market demands"
              requiredData="Skill mapping & role requirement tables"
            />
            <ComingSoonCard
              title="Focus Areas"
              description="Personalized recommendations for career growth"
              requiredData="Student data & placement outcome history"
            />
          </div>
        </div>
      </div>
    </AppLayout>
  );
}
