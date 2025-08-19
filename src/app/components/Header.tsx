"use client";

import Image from "next/image";
import logo from "../assets/logo/logo_3w.svg";
import styles from "./styles/navbar.module.css";
import { SiLine } from "react-icons/si";
import PhoneIconButton from "./PhoneIconButton";

export default function Header() {
  return (
    <header className="bg-header py-3 px-4">
      <div
        className={`container d-flex flex-wrap justify-content-between align-items-center ${styles.container}`}
      >
        {/* Logo */}
        <div className="d-flex align-items-center">
          <Image
            src={logo}
            alt="logo"
            className={`rounded-circle ${styles.logo}`}
            id="logo-3w"
            width={60}
            height={60}
          />
        </div>

        {/* Navbar */}
        <nav className="navbar navbar-expand-md">
          {/* Toggle button (hamburger) */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#main-navbar"
            aria-controls="main-navbar"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Collapsible menu */}
          <div className="collapse navbar-collapse" id="main-navbar">
            <ul className={`navbar-nav ms-auto gap-3 ${styles.nav}`}>
              <li className="nav-item dropdown">
                <a
                  className={`nav-link dropdown-toggle fw-semibold ${styles.navLink}`}
                  href="#"
                  data-bs-toggle="dropdown"
                >
                  PRODUCTS
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="#">
                      Starter Product
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Business Product
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      E-commerce Product
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      WordPress
                    </a>
                  </li>
                </ul>
              </li>
              <li>
                <a
                  href="#"
                  className={`nav-link fw-semibold ${styles.navLink}`}
                >
                  SERVICES
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className={`nav-link fw-semibold ${styles.navLink}`}
                >
                  FAQ
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className={`nav-link fw-semibold ${styles.navLink}`}
                >
                  CONTACT
                </a>
              </li>
            </ul>
          </div>
        </nav>

        {/* Contact icons */}
        <div
          className={`d-flex align-items-center gap-3 mt-2 mt-md-0 ${styles.iconContact}`}
        >
          <PhoneIconButton />
          <SiLine size={33} color="#00C300" style={{ cursor: "pointer" }} />
        </div>
      </div>
    </header>
  );
}
