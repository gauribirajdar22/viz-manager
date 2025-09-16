import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  AlertTriangle, 
  CheckCircle, 
  Clock, 
  Users,
  TrendingUp,
  MapPin
} from "lucide-react";
import { StatCard } from "@/components/StatCard";
import { ReportCard } from "@/components/ReportCard";
import { getSeverityVariant, getStatusVariant } from "@/lib/report-utils";

const stats = [
  {
    title: "Total Reports",
    value: "1,247",
    change: "+12%",
    icon: AlertTriangle,
    iconColor: "text-primary",
    iconBg: "bg-primary/10",
  },
  {
    title: "Active Reports",
    value: "89",
    change: "-8%",
    icon: Clock,
    iconColor: "text-warning-foreground",
    iconBg: "bg-warning/10",
  },
  {
    title: "Resolved Reports",
    value: "1,158",
    change: "+15%",
    icon: CheckCircle,
    iconColor: "text-success-foreground",
    iconBg: "bg-success/10",
  },
  {
    title: "Total Users",
    value: "3,456",
    change: "+5%",
    icon: Users,
    iconColor: "text-accent-foreground",
    iconBg: "bg-accent/10",
  },
];

const recentReports = [
  {
    id: "123456",
    title: "Large pothole on main road",
    location: "MG Road, Sector 5",
    severity: "High",
    status: "In Progress",
    time: "2 hours ago",
    submittedDate: "2024-01-15",
  },
  {
    id: "123455",
    title: "Broken streetlight",
    location: "Park Avenue",
    severity: "Medium",
    status: "Assigned",
    time: "4 hours ago",
    submittedDate: "2024-01-15",
  },
  {
    id: "123454",
    title: "Waste collection issue",
    location: "Residential Complex A",
    severity: "Low",
    status: "Pending",
    time: "6 hours ago",
    submittedDate: "2024-01-14",
  },
  {
    id: "123453",
    title: "Water leakage",
    location: "Market Street",
    severity: "High",
    status: "Resolved",
    time: "1 day ago",
    submittedDate: "2024-01-13",
  },
];

export default function Dashboard() {
  return (
    <div className="p-8 space-y-8 fade-in">
      {/* Header */}
      <div className="slide-up">
        <h1 className="text-3xl font-bold text-foreground">Dashboard</h1>
        <p className="text-muted-foreground mt-2">
          Welcome back! Here's what's happening in your city today.
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 stagger-fade-in">
        {stats.map((stat, index) => (
          <StatCard
            key={index}
            title={stat.title}
            value={stat.value}
            change={stat.change}
            icon={stat.icon}
            iconColor={stat.iconColor}
            iconBg={stat.iconBg}
          />
        ))}
      </div>

      {/* Recent Reports */}
      <Card className="glass-card hover-lift scale-in">
        <div className="p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-semibold">Recent Reports</h2>
            <Link to="/reports">
              <Button className="hover:scale-105 transition-transform duration-200">
                View All Reports
              </Button>
            </Link>
          </div>

          <div className="space-y-4">
            {recentReports.map((report) => (
              <ReportCard 
                key={report.id} 
                report={report} 
                compact={true} 
              />
            ))}
          </div>
        </div>
      </Card>
    </div>
  );
}