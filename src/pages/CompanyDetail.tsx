import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Building2, MapPin, Users, Globe, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { AppLayout } from '@/components/layout/AppLayout';
import { CompanyDetailTabs } from '@/components/companies/CompanyDetailTabs';
import { EmptyState } from '@/components/common/EmptyState';
import { mockCompanies, mockCompanyDetails } from '@/data/mockCompanies';

export default function CompanyDetail() {
  const { companyId } = useParams<{ companyId: string }>();
  
  // Find the company
  const baseCompany = mockCompanies.find(c => c.company_id === companyId);
  const detailedCompany = companyId ? mockCompanyDetails[companyId] : undefined;
  
  const company = detailedCompany || baseCompany;

  if (!company) {
    return (
      <AppLayout>
        <div className="p-6">
          <Link to="/companies">
            <Button variant="ghost" size="sm" className="mb-6">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Companies
            </Button>
          </Link>
          <EmptyState
            icon={<Building2 className="w-6 h-6 text-muted-foreground" />}
            title="Company Not Found"
            description="The company you're looking for doesn't exist in the database."
          />
        </div>
      </AppLayout>
    );
  }

  return (
    <AppLayout>
      <div className="p-6 max-w-7xl mx-auto">
        {/* Back Button */}
        <Link to="/companies">
          <Button variant="ghost" size="sm" className="mb-6 -ml-2">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Companies
          </Button>
        </Link>

        {/* Company Header */}
        <div className="card-flat p-6 mb-6">
          <div className="flex flex-col md:flex-row md:items-start gap-6">
            {/* Logo */}
            <div className="w-20 h-20 rounded-xl bg-secondary flex items-center justify-center flex-shrink-0">
              {company.logo_url ? (
                <img
                  src={company.logo_url}
                  alt={company.name}
                  className="w-16 h-16 rounded-lg object-contain"
                />
              ) : (
                <Building2 className="w-10 h-10 text-muted-foreground" />
              )}
            </div>

            {/* Info */}
            <div className="flex-1">
              <div className="flex flex-wrap items-center gap-3 mb-2">
                <h1 className="text-2xl font-semibold text-foreground">{company.name}</h1>
                <div className="flex items-center gap-2">
                  <span className="badge-primary">{company.company_type}</span>
                  <span className="badge-default">{company.category}</span>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mt-3">
                {company.headquarters_address && (
                  <div className="flex items-center gap-1.5">
                    <MapPin className="w-4 h-4" />
                    <span>{company.headquarters_address}</span>
                  </div>
                )}
                {company.employee_size && (
                  <div className="flex items-center gap-1.5">
                    <Users className="w-4 h-4" />
                    <span>{company.employee_size} employees</span>
                  </div>
                )}
                {company.operating_countries && company.operating_countries.length > 0 && (
                  <div className="flex items-center gap-1.5">
                    <Globe className="w-4 h-4" />
                    <span>{company.operating_countries.length} countries</span>
                  </div>
                )}
              </div>

              {company.website && (
                <a
                  href={company.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm text-primary hover:underline mt-3"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  Visit Website
                </a>
              )}
            </div>
          </div>
        </div>

        {/* Tabs Content */}
        {detailedCompany ? (
          <CompanyDetailTabs company={detailedCompany} />
        ) : (
          <div className="card-flat p-6">
            <EmptyState
              title="Limited Data Available"
              description="Extended company information is not available in the database. Only basic overview is shown."
            />
          </div>
        )}
      </div>
    </AppLayout>
  );
}
