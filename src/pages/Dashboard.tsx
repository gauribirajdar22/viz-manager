import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  AlertTriangle, 
  CheckCircle, 
  Clock, 
  Users,
  TrendingUp,
  MapPin
} from "lucide-react";

const stats = [
  {
    title: "Total Reports",
    value: "1,247",
    change: "+12%",
    icon: AlertTriangle,
    color: "text-blue-600",
  },
  {
    title: "Active Reports",
    value: "89",
    change: "-8%",
    icon: Clock,
    color: "text-orange-600",
  },
  {
    title: "Resolved Reports",
    value: "1,158",
    change: "+15%",
    icon: CheckCircle,
    color: "text-green-600",
  },
  {
    title: "Total Users",
    value: "3,456",
    change: "+5%",
    icon: Users,
    color: "text-purple-600",
  },
];

const recentReports = [
  {
    id: "#123456",
    title: "Large pothole on main road",
    location: "MG Road, Sector 5",
    severity: "High",
    status: "In Progress",
    time: "2 hours ago",
  },
  {
    id: "#123455",
    title: "Broken streetlight",
    location: "Park Avenue",
    severity: "Medium",
    status: "Assigned",
    time: "4 hours ago",
  },
  {
    id: "#123454",
    title: "Waste collection issue",
    location: "Residential Complex A",
    severity: "Low",
    status: "Pending",
    time: "6 hours ago",
  },
  {
    id: "#123453",
    title: "Water leakage",
    location: "Market Street",
    severity: "High",
    status: "Resolved",
    time: "1 day ago",
  },
];

const getSeverityVariant = (severity: string) => {
  switch (severity.toLowerCase()) {
    case "high":
      return "destructive";
    case "medium":
      return "secondary";
    case "low":
      return "outline";
    default:
      return "outline";
  }
};

const getStatusVariant = (status: string) => {
  switch (status.toLowerCase()) {
    case "resolved":
      return "default";
    case "in progress":
      return "secondary";
    case "assigned":
      return "outline";
    default:
      return "outline";
  }
};

export default function Dashboard() {
  return (
    <div className="p-8 space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-foreground">Dashboard</h1>
        <p className="text-muted-foreground mt-2">
          Welcome back! Here's what's happening in your city today.
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat, index) => (
          <Card key={index} className="p-6 glass-card">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">
                  {stat.title}
                </p>
                <div className="flex items-center gap-2 mt-2">
                  <h3 className="text-2xl font-bold">{stat.value}</h3>
                  <span
                    className={`text-sm font-medium ${
                      stat.change.startsWith("+") ? "text-green-600" : "text-red-600"
                    }`}
                  >
                    {stat.change}
                  </span>
                </div>
              </div>
              <stat.icon className={`w-8 h-8 ${stat.color}`} />
            </div>
          </Card>
        ))}
      </div>

      {/* Recent Reports */}
      <Card className="glass-card">
        <div className="p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-semibold">Recent Reports</h2>
            <button className="admin-button-primary">
              View All Reports
            </button>
          </div>

          <div className="space-y-4">
            {recentReports.map((report) => (
              <div
                key={report.id}
                className="flex items-center justify-between p-4 rounded-lg border border-border hover:bg-muted/50 smooth-transition"
              >
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="font-mono text-sm text-muted-foreground">
                      {report.id}
                    </span>
                    <Badge variant={getSeverityVariant(report.severity)}>
                      {report.severity}
                    </Badge>
                    <Badge variant={getStatusVariant(report.status)}>
                      {report.status}
                    </Badge>
                  </div>
                  <h3 className="font-medium text-foreground mb-1">
                    {report.title}
                  </h3>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <MapPin className="w-4 h-4" />
                    <span>{report.location}</span>
                    <span>•</span>
                    <span>{report.time}</span>
                  </div>
                </div>
                <button className="admin-button-secondary">
                  View Details
                </button>
              </div>
            ))}
          </div>
        </div>
      </Card>
    </div>
  );
}