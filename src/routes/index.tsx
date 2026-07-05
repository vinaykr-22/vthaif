import { lazy, Suspense } from 'react';
import { createBrowserRouter, Navigate } from 'react-router-dom';
import PublicLayout from '@/components/layouts/PublicLayout';
import DashboardLayout from '@/components/layouts/DashboardLayout';
import ProtectedRoute from './ProtectedRoute';

// --- Loading fallback ---
const PageLoader = () => (
  <div className="flex h-[60vh] items-center justify-center">
    <div className="flex flex-col items-center gap-3">
      <div className="h-8 w-8 animate-spin rounded-full border-4 border-primary border-t-transparent" />
      <p className="text-sm text-muted-foreground">Loading...</p>
    </div>
  </div>
);

// --- Lazy loaded pages ---
// Public
const HomePage = lazy(() => import('@/pages/public/HomePage'));
const AboutPage = lazy(() => import('@/pages/public/AboutPage'));
const BuilderListingPage = lazy(() => import('@/pages/public/BuilderListingPage'));
const BuilderDetailsPage = lazy(() => import('@/pages/public/BuilderDetailsPage'));
const HowItWorksPage = lazy(() => import('@/pages/public/HowItWorksPage'));
const PricingPage = lazy(() => import('@/pages/public/PricingPage'));
const ContactPage = lazy(() => import('@/pages/public/ContactPage'));
const FAQPage = lazy(() => import('@/pages/public/FAQPage'));
const BlogPage = lazy(() => import('@/pages/public/BlogPage'));
const NotFoundPage = lazy(() => import('@/pages/public/NotFoundPage'));

// Auth
const LoginPage = lazy(() => import('@/pages/auth/LoginPage'));
const SignupPage = lazy(() => import('@/pages/auth/SignupPage'));
const ForgotPasswordPage = lazy(() => import('@/pages/auth/ForgotPasswordPage'));

// Customer
const CustomerDashboard = lazy(() => import('@/pages/customer/DashboardPage'));
const CustomerProfile = lazy(() => import('@/pages/customer/ProfilePage'));
const SearchBuildersPage = lazy(() => import('@/pages/customer/SearchBuildersPage'));
const RecommendationsPage = lazy(() => import('@/pages/customer/RecommendationsPage'));
const SavedBuildersPage = lazy(() => import('@/pages/customer/SavedBuildersPage'));
const CustomerQuotesPage = lazy(() => import('@/pages/customer/QuotesPage'));
const QuoteComparisonPage = lazy(() => import('@/pages/customer/QuoteComparisonPage'));
const CustomerProjectsPage = lazy(() => import('@/pages/customer/ProjectsPage'));
const ProjectDetailsPage = lazy(() => import('@/pages/customer/ProjectDetailsPage'));
const ChatPage = lazy(() => import('@/pages/customer/ChatPage'));
const NotificationsPage = lazy(() => import('@/pages/customer/NotificationsPage'));
const CustomerSettingsPage = lazy(() => import('@/pages/customer/SettingsPage'));

// Builder
const BuilderDashboard = lazy(() => import('@/pages/builder/DashboardPage'));
const BuilderProfilePage = lazy(() => import('@/pages/builder/ProfilePage'));
const BuilderProjectsPage = lazy(() => import('@/pages/builder/ProjectsPage'));
const LeadsPage = lazy(() => import('@/pages/builder/LeadsPage'));
const BuilderQuotesPage = lazy(() => import('@/pages/builder/QuotesPage'));
const BuilderReviewsPage = lazy(() => import('@/pages/builder/ReviewsPage'));
const AnalyticsPage = lazy(() => import('@/pages/builder/AnalyticsPage'));
const VerificationPage = lazy(() => import('@/pages/builder/VerificationPage'));
const BuilderSettingsPage = lazy(() => import('@/pages/builder/SettingsPage'));

// Admin
const AdminDashboard = lazy(() => import('@/pages/admin/DashboardPage'));
const AdminUsersPage = lazy(() => import('@/pages/admin/UsersPage'));
const AdminBuildersPage = lazy(() => import('@/pages/admin/BuildersPage'));
const AdminVerificationsPage = lazy(() => import('@/pages/admin/VerificationsPage'));
const AdminReportsPage = lazy(() => import('@/pages/admin/ReportsPage'));
const AdminReviewsPage = lazy(() => import('@/pages/admin/ReviewsPage'));
const AdminSettingsPage = lazy(() => import('@/pages/admin/SettingsPage'));

function withSuspense(Component: React.ComponentType) {
  return (
    <Suspense fallback={<PageLoader />}>
      <Component />
    </Suspense>
  );
}

function withProtection(Component: React.ComponentType, roles?: ('customer' | 'builder' | 'admin')[]) {
  return (
    <ProtectedRoute allowedRoles={roles}>
      <Suspense fallback={<PageLoader />}>
        <Component />
      </Suspense>
    </ProtectedRoute>
  );
}

export const router = createBrowserRouter([
  // Public routes
  {
    element: <PublicLayout />,
    children: [
      { path: '/', element: withSuspense(HomePage) },
      { path: '/about', element: withSuspense(AboutPage) },
      { path: '/builders', element: withSuspense(BuilderListingPage) },
      { path: '/builders/:id', element: withSuspense(BuilderDetailsPage) },
      { path: '/how-it-works', element: withSuspense(HowItWorksPage) },
      { path: '/pricing', element: withSuspense(PricingPage) },
      { path: '/contact', element: withSuspense(ContactPage) },
      { path: '/faq', element: withSuspense(FAQPage) },
      { path: '/blog', element: withSuspense(BlogPage) },
      { path: '/login', element: withSuspense(LoginPage) },
      { path: '/signup', element: withSuspense(SignupPage) },
      { path: '/forgot-password', element: withSuspense(ForgotPasswordPage) },
    ],
  },

  // Customer routes
  {
    element: <DashboardLayout />,
    children: [
      { path: '/dashboard', element: withProtection(CustomerDashboard, ['customer']) },
      { path: '/profile', element: withProtection(CustomerProfile, ['customer']) },
      { path: '/search', element: withProtection(SearchBuildersPage, ['customer']) },
      { path: '/recommendations', element: withProtection(RecommendationsPage, ['customer']) },
      { path: '/saved-builders', element: withProtection(SavedBuildersPage, ['customer']) },
      { path: '/quotes', element: withProtection(CustomerQuotesPage, ['customer']) },
      { path: '/quotes/compare', element: withProtection(QuoteComparisonPage, ['customer']) },
      { path: '/projects', element: withProtection(CustomerProjectsPage, ['customer']) },
      { path: '/projects/:id', element: withProtection(ProjectDetailsPage, ['customer']) },
      { path: '/chat', element: withProtection(ChatPage, ['customer']) },
      { path: '/notifications', element: withProtection(NotificationsPage, ['customer']) },
      { path: '/settings', element: withProtection(CustomerSettingsPage, ['customer']) },
    ],
  },

  // Builder routes
  {
    element: <DashboardLayout />,
    children: [
      { path: '/builder/dashboard', element: withProtection(BuilderDashboard, ['builder']) },
      { path: '/builder/profile', element: withProtection(BuilderProfilePage, ['builder']) },
      { path: '/builder/projects', element: withProtection(BuilderProjectsPage, ['builder']) },
      { path: '/builder/leads', element: withProtection(LeadsPage, ['builder']) },
      { path: '/builder/quotes', element: withProtection(BuilderQuotesPage, ['builder']) },
      { path: '/builder/reviews', element: withProtection(BuilderReviewsPage, ['builder']) },
      { path: '/builder/analytics', element: withProtection(AnalyticsPage, ['builder']) },
      { path: '/builder/verification', element: withProtection(VerificationPage, ['builder']) },
      { path: '/builder/settings', element: withProtection(BuilderSettingsPage, ['builder']) },
    ],
  },

  // Admin routes
  {
    element: <DashboardLayout />,
    children: [
      { path: '/admin', element: withProtection(AdminDashboard, ['admin']) },
      { path: '/admin/users', element: withProtection(AdminUsersPage, ['admin']) },
      { path: '/admin/builders', element: withProtection(AdminBuildersPage, ['admin']) },
      { path: '/admin/verifications', element: withProtection(AdminVerificationsPage, ['admin']) },
      { path: '/admin/reports', element: withProtection(AdminReportsPage, ['admin']) },
      { path: '/admin/reviews', element: withProtection(AdminReviewsPage, ['admin']) },
      { path: '/admin/settings', element: withProtection(AdminSettingsPage, ['admin']) },
    ],
  },

  // Catch all
  {
    path: '*',
    element: <PublicLayout />,
    children: [{ path: '*', element: withSuspense(NotFoundPage) }],
  },
]);
