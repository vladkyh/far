import { addProduct } from '../../../store/slices/cardSlice';
import { minusProduct } from '../../../store/slices/cardSlice';
import { useDispatch, useSelector } from 'react-redux';
import SetCookie from '../../../hooks/setCookie';
import { useEffect } from 'react';
import styles from "./styles.module.css";
import {cnb} from "cnbuilder";
import {ReactElement} from "react";
import Image from 'next/image';

const ByButton = ({text, id, name,desriptoin, price}) => {

    const {items} = useSelector(state => state.card);
    const cardItem = useSelector(state => state.card.items.find(obj => obj.id === id))
    const addedCount = cardItem ? cardItem.count : 0; 
    const dispatch = useDispatch()
    const onCLickAdd = () => {
        const item = {
          id,
          name,
          desriptoin,
          price
        };
        dispatch(addProduct(item))
      }
    
      
      const onClickMinus = () => {
        dispatch(minusProduct({id}))
      }
      useEffect(() => {
        const json = JSON.stringify(items)
        SetCookie('yesyes', json)
      }, [items])
  return (
    <>
    { addedCount ?
            <div className={styles.count_actions}>
              <button className={styles.count_button} onClick={onClickMinus}>
                  <Image width={15} height={2} src="/MinusIcon.svg" alt="MinusIcon" />
              </button>
              <span className={styles.count_value}>{addedCount ? addedCount : 0}</span>
              <button className={styles.count_button} onClick={onCLickAdd}>
                  <Image width={15} height={15} src="/PlusIcon.svg" alt="PlusIcon" />
              </button>
            </div>
        : 
        <button onClick={onCLickAdd} className={styles.button}>{text}</button>    
    }
    </>
  );
  }
export default ByButton;