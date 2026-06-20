"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuthStore } from "@/store/authStore";

export default function ProtectedRoute({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const user = useAuthStore((state) => state.user);
  const hasHydrated = useAuthStore.persist.hasHydrated();

  // SAFE REDIRECT: This runs AFTER the initial render is finished
  useEffect(() => {
    if (hasHydrated && !user) {
      router.push("/login");
    }
  }, [hasHydrated, user, router]);

  // 1. If storage hasn't loaded yet, show nothing
  if (!hasHydrated) {
    return (
      <div className="flex h-screen items-center justify-center bg-[#f4f1ea] text-[#004643] font-bold">
        Loading...
      </div>
    );
  }

  // 2. If storage loaded but no user, show nothing while useEffect redirects them
  if (!user) {
    return null;
  }

  // 3. If user exists, render the dashboard
  return <>{children}</>;
}