import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
	const isAuth = request.cookies.get('auth')?.value

	if (!isAuth && request.nextUrl.pathname.startsWith('/')) {
		if (request.nextUrl.pathname !== '/login') {
			return NextResponse.redirect(new URL('/login', request.url))
		}
	}
}

export const config = {
	matcher: ['/((?!_next|favicon.ico).*)'],
}
