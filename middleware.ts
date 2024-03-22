import { authMiddleware } from '@clerk/nextjs'

// See https://clerk.com/docs/references/nextjs/auth-middleware
// for more information about configuring your Middleware

export default authMiddleware({
  publicRoutes: [
    '/',

    '/events/:id',
    '/api/webhooks/clerk',
    '/api/webhooks/stripe',
    '/api/uploadthing',
  ],
  ignoredRoutes: [
    '/api/webhooks/clerk',
    '/api/webhooks/stripe',
    '/api/uploadthing',
  ],
})

export const config = {
  matcher: ['/((?!.+\\.[\\w]+$|_next).*)', '/(api|trpc)(.*)'],
}
