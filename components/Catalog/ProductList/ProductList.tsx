import styles from "./styles.module.css";
import { useEffect, useState } from "react";
import AutoSizer from "react-virtualized-auto-sizer";
import { VariableSizeList as List } from "react-window";
import Link from 'next/link';
import testdata from './file.json'
import CustomImage from "../../common/CustomImage";
import InfoPopup from "../../common/ProductCard/InfoPopup";

const PupularProducts = ({category}) => {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  

  useEffect(() => {
    // Загрузка данных (например, из JSON файла или API)
    const fetchData = async () => {
      try {
        const data = testdata
        setIsLoading(false);
        if (category) {
          const filteredItems = data.filter(item => item.strana === category);
          setItems(filteredItems);
        } else {
          setItems(data);
        }
      } catch (error) {
        console.error('Ошибка загрузки данных:', error);
        setIsLoading(false);
      }
    };
    fetchData();
  }, [category]);

  const getItemSize = index => {
    return 493;
  };

  const renderListItem = ({ index, style }) => {
    const item = items[index];

    return (
      <div
      style={{
        ...style,
        marginBottom: '50px', 
        height: 'auto',
        margin: '100px 0px 100px 0px',
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
          </div>
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
