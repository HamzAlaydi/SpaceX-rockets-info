import React from "react";
import { useTranslation } from "react-i18next";
import "./App.css";

function App() {
  const [t, i18n] = useTranslation();
  return (
    <div className="App">
      {t("title")}
      <button
        onClick={(_) => {
          i18n.changeLanguage("ar");
        }}
      >
        change
      </button>
    </div>
  );
}

export default App;
