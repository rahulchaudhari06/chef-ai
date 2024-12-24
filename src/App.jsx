import React from "react";
import IngredientsList from "./components/IngredientsList";
import Header from "./Header";
import { FaGithub } from "react-icons/fa";
import { VscRepo } from "react-icons/vsc";
export default function App() {
  return (
    <div className="app-container">
      <Header />
      <main>
        <IngredientsList />
      </main>
      <footer>
        <div className="footer-content">
          <p>
            Powered by AI using{" "}
            <a
              href="https://huggingface.co/docs/api-inference/index"
              target="_blank"
              rel="noopener noreferrer"
            >
              Hugging Face 🤗
            </a>
          </p>
          <div className="social-links">
            <a
              href="https://github.com/rahulchaudhari06"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
            >
              <FaGithub size={20} />
            </a>
            <a
              href="https://github.com/rahulchaudhari06/chef-ai"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Project Repository"
            >
              <VscRepo size={20} />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
