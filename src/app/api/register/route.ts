//src/app/api/auth/register/route.ts

import { NextResponse } from 'next/server';  
import { supabase } from '../../lib/supabase';  
import bcrypt from 'bcryptjs';  

export async function POST(request: Request) {  
  try {  
    const { email, password } = await request.json();  

    // Validate input  
    if (!email || !password) {  
      return NextResponse.json(  
        { error: 'Email and password are required' },  
        { status: 400 }  
      );  
    }  

    // Hash password  
    const saltRounds = 10;  
    const passwordHash = await bcrypt.hash(password, saltRounds);  
    console.log('Password hashed:', passwordHash);  

    // Insert user into Supabase  
    const { data, error } = await supabase  
      .from('users')  
      .insert([{ email, password_hash: passwordHash }])  
      .select();  

    if (error) {  
      console.error('Supabase error:', error);  
      return NextResponse.json(  
        { error: error.message },  
        { status: 400 }  
      );  
    }  

    console.log('User inserted:', data);  
    return NextResponse.json({ user: data[0] });  
  } catch (error) {  
    console.error('Registration error:', error);  
    return NextResponse.json(  
      { error: 'Internal server error' },  
      { status: 500 }  
    );  
  }  
}  