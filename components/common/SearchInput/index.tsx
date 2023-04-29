import styles from "./styles.module.scss";
import CustomImage from "../../common/CustomImage";
import Button from "../../common/Button";
import Input from "../../common/Input";
import {cnb} from "cnbuilder";
import InputMain from "../InputMain";

type searchInputProps = {className?: string};

const SearchInput = ({className}: searchInputProps) => (
  <div className={cnb(styles.wrapper, className)}>
    <CustomImage
      src="/SearchHeartIcon.svg"
      alt="SearchHeartIcon"
      className={styles.icon}
    />

    <InputMain/>

    <Button className={styles.button}>Найти</Button>
  </div>
);

export default SearchInput;
