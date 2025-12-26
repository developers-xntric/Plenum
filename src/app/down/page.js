export const dynamic = "force-static";

export default function DownPage() {
  return (
    <main
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "#020617",
        color: "#e5e7eb",
        fontFamily: "system-ui",
      }}
    >
      <div style={{ textAlign: "center" }}>
        <h1 style={{ fontSize: 40 }}>⚠️ Temporarily Down</h1>
        <p style={{ marginTop: 12 }}>
          We are performing maintenance. Please check back shortly.
        </p>
      </div>
    </main>
  );
}
