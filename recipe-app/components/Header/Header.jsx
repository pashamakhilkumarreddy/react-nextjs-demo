import { memo, useState } from "react";
import Link from "next/link";
import { HomeIcon, ReceiptTaxIcon } from "@heroicons/react/solid";

const Header = () => {
  const [display, setDisplay] = useState(false);
  return (
    <header className="header">
      <nav className="navbar" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <Link href="/">
            <a className="navbar-item icon-text">
              <span className="icon is-medium">
                <ReceiptTaxIcon />
              </span>
            </a>
          </Link>

          <span
            role="button"
            className={`navbar-burger ${display ? "is-active" : ""}`}
            aria-label="menu"
            aria-expanded="false"
            data-target="mainNavbar"
            onClick={() => setDisplay((display) => !display)}
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </span>
        </div>

        <div
          id="mainNavbar"
          className={`navbar-menu ${display ? "is-active" : ""}`}
        >
          <div className="navbar-start">
            <Link href="/">
              <a className="navbar-item icon-text">
                <span className="icon">
                  <HomeIcon />
                </span>
                <span>Home</span>
              </a>
            </Link>

            <Link href="/about">
              <a className="navbar-item">About</a>
            </Link>
          </div>

          <div className="navbar-end">
            <Link href="/contact">
              <a className="navbar-item">Contact</a>
            </Link>
          </div>
        </div>
      </nav>
      <style jsx>
        {`
          .header {
            border-bottom: 1px solid #eaeaea;
            box-shadow: 0 0 0.25rem 2px rgba(0, 0, 0, 0.1);
          }
        `}
      </style>
    </header>
  );
};

export default memo(Header);
