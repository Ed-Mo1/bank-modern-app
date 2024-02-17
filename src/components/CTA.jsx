import styles from "../styles";
import Button from "./Button";
const CTA = () => {
  return (
    <section
      className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} gap-10  sm:flex-row flex-col bg-black-gradient-2 rounded-[20px] box-shadow`}
    >
      <div className="flex flex-1 flex-col">
        <h2 className={styles.heading2}>let us try our services now!</h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Everything you need to accept card payments and grow your business
          anywhere on the planet.
        </p>
      </div>
      <div className={`${styles.flexCenter}`}>
        <Button />
      </div>
    </section>
  );
};

export default CTA;
