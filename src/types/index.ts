// ============================================================
// BuildWise — Core Type Definitions
// ============================================================

// --- User & Auth ---
export type UserRole = 'customer' | 'builder' | 'admin';

export interface User {
  id: string;
  email: string;
  name: string;
  avatar?: string;
  role: UserRole;
  phone?: string;
  location?: string;
  createdAt: string;
  isVerified: boolean;
}

export interface AuthState {
  user: User | null;
  token: string | null;
  isAuthenticated: boolean;
  isLoading: boolean;
}

// --- Builder ---
export interface Builder {
  id: string;
  userId: string;
  businessName: string;
  ownerName: string;
  avatar: string;
  coverImage?: string;
  description: string;
  shortBio: string;
  location: string;
  city: string;
  state: string;
  experience: number; // years
  rating: number;
  reviewCount: number;
  projectCount: number;
  specializations: string[];
  services: BuilderService[];
  certifications: Certification[];
  gallery: GalleryImage[];
  isVerified: boolean;
  verificationStatus: VerificationStatus;
  isPremium: boolean;
  hourlyRate?: number;
  minProjectBudget?: number;
  maxProjectBudget?: number;
  responseTime: string;
  completionRate: number;
  socialLinks?: SocialLinks;
  createdAt: string;
}

export interface BuilderService {
  id: string;
  name: string;
  description: string;
  priceRange?: string;
  icon?: string;
}

export interface Certification {
  id: string;
  name: string;
  issuer: string;
  year: number;
  documentUrl?: string;
  isVerified: boolean;
}

export interface GalleryImage {
  id: string;
  url: string;
  caption?: string;
  category?: string;
}

export type VerificationStatus = 'pending' | 'verified' | 'rejected' | 'under_review';

export interface SocialLinks {
  website?: string;
  facebook?: string;
  instagram?: string;
  linkedin?: string;
  twitter?: string;
}

// --- Project ---
export type ProjectStatus = 'planning' | 'in_progress' | 'on_hold' | 'completed' | 'cancelled';

export interface Project {
  id: string;
  title: string;
  description: string;
  customerId: string;
  customerName: string;
  builderId: string;
  builderName: string;
  status: ProjectStatus;
  budget: number;
  spent: number;
  startDate: string;
  estimatedEndDate: string;
  actualEndDate?: string;
  location: string;
  type: string;
  progress: number; // 0-100
  milestones: Milestone[];
  documents: Document[];
  gallery: GalleryImage[];
  updates: ProjectUpdate[];
  createdAt: string;
}

export interface Milestone {
  id: string;
  title: string;
  description: string;
  status: 'pending' | 'in_progress' | 'completed';
  dueDate: string;
  completedDate?: string;
  payment?: number;
  order: number;
}

export interface Document {
  id: string;
  name: string;
  type: string;
  url: string;
  size: number;
  uploadedAt: string;
  uploadedBy: string;
}

export interface ProjectUpdate {
  id: string;
  message: string;
  images?: string[];
  createdAt: string;
  createdBy: string;
}

// --- Quote ---
export type QuoteStatus = 'pending' | 'accepted' | 'rejected' | 'expired';

export interface Quote {
  id: string;
  projectTitle: string;
  projectDescription: string;
  projectType: string;
  customerId: string;
  customerName: string;
  builderId: string;
  builderName: string;
  builderAvatar: string;
  builderRating: number;
  price: number;
  timeline: string;
  estimatedDays: number;
  materials: string;
  warranty: string;
  status: QuoteStatus;
  aiScore?: number;
  notes?: string;
  createdAt: string;
  expiresAt: string;
}

// --- Review ---
export interface Review {
  id: string;
  builderId: string;
  customerId: string;
  customerName: string;
  customerAvatar?: string;
  projectId?: string;
  projectTitle?: string;
  rating: number;
  title: string;
  comment: string;
  images?: string[];
  response?: string;
  responseDate?: string;
  isVerified: boolean;
  helpful: number;
  createdAt: string;
}

// --- Chat ---
export interface ChatConversation {
  id: string;
  participants: ChatParticipant[];
  lastMessage: ChatMessage;
  unreadCount: number;
  updatedAt: string;
}

export interface ChatParticipant {
  id: string;
  name: string;
  avatar?: string;
  role: UserRole;
  isOnline: boolean;
}

export interface ChatMessage {
  id: string;
  conversationId: string;
  senderId: string;
  senderName: string;
  senderAvatar?: string;
  content: string;
  type: 'text' | 'image' | 'document';
  attachmentUrl?: string;
  attachmentName?: string;
  isRead: boolean;
  createdAt: string;
}

// --- Notification ---
export type NotificationCategory = 'project' | 'quote' | 'chat' | 'verification' | 'system';

export interface Notification {
  id: string;
  userId: string;
  title: string;
  message: string;
  category: NotificationCategory;
  isRead: boolean;
  actionUrl?: string;
  createdAt: string;
}

// --- AI Recommendation ---
export interface AIRecommendation {
  id: string;
  builder: Builder;
  matchScore: number; // 0-100
  reason: string;
  estimatedBudget: { min: number; max: number };
  estimatedTimeline: string;
  riskLevel: 'low' | 'medium' | 'high';
  strengths: string[];
  considerations: string[];
}

// --- Lead ---
export type LeadStatus = 'new' | 'contacted' | 'quoted' | 'won' | 'lost';

export interface Lead {
  id: string;
  customerName: string;
  customerAvatar?: string;
  customerEmail: string;
  customerPhone?: string;
  projectType: string;
  projectDescription: string;
  budget: { min: number; max: number };
  location: string;
  timeline: string;
  status: LeadStatus;
  priority: 'low' | 'medium' | 'high';
  source: string;
  notes?: string;
  createdAt: string;
}

// --- Analytics ---
export interface AnalyticsData {
  monthlyLeads: ChartDataPoint[];
  profileViews: ChartDataPoint[];
  quoteAcceptance: ChartDataPoint[];
  revenue: ChartDataPoint[];
  ratings: ChartDataPoint[];
  customerSatisfaction: ChartDataPoint[];
}

export interface ChartDataPoint {
  name: string;
  value: number;
  previousValue?: number;
}

// --- Admin ---
export interface AdminStats {
  totalUsers: number;
  totalBuilders: number;
  pendingVerifications: number;
  totalRevenue: number;
  totalProjects: number;
  activeProjects: number;
  totalReports: number;
  userGrowth: ChartDataPoint[];
  revenueGrowth: ChartDataPoint[];
}

export interface VerificationRequest {
  id: string;
  builderId: string;
  builderName: string;
  builderAvatar: string;
  businessName: string;
  documents: VerificationDocument[];
  status: VerificationStatus;
  submittedAt: string;
  reviewedAt?: string;
  reviewedBy?: string;
  notes?: string;
}

export interface VerificationDocument {
  id: string;
  name: string;
  type: string;
  url: string;
  status: 'pending' | 'approved' | 'rejected';
  notes?: string;
}

// --- Common ---
export interface PaginatedResponse<T> {
  data: T[];
  total: number;
  page: number;
  pageSize: number;
  totalPages: number;
}

export interface FilterOptions {
  search?: string;
  location?: string;
  minBudget?: number;
  maxBudget?: number;
  minRating?: number;
  experience?: number;
  projectType?: string;
  verifiedOnly?: boolean;
  sortBy?: string;
  sortOrder?: 'asc' | 'desc';
  page?: number;
  pageSize?: number;
}

export interface SelectOption {
  value: string;
  label: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  avatar: string;
  content: string;
  rating: number;
  location: string;
}

export interface Statistic {
  label: string;
  value: string;
  icon?: string;
  change?: number;
  changeLabel?: string;
}

export interface PricingPlan {
  id: string;
  name: string;
  price: number;
  period: string;
  description: string;
  features: string[];
  isPopular: boolean;
  ctaText: string;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  coverImage: string;
  author: {
    name: string;
    avatar: string;
  };
  category: string;
  tags: string[];
  readTime: number;
  publishedAt: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  avatar: string;
  bio: string;
  socialLinks?: SocialLinks;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: string;
}
