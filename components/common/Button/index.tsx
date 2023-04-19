import { addProduct } from '../../../store/slices/cardSlice';
import { minusProduct } from '../../../store/slices/cardSlice';
import { useDispatch, useSelector } from 'react-redux';
import SetCookie from '../../../hooks/setCookie';
import { useEffect } from 'react';
import styles from "./styles.module.scss";
import {cnb} from "cnbuilder";
import {ReactElement} from "react";

type buttonProps = {
  disabled?: boolean;
  children: ReactElement | string;
  className?: string;
  onClick?: () => void;
  type?: "submit" | "reset" | "button" | undefined;
};

const Button = ({
  disabled,
  children,
  className,
  onClick,
  type = "button",
}: buttonProps) => (
  <button
    className={cnb(styles.button, className)}
    onClick={onClick && onClick}
    type={type}
    disabled={disabled}
  >
    {children}
  </button>
);
export default Button;




// const Button = ({text, id, name,desriptoin, onClick}) => {

//   const {items} = useSelector(state => state.card);
//   const cardItem = useSelector(state => state.card.items.find(obj => obj.id === id))
//   const addedCount = cardItem ? cardItem.count : 0; 
//   const dispatch = useDispatch()
//   const onCLickAdd = () => {
//       const item = {
//         id,
//         name,
//         desriptoin,

        
  
//       };
//       dispatch(addProduct(item))
//     }
  
    
//     const onClickMinus = () => {
//       dispatch(minusProduct({id}))
//     }
//     useEffect(() => {
//       const json = JSON.stringify(items)
//       SetCookie('yesyes', json)
//     }, [items])
// return (
//   <>
//   { addedCount ?
//                             <div className={styles.flower__addedButton}>
//                               <button className={styles.flower__bybutton__plusminus} onClick={onCLickAdd}>+</button>
//                               <span className={styles.flower__count}>{addedCount ? addedCount : 0}</span>
//                               <button className={styles.flower__bybutton__plusminus} onClick={onClickMinus}>-</button>
//                             </div>
//                         : 
//                         <button onClick={onCLickAdd} className={styles.flower__bybutton}>{text}</button>    
//                       }
//   </>
// );
// }