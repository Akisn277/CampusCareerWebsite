import { Clock, Lock } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ComingSoonCardProps {
  title: string;
  description: string;
  requiredData: string;
  className?: string;
}

export function ComingSoonCard({ title, description, requiredData, className }: ComingSoonCardProps) {
  return (
    <div className={cn(
      'border border-coming-soon-border rounded-lg p-6 bg-coming-soon-bg',
      className
    )}>
      <div className="flex items-start gap-4">
        <div className="w-10 h-10 rounded-lg bg-warning/10 flex items-center justify-center flex-shrink-0">
          <Clock className="w-5 h-5 text-warning" />
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-1">
            <h3 className="font-medium text-foreground">{title}</h3>
            <span className="badge-coming-soon">Coming Soon</span>
          </div>
          <p className="text-sm text-muted-foreground mb-3">{description}</p>
          <div className="flex items-center gap-1.5 text-xs text-coming-soon-text">
            <Lock className="w-3.5 h-3.5" />
            <span>Requires: {requiredData}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
