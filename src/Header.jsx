import { useState, useEffect } from "react";

export default function Header() {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    document.body.classList.add("dark-mode");
  }, []);

  const toggleDarkMode = () => {
    setDarkMode((prevMode) => {
      const newMode = !prevMode;
      document.body.classList.toggle("dark-mode", newMode);
      return newMode;
    });
  };

  return (
    <header>
      <div className="header-content">
        <h1>Chef AI</h1>
        <p>Your AI-powered cooking assistant</p>
      </div>
      <button className="dark-mode-toggle" onClick={toggleDarkMode}>
        {darkMode ? "🌞" : "🌙"}
      </button>
    </header>
  );
}
