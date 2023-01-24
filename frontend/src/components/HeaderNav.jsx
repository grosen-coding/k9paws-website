import { FaSignOutAlt, FaUser } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout, reset } from "../features/auth/authSlice";
import SideNavbar from "./SideNavbar";
import Logo from "./Logo";

function Header() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { client } = useSelector((state) => state.auth);

  const onLogout = () => {
    dispatch(logout());
    dispatch(reset());
    navigate("/");
  };

  window.addEventListener("scroll", function (e) {
    let header = document.querySelector(".header");
    if (
      document.documentElement.scrollTop ||
      document.body.scrollTop > window.innerHeight
    ) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  });
  return (
    <header className="header" id="header">
      {/* Hamburger Menu */}
      <SideNavbar />

      <div className="wrapper">
        <nav className="header-nav">
          <div className="header-nav__left">
            <Link to="/">
              <Logo className="header-logo" />
            </Link>
            <ul>
              <li className="nav-link">
                <Link to="/about">About</Link>
              </li>
              <li className="nav-link">
                <Link to="/training">Training</Link>
              </li>
              <li className="nav-link">
                <Link to="/behaviour">Behaviour</Link>
              </li>
              <li className="nav-link">
                <Link to="/pricing">Pricing</Link>
              </li>

              <li className="nav-link">
                <Link to="/blog">Blog</Link>
              </li>
              <li className="nav-link">
                <Link to="/breed">Breed Info</Link>
              </li>

              {/* <li className="nav-link">
                <Link to="/contact">Contact</Link>
              </li> */}
            </ul>
          </div>

          <div className="header-nav__right">
            <ul>
              {client ? (
                <>
                  <li>
                    <Link to="/reports">
                      <button className="btn btn-client-portal">
                        Client Portal
                      </button>
                    </Link>
                  </li>
                  <li>
                    <button className="btn" onClick={onLogout}>
                      <FaSignOutAlt /> Logout
                    </button>
                  </li>
                </>
              ) : (
                <>
                  <li>
                    <Link to="/login">
                      <button className="btn btn-client-portal">
                        <FaUser /> Client Portal
                      </button>
                    </Link>
                  </li>
                </>
              )}
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Header;
