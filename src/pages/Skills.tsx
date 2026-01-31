import { Lightbulb, Database, GitBranch, Users } from 'lucide-react';
import { AppLayout } from '@/components/layout/AppLayout';
import { ComingSoonCard } from '@/components/common/ComingSoonCard';

export default function Skills() {
  return (
    <AppLayout>
      <div className="p-6 space-y-8 max-w-7xl mx-auto">
        {/* Page Header */}
        <div className="text-center max-w-2xl mx-auto">
          <div className="w-16 h-16 rounded-2xl bg-warning/10 flex items-center justify-center mx-auto mb-4">
            <Lightbulb className="w-8 h-8 text-warning" />
          </div>
          <h1 className="text-2xl font-medium text-foreground">Skills Intelligence</h1>
          <p className="text-muted-foreground mt-2">
            This feature is currently under development and will be enabled when skill and role tables are integrated into the system.
          </p>
        </div>

        {/* Roadmap Features */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          <ComingSoonCard
            title="Skill-Company Mapping"
            description="See which skills are required by different companies and role types"
            requiredData="Skill requirements per company"
          />
          <ComingSoonCard
            title="Skill Depth Analysis"
            description="Understand required proficiency levels from beginner to expert"
            requiredData="Skill depth classification data"
          />
          <ComingSoonCard
            title="Role Expectations"
            description="Detailed skill breakdowns for different job roles"
            requiredData="Role-skill mapping tables"
          />
          <ComingSoonCard
            title="Skill Overlap Analysis"
            description="Discover transferable skills across different industries"
            requiredData="Cross-industry skill data"
          />
          <ComingSoonCard
            title="Learning Pathways"
            description="Recommended progression paths for skill development"
            requiredData="Learning resource & pathway data"
          />
          <ComingSoonCard
            title="Market Demand Trends"
            description="Track which skills are growing in demand over time"
            requiredData="Historical skill demand data"
          />
        </div>

        {/* Technical Requirements */}
        <div className="card-flat p-6 mt-8">
          <h3 className="font-medium mb-4">Required Database Tables</h3>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="flex items-start gap-3">
              <Database className="w-5 h-5 text-muted-foreground mt-0.5" />
              <div>
                <p className="text-sm font-medium text-foreground">skills</p>
                <p className="text-xs text-muted-foreground">Master skill definitions</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <GitBranch className="w-5 h-5 text-muted-foreground mt-0.5" />
              <div>
                <p className="text-sm font-medium text-foreground">company_skills</p>
                <p className="text-xs text-muted-foreground">Skill requirements per company</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Users className="w-5 h-5 text-muted-foreground mt-0.5" />
              <div>
                <p className="text-sm font-medium text-foreground">roles</p>
                <p className="text-xs text-muted-foreground">Job role definitions</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AppLayout>
  );
}
