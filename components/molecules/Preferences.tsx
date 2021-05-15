import { RangeInput } from "../atoms/Input/RangeInput";
import { useProduct } from "../../context/ProductContext";

export const Preferences = () => {
  const { price, minPrice, maxPrice, handleChangePrice } = useProduct();
  return (
    <>
      <RangeInput
        price={price}
        minPrice={minPrice}
        maxPrice={maxPrice}
        onChange={handleChangePrice}
      />
    </>
  );
};
