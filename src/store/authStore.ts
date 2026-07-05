import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { User, UserRole } from '@/types';

// Mock users for development
const MOCK_USERS: Record<string, User> = {
  customer: {
    id: 'cust-001',
    email: 'john@example.com',
    name: 'John Carter',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
    role: 'customer',
    phone: '+1 (555) 123-4567',
    location: 'San Francisco, CA',
    createdAt: '2024-01-15',
    isVerified: true,
  },
  builder: {
    id: 'build-001',
    email: 'sarah@premierbuilds.com',
    name: 'Sarah Mitchell',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=face',
    role: 'builder',
    phone: '+1 (555) 987-6543',
    location: 'Austin, TX',
    createdAt: '2023-08-20',
    isVerified: true,
  },
  admin: {
    id: 'admin-001',
    email: 'admin@buildwise.com',
    name: 'Alex Rivera',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
    role: 'admin',
    phone: '+1 (555) 000-0001',
    location: 'New York, NY',
    createdAt: '2023-01-01',
    isVerified: true,
  },
};

interface AuthStore {
  user: User | null;
  token: string | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  login: (email: string, password: string) => Promise<void>;
  loginAs: (role: UserRole) => void;
  signup: (data: { name: string; email: string; password: string; role: UserRole }) => Promise<void>;
  logout: () => void;
  updateProfile: (data: Partial<User>) => void;
}

export const useAuthStore = create<AuthStore>()(
  persist(
    (set) => ({
      user: null,
      token: null,
      isAuthenticated: false,
      isLoading: false,

      login: async (email: string, _password: string) => {
        set({ isLoading: true });
        // Simulate API call
        await new Promise((resolve) => setTimeout(resolve, 800));

        // Determine role from email for mock
        let role: UserRole = 'customer';
        if (email.includes('builder') || email.includes('sarah')) role = 'builder';
        if (email.includes('admin')) role = 'admin';

        const user = MOCK_USERS[role];
        set({
          user: { ...user, email },
          token: 'mock-jwt-token-' + role,
          isAuthenticated: true,
          isLoading: false,
        });
      },

      loginAs: (role: UserRole) => {
        const user = MOCK_USERS[role];
        set({
          user,
          token: 'mock-jwt-token-' + role,
          isAuthenticated: true,
          isLoading: false,
        });
      },

      signup: async (data) => {
        set({ isLoading: true });
        await new Promise((resolve) => setTimeout(resolve, 800));
        const user: User = {
          id: 'user-' + Date.now(),
          email: data.email,
          name: data.name,
          role: data.role,
          createdAt: new Date().toISOString(),
          isVerified: false,
        };
        set({
          user,
          token: 'mock-jwt-token-' + data.role,
          isAuthenticated: true,
          isLoading: false,
        });
      },

      logout: () => {
        set({
          user: null,
          token: null,
          isAuthenticated: false,
          isLoading: false,
        });
      },

      updateProfile: (data) => {
        set((state) => ({
          user: state.user ? { ...state.user, ...data } : null,
        }));
      },
    }),
    {
      name: 'buildwise-auth',
      partialize: (state) => ({
        user: state.user,
        token: state.token,
        isAuthenticated: state.isAuthenticated,
      }),
    }
  )
);
