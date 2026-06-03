import { useEffect, useState } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  useRouterState,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { Nav } from "@/components/sections/Nav";
import { EasterEggProvider } from "@/components/EasterEggProvider";
import { Intro } from "@/components/Intro";

import appCss from "../styles.css?url";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

// Replaced at build time by vite.spa.config.ts; undefined in the SSR (Cloudflare) build
declare const __SPA_MODE__: boolean | undefined;

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => {
    // Set VITE_SITE_URL in Cloudflare Pages environment variables (e.g. https://vewsstudio.com)
    const siteUrl = (import.meta.env.VITE_SITE_URL as string | undefined)?.replace(/\/$/, "") ?? "https://vewsstudio.com";
    const ogImage = `${siteUrl}/og-image.png`;
    return {
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "VEWS Studio — Visuals that stop the scroll" },
      { name: "description", content: "A creative studio for bold stories and visual chaos." },
      // Open Graph — Facebook, WhatsApp, LinkedIn, Discord
      { property: "og:type",         content: "website" },
      { property: "og:title",        content: "VEWS Studio — Creative content that gets remembered" },
      { property: "og:description",  content: "A creative studio for bold stories and visual chaos." },
      { property: "og:image",        content: ogImage },
      { property: "og:image:width",  content: "1200" },
      { property: "og:image:height", content: "630" },
      // Twitter / X
      { name: "twitter:card",        content: "summary_large_image" },
      { name: "twitter:title",       content: "VEWS Studio — Creative content that gets remembered" },
      { name: "twitter:description", content: "A creative studio for bold stories and visual chaos." },
      { name: "twitter:image",       content: ogImage },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,400;0,9..144,700;0,9..144,900;1,9..144,900&family=Inter:wght@400;500;600;700&family=Caveat:wght@400;600;700&display=swap",
      },
      {
        rel: "stylesheet",
        href: appCss,
      },
    ],
  };
  },
  shellComponent: (typeof __SPA_MODE__ !== "undefined" && __SPA_MODE__) ? undefined : RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  const [introDone, setIntroDone] = useState(false);

  useEffect(() => {
    if (sessionStorage.getItem("vews-intro-played") === "1") setIntroDone(true);
  }, []);

  const handleIntroDone = () => {
    try { sessionStorage.setItem("vews-intro-played", "1"); } catch {}
    setIntroDone(true);
  };

  return (
    <QueryClientProvider client={queryClient}>
      <EasterEggProvider>
        {/* Intro rendered here — outside the animated div so CSS transform
            on .page-enter cannot trap its position:fixed stacking context */}
        {pathname === "/" && !introDone && (
          <Intro onDone={handleIntroDone} />
        )}
        <Nav />
        <div key={pathname} className="page-enter">
          <Outlet />
        </div>
      </EasterEggProvider>
    </QueryClientProvider>
  );
}
