import { card } from "../assets";
import styles, { layout } from "../styles";
import Button from "./Button";

const CardDeal = () => (
  <section className={layout.section}>
    {/* Card Deal Info */}
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        Find the best deal
        <br className="sm:block hidden" /> in few easy steps.
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Browse through a portfolio of plants and choose your budget to invest on one. On cutting, you will be credited your share. You can reinvest the returns with us or other bank of your choice.
      </p>
      {/* Get Started */}
      <Button styles="mt-10" />
    </div>

    {/* Background Image */}
    <div className={layout.sectionImg}>
      <img src={card} alt="Card Deal" className="w-[100%] h-[100%]" />
    </div>
  </section>
);

export default CardDeal;
