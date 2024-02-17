import React from "react";
import { stats } from "../constants/index";
import styles from "../styles";
const Stats = () => {
  return (
    <section
      className={`flex-row flex-wrap sm:mb-20 mb-6 ${styles.flexCenter}`}
    >
      {stats.map(({ id, value, title }) => (
        <div key={id} className="flex flex-1 justify-start items-center gap-2 m-3">
          <h4 className="font-poppins font-semibold xs:text-[40px] text-[30px] xs:leading-[53px] leading-[43px] text-white">
            {value}
          </h4>
          <p className="font-poppins font-normal xs:text-[20px] text-[15px] xs:leading-[26px] leading-[21px] text-gradient uppercase ">{title}</p>
        </div>
      ))}
    </section>
  );
};

export default Stats;
