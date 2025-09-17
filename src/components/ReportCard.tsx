import { Link } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MapPin, Calendar, Eye, Image } from "lucide-react";
import { getSeverityVariant, getStatusVariant, formatDate } from "@/lib/report-utils";

interface ReportCardProps {
  report: {
    id: string;
    title: string;
    description?: string;
    location: string;
    severity: string;
    status: string;
    category?: string;
    submittedDate: string;
    assignedTo?: string;
    images?: number;
    time?: string;
  };
  showDescription?: boolean;
  compact?: boolean;
}

export function ReportCard({ report, showDescription = false, compact = false }: ReportCardProps) {
  return (
    <Card className="group p-4 glass-card hover:shadow-xl transition-all duration-500 cursor-pointer border hover:border-primary/20 transform hover:-translate-y-2 hover:scale-[1.02]">
      <div className="flex items-start justify-between gap-4">
        <div className="flex-1 space-y-3">
          {/* Header */}
          <div className="flex items-center gap-3 flex-wrap">
            <span className="font-mono text-lg font-semibold text-primary transition-all duration-300 group-hover:text-primary/80 group-hover:scale-110">
              #{report.id}
            </span>
            <Badge variant={getSeverityVariant(report.severity)} className="animate-in fade-in-50 duration-300 transition-all group-hover:scale-110">
              {report.severity} Severity
            </Badge>
            <Badge variant={getStatusVariant(report.status)} className="animate-in fade-in-50 duration-300 delay-75 transition-all group-hover:scale-110">
              {report.status}
            </Badge>
          </div>

          {/* Title */}
          <h2 className={`font-semibold text-foreground group-hover:text-primary transition-all duration-300 group-hover:translate-x-1 ${
            compact ? "text-base" : "text-xl"
          }`}>
            {report.title}
          </h2>

          {/* Description */}
          {showDescription && report.description && (
            <p className="text-muted-foreground line-clamp-2 text-sm leading-relaxed transition-colors group-hover:text-foreground/80">
              {report.description}
            </p>
          )}

          {/* Details Grid */}
          <div className={`grid gap-3 text-sm transition-all duration-300 group-hover:translate-x-1 ${compact ? "grid-cols-1" : "grid-cols-1 md:grid-cols-2 lg:grid-cols-3"}`}>
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-muted-foreground flex-shrink-0 transition-colors group-hover:text-primary" />
              <span className="text-muted-foreground">Location:</span>
              <span className="font-medium truncate">{report.location}</span>
            </div>
            
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4 text-muted-foreground flex-shrink-0 transition-colors group-hover:text-primary" />
              <span className="text-muted-foreground">
                {report.time ? "Time:" : "Submitted:"}
              </span>
              <span className="font-medium">
                {report.time || formatDate(report.submittedDate)}
              </span>
            </div>

            {report.category && (
              <div className="flex items-center gap-2">
                <span className="text-muted-foreground">Category:</span>
                <span className="font-medium">{report.category}</span>
              </div>
            )}
          </div>

          {/* Assignment & Images */}
          {(report.assignedTo || report.images) && (
            <div className="pt-2 border-t border-border transition-all duration-300 group-hover:border-primary/20">
              <div className="flex items-center justify-between text-sm">
                {report.assignedTo && (
                  <div>
                    <span className="text-muted-foreground">Assigned to:</span>
                    <span className="font-medium ml-2">{report.assignedTo}</span>
                  </div>
                )}
                {report.images && (
                  <div className="flex items-center gap-1 text-muted-foreground">
                    <Image className="w-4 h-4 transition-colors group-hover:text-primary" />
                    <span>{report.images} photo{report.images !== 1 ? "s" : ""}</span>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>

        {/* Action Button */}
        <div className="flex-shrink-0">
          <Link to={`/reports/${report.id}`}>
            <Button 
              size={compact ? "sm" : "default"} 
              className="flex items-center gap-2 hover:scale-110 transition-all duration-300 hover:shadow-lg"
            >
              <Eye className="w-4 h-4 transition-transform duration-300 group-hover:scale-110" />
              {compact ? "View" : "View Details"}
            </Button>
          </Link>
        </div>
      </div>
    </Card>
  );
}