import "./Navbar.css";

export default function Navbar({ navigate }) {
  return (
    <nav className="nav">
      <div className="nav-box">
        <h2 className="nav-title">ArcaNotes</h2>

        <div className="nav-links">
          <button className="nav-btn" onClick={() => navigate("home")}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path d="M3 9.5L12 3L21 9.5V21H14V14H10V21H3V9.5Z" stroke="currentColor" strokeWidth="2"/>
            </svg>
            <span>Home</span>
          </button>

          <button className="nav-btn" onClick={() => navigate("catalog")}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path d="M4 6H20M4 12H20M4 18H20" stroke="currentColor" strokeWidth="2"/>
            </svg>
            <span>Katalog</span>
          </button>

          <button className="nav-btn" onClick={() => navigate("addcard")}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path d="M12 5V19M5 12H19" stroke="currentColor" strokeWidth="2"/>
            </svg>
            <span>Tambah</span>
          </button>

          <button className="nav-btn" onClick={() => navigate("reading")}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path d="M8 8H16M8 12H14" stroke="currentColor" strokeWidth="2"/>
            </svg>
            <span>Reading</span>
          </button>

          <button className="nav-btn" onClick={() => navigate("about")}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2"/>
              <path d="M12 8V12" stroke="currentColor" strokeWidth="2"/>
              <circle cx="12" cy="16" r="1" fill="currentColor"/>
            </svg>
            <span>About</span>
          </button>

        </div>
      </div>
    </nav>
  );
}
