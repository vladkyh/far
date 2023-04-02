import styles from "./styles.module.scss";
import Advertising from "./Advertising";
import PupularProducts from "./PupularProducts";

import HelpfullCard from "../../common/HelpfullCard";
import {MOKK_HELPFULL} from "../../constants";
import ProductList from "../ProductList";


const data = MOKK_HELPFULL.slice(0, 2);

const Products = () => {

  return (
    <div className={styles.container}>
      <div className={styles["advertising-wrapper"]}>
        <Advertising />
      </div>

      <div className={styles.list}>
        <ProductList/>
      </div>
      


      <div className={styles["helpfull-wrapper"]}>
        {data.map((item, index) => (
          <HelpfullCard key={index} id={index} {...item} />
        ))}
      </div>
    </div>
  );
};

export default Products;
