import { useParams, Link } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { 
  ArrowLeft,
  MapPin,
  Calendar,
  CheckCircle,
  Clock,
  User,
  Building2,
  Camera,
  MessageSquare
} from "lucide-react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

// Mock data - in real app this would come from API
const getReportData = (id: string) => ({
  id: id,
  title: "Large pothole on main road near market",
  description: "A large pothole on the main road near the market, causing traffic congestion and posing a safety hazard. The hole is approximately 3 feet wide and 1 foot deep, making it dangerous for vehicles, especially motorcycles and bicycles.",
  location: "MG Road, Sector 5, Near Central Market",
  severity: "High",
  status: "In Progress", 
  category: "Road Maintenance",
  submittedDate: "2024-01-15 10:00 AM",
  assignedTo: "Department of Public Works",
  assignedDate: "2024-01-15 11:30 AM",
  submittedBy: "Rajesh Kumar",
  submittedPhone: "+91 9876543210",
  images: [
    "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop",
    "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=400&h=300&fit=crop"
  ],
  statusHistory: [
    {
      status: "Report Submitted",
      date: "2024-01-15 10:00 AM",
      icon: CheckCircle,
    },
    {
      status: "Assigned to Department of Public Works", 
      date: "2024-01-15 11:30 AM",
      icon: Building2,
    },
    {
      status: "Investigation Started",
      date: "2024-01-15 02:15 PM",
      icon: Clock,
    }
  ]
});

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

export default function ReportDetail() {
  const { id } = useParams();
  const report = getReportData(id || "123456");

  return (
    <div className="p-8 space-y-6">
      {/* Header */}
      <div className="flex items-center gap-4">
        <Link to="/reports">
          <Button variant="outline" size="sm" className="flex items-center gap-2">
            <ArrowLeft className="w-4 h-4" />
            Back to Reports
          </Button>
        </Link>
        <div>
          <div className="flex items-center gap-3 mb-2">
            <h1 className="text-3xl font-bold text-foreground">Report #{report.id}</h1>
            <Badge variant={getSeverityVariant(report.severity)}>
              {report.severity} Severity
            </Badge>
            <Badge variant={getStatusVariant(report.status)}>
              {report.status}
            </Badge>
          </div>
          <p className="text-xl text-muted-foreground">{report.title}</p>
        </div>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
        {/* Main Content */}
        <div className="xl:col-span-2 space-y-6">
          {/* Report Details */}
          <Card className="p-6 glass-card">
            <h2 className="text-xl font-semibold mb-4">Report Details</h2>
            
            {/* Photos Section */}
            <div className="mb-6">
              <h3 className="font-medium text-foreground mb-3 flex items-center gap-2">
                <Camera className="w-4 h-4" />
                Submitted Photo(s)
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {report.images.map((image, index) => (
                  <div key={index} className="aspect-video rounded-lg overflow-hidden border border-border">
                    <img 
                      src={image} 
                      alt={`Report evidence ${index + 1}`}
                      className="w-full h-full object-cover hover:scale-105 smooth-transition cursor-pointer"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Location */}
            <div className="mb-6">
              <h3 className="font-medium text-foreground mb-3">Location</h3>
              <div className="aspect-video rounded-lg bg-muted flex items-center justify-center border border-border">
                <div className="text-center text-muted-foreground">
                  <MapPin className="w-12 h-12 mx-auto mb-2" />
                  <p className="font-medium">{report.location}</p>
                  <p className="text-sm">Interactive map would be here</p>
                </div>
              </div>
            </div>

            {/* Description */}
            <div>
              <h3 className="font-medium text-foreground mb-3">Description</h3>
              <p className="text-muted-foreground leading-relaxed">{report.description}</p>
            </div>

            {/* Additional Info */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6 pt-6 border-t border-border">
              <div>
                <h3 className="font-medium text-foreground mb-2">AI-Powered Category</h3>
                <p className="text-muted-foreground">{report.category}</p>
              </div>
              <div>
                <h3 className="font-medium text-foreground mb-2">AI-Powered Severity</h3>
                <p className="text-muted-foreground">{report.severity}</p>
              </div>
            </div>
          </Card>

          {/* Status History */}
          <Card className="p-6 glass-card">
            <h2 className="text-xl font-semibold mb-4">Status History</h2>
            <div className="space-y-4">
              {report.statusHistory.map((item, index) => (
                <div key={index} className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div className="flex-1">
                    <p className="font-medium text-foreground">{item.status}</p>
                    <p className="text-sm text-muted-foreground">{item.date}</p>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>

        {/* Actions Sidebar */}
        <div className="space-y-6">
          {/* Actions */}
          <Card className="p-6 glass-card">
            <h2 className="text-xl font-semibold mb-4">Actions</h2>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Assign Department
                </label>
                <Select defaultValue="dept-public-works">
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="dept-public-works">Department of Public Works</SelectItem>
                    <SelectItem value="dept-electrical">Electrical Department</SelectItem>
                    <SelectItem value="dept-water">Water Department</SelectItem>
                    <SelectItem value="dept-sanitation">Sanitation Department</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Update Status
                </label>
                <Select defaultValue="in-progress">
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="pending">Pending</SelectItem>
                    <SelectItem value="assigned">Assigned</SelectItem>
                    <SelectItem value="in-progress">In Progress</SelectItem>
                    <SelectItem value="resolved">Resolved</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Add a comment
                </label>
                <Textarea 
                  placeholder="Type your comment here..." 
                  className="min-h-20"
                />
              </div>

              <Button className="w-full admin-button-primary">
                Save Changes
              </Button>
            </div>
          </Card>

          {/* Reporter Info */}
          <Card className="p-6 glass-card">
            <h2 className="text-xl font-semibold mb-4">Reporter Information</h2>
            
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <User className="w-4 h-4 text-muted-foreground" />
                <div>
                  <p className="font-medium">{report.submittedBy}</p>
                  <p className="text-sm text-muted-foreground">Citizen</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <Calendar className="w-4 h-4 text-muted-foreground" />
                <div>
                  <p className="font-medium">Submitted</p>
                  <p className="text-sm text-muted-foreground">{report.submittedDate}</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Building2 className="w-4 h-4 text-muted-foreground" />
                <div>
                  <p className="font-medium">Assigned to</p>
                  <p className="text-sm text-muted-foreground">{report.assignedTo}</p>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}