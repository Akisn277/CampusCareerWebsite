import { Link } from 'react-router-dom';
import { Building2, MapPin, Users, ChevronRight } from 'lucide-react';
import { Company } from '@/types/company';

interface CompanyCardProps {
  company: Company;
}

export function CompanyCard({ company }: CompanyCardProps) {
  return (
    <Link
      to={`/companies/${company.company_id}`}
      className="card-elevated block p-4 hover:shadow-elevation-md transition-shadow group"
    >
      <div className="flex items-start gap-4">
        {/* Logo */}
        <div className="w-12 h-12 rounded-lg bg-secondary flex items-center justify-center flex-shrink-0">
          {company.logo_url ? (
            <img
              src={company.logo_url}
              alt={company.name}
              className="w-10 h-10 rounded object-contain"
            />
          ) : (
            <Building2 className="w-6 h-6 text-muted-foreground" />
          )}
        </div>

        {/* Content */}
        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between gap-2">
            <div>
              <h3 className="font-medium text-foreground group-hover:text-primary transition-colors truncate">
                {company.name}
              </h3>
              <div className="flex items-center gap-2 mt-1 flex-wrap">
                <span className="badge-primary">{company.company_type}</span>
                <span className="badge-default">{company.category}</span>
              </div>
            </div>
            <ChevronRight className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors flex-shrink-0" />
          </div>

          {/* Meta */}
          <div className="flex items-center gap-4 mt-3 text-sm text-muted-foreground">
            {company.headquarters_address && (
              <div className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5" />
                <span className="truncate">{company.headquarters_address}</span>
              </div>
            )}
            {company.employee_size && (
              <div className="flex items-center gap-1.5">
                <Users className="w-3.5 h-3.5" />
                <span>{company.employee_size}</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </Link>
  );
}
