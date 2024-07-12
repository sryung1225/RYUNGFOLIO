import { Database } from '@/types/supabase';

export type Project = Database['public']['Tables']['projects']['Row'];
