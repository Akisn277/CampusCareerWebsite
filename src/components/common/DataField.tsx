import { cn } from '@/lib/utils';

interface DataFieldProps {
  label: string;
  value?: string | number | boolean | string[] | null;
  className?: string;
}

export function DataField({ label, value, className }: DataFieldProps) {
  const renderValue = () => {
    if (value === undefined || value === null || value === '') {
      return <span className="text-muted-foreground italic">Not available</span>;
    }

    if (typeof value === 'boolean') {
      return value ? 'Yes' : 'No';
    }

    if (Array.isArray(value)) {
      if (value.length === 0) {
        return <span className="text-muted-foreground italic">Not available</span>;
      }
      return (
        <div className="flex flex-wrap gap-1.5 mt-1">
          {value.map((item, index) => (
            <span key={index} className="badge-default">
              {item}
            </span>
          ))}
        </div>
      );
    }

    return value;
  };

  return (
    <div className={cn('py-3', className)}>
      <p className="data-label">{label}</p>
      <div className="data-value">{renderValue()}</div>
    </div>
  );
}
