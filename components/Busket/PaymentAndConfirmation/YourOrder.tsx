import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../../store/store";
import styles from "./styles.module.scss";

const YourOrder = () => {
  
  const {items, totalPrice} = useSelector((state: RootState) => state.card);
  
  const [product, setProduct] = useState([])
  const [price, setPrice] = useState(0)

  // передаем данные в корзину
 
  useEffect(() => {
    if (items.length > 0) {
      setProduct(items)
      setPrice(totalPrice)
      console.log(totalPrice);
    } 
  }, [items, totalPrice])

return(
  <div className={styles["your-order"]}>
    <span className={styles.title}>Ваш заказ</span>
    {product && product.map(({id, name, description, price, count})=>(
      
      <div key={id} className={styles["order-wrapper"]}>
        <span className={styles["order-name"]}>
          {name}
        </span>

        <div className={styles["order-info"]}>
          <span> {price} ₽</span>
          <span> x {count}</span>
        </div>
      </div>
    ))}
    
    

    <div className={styles.total}>
      <div className={styles["total-value"]}>
        <span> Итого</span>
        <span> {totalPrice} ₽</span>
      </div>

      <div className={styles["total-other"]}>
        <span> Скидка</span>
        <span> 0 ₽</span>
      </div>

      <div className={styles["total-other"]}>
        <span> Доставка</span>
        <span> 0 ₽</span>
      </div>
    </div>

    <div className={styles["total-value"]}>
      <span> Итого к оплате</span>
      <span> {totalPrice} ₽</span>
    </div>
  </div>
)
  
};

export default YourOrder;
