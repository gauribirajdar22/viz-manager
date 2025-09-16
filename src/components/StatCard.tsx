import { LucideIcon } from "lucide-react";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface StatCardProps {
  title: string;
  value: string | number;
  change?: string;
  icon: LucideIcon;
  iconColor?: string;
  iconBg?: string;
  className?: string;
}

export function StatCard({ 
  title, 
  value, 
  change, 
  icon: Icon, 
  iconColor = "text-primary",
  iconBg = "bg-primary/10",
  className 
}: StatCardProps) {
  return (
    <Card className={cn("p-6 glass-card hover:shadow-md transition-all duration-300 hover:scale-[1.02]", className)}>
      <div className="flex items-center justify-between">
        <div className="space-y-1">
          <p className="text-sm font-medium text-muted-foreground">
            {title}
          </p>
          <div className="flex items-center gap-2">
            <h3 className="text-2xl font-bold text-foreground">{value}</h3>
            {change && (
              <span
                className={cn(
                  "text-sm font-medium px-1.5 py-0.5 rounded-md",
                  change.startsWith("+") 
                    ? "text-success bg-success/10" 
                    : "text-destructive bg-destructive/10"
                )}
              >
                {change}
              </span>
            )}
          </div>
        </div>
        <div className={cn("w-10 h-10 rounded-lg flex items-center justify-center", iconBg)}>
          <Icon className={cn("w-5 h-5", iconColor)} />
        </div>
      </div>
    </Card>
  );
}