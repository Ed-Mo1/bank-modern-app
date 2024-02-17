import styles from "../styles";
import { arrowUp } from "../assets";

const GetStarted = () => {
  return (
    <div
      className={`${styles.flexCenter} bg-blue-gradient cursor-pointer p-[2px] rounded-full w-[140px] aspect-square`}
    >
      <div
        className={`${styles.flexCenter} flex-col bg-primary w-full rounded-full aspect-square`}
      >
        <div className={`${styles.flexStart} flex-row`}>
          <p className="font-poppins font-medium text-[18px] leading-[23px]">
            <div className="flex gap-1">
              <span className="text-gradient">Get</span>
              <img
                src={arrowUp}
                alt="arrow-icon"
                className="w-[23px] aspect-square"
              />
            </div>
            <span className="text-gradient">Started</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default GetStarted;
