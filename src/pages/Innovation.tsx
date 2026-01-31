import { Sparkles, Layers, FileText, Award, Beaker } from 'lucide-react';
import { AppLayout } from '@/components/layout/AppLayout';

export default function Innovation() {
  const tiers = [
    {
      level: 1,
      title: 'Foundational',
      description: 'Core technical skills and project execution',
      icon: Layers,
      enabled: false,
    },
    {
      level: 2,
      title: 'Applied',
      description: 'Real-world problem solving and implementation',
      icon: FileText,
      enabled: false,
    },
    {
      level: 3,
      title: 'Industry',
      description: 'Industry collaboration and specialized domains',
      icon: Award,
      enabled: false,
    },
    {
      level: 4,
      title: 'Research',
      description: 'Original research contributions and publications',
      icon: Beaker,
      enabled: false,
    },
    {
      level: 5,
      title: 'Innovation',
      description: 'Patents, IP creation, and breakthrough innovations',
      icon: Sparkles,
      enabled: false,
    },
  ];

  return (
    <AppLayout>
      <div className="p-6 space-y-8 max-w-7xl mx-auto">
        {/* Page Header */}
        <div className="text-center max-w-2xl mx-auto">
          <div className="w-16 h-16 rounded-2xl bg-warning/10 flex items-center justify-center mx-auto mb-4">
            <Sparkles className="w-8 h-8 text-warning" />
          </div>
          <h1 className="text-2xl font-medium text-foreground">Innovation Framework</h1>
          <p className="text-muted-foreground mt-2">
            A five-tier innovation progression model. This feature will be enabled when research and IP datasets are integrated.
          </p>
        </div>

        {/* Five-Tier Framework */}
        <div className="space-y-4">
          {tiers.map((tier) => {
            const Icon = tier.icon;
            return (
              <div
                key={tier.level}
                className="card-flat p-5 flex items-center gap-5 opacity-60"
              >
                <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center flex-shrink-0">
                  <span className="text-lg font-semibold text-muted-foreground">
                    {tier.level}
                  </span>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2">
                    <Icon className="w-4 h-4 text-muted-foreground" />
                    <h3 className="font-medium text-foreground">{tier.title}</h3>
                    <span className="badge-coming-soon text-xs">Coming Soon</span>
                  </div>
                  <p className="text-sm text-muted-foreground mt-1">{tier.description}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Industry Involvement Note */}
        <div className="card-flat p-6 border-l-4 border-l-warning">
          <h3 className="font-medium text-foreground mb-2">Industry Involvement</h3>
          <p className="text-sm text-muted-foreground">
            Students engage with industry partners starting from <span className="font-medium">Tier 3</span>. 
            This includes collaborative projects, internships with innovation components, and exposure to 
            real-world research and development processes.
          </p>
        </div>

        {/* IP & Research Roadmap */}
        <div className="grid md:grid-cols-2 gap-4">
          <div className="card-flat p-5">
            <h3 className="font-medium mb-3">Research Metrics</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-muted-foreground" />
                Publication count and quality
              </li>
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-muted-foreground" />
                Citation indices
              </li>
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-muted-foreground" />
                Conference participation
              </li>
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-muted-foreground" />
                Research grant success rate
              </li>
            </ul>
            <p className="text-xs text-muted-foreground mt-4 italic">
              Requires: Research publication & grant datasets
            </p>
          </div>

          <div className="card-flat p-5">
            <h3 className="font-medium mb-3">IP Tracking</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-muted-foreground" />
                Patent applications and grants
              </li>
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-muted-foreground" />
                Technology transfer metrics
              </li>
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-muted-foreground" />
                Industry adoption rates
              </li>
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-muted-foreground" />
                Startup incubation outcomes
              </li>
            </ul>
            <p className="text-xs text-muted-foreground mt-4 italic">
              Requires: IP registry & commercialization datasets
            </p>
          </div>
        </div>
      </div>
    </AppLayout>
  );
}
