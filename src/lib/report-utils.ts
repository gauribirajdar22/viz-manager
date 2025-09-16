export const getSeverityVariant = (severity: string) => {
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

export const getStatusVariant = (status: string) => {
  switch (status.toLowerCase()) {
    case "resolved":
    case "completed":
      return "default";
    case "in progress":
      return "secondary";
    case "assigned":
    case "active":
      return "outline";
    default:
      return "outline";
  }
};

export const getDepartmentStatusColor = (status: string) => {
  switch (status.toLowerCase()) {
    case "active":
      return "bg-success/10 text-success border-success/20";
    case "inactive":
      return "bg-destructive/10 text-destructive border-destructive/20";
    default:
      return "bg-muted text-muted-foreground border-muted";
  }
};

export const formatDate = (dateString: string) => {
  return new Date(dateString).toLocaleDateString('en-IN', {
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  });
};

export const getTimeAgo = (dateString: string) => {
  const now = new Date();
  const date = new Date(dateString);
  const diffInHours = Math.floor((now.getTime() - date.getTime()) / (1000 * 60 * 60));
  
  if (diffInHours < 1) return "Just now";
  if (diffInHours < 24) return `${diffInHours} hour${diffInHours > 1 ? 's' : ''} ago`;
  
  const diffInDays = Math.floor(diffInHours / 24);
  return `${diffInDays} day${diffInDays > 1 ? 's' : ''} ago`;
};