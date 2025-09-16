import { NavLink, useLocation } from "react-router-dom";
import { 
  LayoutDashboard, 
  FileText, 
  Users, 
  Building2, 
  Settings,
  LogOut,
  Globe
} from "lucide-react";

const sidebarItems = [
  { title: "Dashboard", path: "/", icon: LayoutDashboard },
  { title: "Reports", path: "/reports", icon: FileText },
  { title: "Users", path: "/users", icon: Users },
  { title: "Departments", path: "/departments", icon: Building2 },
  { title: "Settings", path: "/settings", icon: Settings },
];

export function AdminSidebar() {
  const location = useLocation();

  const isActive = (path: string) => {
    if (path === "/") {
      return location.pathname === "/";
    }
    return location.pathname.startsWith(path);
  };

  return (
    <div className="w-64 h-screen bg-[hsl(var(--admin-sidebar))] text-[hsl(var(--admin-sidebar-foreground))] flex flex-col">
      {/* Logo Section */}
      <div className="p-6 border-b border-white/10">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
            <Globe className="w-6 h-6 text-white" />
          </div>
          <div>
            <h1 className="text-xl font-bold">CityConnect</h1>
            <p className="text-sm text-white/70">Admin Panel</p>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4">
        <ul className="space-y-2">
          {sidebarItems.map((item) => (
            <li key={item.path}>
              <NavLink
                to={item.path}
                className={`admin-sidebar-item ${
                  isActive(item.path) ? "active" : ""
                }`}
              >
                <item.icon className="w-5 h-5" />
                <span className="font-medium">{item.title}</span>
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>

      {/* Logout Section */}
      <div className="p-4 border-t border-white/10">
        <button className="admin-sidebar-item w-full text-left text-white/70 hover:text-white">
          <LogOut className="w-5 h-5" />
          <span className="font-medium">Logout</span>
        </button>
      </div>
    </div>
  );
}