import React from "react";

const Footer = () => {
  const links = [
    {
      id: 1,
      title: "Links",
      column: "col-lg-2 col-md-3 col-sm-6 mb-30",
      items: [
        { label: "Home", href: "/" },
        { label: "About us", href: "/about-us" },
        { label: "Careers (Coming Soon)", href: "#" },
        { label: "Features (Coming Soon)", href: "#" },
        { label: "Blog", href: "/blog" },
      ],
    },
    {
      id: 2,
      title: "Services",
      column: "col-lg-3 col-md-4 col-sm-6 mb-30",
      items: [
        { label: "Web development", href: "/service-details" },
        { label: "SEO", href: "/service-details" },
        { label: "Digital Marketing", href: "/service-details" },
        { label: "Content Writing", href: "/service-details" },
        { label: "Copywriting", href: "/service-details" },
        { label: "Other", href: "/service-details" },
      ],
    },
  ];

  const socialIcons = [
    {
      iconClass: "fab fa-facebook-f",
      link: "#",
    },
    {
      iconClass: "fab fa-twitter",
      link: "#",
    },
    {
      iconClass: "fab fa-linkedin-in",
      link: "#",
    },
  ];

  return (
    <>
      {links.map((link) => (
        <div className={link.column} key={link.id}>
          <h5 className="footer-title text-white fw-500">{link.title}</h5>
          <ul className="footer-nav-link style-none">
            {link.items.map((item, i) => (
              <li key={i}>
                <a href={item.href}>{item.label}</a>
              </li>
            ))}
          </ul>
        </div>
      ))}

      <div className="col-xl-3 col-lg-4 col-md-5 mb-30">
        <h5 className="footer-title text-white fw-500">Address</h5>
        <p className="text-white opacity-75 mb-25">
            231 Meadow Lane
            Cheyenne, <br /> WY 82001
            USA 
        </p>
        <h5 className="footer-title text-white fw-500">Phone</h5>
        <p className="text-white opacity-75 mb-5">
          +94 75 488 1852
        </p>
        <p className="text-white opacity-75 mb-35">
          +1 (845) 661 3491
        </p>
        <ul className="d-flex social-icon style-none">
          {socialIcons.map((icon, index) => (
            <li key={index}>
              <a href={icon.link} target="_blank" rel="noopener noreferrer">
                <i className={icon.iconClass} />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Footer;
