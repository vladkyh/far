import {useEffect, useState} from "react";

import styles from "./styles.module.scss";
import Button from "../../common/Button";
import ArrowBack from "../../common/ArrowBack";
import ArrowForward from "../../common/ArrowForward";

import Addresses from "./Addresses";
import Receiving from "./Receiving";
import YourOrder from "./YourOrder";
import Map from "./Map";
import { useSelector } from "react-redux";
import { RootState } from "../../../store/store";

const ReceivingOrder = ({setCurrentStepIndex}) => {

  const {items, totalPrice} = useSelector((state: RootState) => state.card);
  
  const [product, setProduct] = useState([])
  const [price, setPrice] = useState(0)

  // передаем данные в корзину
 
  useEffect(() => {
    if (items.length > 0) {
      setProduct(items)
      setPrice(totalPrice)
      console.log(totalPrice);
    } 
  }, [items, totalPrice])

  const [mapState, setMapState] = useState({
    center: [45.041477, 38.991258],
    zoom: 16,
  });

  return (
    <div className={styles.container}>
      <Receiving />

      <Map mapState={mapState} />

      <YourOrder price={price}/>

      <Addresses
        currentCoordinates={mapState.center}
        setMapState={setMapState}
      />

      <div className={styles["actions-block"]}>
        <Button className={styles["outline-button"]}>
          <div className={styles["button-content"]}>
            <ArrowBack />

            <span>Назад</span>
          </div>
        </Button>

        <Button
          onClick={() => setCurrentStepIndex((prevValue) => prevValue + 1)}
        >
          <div className={styles["button-content"]}>
            <span>Далее</span>

            <ArrowForward />
          </div>
        </Button>
      </div>
    </div>
  );
};

export default ReceivingOrder;
