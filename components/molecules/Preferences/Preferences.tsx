import { RangeInput } from "components/atoms/Input/RangeInput/RangeInput";
import { SearchInput } from "components/atoms/Input/SearchInput/SearchInput";
import { SelectInput } from "components/atoms/Input/SelectInput/SelectInput";
import { useProduct } from "context/ProductContext";
import { StyledPreferencesWrapper } from "./Preferences.styles";

export const Preferences = () => {
  const {
    price,
    minPrice,
    maxPrice,
    handleChangePrice,
    searchQuery,
    handleChangeSearchQuery,
    handleSelectProductTypes,
    productsTypes,
  } = useProduct();

  return (
    <StyledPreferencesWrapper>
      <SearchInput
        value={searchQuery}
        onChange={handleChangeSearchQuery}
        placeholder="e. g. Kivik"
      />
      <SelectInput
        options={productsTypes.map(type => ({ value: type, label: type }))}
        onChange={handleSelectProductTypes}
      />
      <RangeInput
        price={price}
        minPrice={minPrice}
        maxPrice={maxPrice}
        onChange={handleChangePrice}
      />
    </StyledPreferencesWrapper>
  );
};
