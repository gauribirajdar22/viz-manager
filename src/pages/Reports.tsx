import { useState } from "react";
import { Link } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { 
  Search, 
  Filter, 
  MapPin, 
  Calendar,
  Eye
} from "lucide-react";

const allReports = [
  {
    id: "123456",
    title: "Large pothole on main road near market",
    description: "A large pothole on the main road near the market, causing traffic congestion and posing a safety hazard.",
    location: "MG Road, Sector 5",
    severity: "High",
    status: "In Progress",
    category: "Road Maintenance",
    submittedDate: "2024-01-15",
    assignedTo: "Department of Public Works",
    images: 2,
  },
  {
    id: "123455",
    title: "Broken streetlight",
    description: "Street light pole is broken and not working, making the area dark at night.",
    location: "Park Avenue, Block C",
    severity: "Medium",
    status: "Assigned",
    category: "Street Lighting",
    submittedDate: "2024-01-15",
    assignedTo: "Electrical Department",
    images: 1,
  },
  {
    id: "123454",
    title: "Waste collection not done for 3 days",
    description: "Garbage has not been collected from our residential complex for the past 3 days.",
    location: "Residential Complex A, Sector 12",
    severity: "Low",
    status: "Pending",
    category: "Waste Management",
    submittedDate: "2024-01-14",
    assignedTo: "Sanitation Department",
    images: 3,
  },
  {
    id: "123453",
    title: "Water leakage from main pipeline",
    description: "Major water leakage from the main pipeline causing flooding on the street.",
    location: "Market Street, Central Area",
    severity: "High",
    status: "Resolved",
    category: "Water Supply",
    submittedDate: "2024-01-13",
    assignedTo: "Water Department",
    images: 2,
  },
  {
    id: "123452",
    title: "Unauthorized construction",
    description: "Illegal construction blocking the footpath and causing inconvenience to pedestrians.",
    location: "Gandhi Nagar, Phase 2",
    severity: "Medium",
    status: "In Progress",
    category: "Building Violations",
    submittedDate: "2024-01-12",
    assignedTo: "Building Control Department",
    images: 4,
  },
  {
    id: "123451",
    title: "Park maintenance required",
    description: "Children's play area needs maintenance, several swings are broken.",
    location: "Community Park, Sector 8",
    severity: "Low",
    status: "Assigned",
    category: "Parks & Recreation",
    submittedDate: "2024-01-11",
    assignedTo: "Parks Department",
    images: 1,
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

export default function Reports() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredReports] = useState(allReports);

  return (
    <div className="p-8 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Reports</h1>
          <p className="text-muted-foreground mt-2">
            Manage and track all citizen reports
          </p>
        </div>
      </div>

      {/* Search and Filters */}
      <Card className="p-6 glass-card">
        <div className="flex items-center gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
            <Input
              placeholder="Search reports by ID, title, or location..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
          <Button variant="outline" className="flex items-center gap-2">
            <Filter className="w-4 h-4" />
            Filters
          </Button>
        </div>
      </Card>

      {/* Reports Grid */}
      <div className="grid gap-6">
        {filteredReports.map((report) => (
          <Card key={report.id} className="p-6 glass-card hover:shadow-md smooth-transition">
            <div className="flex items-start justify-between">
              <div className="flex-1">
                {/* Header */}
                <div className="flex items-center gap-3 mb-3">
                  <span className="font-mono text-lg font-semibold text-primary">
                    #{report.id}
                  </span>
                  <Badge variant={getSeverityVariant(report.severity)}>
                    {report.severity} Severity
                  </Badge>
                  <Badge variant={getStatusVariant(report.status)}>
                    {report.status}
                  </Badge>
                </div>

                {/* Title and Description */}
                <h2 className="text-xl font-semibold text-foreground mb-2">
                  {report.title}
                </h2>
                <p className="text-muted-foreground mb-4 line-clamp-2">
                  {report.description}
                </p>

                {/* Details Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-muted-foreground" />
                    <span className="text-muted-foreground">Location:</span>
                    <span className="font-medium">{report.location}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-muted-foreground" />
                    <span className="text-muted-foreground">Submitted:</span>
                    <span className="font-medium">{report.submittedDate}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-muted-foreground">Category:</span>
                    <span className="font-medium">{report.category}</span>
                  </div>
                </div>

                {/* Assignment Info */}
                <div className="mt-3 pt-3 border-t border-border">
                  <div className="flex items-center justify-between">
                    <div className="text-sm">
                      <span className="text-muted-foreground">Assigned to:</span>
                      <span className="font-medium ml-2">{report.assignedTo}</span>
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {report.images} photo{report.images !== 1 ? "s" : ""} attached
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <div className="ml-6">
                <Link to={`/reports/${report.id}`}>
                  <Button className="flex items-center gap-2">
                    <Eye className="w-4 h-4" />
                    View Details
                  </Button>
                </Link>
              </div>
            </div>
          </Card>
        ))}
      </div>

      {/* Load More */}
      <div className="text-center pt-6">
        <Button variant="outline" className="min-w-32">
          Load More Reports
        </Button>
      </div>
    </div>
  );
}