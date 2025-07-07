import {
    NextResponse
} from 'next/server'

export function middleware() {    
    // This middleware runs on every request
    return NextResponse.next();
}