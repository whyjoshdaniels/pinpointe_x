
export default function NavBar() {
  return( 
     <nav className="navbar">
        <div className="navbar-brand">
          <span className="navbar-logo">
            <a href="/">
              <img src="/assets/images/pin512.png" alt="Pinpointe Data Solutions" />
            </a>
          </span>

          <a className="navbar-caption" href="#header">
            Pinpointe Data Solutions
          </a>
        </div>

        <div className="navbar-links">
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#contact">Contacts</a>
        </div>

        <div className="navbar-buttons">
          <a className="btn btn-primary" href="#form">
            Make Your Data Work
          </a>
        </div>
      </nav>
  )
}