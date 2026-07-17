import Link from "next/link";

export default function NavBar() {
  return( 
     <nav className="navbar">
        <div className="navbar-brand">
          <span className="navbar-logo">
            <a href="/">
              <img src="/assets/images/pin_orange_big.png" alt="Pinpointe Data Solutions" />
            </a>
          </span>

          <a className="navbar-caption" href="#header">
            Pinpointe Data Solutions
          </a>
        </div>

        <div className="navbar-links">
          <Link href="#about">About</Link>
          <Link href="#what-we-do">Services</Link>
          <Link href="#contact-form">Contacts</Link>
        </div>

        <div className="navbar-buttons">
          <a className="btn btn-primary" href="#form">
            Make Your Data Work
          </a>
        </div>
      </nav>
  )
}