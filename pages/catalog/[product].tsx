import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import data from './file.json'
import Product from "../../components/Product";
const ProductPage = () => {
    const router = useRouter();
    const id = Number(router.query.product);
    const [itemData, setItemData] = useState(null)
    useEffect(() => {
        const fetchData = async()=>{
            const id = Number(router.query.product);
            const withData = data.find((obj) => obj.id === id);
            
            
            console.log(id);
            console.log(withData);
            console.log(data[id-1]);
            setItemData(withData)  
            console.log('test');
            
            //setGetId(id)
            if (!data) {
              return {
                notFound: true,
              }
            }
      }
      fetchData();
      }, [id])
    return(
        <>
        {id}
        
        <Product item={itemData} />
        </>
    )
}

export default ProductPage;
