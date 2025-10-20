"use client";
import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { pushPathToSession } from "../../lib/trackNavigation";

/**
 * We can Mount this once (e.g., in app/layout.js). It stores every pathname change in sessionStorage.
 * It also optionally pushes a page_view to dataLayer (GTM) so GA4 gets SPA page views.
 */
export default function NavigationTracker() {
    const pathname = usePathname();

    useEffect(() => {
        if (!pathname) return;
        // store navigation path
        pushPathToSession(pathname);

        // Optional: notify GTM/gtag about SPA page_view
        if (typeof window !== "undefined") {
            window.dataLayer = window.dataLayer || [];
            window.dataLayer.push({
                event: "virtual_page_view",
                page_path: pathname,
            });

            // Also try gtag if available (won't throw if undefined)
            try {
                if (typeof window.gtag === "function") {
                    window.gtag("event", "page_view", { page_path: pathname });
                }
            } catch (err) {
            }
        }
    }, [pathname]);

    return null; 
}
