export function updateTheme() {
  // On page load or when changing themes, best to add inline in \`head\` to avoid FOUC
  if (
    localStorage.getItem("theme") === "dark" ||
    (!("theme" in localStorage) &&
      window.matchMedia("(prefers-color-scheme: dark)").matches)
  ) {
    document.documentElement.classList.add("dark");
  } else {
    document.documentElement.classList.remove("dark");
  }
}

// only set "light" or "derk"
export function setTheme(theme = null) {
  // use setTheme() to clear
  if (!theme || theme === "auto") localStorage.removeItem("theme");
  // Whenever the user explicitly chooses mode
  else localStorage.setItem("theme", theme);
}
export function getTheme() {
  const value = localStorage.getItem("theme");
  if (value) return value;

  return "auto";
}
