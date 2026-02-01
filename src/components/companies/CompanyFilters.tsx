import { X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { CompanyFilters as Filters } from '@/types/company';
import { useCompanyFilterOptions } from '@/hooks/useCompanies';

interface CompanyFiltersProps {
  filters: Filters;
  onFilterChange: (filters: Filters) => void;
}

export function CompanyFilters({ filters, onFilterChange }: CompanyFiltersProps) {
  const { data: options } = useCompanyFilterOptions();

  const companyTypes = options?.companyTypes || [];
  const categories = options?.categories || [];
  const employeeSizes = options?.employeeSizes || [];
  const countries = options?.countries || [];

  const hasActiveFilters = Object.values(filters).some(v => v);

  const clearFilters = () => {
    onFilterChange({});
  };

  const updateFilter = (key: keyof Filters, value: string | undefined) => {
    const newFilters = { ...filters };
    if (value === 'all' || !value) {
      delete newFilters[key];
    } else {
      newFilters[key] = value;
    }
    onFilterChange(newFilters);
  };

  return (
    <div className="flex flex-wrap items-center gap-3">
      <Select
        value={filters.company_type || 'all'}
        onValueChange={(v) => updateFilter('company_type', v)}
      >
        <SelectTrigger className="w-[140px] h-9 text-sm">
          <SelectValue placeholder="Company Type" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all">All Types</SelectItem>
          {companyTypes.map((type) => (
            <SelectItem key={type} value={type}>{type}</SelectItem>
          ))}
        </SelectContent>
      </Select>

      <Select
        value={filters.category || 'all'}
        onValueChange={(v) => updateFilter('category', v)}
      >
        <SelectTrigger className="w-[160px] h-9 text-sm">
          <SelectValue placeholder="Category" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all">All Categories</SelectItem>
          {categories.map((cat) => (
            <SelectItem key={cat} value={cat}>{cat}</SelectItem>
          ))}
        </SelectContent>
      </Select>

      <Select
        value={filters.employee_size || 'all'}
        onValueChange={(v) => updateFilter('employee_size', v)}
      >
        <SelectTrigger className="w-[150px] h-9 text-sm">
          <SelectValue placeholder="Size" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all">All Sizes</SelectItem>
          {employeeSizes.map((size) => (
            <SelectItem key={size} value={size}>{size}</SelectItem>
          ))}
        </SelectContent>
      </Select>

      <Select
        value={filters.operating_countries || 'all'}
        onValueChange={(v) => updateFilter('operating_countries', v)}
      >
        <SelectTrigger className="w-[140px] h-9 text-sm">
          <SelectValue placeholder="Country" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all">All Countries</SelectItem>
          {countries.map((country) => (
            <SelectItem key={country} value={country}>{country}</SelectItem>
          ))}
        </SelectContent>
      </Select>

      {hasActiveFilters && (
        <Button
          variant="ghost"
          size="sm"
          onClick={clearFilters}
          className="h-9 px-2 text-muted-foreground hover:text-foreground"
        >
          <X className="w-4 h-4 mr-1" />
          Clear
        </Button>
      )}
    </div>
  );
}
