import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../components/ui';
import { useAuthStore } from '../stores';
import LoginPage from './LoginPage';

export function HomePage() {
  const { user, isAuthenticated, logout } = useAuthStore();
  const navigate = useNavigate();

  // Redirect to dashboard if authenticated
  useEffect(() => {
    if (isAuthenticated && user) {
      navigate('/admin/dashboard', { replace: true });
    }
  }, [isAuthenticated, user, navigate]);

  return (
    <div
      data-testid="home-page"
      className="flex min-h-screen flex-col items-center justify-center bg-gray-50"
    >
      <div className="w-full rounded-lg bg-white">
        {isAuthenticated ? (
          <div className="space-y-4">
            <div className="text-center">
              <p className="text-gray-600">Welcome back, {user?.name}!</p>
              <p className="text-sm text-gray-500">{user?.email}</p>
            </div>
            <div className="flex space-x-2">
              <Button
                onClick={() => navigate('/admin/dashboard')}
                className="flex-1"
              >
                Go to Dashboard
              </Button>
              <Button onClick={logout} variant="outline" className="flex-1">
                Logout
              </Button>
            </div>
          </div>
        ) : (
          <LoginPage />
        )}
      </div>
    </div>
  );
}
