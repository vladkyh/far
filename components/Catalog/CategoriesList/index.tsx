import {useEffect, useState} from "react";
import {useRouter} from "next/router";
import {getTypes} from "../../../http/deviceAPI";

import styles from "./styles.module.scss";

const CategoriesList = ({setCategory}) => {
  const [categories, setCategories] = useState([]);
  const {push} = useRouter();

  useEffect(() => {
    getTypes().then((data) => setCategories(data));
  }, []);

  const onClickCategory = (category) => {
    setCategory(category);
    }

  return (
    
    <ul className={styles["categories-list"]}>
        <li className={styles.category}>
        <p className={styles.category} onClick={() => onClickCategory('')}>Все</p>
          <p className={styles.category} onClick={() => onClickCategory('Франция')}>Франция</p>
          <p className={styles.category} onClick={() => onClickCategory('Россия')}>Россия</p>
          <p className={styles.category} onClick={() => onClickCategory('Германия')}>Германия</p>
        </li>
      
    </ul>
  );
};

export default CategoriesList;

// {categories.map(({name, id}) => (
//   <li
//     key={id}
//     className={styles.category}
//     onClick={() => {
//       push(`/catalog/${id}`);
//     }}
//   >
//     {name}
//   </li>
// ))}