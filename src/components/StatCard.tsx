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
    <Card className={cn("group p-6 glass-card hover:shadow-xl transition-all duration-500 cursor-pointer transform hover:-translate-y-1 hover:scale-[1.02]", className)}>
      <div className="flex items-center justify-between">
        <div className="space-y-1 flex-1">
          <p className="text-sm font-medium text-muted-foreground transition-colors group-hover:text-foreground/80">
            {title}
          </p>
          <div className="flex items-center gap-2">
            <h3 className="text-2xl font-bold text-foreground transition-all duration-300 group-hover:text-3xl">{value}</h3>
            {change && (
              <span
                className={cn(
                  "text-sm font-medium px-1.5 py-0.5 rounded-md transition-all duration-300 group-hover:scale-110",
                  change.startsWith("+") 
                    ? "text-success bg-success/10 group-hover:bg-success/20" 
                    : "text-destructive bg-destructive/10 group-hover:bg-destructive/20"
                )}
              >
                {change}
              </span>
            )}
          </div>
        </div>
        <div className={cn("w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:rotate-6", iconBg)}>
          <Icon className={cn("w-5 h-5 transition-transform duration-300 group-hover:scale-110", iconColor)} />
        </div>
      </div>
    </Card>
  );
}