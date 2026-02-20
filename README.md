Zenbit Frontend Test Task This is a Next.js frontend application developed for
managing deals, featuring an integrated authentication system.

🚀 Tech Stack Framework: Next.js 15 (App Router)

Language: TypeScript

State Management: Redux Toolkit

Data Fetching: TanStack Query (React Query) & Axios

Styling: CSS Modules

✨ Key Features Authentication: Registration, Login, Logout, and Session
validation.

Password Recovery: "Forgot Password" functionality and password reset via token.

Deals Management: View a list of deals and create new entries.

Hybrid Rendering: Utilizing Server Components for initial data fetching and
Client Components for interactivity.

🛠 API Architecture The project splits request logic into two parts to properly
handle cookies in Next.js:

Client API (lib/api/clientApi.ts): Used in client-side components. The browser
automatically attaches cookies to requests.

Server API (lib/api/serverApi.ts): Used in server-side components. Cookies are
manually forwarded from the request headers.

📁 Project Structure - app/ — Next.js routing, layouts, and API routes.

    - components/ — Reusable UI components (Button, Header, Loader, etc.).

l - ib/ — Redux configuration, API clients, and custom hooks.

    - public/ — Static assets (images, icons).

    - types/ — TypeScript type definitions.

🚀 Getting Started Install dependencies:

`npm install`

Configure environment variables: Create a .env file in the root directory and
add your API base URL:

`NEXT_PUBLIC_API_URL=https://your-api-url.com`

Run the development server:

`npm run dev` Production build:

Bash

````npm run build
npm start```
````
