import {
  createContext,
  useState,
  Dispatch,
  SetStateAction,
  useContext,
  useEffect,
} from "react";
import type { Sofa } from "../types";

type ProductContext = {
  products: Sofa[];
  setProducts: Dispatch<SetStateAction<Sofa[]>>;
  minPrice: number;
  setMinPrice: Dispatch<SetStateAction<number>>;
  maxPrice: number;
  setMaxPrice: Dispatch<SetStateAction<number>>;
  price: number;
  setPrice: Dispatch<SetStateAction<number>>;
  filteredProducts: Sofa[];
  setFilteredProducts: Dispatch<SetStateAction<Sofa[]>>;
  handleChangePrice: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const ProductContext = createContext<ProductContext>({
  products: [],
  setProducts: () => {},
  minPrice: 0,
  setMinPrice: () => {},
  maxPrice: 2000,
  setMaxPrice: () => {},
  price: 350,
  setPrice: () => {},
  filteredProducts: [],
  setFilteredProducts: () => {},
  handleChangePrice: () => {},
});

export const useProduct = () => {
  const context = useContext(ProductContext);

  if (!context) {
    throw new Error("Error while reading context!");
  }

  return context;
};

export const ProductProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [products, setProducts] = useState([] as Sofa[]);
  const [filteredProducts, setFilteredProducts] = useState([] as Sofa[]);
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(2000);
  const [price, setPrice] = useState(350);

  const handleChangePrice = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPrice(Number(e.target.value));
    setFilteredProducts(products.filter(product => product.cost <= price));
  };

  useEffect(() => {
    setMinPrice(Math.min(...products.map(product => product.cost)));
    setMaxPrice(Math.max(...products.map(product => product.cost)));
    setPrice(Math.max(...products.map(product => product.cost)));
    console.log(products);
  }, [products]);

  return (
    <ProductContext.Provider
      value={{
        products,
        setProducts,
        minPrice,
        setMinPrice,
        maxPrice,
        setMaxPrice,
        price,
        setPrice,
        filteredProducts,
        setFilteredProducts,
        handleChangePrice,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};
