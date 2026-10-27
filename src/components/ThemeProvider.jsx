/** @format */

import { useCallback, useEffect, useMemo, useState } from "react";
import { ThemeContext } from "../lib/theme";

// index.html sets data-theme before first paint (dark unless the visitor
// picked light); this keeps it, the browser chrome color and storage in sync.
const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(
    () => document.documentElement.getAttribute("data-theme") || "dark"
  );

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    document
      .querySelector('meta[name="theme-color"]')
      ?.setAttribute("content", theme === "light" ? "#f8f8f6" : "#09090b");
    try {
      localStorage.setItem("theme", theme);
    } catch {
      // storage can be unavailable (private mode); the theme still applies
    }
  }, [theme]);

  const toggle = useCallback(() => setTheme((t) => (t === "light" ? "dark" : "light")), []);
  const value = useMemo(() => ({ theme, toggle }), [theme, toggle]);

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
};

export default ThemeProvider;
