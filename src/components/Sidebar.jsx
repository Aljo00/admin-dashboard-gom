import {
  Home,
  BarChart,
  Settings,
  Users,
  FileText,
  Globe,
  Database,
  MessageSquare,
} from "lucide-react";

const Sidebar = () => {
  const links = [
    { name: "Dashboard", icon: <Home size={20} />, active: true },
    { name: "Reports", icon: <BarChart size={20} /> },
    { name: "Clients", icon: <Users size={20} /> },
    { name: "Messages", icon: <MessageSquare size={20} /> },
    { name: "Projects", icon: <FileText size={20} /> },
    { name: "Services", icon: <Globe size={20} /> },
    { name: "Database", icon: <Database size={20} /> },
    { name: "Settings", icon: <Settings size={20} /> },
  ];

  return (
    <aside className="fixed top-0 left-0 h-screen w-64 bg-gradient-to-b from-purple-700 to-pink-600 text-white flex flex-col justify-between shadow-lg">
      <div className="p-6">
        <h1 className="text-2xl font-bold mb-10">GOM Admin Panel</h1>
        <nav className="flex flex-col gap-2">
          {links.map((link, idx) => (
            <a
              key={idx}
              href="#"
              className={`flex items-center gap-3 px-4 py-3 rounded-lg transition font-medium ${
                link.active
                  ? "bg-white/20"
                  : "hover:bg-white/10 hover:pl-5 duration-200"
              }`}
            >
              {link.icon}
              <span>{link.name}</span>
            </a>
          ))}
        </nav>
      </div>

      <div className="p-6 text-sm text-white/80">
        <p>&copy; 2025 GOM Digital</p>
      </div>
    </aside>
  );
};

export default Sidebar;
