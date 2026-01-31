import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface StatCardProps {
  label: string;
  value: string | number;
  icon?: ReactNode;
  sublabel?: string;
  className?: string;
}

export function StatCard({ label, value, icon, sublabel, className }: StatCardProps) {
  return (
    <div className={cn('stat-card', className)}>
      <div className="flex items-start justify-between">
        <div>
          <p className="data-label">{label}</p>
          <p className="text-2xl font-semibold text-foreground mt-1">{value}</p>
          {sublabel && (
            <p className="text-xs text-muted-foreground mt-1">{sublabel}</p>
          )}
        </div>
        {icon && (
          <div className="w-10 h-10 rounded-lg bg-primary/5 flex items-center justify-center text-primary">
            {icon}
          </div>
        )}
      </div>
    </div>
  );
}
