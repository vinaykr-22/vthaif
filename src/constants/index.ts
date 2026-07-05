// ============================================================
// BuildWise — Application Constants
// ============================================================

export const APP_NAME = 'BuildWise';
export const APP_TAGLINE = 'Build Smart. Build Right.';
export const APP_DESCRIPTION =
  'AI-powered construction marketplace connecting customers with verified builders for smarter, faster, and more reliable construction projects.';

// Navigation
export const PUBLIC_NAV_LINKS = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Builders', path: '/builders' },
  { label: 'How It Works', path: '/how-it-works' },
  { label: 'Pricing', path: '/pricing' },
  { label: 'Contact', path: '/contact' },
] as const;

export const CUSTOMER_NAV_LINKS = [
  { label: 'Dashboard', path: '/dashboard', icon: 'LayoutDashboard' },
  { label: 'Search Builders', path: '/search', icon: 'Search' },
  { label: 'Recommendations', path: '/recommendations', icon: 'Sparkles' },
  { label: 'Saved Builders', path: '/saved-builders', icon: 'Heart' },
  { label: 'Quotes', path: '/quotes', icon: 'FileText' },
  { label: 'Projects', path: '/projects', icon: 'FolderKanban' },
  { label: 'Chat', path: '/chat', icon: 'MessageSquare' },
  { label: 'Notifications', path: '/notifications', icon: 'Bell' },
] as const;

export const BUILDER_NAV_LINKS = [
  { label: 'Dashboard', path: '/builder/dashboard', icon: 'LayoutDashboard' },
  { label: 'Profile', path: '/builder/profile', icon: 'UserCircle' },
  { label: 'Projects', path: '/builder/projects', icon: 'FolderKanban' },
  { label: 'Leads', path: '/builder/leads', icon: 'Users' },
  { label: 'Quotes', path: '/builder/quotes', icon: 'FileText' },
  { label: 'Reviews', path: '/builder/reviews', icon: 'Star' },
  { label: 'Analytics', path: '/builder/analytics', icon: 'BarChart3' },
  { label: 'Verification', path: '/builder/verification', icon: 'ShieldCheck' },
] as const;

export const ADMIN_NAV_LINKS = [
  { label: 'Dashboard', path: '/admin', icon: 'LayoutDashboard' },
  { label: 'Users', path: '/admin/users', icon: 'Users' },
  { label: 'Builders', path: '/admin/builders', icon: 'HardHat' },
  { label: 'Verifications', path: '/admin/verifications', icon: 'ShieldCheck' },
  { label: 'Reports', path: '/admin/reports', icon: 'Flag' },
  { label: 'Reviews', path: '/admin/reviews', icon: 'Star' },
] as const;

// Project Types
export const PROJECT_TYPES = [
  'Residential Construction',
  'Commercial Construction',
  'Renovation',
  'Interior Design',
  'Landscape',
  'Roofing',
  'Plumbing',
  'Electrical',
  'Painting',
  'Flooring',
  'Kitchen Remodel',
  'Bathroom Remodel',
  'Extension',
  'Custom Build',
] as const;

// Builder Specializations
export const SPECIALIZATIONS = [
  'Residential',
  'Commercial',
  'Industrial',
  'Renovation',
  'Green Building',
  'Smart Homes',
  'Luxury Homes',
  'Modular Construction',
  'Historic Restoration',
  'Sustainable Building',
] as const;

// Sort Options
export const SORT_OPTIONS = [
  { value: 'rating_desc', label: 'Highest Rated' },
  { value: 'rating_asc', label: 'Lowest Rated' },
  { value: 'experience_desc', label: 'Most Experienced' },
  { value: 'projects_desc', label: 'Most Projects' },
  { value: 'price_asc', label: 'Lowest Price' },
  { value: 'price_desc', label: 'Highest Price' },
  { value: 'newest', label: 'Newest' },
] as const;

// Locations (mock)
export const LOCATIONS = [
  'San Francisco, CA',
  'Los Angeles, CA',
  'New York, NY',
  'Austin, TX',
  'Houston, TX',
  'Chicago, IL',
  'Miami, FL',
  'Seattle, WA',
  'Denver, CO',
  'Portland, OR',
  'Phoenix, AZ',
  'Atlanta, GA',
] as const;

// Notification categories
export const NOTIFICATION_CATEGORIES = [
  { value: 'all', label: 'All' },
  { value: 'project', label: 'Projects' },
  { value: 'quote', label: 'Quotes' },
  { value: 'chat', label: 'Messages' },
  { value: 'verification', label: 'Verification' },
  { value: 'system', label: 'System' },
] as const;

// Breakpoints
export const BREAKPOINTS = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  '2xl': 1536,
} as const;
