"use client";

import { useEffect } from "react";
import { ErrorState } from "@/components/error-state";

export default function Error({
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
    <ErrorState
      title="This stop is closed"
      message="We hit a snag on this page. You can try again or head home."
      onRetry={reset}
    />
  );
}
