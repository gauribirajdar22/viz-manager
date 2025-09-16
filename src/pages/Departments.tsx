import { useState } from "react";
import { Search, Phone, Mail, MapPin, Users, FileText, Plus, Edit, Trash2 } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { StatCard } from "@/components/StatCard";
import { getDepartmentStatusColor } from "@/lib/report-utils";

// Mock department data
const departments = [
  {
    id: 1,
    name: "Public Works Department",
    description: "Responsible for road maintenance, infrastructure development, and public facilities",
    head: "Rajesh Kumar",
    phone: "+91 98765-43210",
    email: "publicworks@cityconnect.gov.in",
    address: "Block A, Municipal Corporation Building",
    staff: 45,
    activeReports: 23,
    completedReports: 187,
    responsibilities: ["Road Maintenance", "Street Lighting", "Drainage Systems", "Public Buildings"],
    status: "Active"
  },
  {
    id: 2,
    name: "Waste Management Department",
    description: "Handles solid waste collection, disposal, and recycling programs",
    head: "Priya Sharma",
    phone: "+91 98765-43211",
    email: "waste@cityconnect.gov.in",
    address: "Block B, Municipal Corporation Building",
    staff: 32,
    activeReports: 15,
    completedReports: 134,
    responsibilities: ["Garbage Collection", "Recycling Programs", "Waste Processing", "Sanitation"],
    status: "Active"
  },
  {
    id: 3,
    name: "Water Supply Department",
    description: "Manages water distribution, quality control, and supply infrastructure",
    head: "Amit Singh",
    phone: "+91 98765-43212",
    email: "water@cityconnect.gov.in",
    address: "Block C, Municipal Corporation Building",
    staff: 28,
    activeReports: 8,
    completedReports: 92,
    responsibilities: ["Water Distribution", "Quality Testing", "Pipeline Maintenance", "Supply Monitoring"],
    status: "Active"
  },
  {
    id: 4,
    name: "Traffic Management Department",
    description: "Oversees traffic control, parking management, and road safety initiatives",
    head: "Sunita Patel",
    phone: "+91 98765-43213",
    email: "traffic@cityconnect.gov.in",
    address: "Traffic Control Center, Main Road",
    staff: 38,
    activeReports: 12,
    completedReports: 156,
    responsibilities: ["Traffic Control", "Parking Management", "Road Safety", "Signal Maintenance"],
    status: "Active"
  },
  {
    id: 5,
    name: "Parks & Recreation Department",
    description: "Maintains public parks, gardens, and recreational facilities",
    head: "Vikram Joshi",
    phone: "+91 98765-43214",
    email: "parks@cityconnect.gov.in",
    address: "Central Park Office",
    staff: 22,
    activeReports: 6,
    completedReports: 78,
    responsibilities: ["Park Maintenance", "Garden Care", "Recreational Facilities", "Event Management"],
    status: "Active"
  },
  {
    id: 6,
    name: "Health & Sanitation Department",
    description: "Public health monitoring, sanitation oversight, and health facility management",
    head: "Dr. Meera Reddy",
    phone: "+91 98765-43215",
    email: "health@cityconnect.gov.in",
    address: "City Health Center",
    staff: 35,
    activeReports: 4,
    completedReports: 89,
    responsibilities: ["Public Health", "Sanitation Oversight", "Health Facilities", "Disease Control"],
    status: "Active"
  }
];

export default function Departments() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedDepartment, setSelectedDepartment] = useState<typeof departments[0] | null>(null);

  const filteredDepartments = departments.filter(dept =>
    dept.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    dept.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
    dept.head.toLowerCase().includes(searchTerm.toLowerCase())
  );


  return (
    <div className="p-6 space-y-6 fade-in">
      {/* Header */}
      <div className="flex justify-between items-center slide-up">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Departments</h1>
          <p className="text-muted-foreground mt-1">Manage city departments and their operations</p>
        </div>
        <Button className="hover:scale-105 transition-transform duration-200">
          <Plus className="w-4 h-4 mr-2" />
          Add New Department
        </Button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 stagger-fade-in">
        <StatCard
          title="Total Departments"
          value={departments.length}
          icon={Users}
          iconColor="text-primary"
          iconBg="bg-primary/10"
        />
        <StatCard
          title="Total Staff"
          value={departments.reduce((sum, dept) => sum + dept.staff, 0)}
          icon={Users}
          iconColor="text-accent-foreground"
          iconBg="bg-accent/10"
        />
        <StatCard
          title="Active Reports"
          value={departments.reduce((sum, dept) => sum + dept.activeReports, 0)}
          icon={FileText}
          iconColor="text-warning-foreground"
          iconBg="bg-warning/10"
        />
        <StatCard
          title="Completed Reports"
          value={departments.reduce((sum, dept) => sum + dept.completedReports, 0)}
          icon={FileText}
          iconColor="text-success-foreground"
          iconBg="bg-success/10"
        />
      </div>

      {/* Search */}
      <Card className="p-4 glass-card hover-lift">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
          <Input
            placeholder="Search departments, heads, or descriptions..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10 transition-all duration-200 focus:ring-2 focus:ring-primary/20"
          />
        </div>
      </Card>

      {/* Departments Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 stagger-fade-in">
        {filteredDepartments.map((department) => (
          <Card key={department.id} className="border-border bg-card hover:shadow-lg transition-all duration-300 hover:scale-[1.02] cursor-pointer group hover-glow">
            <CardHeader className="pb-3">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <CardTitle className="text-lg font-semibold text-foreground mb-1 group-hover:text-primary transition-colors duration-200">
                    {department.name}
                  </CardTitle>
                  <Badge className={`text-xs ${getDepartmentStatusColor(department.status)}`}>
                    {department.status}
                  </Badge>
                </div>
                <div className="flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                  <Button variant="ghost" size="sm" className="hover:scale-110 transition-transform duration-200">
                    <Edit className="w-4 h-4" />
                  </Button>
                  <Button variant="ghost" size="sm" className="text-destructive hover:text-destructive hover:scale-110 transition-all duration-200">
                    <Trash2 className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </CardHeader>
            
            <CardContent className="space-y-4">
              <p className="text-sm text-muted-foreground">{department.description}</p>
              
              {/* Department Head */}
              <div className="flex items-center gap-2">
                <Users className="w-4 h-4 text-muted-foreground" />
                <span className="text-sm font-medium">Head: {department.head}</span>
              </div>

              {/* Contact Info */}
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-muted-foreground" />
                  <span className="text-sm">{department.phone}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-muted-foreground" />
                  <span className="text-sm">{department.email}</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-muted-foreground" />
                  <span className="text-sm">{department.address}</span>
                </div>
              </div>

              {/* Stats */}
              <div className="flex justify-between items-center pt-2 border-t border-border">
                <div className="text-center">
                  <p className="text-lg font-semibold text-foreground">{department.staff}</p>
                  <p className="text-xs text-muted-foreground">Staff</p>
                </div>
                <div className="text-center">
                  <p className="text-lg font-semibold text-orange-600">{department.activeReports}</p>
                  <p className="text-xs text-muted-foreground">Active</p>
                </div>
                <div className="text-center">
                  <p className="text-lg font-semibold text-green-600">{department.completedReports}</p>
                  <p className="text-xs text-muted-foreground">Completed</p>
                </div>
              </div>

              {/* Responsibilities */}
              <div>
                <p className="text-sm font-medium mb-2">Key Responsibilities:</p>
                <div className="flex flex-wrap gap-1">
                  {department.responsibilities.slice(0, 3).map((resp, index) => (
                    <Badge key={index} variant="secondary" className="text-xs">
                      {resp}
                    </Badge>
                  ))}
                  {department.responsibilities.length > 3 && (
                    <Badge variant="outline" className="text-xs">
                      +{department.responsibilities.length - 3} more
                    </Badge>
                  )}
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {filteredDepartments.length === 0 && (
        <div className="text-center py-12">
          <Users className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
          <h3 className="text-lg font-medium text-foreground mb-2">No departments found</h3>
          <p className="text-muted-foreground">Try adjusting your search criteria</p>
        </div>
      )}
    </div>
  );
}