import { useState } from "react";

import AboutImage from "../assets/img/img3.png";
const About = () => {
  const [aboutTitleImages] = useState([
    {
      imgAb: AboutImage,
      id: 1,
    },
    {
      heading: "Wait, What?",
      title: `Resellme allows for you to purchase domains through our
            platform without paying money upfront. All you need to
            do is have a client who will pay for the domain and you
            get to keep the profit deducted from the domain
            purchase price!`,
      title2: "Buying domains through the platforms is",
      title3: "SUPER CHEAP",
      title4: "READ MORE",
      id: 2,
    },
  ]);
  return (
    <>
      <div className="about">
       
        <div className="container-fluid outerAbout">
          <div className="row innerAbout">
          {aboutTitleImages.map((about)=>(
            <div className="col-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6 aboutItems" key={about.id}>
                <img src={about.imgAb} alt="" className="img-fluid" />
                <h2>{about.heading}</h2>
                <p>
                  {about.title}
                </p>
                <p className="pb-3 pt-2">
                  {about.title2} <span>{about.title3}</span>
                </p>
                <button className="btn" type="button">
                  {about.title4}
                </button>
            </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
