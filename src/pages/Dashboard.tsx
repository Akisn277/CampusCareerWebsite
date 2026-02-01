import { Building2, Layers, Globe, Clock } from 'lucide-react';
import { AppLayout } from '@/components/layout/AppLayout';
import { StatCard } from '@/components/common/StatCard';
import { ComingSoonCard } from '@/components/common/ComingSoonCard';
import { CompanyCard } from '@/components/companies/CompanyCard';
import { SupabaseConnectionTest } from '@/components/SupabaseConnectionTest';
import { useCompanyStats, useCompanies } from '@/hooks/useCompanies';

export default function Dashboard() {
  const { data: stats, isLoading: statsLoading, error: statsError } = useCompanyStats();
  const { data: companies = [], isLoading: companiesLoading, error: companiesError } = useCompanies();

  const recentCompanies = companies.slice(0, 4);

  if (statsLoading || companiesLoading) {
    return (
      <AppLayout>
        <div className="p-6 space-y-8 max-w-7xl mx-auto">
          <div className="animate-pulse space-y-4">
            <div className="h-8 bg-muted rounded w-48"></div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {[...Array(4)].map((_, i) => (
                <div key={i} className="h-24 bg-muted rounded"></div>
              ))}
            </div>
          </div>
        </div>
      </AppLayout>
    );
  }

  if (statsError || companiesError) {
    return (
      <AppLayout>
        <div className="p-6 space-y-8 max-w-7xl mx-auto">
          <div className="bg-red-50 border border-red-200 rounded p-4">
            <h3 className="font-semibold text-red-800">Error Loading Data</h3>
            {statsError && <p className="text-red-600">Stats Error: {statsError.message}</p>}
            {companiesError && <p className="text-red-600">Companies Error: {companiesError.message}</p>}
          </div>
        </div>
      </AppLayout>
    );
  }

  const typeDistribution = Object.entries(stats?.typeDistribution || {}).map(([type, count]) => ({
    type,
    count: count as number,
  }));

  const categoryDistribution = Object.entries(stats?.categoryDistribution || {}).map(([category, count]) => ({
    category,
    count: count as number,
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

        {/* Supabase Connection Test */}
        <SupabaseConnectionTest />

        {/* Debug Info */}
        <div className="bg-gray-50 border border-gray-200 rounded p-4">
          <h3 className="font-semibold text-gray-800">Debug Information</h3>
          <p className="text-sm text-gray-600">Total Companies: {stats?.totalCompanies || 0}</p>
          <p className="text-sm text-gray-600">Companies Array Length: {companies.length}</p>
          <p className="text-sm text-gray-600">Type Distribution: {Object.keys(stats?.typeDistribution || {}).length} types</p>
          <p className="text-sm text-gray-600">Category Distribution: {Object.keys(stats?.categoryDistribution || {}).length} categories</p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <StatCard
            label="Total Companies"
            value={stats?.totalCompanies || 0}
            icon={<Building2 className="w-5 h-5" />}
            sublabel="In database"
          />
          <StatCard
            label="Company Types"
            value={typeDistribution.length}
            icon={<Layers className="w-5 h-5" />}
            sublabel="Categories tracked"
          />
          <StatCard
            label="Categories"
            value={categoryDistribution.length}
            icon={<Globe className="w-5 h-5" />}
            sublabel="Industry sectors"
          />
          <StatCard
            label="Last Updated"
            value="Live"
            icon={<Clock className="w-5 h-5" />}
            sublabel="Real-time data"
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
                        style={{ width: `${(count / (stats?.totalCompanies || 1)) * 100}%` }}
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
                        style={{ width: `${(count / (stats?.totalCompanies || 1)) * 100}%` }}
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
              <CompanyCard key={company.company_id} company={company} />
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
