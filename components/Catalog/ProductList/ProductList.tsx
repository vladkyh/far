import styles from "./styles.module.css";
import { useEffect, useState } from "react";
import AutoSizer from "react-virtualized-auto-sizer";
import { VariableSizeList as List } from "react-window";
import Link from 'next/link';
import testdata from './file.json'
import search from './testimg/1.png';
import Image from "next/image";
import CustomImage from "../../common/CustomImage";
import InfoPopup from "../../common/ProductCard/InfoPopup";
import Counter from "../../common/ProductCard/Counter";
import { FixedSizeGrid as Grid } from 'react-window';

const PupularProducts = () => {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Загрузка данных (например, из JSON файла или API)
    const fetchData = async () => {
      try {
        // Вместо testdata, загрузите данные из своего источника (например, API)
        // const response = await fetch('/api/products');
        // const data = await response.json();
        const data = testdata
        setItems(data);
        setIsLoading(false);
      } catch (error) {
        console.error('Ошибка загрузки данных:', error);
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

  const getItemSize = index => {
    // Здесь можно указать высоту элемента с индексом index
    return 493;
  };

  const renderListItem = ({ index, style }) => {
    const item = items[index];
    
    return (
      <div
      style={{
        ...style,
        marginBottom: '50px', // Добавляем отступ между элементами
        height: 'auto',
        margin: '100px 0px 100px 0px',
        // Задаем ширину элемента, чтобы 3 элемента помещались в одном ряду
      }}
      >
        <Link  href={`/catalog/${item.id}`} key={item.id}>
        <div
          className={styles.container}
          
        >
          <div className={styles.img}>
            <CustomImage
              src={`/testimg/${item.id}.png`}
              alt={item.NAME}
              className={ styles.item_img}
            />
      
          </div>
          <div className={styles.title}> 
            <span className={styles.name}>{item.NAME}</span>
            <span className={styles.company}>Компания</span>
          </div>
          

          <div className={styles.helpfull_wrapper}>
            <span className={styles.price}>от 100{item.PRICE} ₽</span>

            <InfoPopup />

            {/* {isPurchase && <Counter />} */}
          </div>

          {/* {isPurchase && <Button>В корзину</Button>} */}
        </div>
      </Link>
      </div>
      
    );
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className={styles.list}>
      <AutoSizer defaultHeight={800} defaultWidth={500}>
        {({ height, width }) => (
          <List
          height={height}
          width={width}
          itemCount={items.length}
          itemSize={getItemSize}
          
          itemData={{ items }}
          >
            {renderListItem}
          </List>
        )}
      </AutoSizer>
    </div>
  );
};

export default PupularProducts;




{/* <div className={styles.item_card} style={style}>
          <Image className={ styles.item_img} src={search} alt='поиск'/>
          <h2 className={styles.item_h2}>{item.NAME}</h2>
          <p className={styles.item_p}>{item.PRICER}</p>
        </div> */}

// import styles from "./styles.module.css";
// import { useEffect } from "react";
// import testdata from './file.json'
// import AutoSizer from "react-virtualized-auto-sizer";
// import {FixedSizeList} from "react-window";
// import Link from 'next/link';

// function ListItem({ index, style, data }) {
//     const item = data[index];
  
//     return (
//         <Link href={`/catalog/${item.id}`} >
//           <div>
//           <h2 className={styles.list_h2}>{item.NAME}</h2>
//            <p className={styles.list_p}>{item.PRICER}</p>
//           </div>
        
//       </Link>
//     );
//   }

// const PupularProducts = () => {
//     const item = testdata;
//  return(
//     <div className={styles.list}>
//      <AutoSizer defaultHeight={200} defaultWidth={500}>
//   {({ height, width }) => (
//     <FixedSizeList
//       height={height}
//       width={width}
//       itemCount={item.length}
//       itemSize={220}
//       itemData={item}
//     >
//       {ListItem}
//     </FixedSizeList>
//   )}
// </AutoSizer>
//   </div >
//  )
  
//  };

// export default PupularProducts;
