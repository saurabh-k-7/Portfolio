import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import Navbar from "./components/Navbar";
import Background from "./components/Background";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";

interface CircleElement extends HTMLElement {
  x: number;
  y: number;
}

function App() {
  return (
    <Router>
      <MainContent />
    </Router>
  );
}

function MainContent() {
  const location = useLocation();
  const isAnimationPage = ["/projects", "/contact", "/mobilehome"].includes(
    location.pathname
  );

  useEffect(() => {
    if (isAnimationPage) {
      const coords = { x: 0, y: 0 };
      const circles = document.querySelectorAll<CircleElement>(".circle");
      const colors = [
        "#e5ccff",
        "#d8b3ff",
        "#cc99ff",
        "#bf80ff",
        "#b366ff",
        "#a64dff",
        "#9933ff",
        "#8c1aff",
        "#8000ff",
        "#7300e6",
        "#6600cc",
        "#5900b3",
        "#4d0099",
        "#400080",
        "#330066",
        "#26004d",
        "#1a0033",
        "#0d001a",
        "#07000f",
        "#030005",
      ];

      circles.forEach((circle, index) => {
        circle.x = 0;
        circle.y = 0;
        circle.style.backgroundColor = colors[index % colors.length];
      });

      const handleMouseMove = (e: MouseEvent) => {
        coords.x = e.clientX;
        coords.y = e.clientY;
      };

      window.addEventListener("mousemove", handleMouseMove);

      function animateCircles() {
        let x = coords.x;
        let y = coords.y;

        circles.forEach((circle, index) => {
          circle.style.left = x - 12 + "px";
          circle.style.top = y - 12 + "px";
          circle.style.transform = `scale(${
            (circles.length - index) / circles.length
          })`;

          circle.x = x;
          circle.y = y;
          const nextCircle = circles[index + 1] || circles[0];
          x += (nextCircle.x - x) * 0.4;
          y += (nextCircle.y - y) * 0.4;
        });

        requestAnimationFrame(animateCircles);
      }

      animateCircles();

      return () => {
        window.removeEventListener("mousemove", handleMouseMove);
      };
    }
  }, [isAnimationPage]);

  return (
    <div className={`min-h-screen bg-gray-900 text-white`}>
      <Background />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Navbar />

      {/* Conditionally render circle elements */}
      {isAnimationPage && (
        <div id="circle-container">
          <div className="circle"></div>
          <div className="circle"></div>
          <div className="circle"></div>
          <div className="circle"></div>
          <div className="circle"></div>
          <div className="circle"></div>
          <div className="circle"></div>
          <div className="circle"></div>
          <div className="circle"></div>
          <div className="circle"></div>
          <div className="circle"></div>
          <div className="circle"></div>
          <div className="circle"></div>
          <div className="circle"></div>
          <div className="circle"></div>
          <div className="circle"></div>
          <div className="circle"></div>
          <div className="circle"></div>
          <div className="circle"></div>
          <div className="circle"></div>
        </div>
      )}
    </div>
  );
}

export default App;
