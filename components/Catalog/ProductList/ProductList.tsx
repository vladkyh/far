import styles from "./styles.module.css";
import { useEffect } from "react";
import testdata from './file.json'
import AutoSizer from "react-virtualized-auto-sizer";
import {FixedSizeList} from "react-window";
import Link from 'next/link';

function ListItem({ index, style, data }) {
    const item = data[index];
  
    return (
        <></>
    //     <Link href={`/category/[category]`} >
    //     <h2 className={styles.list_h2}>{item.NAME}</h2>
    //     <p className={styles.list_p}>{item.PRICER}</p>
    //   </Link>
    );
  }

const PupularProducts = () => {

    console.log('====================================');
    console.log('xui');
    console.log('====================================');

    const item = testdata;
 return(
    <div className={styles.list}>
     <AutoSizer defaultHeight={200} defaultWidth={500}>
  {({ height, width }) => (
    <FixedSizeList
      height={height}
      width={width}
      itemCount={item.length}
      itemSize={220}
      itemData={item}
    >
      {ListItem}
    </FixedSizeList>
  )}
</AutoSizer>
  </div >
 )
  
 };

export default PupularProducts;
