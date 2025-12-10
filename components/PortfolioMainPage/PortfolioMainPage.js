import MainAboutMeArticle from "./AboutMe/MainAboutMeArticle"
import PortfolioMainHeader from "./Header/PortfolioMainHeader"
import { useState, useEffect } from "react";




export default function PortfolioMainPage(){
   
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

    return(
        <>
        <PortfolioMainHeader/>
        <MainAboutMeArticle/>
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
        <section>
          <h2>tech stack</h2>
          <ul>
            <li>Javascript</li>
            <li>HTML</li>
            <li>CSS</li>
            <li>React</li>
            <li>Next</li>

          </ul>
        </section>
        <section>
          <h2>Projects / Evolution</h2>
          <p>Ich krieg hier schon meine Projekte rein</p>
        </section>
        <article>
          <h2>Lebenslauf Hier download für Lebenslauf einfügen</h2>
        </article>
        <section>
          <h2>Contact</h2>
          <p>Wenn Sie interesse haben melden Sie sich gerne!</p>
          <ul>
            <li>elisalin2001@gmail.com</li>
            <li>Link zu Github</li>
            <li>Link zu Linkdin</li>
          </ul>
        </section>
      </main>
      <footer>
        <p>Copyright</p>
        <p>Stand von 12/2025</p>
        </footer>
        </>
    )
}
