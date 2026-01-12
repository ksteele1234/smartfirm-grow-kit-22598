import { useState, useEffect } from 'react';
import { User, Session } from '@supabase/supabase-js';
import { supabase } from '@/integrations/supabase/client';

export type AppRole = 'admin' | 'editor' | 'user';

interface AuthState {
  user: User | null;
  session: Session | null;
  isLoading: boolean;
  isAdmin: boolean;
  isEditor: boolean;
  roles: AppRole[];
}

export function useAuth() {
  const [authState, setAuthState] = useState<AuthState>({
    user: null,
    session: null,
    isLoading: true,
    isAdmin: false,
    isEditor: false,
    roles: [],
  });

  useEffect(() => {
    let isMounted = true;
    
    // Safety timeout to prevent infinite loading
    const loadingTimeout = setTimeout(() => {
      if (isMounted) {
        setAuthState(prev => {
          if (prev.isLoading) {
            console.warn('Auth loading timeout - forcing completion');
            return { ...prev, isLoading: false };
          }
          return prev;
        });
      }
    }, 5000);

    // Set up auth state listener FIRST
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      (event, session) => {
        if (!isMounted) return;
        
        setAuthState(prev => ({
          ...prev,
          session,
          user: session?.user ?? null,
        }));

        // Defer role fetching to avoid deadlock
        if (session?.user) {
          setTimeout(() => {
            if (isMounted) fetchUserRoles(session.user.id);
          }, 0);
        } else {
          setAuthState(prev => ({
            ...prev,
            isLoading: false,
            isAdmin: false,
            isEditor: false,
            roles: [],
          }));
        }
      }
    );

    // THEN check for existing session
    supabase.auth.getSession().then(({ data: { session } }) => {
      if (!isMounted) return;
      
      setAuthState(prev => ({
        ...prev,
        session,
        user: session?.user ?? null,
      }));

      if (session?.user) {
        fetchUserRoles(session.user.id);
      } else {
        setAuthState(prev => ({ ...prev, isLoading: false }));
      }
    }).catch((error) => {
      console.error('Error getting session:', error);
      if (isMounted) {
        setAuthState(prev => ({ ...prev, isLoading: false }));
      }
    });

    return () => {
      isMounted = false;
      clearTimeout(loadingTimeout);
      subscription.unsubscribe();
    };
  }, []);

  const fetchUserRoles = async (userId: string) => {
    try {
      const { data, error } = await supabase
        .from('user_roles')
        .select('role')
        .eq('user_id', userId);

      if (error) {
        console.error('Error fetching user roles:', error);
        setAuthState(prev => ({ ...prev, isLoading: false }));
        return;
      }

      const roles = (data || []).map(r => r.role as AppRole);
      setAuthState(prev => ({
        ...prev,
        isLoading: false,
        roles,
        isAdmin: roles.includes('admin'),
        isEditor: roles.includes('editor'),
      }));
    } catch (err) {
      console.error('Error fetching roles:', err);
      setAuthState(prev => ({ ...prev, isLoading: false }));
    }
  };

  const signIn = async (email: string, password: string) => {
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    return { error };
  };

  const signUp = async (email: string, password: string) => {
    const redirectUrl = `${window.location.origin}/`;
    const { error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        emailRedirectTo: redirectUrl,
      },
    });
    return { error };
  };

  const signOut = async () => {
    const { error } = await supabase.auth.signOut();
    return { error };
  };

  return {
    ...authState,
    signIn,
    signUp,
    signOut,
  };
}
