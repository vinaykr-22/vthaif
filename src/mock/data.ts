import type {
  Builder, Review, Project, Quote, Notification, Lead,
  AIRecommendation, ChatConversation, ChatMessage, AnalyticsData,
  Testimonial, Statistic, PricingPlan, BlogPost, TeamMember, FAQItem,
  VerificationRequest, AdminStats,
} from '@/types';

// ============================================================
// BUILDERS
// ============================================================
export const mockBuilders: Builder[] = [
  {
    id: 'b-001',
    userId: 'u-b-001',
    businessName: 'Premier Constructions',
    ownerName: 'Sarah Mitchell',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=face',
    coverImage: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1200&h=400&fit=crop',
    description: 'Premier Constructions has been delivering exceptional residential and commercial projects for over 15 years. Our commitment to quality craftsmanship, innovative design, and sustainable building practices sets us apart.',
    shortBio: 'Award-winning construction firm specializing in luxury residential and green building.',
    location: 'Austin, TX',
    city: 'Austin',
    state: 'TX',
    experience: 15,
    rating: 4.9,
    reviewCount: 127,
    projectCount: 89,
    specializations: ['Luxury Homes', 'Green Building', 'Smart Homes'],
    services: [
      { id: 's-001', name: 'Custom Home Building', description: 'Full-service custom home construction', priceRange: '$250K - $2M+' },
      { id: 's-002', name: 'Renovation & Remodeling', description: 'Complete home renovation services', priceRange: '$30K - $500K' },
      { id: 's-003', name: 'Green Building', description: 'LEED-certified sustainable construction', priceRange: '$300K - $3M+' },
    ],
    certifications: [
      { id: 'c-001', name: 'LEED Certified', issuer: 'U.S. Green Building Council', year: 2019, isVerified: true },
      { id: 'c-002', name: 'Licensed General Contractor', issuer: 'Texas TDLR', year: 2010, isVerified: true },
    ],
    gallery: [
      { id: 'g-001', url: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&h=400&fit=crop', caption: 'Modern Villa — Completed 2024', category: 'Residential' },
      { id: 'g-002', url: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=600&h=400&fit=crop', caption: 'Eco-Friendly Home', category: 'Green Building' },
      { id: 'g-003', url: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&h=400&fit=crop', caption: 'Smart Home Integration', category: 'Smart Homes' },
      { id: 'g-004', url: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=600&h=400&fit=crop', caption: 'Luxury Kitchen Remodel', category: 'Renovation' },
    ],
    isVerified: true,
    verificationStatus: 'verified',
    isPremium: true,
    hourlyRate: 150,
    minProjectBudget: 30000,
    maxProjectBudget: 3000000,
    responseTime: '< 2 hours',
    completionRate: 98,
    socialLinks: { website: 'https://premierconstructions.com', linkedin: '#', instagram: '#' },
    createdAt: '2023-01-15',
  },
  {
    id: 'b-002',
    userId: 'u-b-002',
    businessName: 'Urban Edge Builders',
    ownerName: 'Marcus Chen',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
    coverImage: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&h=400&fit=crop',
    description: 'Urban Edge Builders specializes in contemporary commercial and mixed-use developments. We bring modern architecture to life with precision engineering and cutting-edge technology.',
    shortBio: 'Modern commercial construction with a focus on innovation and sustainability.',
    location: 'San Francisco, CA',
    city: 'San Francisco',
    state: 'CA',
    experience: 12,
    rating: 4.8,
    reviewCount: 94,
    projectCount: 65,
    specializations: ['Commercial', 'Modular Construction', 'Smart Homes'],
    services: [
      { id: 's-004', name: 'Commercial Construction', description: 'Office buildings and retail spaces', priceRange: '$500K - $10M+' },
      { id: 's-005', name: 'Mixed-Use Development', description: 'Combined residential and commercial', priceRange: '$1M - $20M+' },
    ],
    certifications: [
      { id: 'c-003', name: 'OSHA Safety Certified', issuer: 'OSHA', year: 2020, isVerified: true },
    ],
    gallery: [
      { id: 'g-005', url: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&h=400&fit=crop', caption: 'Downtown Office Complex', category: 'Commercial' },
      { id: 'g-006', url: 'https://images.unsplash.com/photo-1554469384-e58fac16e23a?w=600&h=400&fit=crop', caption: 'Mixed-Use Tower', category: 'Commercial' },
    ],
    isVerified: true,
    verificationStatus: 'verified',
    isPremium: true,
    hourlyRate: 175,
    minProjectBudget: 100000,
    maxProjectBudget: 20000000,
    responseTime: '< 4 hours',
    completionRate: 96,
    createdAt: '2023-03-20',
  },
  {
    id: 'b-003',
    userId: 'u-b-003',
    businessName: 'Heritage Restorations',
    ownerName: 'Emily Rodriguez',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face',
    coverImage: 'https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?w=1200&h=400&fit=crop',
    description: 'Heritage Restorations brings historic buildings back to life while preserving their original character. Our team of expert craftspeople combines traditional techniques with modern standards.',
    shortBio: 'Expert historic restoration and renovation with a passion for preservation.',
    location: 'New York, NY',
    city: 'New York',
    state: 'NY',
    experience: 20,
    rating: 4.7,
    reviewCount: 156,
    projectCount: 112,
    specializations: ['Historic Restoration', 'Renovation', 'Residential'],
    services: [
      { id: 's-006', name: 'Historic Restoration', description: 'Period-accurate building restoration', priceRange: '$100K - $5M+' },
      { id: 's-007', name: 'Interior Renovation', description: 'Complete interior transformations', priceRange: '$25K - $300K' },
    ],
    certifications: [
      { id: 'c-004', name: 'National Trust Preservation', issuer: 'NTHP', year: 2015, isVerified: true },
    ],
    gallery: [
      { id: 'g-007', url: 'https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?w=600&h=400&fit=crop', caption: 'Victorian Home Restoration', category: 'Restoration' },
    ],
    isVerified: true,
    verificationStatus: 'verified',
    isPremium: false,
    hourlyRate: 125,
    minProjectBudget: 25000,
    maxProjectBudget: 5000000,
    responseTime: '< 6 hours',
    completionRate: 99,
    createdAt: '2022-11-10',
  },
  {
    id: 'b-004',
    userId: 'u-b-004',
    businessName: 'SkyLine Developers',
    ownerName: 'David Park',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face',
    coverImage: 'https://images.unsplash.com/photo-1448630360428-65456885c650?w=1200&h=400&fit=crop',
    description: 'SkyLine Developers builds the future of urban living with cutting-edge residential towers and mixed-use spaces that redefine modern city life.',
    shortBio: 'Forward-thinking development company creating iconic urban spaces.',
    location: 'Chicago, IL',
    city: 'Chicago',
    state: 'IL',
    experience: 18,
    rating: 4.6,
    reviewCount: 83,
    projectCount: 45,
    specializations: ['Commercial', 'Residential', 'Luxury Homes'],
    services: [
      { id: 's-008', name: 'High-Rise Construction', description: 'Luxury residential towers', priceRange: '$5M - $50M+' },
      { id: 's-009', name: 'Penthouse Finishing', description: 'Luxury penthouse build-outs', priceRange: '$500K - $5M' },
    ],
    certifications: [
      { id: 'c-005', name: 'ISO 9001 Certified', issuer: 'ISO', year: 2021, isVerified: true },
    ],
    gallery: [
      { id: 'g-008', url: 'https://images.unsplash.com/photo-1448630360428-65456885c650?w=600&h=400&fit=crop', caption: 'Lakefront Tower', category: 'Commercial' },
    ],
    isVerified: true,
    verificationStatus: 'verified',
    isPremium: true,
    hourlyRate: 200,
    minProjectBudget: 500000,
    maxProjectBudget: 50000000,
    responseTime: '< 8 hours',
    completionRate: 95,
    createdAt: '2023-06-01',
  },
  {
    id: 'b-005',
    userId: 'u-b-005',
    businessName: 'GreenBuild Solutions',
    ownerName: 'Lisa Nguyen',
    avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&h=150&fit=crop&crop=face',
    coverImage: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=1200&h=400&fit=crop',
    description: 'GreenBuild Solutions is a pioneer in sustainable construction, building net-zero homes and commercial spaces that reduce environmental impact without compromising luxury or comfort.',
    shortBio: 'Pioneering net-zero and sustainable construction for a greener tomorrow.',
    location: 'Portland, OR',
    city: 'Portland',
    state: 'OR',
    experience: 10,
    rating: 4.8,
    reviewCount: 72,
    projectCount: 48,
    specializations: ['Green Building', 'Sustainable Building', 'Residential'],
    services: [
      { id: 's-010', name: 'Net-Zero Homes', description: 'Energy-neutral residential construction', priceRange: '$300K - $1.5M' },
      { id: 's-011', name: 'Solar Integration', description: 'Integrated solar and energy systems', priceRange: '$20K - $100K' },
    ],
    certifications: [
      { id: 'c-006', name: 'Passive House Certified', issuer: 'PHIUS', year: 2020, isVerified: true },
      { id: 'c-007', name: 'LEED AP', issuer: 'USGBC', year: 2018, isVerified: true },
    ],
    gallery: [
      { id: 'g-009', url: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=600&h=400&fit=crop', caption: 'Net-Zero Family Home', category: 'Green Building' },
    ],
    isVerified: true,
    verificationStatus: 'verified',
    isPremium: false,
    hourlyRate: 130,
    minProjectBudget: 20000,
    maxProjectBudget: 1500000,
    responseTime: '< 3 hours',
    completionRate: 97,
    createdAt: '2023-09-15',
  },
  {
    id: 'b-006',
    userId: 'u-b-006',
    businessName: 'Apex Interiors',
    ownerName: 'James Wilson',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
    coverImage: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=1200&h=400&fit=crop',
    description: 'Apex Interiors transforms spaces with bespoke interior design and renovation services. From modern minimalist to classic elegance, we create interiors that inspire.',
    shortBio: 'Bespoke interior design and premium renovation services.',
    location: 'Los Angeles, CA',
    city: 'Los Angeles',
    state: 'CA',
    experience: 8,
    rating: 4.5,
    reviewCount: 64,
    projectCount: 92,
    specializations: ['Renovation', 'Residential', 'Luxury Homes'],
    services: [
      { id: 's-012', name: 'Interior Design', description: 'Full interior design services', priceRange: '$15K - $200K' },
      { id: 's-013', name: 'Kitchen & Bath Remodel', description: 'Premium kitchen and bathroom renovation', priceRange: '$20K - $150K' },
    ],
    certifications: [],
    gallery: [
      { id: 'g-010', url: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=600&h=400&fit=crop', caption: 'Modern Living Room', category: 'Interior' },
    ],
    isVerified: false,
    verificationStatus: 'pending',
    isPremium: false,
    hourlyRate: 95,
    minProjectBudget: 15000,
    maxProjectBudget: 500000,
    responseTime: '< 12 hours',
    completionRate: 92,
    createdAt: '2024-01-20',
  },
];

// ============================================================
// REVIEWS
// ============================================================
export const mockReviews: Review[] = [
  {
    id: 'r-001', builderId: 'b-001', customerId: 'cust-001', customerName: 'John Carter',
    customerAvatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&h=80&fit=crop&crop=face',
    projectTitle: 'Modern Farmhouse Build', rating: 5, title: 'Exceptional craftsmanship and communication',
    comment: 'Sarah and her team at Premier Constructions delivered our dream home on time and within budget. The attention to detail was incredible, and they kept us informed every step of the way.',
    isVerified: true, helpful: 24, createdAt: '2024-06-15',
  },
  {
    id: 'r-002', builderId: 'b-001', customerId: 'cust-002', customerName: 'Emma Thompson',
    customerAvatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=80&h=80&fit=crop&crop=face',
    projectTitle: 'Kitchen Renovation', rating: 5, title: 'Transformed our kitchen beautifully',
    comment: 'The renovation exceeded our expectations. The team was professional, clean, and finished two days early!',
    isVerified: true, helpful: 18, createdAt: '2024-05-20',
  },
  {
    id: 'r-003', builderId: 'b-002', customerId: 'cust-003', customerName: 'Robert Kim',
    customerAvatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=80&h=80&fit=crop&crop=face',
    projectTitle: 'Office Complex', rating: 4, title: 'Great quality, minor delays',
    comment: 'The final result is stunning. There were some minor timeline delays due to supply chain issues, but the quality of work was top-notch.',
    isVerified: true, helpful: 12, createdAt: '2024-04-10',
  },
  {
    id: 'r-004', builderId: 'b-003', customerId: 'cust-004', customerName: 'Patricia Adams',
    customerAvatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=80&h=80&fit=crop&crop=face',
    projectTitle: 'Victorian Home Restoration', rating: 5, title: 'Masters of their craft',
    comment: 'Heritage Restorations brought our 1890s home back to its original glory. Their knowledge of historical architecture is unmatched.',
    isVerified: true, helpful: 31, createdAt: '2024-03-25',
  },
];

// ============================================================
// PROJECTS
// ============================================================
export const mockProjects: Project[] = [
  {
    id: 'p-001', title: 'Modern Farmhouse Construction', description: 'A 3,500 sq ft modern farmhouse with open floor plan, smart home integration, and sustainable features.',
    customerId: 'cust-001', customerName: 'John Carter', builderId: 'b-001', builderName: 'Premier Constructions',
    status: 'in_progress', budget: 450000, spent: 280000, startDate: '2024-03-01', estimatedEndDate: '2024-12-15',
    location: 'Austin, TX', type: 'Custom Build', progress: 62,
    milestones: [
      { id: 'm-001', title: 'Foundation', description: 'Concrete foundation and footings', status: 'completed', dueDate: '2024-04-01', completedDate: '2024-03-28', payment: 45000, order: 1 },
      { id: 'm-002', title: 'Framing', description: 'Structural framing and roof', status: 'completed', dueDate: '2024-06-01', completedDate: '2024-05-25', payment: 90000, order: 2 },
      { id: 'm-003', title: 'Electrical & Plumbing', description: 'Rough-in electrical, plumbing, HVAC', status: 'completed', dueDate: '2024-07-15', completedDate: '2024-07-10', payment: 65000, order: 3 },
      { id: 'm-004', title: 'Interior Finishing', description: 'Drywall, paint, flooring, cabinets', status: 'in_progress', dueDate: '2024-10-01', payment: 80000, order: 4 },
      { id: 'm-005', title: 'Final Inspection', description: 'Landscaping, cleanup, final walkthrough', status: 'pending', dueDate: '2024-12-15', payment: 60000, order: 5 },
    ],
    documents: [
      { id: 'd-001', name: 'Building Permit.pdf', type: 'pdf', url: '#', size: 2400000, uploadedAt: '2024-02-20', uploadedBy: 'Premier Constructions' },
      { id: 'd-002', name: 'Floor Plans.pdf', type: 'pdf', url: '#', size: 5600000, uploadedAt: '2024-02-15', uploadedBy: 'John Carter' },
    ],
    gallery: [
      { id: 'pg-001', url: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&h=400&fit=crop', caption: 'Foundation Complete' },
      { id: 'pg-002', url: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=600&h=400&fit=crop', caption: 'Framing Progress' },
    ],
    updates: [
      { id: 'u-001', message: 'Interior drywall installation is 80% complete. On track for the October milestone.', createdAt: '2024-08-15', createdBy: 'Premier Constructions' },
      { id: 'u-002', message: 'Kitchen cabinets have been delivered and installation begins next week.', createdAt: '2024-08-10', createdBy: 'Premier Constructions' },
    ],
    createdAt: '2024-02-15',
  },
  {
    id: 'p-002', title: 'Office Renovation', description: 'Complete renovation of a 2,000 sq ft office space including modern open plan design.',
    customerId: 'cust-001', customerName: 'John Carter', builderId: 'b-002', builderName: 'Urban Edge Builders',
    status: 'planning', budget: 85000, spent: 0, startDate: '2024-10-01', estimatedEndDate: '2025-01-15',
    location: 'San Francisco, CA', type: 'Renovation', progress: 5,
    milestones: [
      { id: 'm-006', title: 'Design Approval', description: 'Finalize office layout and design', status: 'in_progress', dueDate: '2024-10-15', payment: 10000, order: 1 },
      { id: 'm-007', title: 'Demolition', description: 'Remove existing fixtures', status: 'pending', dueDate: '2024-11-01', payment: 15000, order: 2 },
    ],
    documents: [], gallery: [], updates: [], createdAt: '2024-09-01',
  },
];

// ============================================================
// QUOTES
// ============================================================
export const mockQuotes: Quote[] = [
  {
    id: 'q-001', projectTitle: 'Kitchen Remodel', projectDescription: 'Complete kitchen renovation with new cabinets, countertops, appliances, and flooring.',
    projectType: 'Kitchen Remodel', customerId: 'cust-001', customerName: 'John Carter',
    builderId: 'b-001', builderName: 'Premier Constructions',
    builderAvatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&h=80&fit=crop&crop=face',
    builderRating: 4.9, price: 45000, timeline: '8-10 weeks', estimatedDays: 63,
    materials: 'Quartz countertops, custom maple cabinets, hardwood flooring', warranty: '5-year workmanship',
    status: 'pending', aiScore: 95, createdAt: '2024-08-01', expiresAt: '2024-09-01',
  },
  {
    id: 'q-002', projectTitle: 'Kitchen Remodel', projectDescription: 'Complete kitchen renovation with new cabinets, countertops, appliances, and flooring.',
    projectType: 'Kitchen Remodel', customerId: 'cust-001', customerName: 'John Carter',
    builderId: 'b-002', builderName: 'Urban Edge Builders',
    builderAvatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&crop=face',
    builderRating: 4.8, price: 52000, timeline: '6-8 weeks', estimatedDays: 49,
    materials: 'Granite countertops, semi-custom cabinets, tile flooring', warranty: '3-year workmanship',
    status: 'pending', aiScore: 82, createdAt: '2024-08-03', expiresAt: '2024-09-03',
  },
  {
    id: 'q-003', projectTitle: 'Kitchen Remodel', projectDescription: 'Complete kitchen renovation with new cabinets, countertops, appliances, and flooring.',
    projectType: 'Kitchen Remodel', customerId: 'cust-001', customerName: 'John Carter',
    builderId: 'b-006', builderName: 'Apex Interiors',
    builderAvatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&h=80&fit=crop&crop=face',
    builderRating: 4.5, price: 38000, timeline: '10-12 weeks', estimatedDays: 77,
    materials: 'Laminate countertops, stock cabinets, vinyl flooring', warranty: '2-year workmanship',
    status: 'pending', aiScore: 68, createdAt: '2024-08-05', expiresAt: '2024-09-05',
  },
  {
    id: 'q-004', projectTitle: 'Bathroom Renovation', projectDescription: 'Master bathroom renovation with walk-in shower and double vanity.',
    projectType: 'Bathroom Remodel', customerId: 'cust-001', customerName: 'John Carter',
    builderId: 'b-001', builderName: 'Premier Constructions',
    builderAvatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&h=80&fit=crop&crop=face',
    builderRating: 4.9, price: 28000, timeline: '4-6 weeks', estimatedDays: 35,
    materials: 'Marble tile, frameless glass, custom vanity', warranty: '5-year workmanship',
    status: 'accepted', aiScore: 97, createdAt: '2024-07-15', expiresAt: '2024-08-15',
  },
];

// ============================================================
// NOTIFICATIONS
// ============================================================
export const mockNotifications: Notification[] = [
  { id: 'n-001', userId: 'cust-001', title: 'New Quote Received', message: 'Premier Constructions sent you a quote for Kitchen Remodel.', category: 'quote', isRead: false, actionUrl: '/quotes', createdAt: '2024-08-15T10:30:00Z' },
  { id: 'n-002', userId: 'cust-001', title: 'Project Update', message: 'Interior drywall installation is 80% complete on your Modern Farmhouse project.', category: 'project', isRead: false, actionUrl: '/projects/p-001', createdAt: '2024-08-15T09:15:00Z' },
  { id: 'n-003', userId: 'cust-001', title: 'New Message', message: 'Sarah Mitchell from Premier Constructions sent you a message.', category: 'chat', isRead: true, actionUrl: '/chat', createdAt: '2024-08-14T16:45:00Z' },
  { id: 'n-004', userId: 'cust-001', title: 'AI Recommendation', message: 'We found 3 new builders matching your project requirements.', category: 'system', isRead: true, actionUrl: '/recommendations', createdAt: '2024-08-14T08:00:00Z' },
  { id: 'n-005', userId: 'cust-001', title: 'Quote Expiring Soon', message: 'Your quote from Urban Edge Builders expires in 3 days.', category: 'quote', isRead: false, actionUrl: '/quotes', createdAt: '2024-08-13T11:00:00Z' },
];

// ============================================================
// AI RECOMMENDATIONS
// ============================================================
export const mockRecommendations: AIRecommendation[] = [
  {
    id: 'rec-001', builder: mockBuilders[0], matchScore: 95,
    reason: 'Top match based on specialization in luxury residential, excellent track record, and availability in your area. Strong alignment with your sustainable building requirements.',
    estimatedBudget: { min: 400000, max: 550000 }, estimatedTimeline: '10-14 months',
    riskLevel: 'low', strengths: ['15 years experience', 'LEED certified', '98% completion rate', '4.9 rating'],
    considerations: ['Premium pricing', 'High demand — book early'],
  },
  {
    id: 'rec-002', builder: mockBuilders[4], matchScore: 88,
    reason: 'Excellent match for green building requirements. Certified Passive House builder with strong sustainability focus and competitive pricing.',
    estimatedBudget: { min: 350000, max: 480000 }, estimatedTimeline: '12-16 months',
    riskLevel: 'low', strengths: ['Passive House certified', 'Net-zero specialist', 'Competitive pricing'],
    considerations: ['Less experience with large-scale projects', 'Located in Portland (travel costs may apply)'],
  },
  {
    id: 'rec-003', builder: mockBuilders[1], matchScore: 76,
    reason: 'Strong commercial background with modular construction expertise. Good option for innovative building approaches.',
    estimatedBudget: { min: 500000, max: 700000 }, estimatedTimeline: '8-12 months',
    riskLevel: 'medium', strengths: ['Modular construction expertise', 'Fast timelines', 'Strong commercial portfolio'],
    considerations: ['Primarily commercial focus', 'Higher budget range', 'Limited residential portfolio'],
  },
];

// ============================================================
// CHAT
// ============================================================
export const mockConversations: ChatConversation[] = [
  {
    id: 'conv-001',
    participants: [
      { id: 'cust-001', name: 'John Carter', avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&h=80&fit=crop&crop=face', role: 'customer', isOnline: true },
      { id: 'u-b-001', name: 'Sarah Mitchell', avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&h=80&fit=crop&crop=face', role: 'builder', isOnline: true },
    ],
    lastMessage: { id: 'msg-005', conversationId: 'conv-001', senderId: 'u-b-001', senderName: 'Sarah Mitchell', content: 'The kitchen cabinets have been delivered! Installation starts Monday.', type: 'text', isRead: false, createdAt: '2024-08-15T14:30:00Z' },
    unreadCount: 2,
    updatedAt: '2024-08-15T14:30:00Z',
  },
  {
    id: 'conv-002',
    participants: [
      { id: 'cust-001', name: 'John Carter', avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&h=80&fit=crop&crop=face', role: 'customer', isOnline: true },
      { id: 'u-b-002', name: 'Marcus Chen', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&crop=face', role: 'builder', isOnline: false },
    ],
    lastMessage: { id: 'msg-010', conversationId: 'conv-002', senderId: 'cust-001', senderName: 'John Carter', content: 'Can you send over the revised floor plan?', type: 'text', isRead: true, createdAt: '2024-08-14T11:20:00Z' },
    unreadCount: 0,
    updatedAt: '2024-08-14T11:20:00Z',
  },
];

export const mockMessages: ChatMessage[] = [
  { id: 'msg-001', conversationId: 'conv-001', senderId: 'cust-001', senderName: 'John Carter', content: 'Hi Sarah! How\'s the farmhouse project coming along?', type: 'text', isRead: true, createdAt: '2024-08-15T09:00:00Z' },
  { id: 'msg-002', conversationId: 'conv-001', senderId: 'u-b-001', senderName: 'Sarah Mitchell', senderAvatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&h=80&fit=crop&crop=face', content: 'Hi John! Great news — we\'re ahead of schedule. Drywall is 80% done.', type: 'text', isRead: true, createdAt: '2024-08-15T09:15:00Z' },
  { id: 'msg-003', conversationId: 'conv-001', senderId: 'cust-001', senderName: 'John Carter', content: 'That\'s amazing! When can I visit the site?', type: 'text', isRead: true, createdAt: '2024-08-15T09:30:00Z' },
  { id: 'msg-004', conversationId: 'conv-001', senderId: 'u-b-001', senderName: 'Sarah Mitchell', senderAvatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&h=80&fit=crop&crop=face', content: 'You\'re welcome to visit anytime! I\'d suggest Thursday afternoon — we\'ll have the kitchen layout visible by then.', type: 'text', isRead: true, createdAt: '2024-08-15T10:00:00Z' },
  { id: 'msg-005', conversationId: 'conv-001', senderId: 'u-b-001', senderName: 'Sarah Mitchell', senderAvatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&h=80&fit=crop&crop=face', content: 'The kitchen cabinets have been delivered! Installation starts Monday.', type: 'text', isRead: false, createdAt: '2024-08-15T14:30:00Z' },
];

// ============================================================
// LEADS (Builder)
// ============================================================
export const mockLeads: Lead[] = [
  { id: 'l-001', customerName: 'Michael Brown', customerAvatar: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=80&h=80&fit=crop&crop=face', customerEmail: 'michael@example.com', customerPhone: '+1 555-111-2222', projectType: 'Custom Build', projectDescription: 'Looking to build a 4-bedroom modern home with smart home features.', budget: { min: 350000, max: 500000 }, location: 'Austin, TX', timeline: '12-18 months', status: 'new', priority: 'high', source: 'AI Recommendation', createdAt: '2024-08-15T08:00:00Z' },
  { id: 'l-002', customerName: 'Jennifer Lee', customerEmail: 'jennifer@example.com', projectType: 'Renovation', projectDescription: 'Full home renovation of a 1960s ranch-style house.', budget: { min: 80000, max: 150000 }, location: 'Austin, TX', timeline: '4-6 months', status: 'contacted', priority: 'medium', source: 'Direct Search', createdAt: '2024-08-13T14:00:00Z' },
  { id: 'l-003', customerName: 'Thomas Wright', customerEmail: 'thomas@example.com', projectType: 'Kitchen Remodel', projectDescription: 'Modern kitchen remodel with island and high-end appliances.', budget: { min: 40000, max: 70000 }, location: 'Round Rock, TX', timeline: '2-3 months', status: 'quoted', priority: 'high', source: 'Referral', createdAt: '2024-08-10T10:00:00Z' },
];

// ============================================================
// ANALYTICS (Builder)
// ============================================================
export const mockAnalytics: AnalyticsData = {
  monthlyLeads: [
    { name: 'Jan', value: 12 }, { name: 'Feb', value: 18 }, { name: 'Mar', value: 15 },
    { name: 'Apr', value: 22 }, { name: 'May', value: 28 }, { name: 'Jun', value: 25 },
    { name: 'Jul', value: 32 }, { name: 'Aug', value: 35 },
  ],
  profileViews: [
    { name: 'Jan', value: 450 }, { name: 'Feb', value: 520 }, { name: 'Mar', value: 480 },
    { name: 'Apr', value: 620 }, { name: 'May', value: 750 }, { name: 'Jun', value: 680 },
    { name: 'Jul', value: 820 }, { name: 'Aug', value: 910 },
  ],
  quoteAcceptance: [
    { name: 'Jan', value: 65 }, { name: 'Feb', value: 72 }, { name: 'Mar', value: 68 },
    { name: 'Apr', value: 75 }, { name: 'May', value: 80 }, { name: 'Jun', value: 78 },
    { name: 'Jul', value: 82 }, { name: 'Aug', value: 85 },
  ],
  revenue: [
    { name: 'Jan', value: 45000 }, { name: 'Feb', value: 62000 }, { name: 'Mar', value: 55000 },
    { name: 'Apr', value: 78000 }, { name: 'May', value: 92000 }, { name: 'Jun', value: 85000 },
    { name: 'Jul', value: 105000 }, { name: 'Aug', value: 118000 },
  ],
  ratings: [
    { name: 'Jan', value: 4.7 }, { name: 'Feb', value: 4.8 }, { name: 'Mar', value: 4.7 },
    { name: 'Apr', value: 4.9 }, { name: 'May', value: 4.8 }, { name: 'Jun', value: 4.9 },
    { name: 'Jul', value: 4.9 }, { name: 'Aug', value: 4.9 },
  ],
  customerSatisfaction: [
    { name: 'Jan', value: 88 }, { name: 'Feb', value: 91 }, { name: 'Mar', value: 89 },
    { name: 'Apr', value: 93 }, { name: 'May', value: 95 }, { name: 'Jun', value: 94 },
    { name: 'Jul', value: 96 }, { name: 'Aug', value: 97 },
  ],
};

// ============================================================
// PUBLIC PAGE DATA
// ============================================================
export const mockTestimonials: Testimonial[] = [
  { id: 't-001', name: 'John Carter', role: 'Homeowner', avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&h=80&fit=crop&crop=face', content: 'BuildWise made finding the right builder incredibly easy. The AI recommendations were spot-on, and we saved thousands by comparing quotes.', rating: 5, location: 'Austin, TX' },
  { id: 't-002', name: 'Emma Thompson', role: 'Property Developer', avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=80&h=80&fit=crop&crop=face', content: 'As a developer, I need reliable builders fast. BuildWise\'s verification system gives me confidence in every builder I hire.', rating: 5, location: 'New York, NY' },
  { id: 't-003', name: 'Robert Kim', role: 'Business Owner', avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=80&h=80&fit=crop&crop=face', content: 'The project tracking dashboard is a game-changer. I can see real-time progress on my office renovation from my phone.', rating: 4, location: 'San Francisco, CA' },
];

export const mockStatistics: Statistic[] = [
  { label: 'Verified Builders', value: '2,500+', change: 15, changeLabel: 'vs last month' },
  { label: 'Projects Completed', value: '12,000+', change: 22, changeLabel: 'this year' },
  { label: 'Customer Satisfaction', value: '97%', change: 3, changeLabel: 'improvement' },
  { label: 'Cost Savings', value: '$4.2M', change: 18, changeLabel: 'saved this quarter' },
];

export const mockPricingPlans: PricingPlan[] = [
  {
    id: 'plan-free', name: 'Free', price: 0, period: 'forever', description: 'Perfect for homeowners starting their first project.',
    features: ['Browse verified builders', 'Up to 3 quote requests', 'Basic project tracking', 'Community support', 'AI builder matching'],
    isPopular: false, ctaText: 'Get Started Free',
  },
  {
    id: 'plan-pro', name: 'Pro', price: 29, period: 'month', description: 'For homeowners managing multiple projects with premium features.',
    features: ['Unlimited quote requests', 'Advanced AI recommendations', 'Full project dashboard', 'Priority chat support', 'Quote comparison tools', 'Document storage', 'Budget estimator'],
    isPopular: true, ctaText: 'Start Pro Trial',
  },
  {
    id: 'plan-business', name: 'Business', price: 79, period: 'month', description: 'For property developers and businesses with large-scale needs.',
    features: ['Everything in Pro', 'Multi-project management', 'Team collaboration', 'API access', 'Custom integrations', 'Dedicated account manager', 'Analytics dashboard', 'SLA guarantee'],
    isPopular: false, ctaText: 'Contact Sales',
  },
];

export const mockBlogPosts: BlogPost[] = [
  {
    id: 'blog-001', title: '10 Questions to Ask Before Hiring a Builder', excerpt: 'Make sure you\'re asking the right questions before committing to a construction project.',
    content: '', coverImage: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&h=400&fit=crop',
    author: { name: 'Sarah Mitchell', avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&h=80&fit=crop&crop=face' },
    category: 'Tips & Guides', tags: ['builders', 'hiring', 'construction'], readTime: 5, publishedAt: '2024-08-10',
  },
  {
    id: 'blog-002', title: 'The Future of Sustainable Construction in 2025', excerpt: 'How green building practices are reshaping the construction industry.',
    content: '', coverImage: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=600&h=400&fit=crop',
    author: { name: 'Lisa Nguyen', avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=80&h=80&fit=crop&crop=face' },
    category: 'Industry Trends', tags: ['sustainability', 'green building', 'trends'], readTime: 8, publishedAt: '2024-08-05',
  },
  {
    id: 'blog-003', title: 'How AI is Transforming Construction Project Management', excerpt: 'Artificial intelligence is making construction projects faster, safer, and more cost-effective.',
    content: '', coverImage: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&h=400&fit=crop',
    author: { name: 'Marcus Chen', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&crop=face' },
    category: 'Technology', tags: ['AI', 'technology', 'project management'], readTime: 6, publishedAt: '2024-07-28',
  },
];

export const mockTeamMembers: TeamMember[] = [
  { id: 'tm-001', name: 'Alex Rivera', role: 'CEO & Founder', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face', bio: 'Former construction project manager with 15 years of industry experience. Founded BuildWise to solve the trust gap in construction hiring.', socialLinks: { linkedin: '#', twitter: '#' } },
  { id: 'tm-002', name: 'Priya Sharma', role: 'CTO', avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200&h=200&fit=crop&crop=face', bio: 'AI/ML engineer from Google with a passion for applying technology to traditional industries. Leads the AI recommendation engine development.', socialLinks: { linkedin: '#' } },
  { id: 'tm-003', name: 'James Wilson', role: 'Head of Operations', avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&crop=face', bio: 'Operations specialist with expertise in marketplace platforms. Previously scaled operations at TaskRabbit and Thumbtack.', socialLinks: { linkedin: '#' } },
  { id: 'tm-004', name: 'Sarah Chen', role: 'Head of Design', avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=200&h=200&fit=crop&crop=face', bio: 'Award-winning UX designer who believes great design makes complex processes feel simple. Previously at Airbnb and Figma.', socialLinks: { linkedin: '#' } },
];

export const mockFAQs: FAQItem[] = [
  { id: 'faq-001', question: 'How does BuildWise verify builders?', answer: 'Our verification process includes license validation, insurance verification, portfolio review, reference checks, and background screening. Only builders who pass all checks receive our Verified badge.', category: 'General' },
  { id: 'faq-002', question: 'Is BuildWise free for homeowners?', answer: 'Yes! Homeowners can create an account, search for builders, and request up to 3 quotes completely free. Our Pro plan offers unlimited quotes, advanced AI recommendations, and premium features.', category: 'Pricing' },
  { id: 'faq-003', question: 'How does the AI recommendation work?', answer: 'Our AI analyzes your project requirements, budget, location, and preferences to match you with the most suitable builders. It considers builder expertise, past performance, customer ratings, and availability.', category: 'Features' },
  { id: 'faq-004', question: 'Can I compare quotes from different builders?', answer: 'Absolutely! Our quote comparison tool lets you compare prices, timelines, materials, warranties, and AI match scores side by side to make an informed decision.', category: 'Features' },
  { id: 'faq-005', question: 'How do I track my project progress?', answer: 'Once you hire a builder, you\'ll get access to a real-time project dashboard with milestones, progress updates, photo galleries, and document management — all in one place.', category: 'Features' },
  { id: 'faq-006', question: 'What if I have a dispute with a builder?', answer: 'BuildWise provides mediation support for all platform-matched projects. Contact our support team, and we\'ll work with both parties to resolve any issues fairly.', category: 'Support' },
];

// ============================================================
// ADMIN DATA
// ============================================================
export const mockAdminStats: AdminStats = {
  totalUsers: 15420,
  totalBuilders: 2534,
  pendingVerifications: 23,
  totalRevenue: 4250000,
  totalProjects: 12500,
  activeProjects: 3420,
  totalReports: 15,
  userGrowth: [
    { name: 'Jan', value: 12000 }, { name: 'Feb', value: 12800 }, { name: 'Mar', value: 13200 },
    { name: 'Apr', value: 13800 }, { name: 'May', value: 14200 }, { name: 'Jun', value: 14600 },
    { name: 'Jul', value: 15000 }, { name: 'Aug', value: 15420 },
  ],
  revenueGrowth: [
    { name: 'Jan', value: 320000 }, { name: 'Feb', value: 380000 }, { name: 'Mar', value: 420000 },
    { name: 'Apr', value: 480000 }, { name: 'May', value: 520000 }, { name: 'Jun', value: 580000 },
    { name: 'Jul', value: 620000 }, { name: 'Aug', value: 680000 },
  ],
};

export const mockVerificationRequests: VerificationRequest[] = [
  {
    id: 'vr-001', builderId: 'b-006', builderName: 'James Wilson', builderAvatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&h=80&fit=crop&crop=face',
    businessName: 'Apex Interiors', status: 'pending', submittedAt: '2024-08-12T10:00:00Z',
    documents: [
      { id: 'vd-001', name: 'Business License.pdf', type: 'license', url: '#', status: 'pending' },
      { id: 'vd-002', name: 'Insurance Certificate.pdf', type: 'insurance', url: '#', status: 'pending' },
      { id: 'vd-003', name: 'Portfolio.pdf', type: 'portfolio', url: '#', status: 'approved' },
    ],
  },
  {
    id: 'vr-002', builderId: 'b-new-001', builderName: 'Kevin Moore', builderAvatar: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=80&h=80&fit=crop&crop=face',
    businessName: 'Moore Builders', status: 'under_review', submittedAt: '2024-08-10T14:00:00Z',
    documents: [
      { id: 'vd-004', name: 'Contractor License.pdf', type: 'license', url: '#', status: 'approved' },
      { id: 'vd-005', name: 'Liability Insurance.pdf', type: 'insurance', url: '#', status: 'pending' },
    ],
  },
];
