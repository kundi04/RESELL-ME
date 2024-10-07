import { useState } from "react";
import image from "../assets/img/img11.png";
import image2 from "../assets/img/img12.png";
import image3 from "../assets/img/img13.png";
import image4 from "../assets/img/img14.png";
import image5 from "../assets/img/img15.png";
import arrow from "../assets/img/Group 74.svg";
import arrow1 from "../assets/img/Group 75.png";

const ReSellCases = () => {
  const reTitle = {
    header: `Resellme’s Use Cases`,
  };

  // State to track carousel scroll and the visibility of the fifth card
  const [showFifthCard, setShowFifthCard] = useState(false);

  const [resellCards] = useState([
    {
      img: image,
      title: " Web Development Freelancers",
      title2: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
      title3: "READ MORE",
      id: 1,
    },
    {
      img: image2,
      title: " Small Housing & Domain Registration Companies",
      title2: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
      title3: "READ MORE",
      id: 2,
    },
    {
      img: image3,
      title: " Company Registries",
      title2: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
      title3: "READ MORE",
      id: 3,
    },
    {
      img: image4,
      title: " Small Digital Agencies",
      title2: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
      title3: "READ MORE",
      id: 4,
    },
    {
      img: image5,
      title: " Other",
      title2: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
      title3: "READ MORE",
      id: 5,
    },
  ]);


  const slideLeft = () => {
    const slider = document.getElementById("slider");
    slider.scrollLeft -= 350;
    setShowFifthCard(true); 
  };


  const slideRight = () => {
    const slider = document.getElementById("slider");
    slider.scrollLeft += 350;
    setShowFifthCard(true); 
  };

  return (
    <div className="reCases">
      <div className="container-fluid outerReCases">
        <h2 className="pb-3 pt-5">{reTitle.header}</h2>
        <div className="d-flex innerReCases" id="slider">
          {resellCards.slice(0, 4).map((sellCard) => (
            <div
              className="col-12 col-md-6 col-lg-4 col-xl-3 col-xxl-3 reCasesItems"
              key={sellCard.id}>
              <div className="card">
                <div className="card-body">
                  <div className="pb-3">
                    <img src={sellCard.img} alt="" className="img-fluid devimg" />
                  </div>
                  <h5 className="card-title">{sellCard.title}</h5>
                  <p className="card-text">{sellCard.title2}</p>
                </div>
              </div>
              <div className="btn">{sellCard.title3}</div>
            </div>
          ))}
          {/* Conditionally render the fifth card based on carousel movement */}
          {showFifthCard && (
            <div
              className="col-12 col-md-6 col-lg-4 col-xl-3 col-xxl-3 reCasesItems"
              key={resellCards[4].id}>
              <div className="card">
                <div className="card-body">
                  <div className="pb-3">
                    <img src={resellCards[4].img} alt="" className="img-fluid" />
                  </div>
                  <h5 className="card-title">{resellCards[4].title}</h5>
                  <p className="card-text">{resellCards[4].title2}</p>
                </div>
              </div>
              <button className="btn ">{resellCards[4].title3}</button>
            </div>
          )}
        </div>
      </div>

      {/* Carousel navigation buttons */}
      <div className="buttons text-end p-5 pt-1">
        <button className="btn rounded-circle" onClick={slideLeft}>
          <img src={arrow1} alt="" className="img-fluid" />
        </button>
        <button className="btn rounded-circle" onClick={slideRight}>
          <img src={arrow} alt="" className="img-fluid" />
        </button>
      </div>
    </div>
  );
};

export default ReSellCases;
