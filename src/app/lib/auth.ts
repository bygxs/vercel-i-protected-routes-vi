// lib/auth.ts
import { cookies } from 'next/headers'; // Server-only

export const logout = async () => {
  const res = await fetch('/api/auth/logout', { method: 'POST' });
  if (!res.ok) throw new Error('Logout failed');
};

export const verifyAuth = async () => {
  const cookieStore = cookies();
  const token = cookieStore.get('token')?.value; // JWT from cookie
  if (!token) return false;
  const res = await fetch('/api/auth/verify', {
    method: 'POST',
    headers: { 'Authorization': `Bearer ${token}` },
  });
  return res.ok;
};