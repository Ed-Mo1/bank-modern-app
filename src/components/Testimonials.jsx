import { feedback } from "../constants";
import styles from "../styles";
import FeedbackCard from "./FeedbackCard";
const Testimonials = () => {
  return (
    <section className={`${styles.paddingY} ${styles.flexCenter} flex-wrap`} id="product">
      <div className="flex basis-full justify-between items-start md:items-center md:flex-row flex-col sm:mb-16 mb-6 relative z-[2]">
        <div className="absolute z-[0] w-[60%] h-[60%] -right-[50%] rounded-full blue__gradient" />
        <h2 className={`${styles.heading2}`}>
          What people are <br className="sm:block hidden" /> saying about us
        </h2>
        <p className={`${styles.paragraph} text-left max-w-[450px]`}>
          Everything you need to accept card payments and grow your business
          anywhere on the planet.
        </p>
      </div>
      <div className="flex  flex-wrap  md:justify-between gap-5 justify-center w-full feedback-container relative z-[1]">
        {feedback.map((feedback) => (
          <FeedbackCard key={feedback.id} {...feedback} />
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
