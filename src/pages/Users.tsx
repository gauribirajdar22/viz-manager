import { useState } from "react";
import { Search, Plus, MoreHorizontal, UserCheck, UserX, Shield, User } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { StatCard } from "@/components/StatCard";

interface User {
  id: string;
  name: string;
  email: string;
  phone: string;
  role: "admin" | "citizen" | "department_head";
  status: "active" | "inactive" | "suspended";
  avatar?: string;
  joinDate: string;
  lastLogin: string;
  reportsSubmitted: number;
  department?: string;
}

const mockUsers: User[] = [
  {
    id: "1",
    name: "Rajesh Kumar",
    email: "rajesh.kumar@cityconnect.gov",
    phone: "+91 98765 43210",
    role: "admin",
    status: "active",
    joinDate: "2024-01-15",
    lastLogin: "2024-09-16",
    reportsSubmitted: 0,
    department: "IT Administration"
  },
  {
    id: "2", 
    name: "Priya Sharma",
    email: "priya.sharma@email.com",
    phone: "+91 98765 43211",
    role: "citizen",
    status: "active",
    joinDate: "2024-03-20",
    lastLogin: "2024-09-15",
    reportsSubmitted: 12
  },
  {
    id: "3",
    name: "Dr. Amit Singh",
    email: "amit.singh@health.gov",
    phone: "+91 98765 43212", 
    role: "department_head",
    status: "active",
    joinDate: "2024-02-10",
    lastLogin: "2024-09-16",
    reportsSubmitted: 3,
    department: "Health Department"
  },
  {
    id: "4",
    name: "Sunita Devi",
    email: "sunita.devi@email.com",
    phone: "+91 98765 43213",
    role: "citizen", 
    status: "active",
    joinDate: "2024-05-08",
    lastLogin: "2024-09-14",
    reportsSubmitted: 8
  },
  {
    id: "5",
    name: "Vikram Patel",
    email: "vikram.patel@transport.gov",
    phone: "+91 98765 43214",
    role: "department_head",
    status: "active", 
    joinDate: "2024-01-25",
    lastLogin: "2024-09-16",
    reportsSubmitted: 5,
    department: "Transportation"
  },
  {
    id: "6",
    name: "Anita Gupta",
    email: "anita.gupta@email.com",
    phone: "+91 98765 43215",
    role: "citizen",
    status: "suspended",
    joinDate: "2024-04-12", 
    lastLogin: "2024-09-10",
    reportsSubmitted: 25
  }
];

const roleColors = {
  admin: "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300",
  department_head: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300", 
  citizen: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300"
};

const statusColors = {
  active: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300",
  inactive: "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300",
  suspended: "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300"
};

const roleIcons = {
  admin: Shield,
  department_head: UserCheck,
  citizen: User
};

export default function Users() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredUsers = mockUsers.filter(user =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.role.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.department?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const totalUsers = mockUsers.length;
  const activeUsers = mockUsers.filter(u => u.status === "active").length;
  const admins = mockUsers.filter(u => u.role === "admin").length;
  const citizens = mockUsers.filter(u => u.role === "citizen").length;

  const getInitials = (name: string) => {
    return name.split(' ').map(n => n[0]).join('').toUpperCase();
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-IN');
  };

  return (
    <div className="p-6 space-y-6 min-h-screen bg-gradient-to-br from-background via-background to-muted/20">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold text-foreground">User Management</h1>
          <p className="text-muted-foreground mt-1">Manage citizens, admins, and department heads</p>
        </div>
        <Button className="btn-primary">
          <Plus className="w-4 h-4 mr-2" />
          Add New User
        </Button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard
          title="Total Users"
          value={totalUsers.toString()}
          icon={User}
          change="+12%"
        />
        <StatCard
          title="Active Users"
          value={activeUsers.toString()}
          icon={UserCheck}
          change="+8%"
        />
        <StatCard
          title="Administrators"
          value={admins.toString()}
          icon={Shield}
          change="0%"
        />
        <StatCard
          title="Citizens"
          value={citizens.toString()}
          icon={User}
          change="+15%"
        />
      </div>

      {/* Search and Filter */}
      <Card className="card-elevated">
        <CardHeader>
          <CardTitle>All Users</CardTitle>
          <CardDescription>Search and manage all registered users</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col sm:flex-row gap-4 mb-6">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
              <Input
                placeholder="Search users by name, email, or role..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
          </div>

          {/* Users List/Table */}
          <div className="space-y-4">
            {filteredUsers.map((user) => {
              const RoleIcon = roleIcons[user.role];
              return (
                <div key={user.id} className="flex items-center justify-between p-4 bg-card rounded-lg border hover:shadow-md transition-all duration-200 hover:border-primary/20">
                  <div className="flex items-center gap-4 flex-1">
                    <Avatar className="h-12 w-12">
                      <AvatarImage src={user.avatar} />
                      <AvatarFallback className="bg-primary/10 text-primary font-semibold">
                        {getInitials(user.name)}
                      </AvatarFallback>
                    </Avatar>
                    
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="font-semibold text-foreground truncate">{user.name}</h3>
                        <div className="flex items-center gap-1">
                          <RoleIcon className="w-4 h-4 text-muted-foreground" />
                          <Badge variant="secondary" className={roleColors[user.role]}>
                            {user.role.replace('_', ' ')}
                          </Badge>
                        </div>
                      </div>
                      <p className="text-sm text-muted-foreground truncate">{user.email}</p>
                      <div className="flex items-center gap-4 mt-1 text-xs text-muted-foreground">
                        <span>Joined: {formatDate(user.joinDate)}</span>
                        <span>Reports: {user.reportsSubmitted}</span>
                        {user.department && <span>Dept: {user.department}</span>}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <Badge variant="outline" className={statusColors[user.status]}>
                      {user.status}
                    </Badge>
                    
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                          <MoreHorizontal className="h-4 w-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem>View Profile</DropdownMenuItem>
                        <DropdownMenuItem>Edit User</DropdownMenuItem>
                        <DropdownMenuItem>View Reports</DropdownMenuItem>
                        {user.status === "active" ? (
                          <DropdownMenuItem className="text-orange-600">
                            <UserX className="w-4 h-4 mr-2" />
                            Suspend User
                          </DropdownMenuItem>
                        ) : (
                          <DropdownMenuItem className="text-green-600">
                            <UserCheck className="w-4 h-4 mr-2" />
                            Activate User  
                          </DropdownMenuItem>
                        )}
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>
                </div>
              );
            })}
          </div>

          {filteredUsers.length === 0 && (
            <div className="text-center py-12">
              <User className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-foreground mb-2">No users found</h3>
              <p className="text-muted-foreground">Try adjusting your search criteria</p>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}