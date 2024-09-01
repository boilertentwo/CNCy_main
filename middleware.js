import { NextResponse } from 'next/server';
import { getLoggedInUser, gettingAdmin, haveUserDetails } from './lib/appwrite.config';

export async function middleware(request) {
    const url = request.nextUrl;
    let isLoggedIn = false;
    let isAdmin = false;
    let userDetails;

    try {
        isLoggedIn = await getLoggedInUser();
    } catch (error) {
        console.error("An error occurred while checking the user status:", error);
        return NextResponse.redirect(new URL('/error', url));
    }

    if (isLoggedIn) {
        try {
            isAdmin = await gettingAdmin();
        } catch (error) {
            console.error("An error occurred while checking the admin status:", error);
            return NextResponse.redirect(new URL('/error', url));
        }

        try {
            userDetails = await haveUserDetails();
        } catch (error) {
            console.error('Error reading user details:', error);
            return NextResponse.redirect(new URL('/error', url));
        }

        if (!userDetails && !url.pathname.startsWith('/register')) {
            return NextResponse.redirect(new URL('/register', url));
        }
        
    }
        // Redirect logic based on login and admin status
        if (isLoggedIn && url.pathname.startsWith('/login')) {
            return NextResponse.redirect(new URL('/', url));
        }
        if (!isLoggedIn && !url.pathname.startsWith('/login')) {
            console.log(isLoggedIn);
            return NextResponse.redirect(new URL('/login', url));
        }
        if (!isAdmin && url.pathname.startsWith('/admin')) {
            return NextResponse.redirect(new URL('/error', url));
        }
        
        return NextResponse.next();
    

    // Redirect logic based on login and admin status
    
}

export const config = {
    matcher: ['/model', '/admin', '/login', '/orders','/register', '/error'],
};
