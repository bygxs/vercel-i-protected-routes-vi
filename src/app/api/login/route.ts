// src/app/auth/login/route.ts
import { NextResponse } from 'next/server';
import { supabase } from '../../lib/supabase';

export async function POST(request: Request) {
  try {
    const { email, password } = await request.json();

    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 401 });
    }

    if (data.session) {
      return NextResponse.json({ token: data.session.access_token }, { status: 200 });
    } else {
        return NextResponse.json({error: "could not create a session"}, {status: 500});
    }

  } catch (err) {
    console.error('Login error:', err);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}