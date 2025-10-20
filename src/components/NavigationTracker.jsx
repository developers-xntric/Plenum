"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { pushPathToSession } from "@/lib/trackNavigation";

export default function NavigationTracker() {
    const pathname = usePathname();

    useEffect(() => {
        // Debug logs to help you see what's happening
        console.debug("[NavigationTracker] pathname:", pathname);
        console.debug("[NavigationTracker] pushPathToSession exists:", typeof pushPathToSession);

        if (!pathname) return;
        pushPathToSession(pathname);

        if (typeof window !== "undefined") {
            window.dataLayer = window.dataLayer || [];
            window.dataLayer.push({ event: "virtual_page_view", page_path: pathname });
            try {
                if (typeof window.gtag === "function") window.gtag("event", "page_view", { page_path: pathname });
            } catch (err) {
                /* ignore */
            }
        }
    }, [pathname]);

    return null;
}
