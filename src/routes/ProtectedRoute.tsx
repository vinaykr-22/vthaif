import { Navigate, useLocation } from 'react-router-dom';
import { useAuthStore } from '@/store/authStore';
import type { UserRole } from '@/types';

interface ProtectedRouteProps {
  children: React.ReactNode;
  allowedRoles?: UserRole[];
}

export default function ProtectedRoute({ children, allowedRoles }: ProtectedRouteProps) {
  const { isAuthenticated, user } = useAuthStore();
  const location = useLocation();

  if (!isAuthenticated) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  if (allowedRoles && user && !allowedRoles.includes(user.role)) {
    // Redirect to the user's own dashboard
    const dashboardPath = (() => {
      switch (user.role) {
        case 'customer': return '/dashboard';
        case 'builder': return '/builder/dashboard';
        case 'admin': return '/admin';
        default: return '/';
      }
    })();
    return <Navigate to={dashboardPath} replace />;
  }

  return <>{children}</>;
}
