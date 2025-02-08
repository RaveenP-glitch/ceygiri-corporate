import Link from "next/link";
import {
  menuItems,
  pagesItems,
  portfolioItems,
  blogItems,
  allServices,
  pagesItems2,
} from "../../data/menu";

import { useRouter } from "next/router";

const MainMenu = () => {
  const router = useRouter();

  const isActive = (link) => {
    return router.pathname === link;
  };

  return (
    <nav className="navbar navbar-expand-lg order-lg-2">
      <button
        className="navbar-toggler d-block d-lg-none"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span />
      </button>
      {/* End mobile collapse menu */}

      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="d-block d-lg-none">
            <div className="logo">
              <Link href="/" className="d-block">
                <img src="/images/logo/logo_01.png" alt="" width={115} />
              </Link>
            </div>
          </li>
          {/* End li */}

          <li
            className={
              router.pathname === "/" ? "active nav-item" : "nav-item"
            }
          >
            <Link href="/" role="button" className="nav-link">
              Home
            </Link>
          </li>

          <li
            className={
              router.pathname === "/about-us" ? "active nav-item" : "nav-item"
            }
          >
            <Link href="/about-us" role="button" className="nav-link">
              About Us
            </Link>
          </li>

          {/* <li className="nav-item dropdown mega-dropdown-md">
            <a
              className="nav-link dropdown-toggle"
              href="#"
              role="button"
              data-bs-auto-close="outside"
              aria-expanded="false"
            >
              Home
            </a>
            <ul className="dropdown-menu">
              <li>
                <div className="row">
                  {menuItems.map((menu, index) => (
                    <div className="col-lg-4" key={index}>
                      <div className="menu-column">
                        <h6 className="mega-menu-title">{menu.title}</h6>
                        <ul className="style-none mega-dropdown-list">
                          {menu.items.map((item, index) => (
                            <li key={index}>
                              <Link
                                href={item.link}
                                className={`dropdown-item ${
                                  isActive(item.link) ? "active" : ""
                                }`}
                              >
                                <span>{item.title}</span>
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  ))}
                </div>
              </li>
            </ul>
          </li> */}
          {/* End li (home mega menu) */}

          {/* Services Section */}
          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle"
              href="#"
              role="button"
              data-bs-toggle="dropdown"
              data-bs-auto-close="outside"
              aria-expanded="false"
            >
              Services
            </a>
            <ul className="dropdown-menu">
              {allServices.map((item, index) => (
                <li key={index}>
                  <Link
                    href={item.link}
                    className={`dropdown-item ${isActive(item.link) ? "active" : ""
                      }`}
                  >
                    <span>{item.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </li>

          {/* Services Section */}
          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle"
              href="#"
              role="button"
              data-bs-toggle="dropdown"
              data-bs-auto-close="outside"
              aria-expanded="false"
            >
              Pages
            </a>
            <ul className="dropdown-menu">
              {pagesItems2.map((item, index) => (
                <li key={index}>
                  <Link
                    href={item.link}
                    className={`dropdown-item ${isActive(item.link) ? "active" : ""
                      }`}
                  >
                    <span>{item.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </li>

          {/* <li className="nav-item  dropdown">
            <a
              className="nav-link dropdown-toggle"
              href="#"
              role="button"
              data-bs-toggle="dropdown"
              data-bs-auto-close="outside"
              aria-expanded="false"
            >
              Pages
            </a>
            <ul className="dropdown-menu">
              {pagesItems.map((item, index) => (
                <li className="dropdown-submenu dropdown" key={index}>
                  <a
                    className="dropdown-item dropdown-toggle"
                    data-bs-toggle="dropdown"
                    data-bs-auto-close="outside"
                    aria-expanded="false"
                    href="#"
                  >
                    <span>{item.title}</span>
                  </a>
                  <ul className="dropdown-menu">
                    {item.subItems.map((subMenu, i) => (
                      <li key={i}>
                        <Link
                          href={subMenu.link}
                          className={`dropdown-item ${isActive(subMenu.link) ? "active" : ""
                            }`}
                        >
                          <span>{subMenu.title}</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </li>
              ))}            
            </ul>
          </li> */}
          {/* End li (pages) */}


          {/* <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle"
              href="#"
              role="button"
              data-bs-toggle="dropdown"
              data-bs-auto-close="outside"
              aria-expanded="false"
            >
              Portfolio
            </a>
            <ul className="dropdown-menu">
              {portfolioItems.map((item, index) => (
                <li key={index}>
                  <Link
                    href={item.link}
                    className={`dropdown-item ${
                      isActive(item.link) ? "active" : ""
                    }`}
                  >
                    <span>{item.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </li> */}
          {/* End li (portfolio) */}

          {/* <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle"
              href="#"
              role="button"
              data-bs-toggle="dropdown"
              data-bs-auto-close="outside"
              aria-expanded="false"
            >
              Blog
            </a>
            <ul className="dropdown-menu">
              {blogItems.map((blog, index) => (
                <li key={index}>
                  <Link
                    href={blog.link}
                    className={`dropdown-item ${
                      isActive(blog.link) ? "active" : ""
                    }`}
                  >
                    <span>{blog.text}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </li> */}
          {/* End li (blog) */}

          <li
            className={
              router.pathname === "/portfolio" ? "active nav-item" : "nav-item"
            }
          >
            <Link href="/portfolio" role="button" className="nav-link">
              Portfolio
            </Link>
          </li>

          <li
            className={
              router.pathname === "/blog" ? "active nav-item" : "nav-item"
            }
          >
            <Link href="/blog" role="button" className="nav-link">
              Blog
            </Link>
          </li>

          {/* End li (contact) */}
        </ul>
        {/* End ul */}

        {/* Mobile Content */}
        <div className="mobile-content d-block d-lg-none">
          <div className="d-flex flex-column align-items-center justify-content-center mt-70">
            <Link href="/contact" className="btn-twentyOne fw-500 tran3s">
              Contact us
            </Link>
          </div>
        </div>
        {/* /.mobile-content */}
      </div>
    </nav>
  );
};

export default MainMenu;
