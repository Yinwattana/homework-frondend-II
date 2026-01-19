import { NextRequest, NextResponse } from "next/server";

export function proxy(req: NextRequest){
    console.log('-- proxy--');
    console.log('--req url', req.url)
    const isLogined = true
    if(!isLogined){
        return NextResponse.redirect(new URL("/auth/login", req.url))
    }
    return NextResponse.next()
}
export const config = {
    matcher: '/dashboard/:path*',
}