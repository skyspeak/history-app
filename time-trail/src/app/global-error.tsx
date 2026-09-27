"use client";

import { useEffect } from "react";
import { ErrorState } from "@/components/error-state";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <html lang="en">
      <body className="min-h-screen bg-[#e8f3ef] text-[#1c2c22]">
        <ErrorState
          title="The trail got foggy"
          message="Something broke while loading Time Trail. Try again."
          onRetry={reset}
        />
      </body>
    </html>
  );
}
