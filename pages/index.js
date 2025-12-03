import Header from "@/components/PortfolioMainPage/Header/PortfolioMainHeader";
import { useState, useEffect } from "react";

export default function PortfolioPage() {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    // Theme beim ersten Laden setzen
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
  };

  return (
    <>
      <Header />
      {/* Theme Toggle Button */}
      <button
        onClick={toggleTheme}
        style={{
          position: "fixed",
          top: "20px",
          right: "20px",
          padding: "10px 15px",
          backgroundColor: "var(--primary)",
          color: "var(--background)",
          border: "none",
          borderRadius: "8px",
          cursor: "pointer",
          fontSize: "14px",
          fontWeight: "bold",
          zIndex: 1000,
        }}
      >
        {theme === "light" ? "🌙 Dark" : "☀️ Light"}
      </button>
      <main>
        <article>
          <p>Describe myself</p>
          <nav>
            <button>Projects</button>
            <button>Contact</button>
          </nav>
        </article>
        <article>
          <h2>About me</h2>
          <p>Hier könnte wirklich guter Text stehen</p>
        </article>
        <section>
          <h2>tech stack</h2>
          <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
            <li>4</li>
            <li>5</li>
          </ul>
        </section>
        <section>
          <h2>Projects / Evolution</h2>
        </section>
        <article>
          <h2>Lebenslauf</h2>
        </article>
        <section>
          <h2>Contact</h2>
          <p>Wow ein wirklich guter Text</p>
          <ul>
            <li>email</li>
            <li>social 1</li>
            <li>social 2</li>
          </ul>
        </section>
      </main>
      <footer>Copyright</footer>
    </>
  );
}
