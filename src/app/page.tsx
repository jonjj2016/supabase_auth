'use client';

import Landing from './components/Landing';
import { supabase } from '../../supabase/supabase';
export default function Home() {
  const signup = async () => {
    const {
      data: { session },
    } = await supabase.auth.getSession();
  };
  return (
    <div>
      <Landing />
    </div>
  );
}
