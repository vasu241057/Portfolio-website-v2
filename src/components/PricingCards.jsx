import React from "react";
import { PricingCardData } from "./Data";
import PricingCard from "./PricingCard";
import "./PricingCardStyle.css";

const PricingCards = () => {
  return (
    <>
      <div className="pricing">
        <h1 className="pricing-heading">PRICING</h1>
        <div className="card-container">
          
          {PricingCardData.map((item, index) => (
            <PricingCard
              key={index}
              planTypes={item.types}
              price={item.price}
              duration={item.duration}
              size={item.size}
            />
          ))}

        </div>
      </div>
    </>
  );
};

export default PricingCards;
