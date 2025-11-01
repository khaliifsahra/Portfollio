import "./Navbar.css";
import pp from "../../assets/Imgs/pp.png";
import { useState } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [menu, setMenu] = useState("Home");
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="navbar">
      <div className="nav-logo">
        <img className="logo" src={pp} alt="Logo" />
        <h2>Parham</h2>

        <span className="nav-toggle" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? "\u2715" : "\u2630"}
        </span>
      </div>

      <ul className={`nav-menu ${isOpen ? "show" : "hide"}`}>
        {["Home", "About", "Projects", "Contact"].map((item) => (
          <li key={item}>
            {item === "Projects" ? (
              <p
                onDoubleClick={() => navigate("/projects")}
                className={menu === item ? "active" : ""}
                style={{ cursor: "pointer" }}
              >
                {item}
              </p>
            ) : (
              <AnchorLink
                className="anchar-link"
                offset={50}
                href={`#${item.toLowerCase()}`}
              >
                <p
                  onClick={() => {
                    setMenu(item);
                    setIsOpen(false);
                  }}
                  className={menu === item ? "active" : ""}
                >
                  {item}
                </p>
              </AnchorLink>
            )}
            {menu === item && <span className="line"></span>}
          </li>
        ))}
      </ul>

      <div className="nav-connect">
        <AnchorLink className="anchar-link" offset={50} href="#contact">
          Connect with me
        </AnchorLink>
      </div>
    </div>
  );
};

export default Navbar;
