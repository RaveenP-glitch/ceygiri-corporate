const accordionItems = [
  {
    id: 1,
    icon: "/images/icon/icon_166.svg",
    title: "Competitive Price.",
    content:
      "Custom solutions at negotiable rates designed to fit your unique needs.",
  },
  {
    id: 2,
    icon: "/images/icon/icon_167.svg",
    title: "Expertise and Experience",
    content:
      "Our team consists of seasoned professionals with extensive experience in website development, SEO, content writing, and social media management. We stay updated with industry trends to ensure you receive the best strategies for your online presence.",
  },
  {
    id: 3,
    icon: "/images/icon/icon_168.svg",
    title: "Proven Results",
    content:
      "Our track record speaks for itself. We have successfully helped numerous clients enhance their online presence, increase engagement, and achieve their business goals. Your success is our ultimate goal!",
  },
  {
    id: 4,
    icon: "/images/icon/icon_169.svg",
    title: "Personal Touch",
    content:
      "We believe in building lasting relationships with our clients. Our friendly, approachable team is always available to provide support, answer questions, and make adjustments as needed, ensuring you feel valued and supported every step of the way.",
  },
];

const WhyChoose = () => {
  return (
    <div className="accordion accordion-style-five md-mb-70" id="accordionOne">
      {accordionItems.map((item) => (
        <div className="accordion-item" key={item.id}>
          <div className="accordion-header" id={`heading${item.id}`}>
            <button
              className={`accordion-button ${item.id === 2 ? "" : "collapsed"}`}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target={`#collapse${item.id}`}
              aria-expanded={item.id === 2 ? "true" : "false"}
              aria-controls={`collapse${item.id}`}
            >
              <img src={item.icon} alt="" className="me-3" /> {item.title}
            </button>
          </div>
          <div
            id={`collapse${item.id}`}
            className={`accordion-collapse collapse${
              item.id === 2 ? " show" : ""
            }`}
            aria-labelledby={`heading${item.id}`}
            data-bs-parent="#accordionOne"
          >
            <div className="accordion-body">
              <p>{item.content}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default WhyChoose;
