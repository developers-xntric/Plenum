export function pushPathToSession(path) {
  if (typeof window === "undefined") return;
  try {
    const raw = sessionStorage.getItem("navigationPath");
    const nav = raw ? JSON.parse(raw) : [];
    nav.push(path);
    const trimmed = nav.slice(-50);
    sessionStorage.setItem("navigationPath", JSON.stringify(trimmed));
    return trimmed;
  } catch (err) {
    console.warn("pushPathToSession error", err);
    try {
      sessionStorage.setItem("navigationPath", JSON.stringify([path]));
      return [path];
    } catch {}
  }
}

export function getNavPathString() {
  if (typeof window === "undefined") return "";
  try {
    const raw = sessionStorage.getItem("navigationPath");
    const nav = raw ? JSON.parse(raw) : [];
    return nav.join(" > ");
  } catch (err) {
    console.warn("getNavPathString error", err);
    return "";
  }
}

export function getFirstInteraction() {
  if (typeof window === "undefined") return "unknown";
  try {
    const raw = sessionStorage.getItem("navigationPath");
    const nav = raw ? JSON.parse(raw) : [];
    return nav.length ? nav[0] : (window.location.pathname || "unknown");
  } catch (err) {
    return window.location.pathname || "unknown";
  }
}
