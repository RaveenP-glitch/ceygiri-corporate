import Image from "next/image";

const Feature = () => {
  const features = [
    {
      background: "#fffee7",
      title: (
        <>
          Expert Team.
        </>
      ),
      description: "100% Reliable",
      icon: "images/icon/icon_156.svg",
      width: "155",
      height: "155",
      delay: "100",
    },
    {
      background: "#FBF1FF",
      title: (
        <>
          Tailored Solutions.
        </>
      ),
      width: "155",
      height: "155",
      description: "Highly Customizable",
      icon: "images/icon/icon_157.svg",
      delay: "200",
    },
    {
      background: "#EEFBFA",
      title: (
        <>
          Customer-Centric <br />  Approach.
        </>
      ),
      width: "165",
      height: "175",
      description: "Consultation",
      icon: "images/icon/icon_159.svg",
      delay: "300",
    },
    {
      background: "#FCE6E6",
      title: (
        <>
          Innovative Technology.
        </>
      ),
      width: "160",
      height: "160",
      description: "Stay ahead",
      icon: "images/icon/icon_160.svg",
      delay: "300",
    },
  ];

  return (
    <>
      {features.map((feature, index) => (
        <div
          className="col-lg-3 col-sm-6"
          key={index}
          data-aos="fade-up"
          data-aos-delay={feature.delay}
        >
          <div
            className={`card-style-fifteen tran4s position-relative mt-35`}
            style={{ background: feature.background }}
          >
            <h4>{feature.title}</h4>
            <p>{feature.description}</p>
            <Image
              width={feature.width}
              height={feature.height}
              layout="intrinsic"
              src={feature.icon}
              alt="icon"
              className="position-absolute"
            />
          </div>{" "}
          {/* /.card-style-fifteen */}
        </div>
      ))}
    </>
  );
};

export default Feature;
