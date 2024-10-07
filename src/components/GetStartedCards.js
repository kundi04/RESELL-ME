import * as React from "react";
import img from "../assets/img/img4.png";
import img2 from "../assets/img/img5.png";
import img3 from "../assets/img/img6.png";
import one from "../assets/img/one.png"
import two from "../assets/img/two.png"
import three from "../assets/img/three.png"
const GetStartedCards = () => {
  const [getStarted] = React.useState([
    {
      getStartImg1: one,
      getStartImg: img,
      title: "Register",
      title2: `To get started with buying domains for clients, all you need to do is create an account on our 
            platform using your email, phone number & preferred payment method.`,
      id: 1,
    },
    {
      getStartImg1: two,
      getStartImg: img2,
      title: "Find Client",
      title2: `Find a client who can be a business owner or a freelancer who wants a website but does not have a domain.`,
      title3: `You take lead to buy the desired domain via ReSellMe for the client upfront.`,
      id: 2,
    },
    {
      getStartImg1: three,
      getStartImg: img3,
      title: "Get Money!",
      title2: `You only pay when you get a client to sell the service to. Your client pays for the service and you keep the profit.`,
      title3: `Our payment methods include Paypal, Visa, MasterCard, Bitcoin & Mukuru`,
      id: 3,
    },
  ]);

  return (
    <div className="getStarted">
       <h2>How To Get Started</h2>
      <div className="container-fluid outerGetStart text-center">
        <div className="row g-5 innerGetStart">
   
        {getStarted.map((cards, index) => (
  <div
    className="col-12 col-md-12 col-lg-4 col-xl-4 col-xxl-4 GetStartedItems text-center"
    key={cards.id}
  >
    <div className="card text-center align-items-center">
      <span className="card-number">{index + 1}</span> {/* Circle with number */}
   
      <img src={cards.getStartImg} alt="" className="card-img-top" />
      <div className="card-body">
        <h5 className="card-title">{cards.title}</h5>
        <p className="card-text">{cards.title2}</p>
        <p className="card-text pt-3">{cards.title3}</p>
      </div>
    </div>
  </div>
))}

        </div>
        <div className=" btn mt-5 getbtn" type="button">
          GET STARTED
        </div>
      </div>
    </div>
  );
};

export default GetStartedCards;
