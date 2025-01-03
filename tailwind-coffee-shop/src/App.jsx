// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
// import "./App.css";
import Header from "./components/header";
import Main from "./components/main";
import Footer from "./components/footer";

function App() {
  return (
    <div id="root">
      <div className="content-wrapper font-Karla max-w-screen-2xl text-base mx-auto px-8 bg-slate-200">
        <Header />
        <Main />
        <Footer />
      </div>
    </div>
  );
}

export default App;
