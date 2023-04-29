import styles from "./styles.module.scss";

type infoProps = {
  activeSubstance?: string;
  country?: string;
  dosage?: string;
  expirationDate?: string;
  methodOfApplication?: string;
  manufacturer?: string;
  releaseForm?: string;
  storageConditions?: string;
};

const Info = ({proizvod, forma, sposob, aktiv, doz, strana}) => (
  <div className={styles.info}>
    <div className={styles["info-title"]}>Производитель:</div>
    <div className={styles["info-description"]}>{proizvod}</div>

    <div className={styles["info-title"]}>Форма выпуска:</div>
    <div className={styles["info-description"]}>{forma}</div>

    <div className={styles["info-title"]}>Способ применения:</div>
    <div className={styles["info-description"]}>{sposob}</div>

    <div className={styles["info-title"]}>Условия хранения:</div>
    <div className={styles["info-description"]}>{aktiv}</div>

    <div className={styles["info-title"]}> Активное вещество:</div>
    <div className={styles["info-description"]}>{aktiv}</div>

    <div className={styles["info-title"]}>Дозировка:</div>
    <div className={styles["info-description"]}>{doz}</div>

    <div className={styles["info-title"]}>Страна:</div>
    <div className={styles["info-description"]}>{strana}</div>
  </div>
);

export default Info;
