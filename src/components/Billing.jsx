import { apple, bill, google } from "../assets";
import styles, { layout } from "../styles";

const Billing = () => (
  <section id="product" className={layout.sectionReverse}>
    {/* Left Side */}
    <div className={layout.sectionImgReverse}>
      {/* Background Image */}
      <img
        src={bill}
        alt="Billing"
        className="w-[100%] h-[100%] relative z-[5]"
      />
      <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
      <div className="absolute z-[0] -left-1/2 bottom-0 w-[50%] h-[50%] rounded-full pink__gradient" />
    </div>

    {/* Right Side */}
    <div className={layout.sectionInfo}>
      {/* Info */}
      <h2 className={styles.heading2}>
        Easily control your
        <br className="sm:block hidden" /> billing & invoicing.
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
       Use plant credits as your easy interest free and non-locking loan. Don't scratch on your hard earned money, use the plants as your wallet.
      </p>

     
    </div>
  </section>
);

export default Billing;
