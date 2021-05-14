import { RangeInput } from "../atoms/Input/RangeInput";
import { useProduct } from "../../context/ProductContext";

export const Preferences = () => {
  const { price, minPrice, maxPrice } = useProduct();
  return (
    <RangeInput
      price={price}
      minPrice={minPrice}
      maxPrice={maxPrice}
      onChange={() => {}}
    />
  );
};
