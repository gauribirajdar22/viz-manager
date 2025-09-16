import { useState, useMemo } from "react";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { 
  Search, 
  Filter, 
  Plus
} from "lucide-react";
import { ReportCard } from "@/components/ReportCard";

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


export default function Reports() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredReports = useMemo(() => {
    return allReports.filter(report =>
      report.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      report.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      report.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
      report.id.includes(searchTerm) ||
      report.category.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [searchTerm]);

  return (
    <div className="p-8 space-y-6 fade-in">
      {/* Header */}
      <div className="flex items-center justify-between slide-up">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Reports</h1>
          <p className="text-muted-foreground mt-2">
            Manage and track all citizen reports ({allReports.length} total)
          </p>
        </div>
        <Button className="flex items-center gap-2 hover:scale-105 transition-transform duration-200">
          <Plus className="w-4 h-4" />
          New Report
        </Button>
      </div>

      {/* Search and Filters */}
      <Card className="p-6 glass-card hover-lift">
        <div className="flex items-center gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
            <Input
              placeholder="Search reports by ID, title, location, or category..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 transition-all duration-200 focus:ring-2 focus:ring-primary/20"
            />
          </div>
          <Button variant="outline" className="flex items-center gap-2 hover:scale-105 transition-transform duration-200">
            <Filter className="w-4 h-4" />
            Filters
          </Button>
        </div>
      </Card>

      {/* Reports Grid */}
      <div className="space-y-4 stagger-fade-in">
        {filteredReports.map((report) => (
          <ReportCard 
            key={report.id} 
            report={report} 
            showDescription={true} 
          />
        ))}
      </div>

      {/* No Results */}
      {filteredReports.length === 0 && (
        <div className="text-center py-12 scale-in">
          <Search className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
          <h3 className="text-lg font-medium text-foreground mb-2">No reports found</h3>
          <p className="text-muted-foreground">Try adjusting your search criteria</p>
        </div>
      )}

      {/* Load More */}
      {filteredReports.length > 0 && (
        <div className="text-center pt-6 scale-in">
          <Button variant="outline" className="min-w-32 hover:scale-105 transition-transform duration-200">
            Load More Reports
          </Button>
        </div>
      )}
    </div>
  );
}