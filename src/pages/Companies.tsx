import { useState, useMemo } from 'react';
import { Search, Building2 } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { AppLayout } from '@/components/layout/AppLayout';
import { CompanyCard } from '@/components/companies/CompanyCard';
import { CompanyFilters } from '@/components/companies/CompanyFilters';
import { EmptyState } from '@/components/common/EmptyState';
import { mockCompanies } from '@/data/mockCompanies';
import { CompanyFilters as Filters } from '@/types/company';

export default function Companies() {
  const [searchQuery, setSearchQuery] = useState('');
  const [filters, setFilters] = useState<Filters>({});

  const filteredCompanies = useMemo(() => {
    return mockCompanies.filter((company) => {
      // Search filter
      if (searchQuery) {
        const query = searchQuery.toLowerCase();
        const matchesSearch = 
          company.name.toLowerCase().includes(query) ||
          company.category.toLowerCase().includes(query) ||
          company.company_type.toLowerCase().includes(query);
        if (!matchesSearch) return false;
      }

      // Type filter
      if (filters.company_type && company.company_type !== filters.company_type) {
        return false;
      }

      // Category filter
      if (filters.category && company.category !== filters.category) {
        return false;
      }

      // Size filter
      if (filters.employee_size && company.employee_size !== filters.employee_size) {
        return false;
      }

      // Country filter
      if (filters.operating_countries) {
        if (!company.operating_countries?.includes(filters.operating_countries)) {
          return false;
        }
      }

      return true;
    });
  }, [searchQuery, filters]);

  return (
    <AppLayout>
      <div className="p-6 space-y-6 max-w-7xl mx-auto">
        {/* Page Header */}
        <div>
          <h1 className="text-2xl font-medium text-foreground">Companies</h1>
          <p className="text-sm text-muted-foreground mt-1">
            Browse and filter companies from the database
          </p>
        </div>

        {/* Search and Filters */}
        <div className="space-y-4">
          <div className="relative max-w-md">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input
              placeholder="Search companies..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-9 h-10"
            />
          </div>

          <CompanyFilters filters={filters} onFilterChange={setFilters} />
        </div>

        {/* Results Count */}
        <div className="flex items-center justify-between">
          <p className="text-sm text-muted-foreground">
            Showing <span className="font-medium text-foreground">{filteredCompanies.length}</span> of{' '}
            <span className="font-medium text-foreground">{mockCompanies.length}</span> companies
          </p>
        </div>

        {/* Companies Grid */}
        {filteredCompanies.length > 0 ? (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredCompanies.map((company) => (
              <CompanyCard key={company.id} company={company} />
            ))}
          </div>
        ) : (
          <EmptyState
            icon={<Building2 className="w-6 h-6 text-muted-foreground" />}
            title="No companies found"
            description="Try adjusting your search or filters to find what you're looking for."
          />
        )}
      </div>
    </AppLayout>
  );
}
