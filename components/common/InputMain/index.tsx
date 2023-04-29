import {cnb} from "cnbuilder";
import cn from 'classnames'
import { SetStateAction, useCallback, useEffect, useRef, useState } from "react";
import styles from "./styles.module.scss";
import { debounce } from 'lodash';
import testdata from './file.json'
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";

type inputProps = {
  placeholder?: string;
  className?: string;
  name?: string;
  valu?: string;
  type?: string;
  errorMessage?: string;
  onChange?: (event: any) => any;
};

const InputMain = ({
  placeholder,
  name,
  className,
  errorMessage,
  valu,
  type = "text",
  onChange,
  ...props
}: inputProps) => {

  const [value, setValue] = useState('');
  const [valueTime, setvalueTime] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const allRef = useRef(null);
  const inputRef = useRef();
  const [isRedirecting, setIsRedirecting] = useState(false); // Флаг для отслеживания состояния перехода
  const router = useRouter();

  // Создаем задержку запросов
  const inputTimer = useCallback(
    debounce((str) => {
      setValue(str);
      console.log(str);

      // Выполняем поиск и обновляем результаты
      const filteredResults = testdata.filter((item) =>
        item.NAME.toLowerCase().includes(str.toLowerCase())
      ).slice(0, 5);
      setSearchResults(filteredResults);
    }, 300),
    []
  );

  const onChangeInput = (event) => {
    setvalueTime(event.target.value);
    inputTimer(event.target.value);
  };

  const onClearInput = () => {
    setValue('');
    setvalueTime('');
    setSearchResults([]);
  };

  const onProductClick = (productId) => {
    // Устанавливаем флаг перехода в true
    setIsRedirecting(true);
    console.log(productId);
    
    // Выполняем переход по ссылке с использованием Next.js router
    router.push(`/catalog/${productId}`);
    console.log(productId);
    
    setValue('');
    setIsRedirecting(false);
  };

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (!allRef.current.contains(event.target)) {
        setValue('');
        console.log(!allRef.current.contains(event.target));
        
      }
    };
    document.addEventListener('mousedown', handleOutsideClick);
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, [allRef.current]);

  // Обработка завершения перехода по ссылке
  useEffect(() => {
    if (isRedirecting) {
      // Устанавливаем флаг перехода в false после выполнения перехода
      setIsRedirecting(false);
      // Закрываем поиск
      setValue('');
      setSearchResults([]);
    }
  }, [isRedirecting]);

  return (
    <div ref={allRef} className={cn(styles.container, styles.input)}>
      <input
        ref={inputRef}
        onChange={onChangeInput}
        value={valueTime}
        className={styles.input}
        type="text"
        placeholder="Начните вводить название..."
      />
      {value ? (
        <div className={styles.search_res}>
          <ul className={styles.ul}>
            {searchResults.map((items) => (
              <li className={styles.li} key={items.id}>
               
                  <div onClick={() => onProductClick(items.id)} className={styles.res_info}>
                    <h2 className={styles.list_h2}>{items.NAME}</h2>
                    <p className={styles.list_p}>{items.PRICER}</p>
                    
                  </div>
                  <div className={styles.line}></div>
                
              </li>
            ))}
          </ul>
        </div>
      ) : null}
        {valueTime ? (
        <button className={styles.clear_button} onClick={onClearInput}>
          Очистить
        </button>
      ) : null}
    </div>
  );
};

export default InputMain;