import { useState } from "react";
import { Search, Phone, Mail, MapPin, Users, FileText, Plus, Edit, Trash2 } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

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

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Active": return "bg-green-100 text-green-800 border-green-200";
      case "Inactive": return "bg-red-100 text-red-800 border-red-200";
      default: return "bg-gray-100 text-gray-800 border-gray-200";
    }
  };

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Departments</h1>
          <p className="text-muted-foreground mt-1">Manage city departments and their operations</p>
        </div>
        <Button className="bg-primary hover:bg-primary/90">
          <Plus className="w-4 h-4 mr-2" />
          Add New Department
        </Button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="border-border bg-card">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Total Departments</p>
                <p className="text-2xl font-bold text-foreground">{departments.length}</p>
              </div>
              <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
                <Users className="w-4 h-4 text-primary" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-border bg-card">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Total Staff</p>
                <p className="text-2xl font-bold text-foreground">
                  {departments.reduce((sum, dept) => sum + dept.staff, 0)}
                </p>
              </div>
              <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                <Users className="w-4 h-4 text-blue-600" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-border bg-card">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Active Reports</p>
                <p className="text-2xl font-bold text-foreground">
                  {departments.reduce((sum, dept) => sum + dept.activeReports, 0)}
                </p>
              </div>
              <div className="w-8 h-8 bg-yellow-100 rounded-lg flex items-center justify-center">
                <FileText className="w-4 h-4 text-yellow-600" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-border bg-card">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Completed Reports</p>
                <p className="text-2xl font-bold text-foreground">
                  {departments.reduce((sum, dept) => sum + dept.completedReports, 0)}
                </p>
              </div>
              <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
                <FileText className="w-4 h-4 text-green-600" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Search */}
      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
        <Input
          placeholder="Search departments, heads, or descriptions..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="pl-10"
        />
      </div>

      {/* Departments Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {filteredDepartments.map((department) => (
          <Card key={department.id} className="border-border bg-card hover:shadow-md transition-shadow cursor-pointer">
            <CardHeader className="pb-3">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <CardTitle className="text-lg font-semibold text-foreground mb-1">
                    {department.name}
                  </CardTitle>
                  <Badge className={`text-xs ${getStatusColor(department.status)}`}>
                    {department.status}
                  </Badge>
                </div>
                <div className="flex gap-1">
                  <Button variant="ghost" size="sm">
                    <Edit className="w-4 h-4" />
                  </Button>
                  <Button variant="ghost" size="sm" className="text-destructive hover:text-destructive">
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