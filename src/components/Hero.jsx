import styles from "../styles";
import { robot, discount } from "../assets";
import GetStarted from "./GetStarted";

const Hero = () => {
  return (
    <section
      id="home"
      className={`flex md:flex-row flex-col ${styles.paddingY}`}
    >
      <div
        className={`flex-1  ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}
      >
        <div className="flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2">
          <img src={discount} alt="icon" className="w-[32px] aspect-square" />
          <p className={`${styles.paragraph} ml-2`}>
            <span className="text-white">20%</span> Discount For{" "}
            <span className="text-white">1 Month</span> Account
          </p>
        </div>
        <div className="flex justify-between items-start">
          <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100px] leading-[75px]">
            THe Next <br className="hidden sm:block" />
            <span className="text-gradient">Generation</span>{" "}
          </h1>
          <div className="ss:flex hidden md:mr-4 mr-0">
            <GetStarted />
          </div>
        </div>
        <h1 className="w-full font-poppins font-semibold ss:text-[68px] text-[52px] text-white ss:leading-[100px] leading-[75px]">
          Payment Method
        </h1>
        <p className={`${styles.paragraph} mt-5 max-w-[470px]`}>
          Our team of experts uses a methodology to identify the credit cards
          most likely to fit your needs we examine annual percentage rates,
          annual fees.
        </p>
      </div>
      <div className={`flex flex-1 ${styles.flexCenter} md:my-0 my-10 relative`}>
        <img
          src={robot}
          alt="robot-image"
          className="w-full aspect-square relative z-[5]"
        />
        <div className=" absolute w-[40%] z-[0] aspect-square top-0 pink__gradient" />
        <div className=" absolute w-[40%] z-[1] aspect-square bottom-40 rounded-full white__gradient" />
        <div className=" absolute w-[50%] z-[0] aspect-square bottom-20 right-20 blue__gradient" />
      </div>
      <div className={`ss:hidden ${styles.flexCenter}`}>
        <GetStarted/>
      </div>
    </section>
  );
};

export default Hero;
