import {useContext, useEffect, useState} from "react";

import Head from "next/head";
import {useRouter} from "next/router";

import {UserContext} from "../../contexts/userContext";

import CategoriesList from "./CategoriesList";
import Products from "./Products";

import styles from "./styles.module.scss";
import ProductList from "./ProductList";

const CatalogCategory = () => {
  const user = useContext(UserContext);
  const [category, setCategory] = useState("")
  // const {push} = useRouter();

  // useEffect(() => {
  //   if (!user.isAuth) {
  //     push("/login");
  //   }
  // }, [user.isAuth]);

  return (
    <>
      <Head>
        <title>Каталог</title>
      </Head>

      <h3 className={styles.title}>Категории</h3>

      <div className={styles.container}>
        
        <CategoriesList setCategory={setCategory}/>
        <Products category={category} />
        
      </div>
    </>
  );
};

export default CatalogCategory;
