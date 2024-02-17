import { apple, google, bill } from "../assets";
import styles, { layout } from "../styles";
const Billing = () => {
  return (
    <section id="products" className={`${layout.sectionReverse}`}>
      <div className={`${layout.sectionImgReverse}`}>
        <img
          src={bill}
          alt="billing"
          className="w-full h-full relative z-[5]"
        />
        <div className=" absolute z-[3] -left-1/2 top-0 w-1/2 h-1/2 rounded-full white__gradient" />
        <div className=" absolute z-[0] -left-1/2 bottom-0 w-1/2 h-1/2 rounded-full pink__gradient" />
      </div>
      <div className={`${layout.sectionInfo}`}>
        <h2 className={`${styles.heading2}`}>
          Easily control your <br className="sm:block hidden" />
          billing & invoking.
        </h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          adipiscing ultrices ametodio aenean neque. Fuse ipsum orci rhoncus
          aliporttiitor integer platea placerat.
        </p>
        <div className="flex gap-5 flex-row flex-wrap sm:mt-10 mt-6">
          <img
            src={apple}
            alt="apple_store"
            className="w-[128px] h-[42px] object-contain  cursor-pointer"
          />
          <img
            src={google}
            alt="goggle_play "
            className="w-[128px] h-[42px] object-contain  cursor-pointer"
          />
        </div>
      </div>
    </section>
  );
};

export default Billing;
