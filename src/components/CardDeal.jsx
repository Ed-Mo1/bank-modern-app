import { card } from "../assets";
import styles, { layout } from "../styles";
import Button from "./Button";
const CardDeal = () => {
  return (
    <section className={layout.section}>
      <div className={`${layout.sectionInfo}`}>
        <h2 className={`${styles.heading2}`}>
          Find a better card deal <br className="sm:block hidden" />
          in few easy steps.
        </h2>
        <p className={`${styles.paragraph} mt-5 max-w-[470px]`}>
          Arcu tortor, purus in mattis at sed integer faucibus. Aliquet quis
          aliquit eget mauris tortor.c Aliquet ultrices ac,ametau.
        </p>
        <div className="mt-10">
          <Button />
        </div>
      </div>
      <div className={layout.sectionImg}>
        <img src={card} alt="card" className="w-full h-full" />
      </div>
    </section>
  );
};

export default CardDeal;
