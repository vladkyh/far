import styles from "./styles.module.scss";
import Checkbox from "../../common/Checkbox";

const Receiving = () => (
  <div className={styles["gray-wrapper"]}>
    <span className={styles.title}>Способ получения</span>

    <div className={styles["delivery-option"]}>
      <Checkbox onChange={() => {}} label="Самовывоз из аптеки" />
      <span className={styles["delivery-option_price"]}>0 ₽</span>
    </div>

  </div>
);

export default Receiving;
