import styles from "./styles.module.scss";

import Item from "./Item";
import Total from "./Total";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { clearProduct } from "../../../store/slices/cardSlice";
import RemoveCookie from "../../../hooks/removeCookie";
import { RootState } from "../../../store/store";

const MOKK_STEPS = [
  "Моя корзина",
  "Способ получения",
  "Оплата и подтверждение",
];

const Busket = ({setCurrentStepIndex}) => {

  const dispatch = useDispatch()
  const {items, totalPrice} = useSelector((state: RootState) => state.card);

  const [count, setCount] = useState(0)
  const [price, setPrice] = useState(1)
  const [product, setProduct] = useState([])

  const onClickClear = ( ) =>{
    dispatch(clearProduct())
    RemoveCookie('yesyes', '[]')
    
  }
  // передаем данные в корзину
 
  useEffect(() => {
    if (items.length > 0) {
      const totalCount = items.reduce((sum,items)=> sum+items.count,0)
      setCount(totalCount)
      setProduct(items)
      setPrice(totalPrice)
      console.log(totalPrice);
    } 
  }, [items, totalPrice])
  
  // на случай если корзина пуста
  if (!items) {
    return (<div>Корзина пуста</div>)  
  }

  return (
    <>
      <div className={styles.thead}>
        <div />
        <div />
        <div>Цена</div>
        <div>Количество</div>
        <div>Сумма</div>
      </div>

      <ul className={styles.products}>
      {product && product.map(({id, name, description, price, count})=>(

        
            <Item id={id} name={name} description={description} price={price} count={count}/>
          
        ))
        }
      </ul>

      <Total total={totalPrice} setCurrentStepIndex={setCurrentStepIndex} />
      <div onClick={() => onClickClear()}>очистить корзину</div>
    </>
  );
};

export default Busket;
