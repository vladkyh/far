import {cnb} from "cnbuilder";
import CustomImage from "../CustomImage";
import styles from "./styles.module.scss";
import {useRouter} from "next/router";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";

type basketWidgetProps = {className?: string};

const BasketWidget = ({className}: basketWidgetProps) => {
  const {push} = useRouter();
  const {items, totalPrice} = useSelector(state => state.card);   
  // общее кол-во товаров и цена
  const [count, setCount] = useState(0)
  const [price, setPrice] = useState(0)
  
// асинхронно получаем count, price
  useEffect(() => {
    const totalCount = items.reduce((sum,items)=> sum+items.count,0)
    setPrice(totalPrice)
    setCount(totalCount)
  }, [items, totalPrice])

  return (
    <div
      className={cnb(styles["basket-wrapper"], className)}
      onClick={() => push("/basket")}
    >
      <div className={styles["basket-counter"]}>
        <span className={styles["basket-counter-badge"]}>{count ? count : 0}</span>

        <CustomImage
          src="/BasketIcon.svg"
          className={styles["basket-icon"]}
          alt="BasketIcon"
        />
      </div>

      <div className={styles["basket-sum"]}>
         <span>{price ? price : "0"}₽</span>
      </div>
    </div>
  );
};

export default BasketWidget;
