import styles from "./styles.module.scss";
import CustomImage from "../../../common/CustomImage";
import Counter from "../../../common/ProductCard/Counter";
import { useEffect } from "react";
import ByButton from "../../../common/ByButton";
import Link from "next/link";

const Products = ({id, description, price, name, count}) => {
  
  useEffect(() => {
    
    console.log(id);
    console.log(name);
    
    return () => {
      
    }
  }, [id])
  
  return (
    <>
    {count?
    
      <li  className={styles.container}>
        <div className={styles["pickup-only_mobile"]}>Только самовывоз</div>
        <CustomImage
          src={`/testimg/${id}.png`}
          alt={name}
          className={styles.image}
        />
        <Link href={`/catalog/${id}`}>
          <div className={styles["name-block"]}>
            <div className={styles["pickup-only"]}>Только самовывоз</div>

            <span className={styles.name}>{name}</span>
            <span className={styles.firm}>Vitascience</span>
          </div>

        </Link>
        
        <span className={styles.price}>{price} ₽</span>

        <ByButton text={'В корзину'} id={id} name={name} desriptoin={description} price={price}/>

        <span className={styles.sum}>{count*price} ₽</span>

        <div className={styles["mobile-view-wrapper"]}>
          <Counter className={styles["counter_mobile"]} />

          <span className={styles["sum_mobile"]}>{count*price} ₽</span>
        </div>
      </li>
      
    : null}
    
    
    </>
      
  
  );
};

export default Products;
