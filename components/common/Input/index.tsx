import {cnb} from "cnbuilder";
import styles from "./styles.module.scss";

type inputProps = {
  placeholder?: string;
  className?: string;
  name?: string;
  valu?: string;
  type?: string;
  errorMessage?: string;
  onChange?: (event: any) => any;
};

const Input = ({
  placeholder,
  name,
  className,
  errorMessage,
  valu,
  type = "text",
  onChange,
  ...props
}: inputProps) => (
  <div className={cnb(styles.container, className)}>
    <input
      type={type}
      placeholder={placeholder}
      name={name}
      value={valu}
      onChange={onChange}
      className={styles.input}
      {...props}
    />

    {errorMessage && (
      <span className={styles.errorMessage}>{errorMessage}</span>
    )}
  </div>
);

export default Input;





// import {cnb} from "cnbuilder";
// import cn from 'classnames'
// import { SetStateAction, useCallback, useRef, useState } from "react";
// import styles from "./styles.module.scss";
// import { debounce } from 'lodash';

// const Input = () => {

//   const [value, setValue] = useState('')
//   const [valueTime, setvalueTime] = useState('') 
//   const inputRef = useRef()
//   // const focusInput= () =>{
//   //   inputRef.current.focus()
//   //   setvalueTime('')
//   //   setValue('')
//   //   } 
//     // созадем задержку запросов
//  const inputTimer = useCallback(
    
//       debounce((str)=>{
//         setValue(str)
//         console.log(str);
//       },300),
//     [],
//   )
//   const onChangeInput = event =>{
//     setvalueTime(event.target.value)
    
//     inputTimer(event.target.value)
    
//     console.log(value);
    
  
//   }
//   return(
//     <div className={cn(styles.container, styles.input)}>
//     <input
//       ref={inputRef}
//       onChange={onChangeInput}
//       value={valueTime}
//       className={styles.input} 
//       type="text" 
//       placeholder='Поиск' 
//     />

//     {/* {errorMessage && (
//       <span className={styles.errorMessage}>{errorMessage}</span>
//     )} */}
//   </div>
//   )
//     };

// export default Input;
