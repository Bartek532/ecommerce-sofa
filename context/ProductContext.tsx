import {
  createContext,
  useState,
  Dispatch,
  SetStateAction,
  useContext,
  useEffect,
} from "react";
import { sofaColors } from "../lib/utils/consts";
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
  searchQuery: string;
  setSearchQuery: Dispatch<SetStateAction<string>>;
  productsTypes: string[];
  setProductsTypes: Dispatch<SetStateAction<string[]>>;
  activeSofaColor: typeof sofaColors[number]["label"];
  setActiveSofaColor: Dispatch<
    SetStateAction<typeof sofaColors[number]["label"]>
  >;
  handleChangeSearchQuery: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleChangePrice: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleSelectProductTypes: (
    options: { value: string; label: string }[]
  ) => void;
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
  searchQuery: "",
  setSearchQuery: () => {},
  productsTypes: [],
  setProductsTypes: () => {},
  activeSofaColor: "default",
  setActiveSofaColor: () => {},
  handleChangeSearchQuery: () => {},
  handleChangePrice: () => {},
  handleSelectProductTypes: () => {},
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
  const [products, setProducts] = useState<Sofa[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Sofa[]>([]);
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(2000);
  const [productsTypes, setProductsTypes] = useState<string[]>([]);
  const [selectedProductTypes, setSelectedProductTypes] = useState<string[]>(
    []
  );
  const [searchQuery, setSearchQuery] = useState("");
  const [price, setPrice] = useState(350);
  const [activeSofaColor, setActiveSofaColor] =
    useState<typeof sofaColors[number]["label"]>("default");

  const handleSelectProductTypes = (
    types: { value: string; label: string }[]
  ) => {
    setSelectedProductTypes(types.map(type => type.value));
  };

  const handleFilterByTypes = () => {
    setFilteredProducts(
      products.filter(product => {
        if (!selectedProductTypes.length) {
          return product;
        }

        if (selectedProductTypes.includes(product.sofaType)) {
          return product;
        }
      })
    );
  };

  useEffect(() => {
    handleFilterByTypes();
  }, [selectedProductTypes]);

  const handleFilterProductsByName = () => {
    setFilteredProducts(
      products.filter(product =>
        product.name.toLowerCase().startsWith(searchQuery.toLowerCase())
      )
    );
  };

  const handleChangeSearchQuery = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  useEffect(() => {
    handleFilterProductsByName();
  }, [searchQuery]);

  const handleFilterProductsByPrice = () => {
    setFilteredProducts(products.filter(product => product.cost <= price));
  };

  const handleChangePrice = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPrice(Number(e.target.value));
  };

  useEffect(() => {
    handleFilterProductsByPrice();
  }, [price]);

  useEffect(() => {
    setMinPrice(Math.min(...products.map(product => product.cost)));
    setMaxPrice(Math.max(...products.map(product => product.cost)));
    setPrice(Math.max(...products.map(product => product.cost)));
    setProductsTypes([...new Set(products.map(product => product.sofaType))]);
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
        searchQuery,
        setSearchQuery,
        productsTypes,
        setProductsTypes,
        activeSofaColor,
        setActiveSofaColor,
        handleChangeSearchQuery,
        handleChangePrice,
        handleSelectProductTypes,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};
