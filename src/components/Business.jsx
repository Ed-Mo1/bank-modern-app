import { features } from "../constants";

import styles, { layout } from "../styles";
import Button from "./Button";
import { useState } from "react";

const FeatureCard = ({ icon, title, content, activeCard, event, index }) => (
  <div
    className={`flex flex-row items-center p-6 rounded-[20px] cursor-pointer feature-card ${
      activeCard == index && "feature-card-active"
    } `}
    onClick={() => event(index)}
  >
    <div
      className={`w-[64px] aspect-square rounded-full bg-dimBlue ${styles.flexCenter}`}
    >
      <img src={icon} alt="icon" className={`w-1/2 aspect-square`} />
    </div>
    <div className="flex flex-1 flex-col ml-3">
      <h4 className="font-poppins font-semibold text-white text-[18px] leading-[23px] mb-1 ">
        {title}
      </h4>
      <p className="font-poppins font-normal  text-dimWhite text-[16px] leading-[24px] mb-1 ">
        {content}
      </p>
    </div>
  </div>
);
const Business = () => {
  const [activeCard, setActiveCard] = useState(1);
  return (
    <section className={`${layout.section}`} id="features">
      <div className={`${layout.sectionInfo}`}>
        <h2 className={styles.heading2}>
          You do the business,
          <br className="sm:block hidden" /> we`will handel the money.
        </h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          With the right credit card, you can improve your financial life by
          building credit, earning rewards and saving money. But with hundreds
          of credit cards on the market
        </p>
        <div className="mt-10">
          <Button />
        </div>
      </div>
      <div className={`${layout.sectionImg} flex-col gap-6`}>
        {features.map((feature, i) => (
          <FeatureCard
            key={feature["id"]}
            {...feature}
            activeCard={activeCard}
            event={setActiveCard}
            index={i}
          />
        ))}
      </div>
    </section>
  );
};

export default Business;
