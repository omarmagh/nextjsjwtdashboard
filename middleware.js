import { NextResponse } from 'next/server';

export function middleware(req) {
  const token = req.cookies.get('token')?.value;

  if (!token) {
    // No token found, redirect to login
    return NextResponse.redirect(new URL('/login', req.url));
  }

  // Token exists, let the request continue
  return NextResponse.next();
}

export const config = {
  matcher: ['/dashboard'],
};
