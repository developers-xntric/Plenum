"use client";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html>
      <body
        style={{
          margin: 0,
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#0f172a",
          color: "#e5e7eb",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        <div style={{ textAlign: "center", maxWidth: 480 }}>
          <h1 style={{ fontSize: 36, marginBottom: 16 }}>
            🚧 We’ll Be Back Soon
          </h1>
          <p style={{ fontSize: 16, opacity: 0.85 }}>
            Our website is temporarily unavailable due to maintenance or an
            unexpected issue.
          </p>
          <p style={{ fontSize: 14, marginTop: 24, opacity: 0.6 }}>
            Please try again in a few minutes.
          </p>

          <button
            onClick={() => reset()}
            style={{
              marginTop: 32,
              padding: "12px 20px",
              borderRadius: 8,
              border: "none",
              cursor: "pointer",
              background: "#2563eb",
              color: "#fff",
              fontSize: 14,
            }}
          >
            Retry
          </button>
        </div>
      </body>
    </html>
  );
}
