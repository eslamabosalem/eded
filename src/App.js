import React, { useEffect, useState } from 'react';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Free from './components/Free/Free';
import Client from './components/Client/Client';
import Like from './components/Like/Like'
import Signup from './components/Signup/Signup'
import Realeace from './components/Realeace/Realeace'
import Footer from './components/Footer/Footer'
import "./scss/index.scss"
import SuperRare from './components/SuperRare/SuperRare'
import scrollreveal from "scrollreveal"; 
function App() {
  const [theme, setTheme] = useState("dark");
  const changeTheme = () => {
    theme === "dark" ? setTheme("light") : setTheme("dark");
  };
  useEffect(() => {
    const registerAnimations = () => {
      const sr = scrollreveal({
        origin: "bottom",
        distance: "80px",
        duration: 2000,
        reset: false,
      });
      sr.reveal(
        `
        nav,
        .home,
        .free,
        .Client,
        .super-rare,
        .Realeace,
        .like,
        .signup,
        footer
    `,
        {
          interval: 500,
        }
      );
    };
    registerAnimations();
  }, []);
  window.setTimeout(() => {
    const home = document.getElementsByClassName("home");
    home[0].style.transform = "none";
    const nav = document.getElementsByTagName("nav");
    nav[0].style.transform = "none";
  }, 1500);
  return (
    <div data-theme={theme} className="container">
      <ScrollToTop />
      <Navbar changeTheme={changeTheme} currentTheme={theme} />
      <Home />
      <Free />
      <Client />
      <SuperRare />
      <Realeace />
      <Like />
      <Signup />
      <Footer />
    </div>
  );
}

export default App;
