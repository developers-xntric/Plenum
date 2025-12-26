"use client";

export default function GlobalError({ error, reset }) {
  return (
    <html lang="en">
      <body
        style={{
          margin: 0,
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#0f172a",
          color: "#e5e7eb",
          fontFamily: "system-ui, -apple-system, BlinkMacSystemFont, sans-serif",
        }}
      >
        <div
          style={{
            textAlign: "center",
            maxWidth: "480px",
            padding: "0 16px",
          }}
        >
          <h1
            style={{
              fontSize: "36px",
              marginBottom: "16px",
              fontWeight: 600,
            }}
          >
            🚧 We’ll Be Back Soon
          </h1>

          <p
            style={{
              fontSize: "16px",
              opacity: 0.85,
              lineHeight: 1.6,
            }}
          >
            Our website is temporarily unavailable due to maintenance or an
            unexpected issue.
          </p>

          <p
            style={{
              fontSize: "14px",
              marginTop: "24px",
              opacity: 0.6,
            }}
          >
            Please try again in a few minutes.
          </p>

          <button
            onClick={reset}
            style={{
              marginTop: "32px",
              padding: "12px 20px",
              borderRadius: "8px",
              border: "none",
              cursor: "pointer",
              backgroundColor: "#2563eb",
              color: "#ffffff",
              fontSize: "14px",
              fontWeight: 500,
            }}
          >
            Retry
          </button>
        </div>
      </body>
    </html>
  );
}
