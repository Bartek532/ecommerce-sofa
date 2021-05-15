import { RangeInput } from "../atoms/Input/RangeInput";
import { SearchInput } from "../atoms/Input/SearchInput";
import { SelectInput } from "../atoms/Input/SelectInput";
import { useProduct } from "../../context/ProductContext";
import styled from "styled-components";

const StyledPreferencesWrapper = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  width: 100%;
  margin-bottom: 2rem;

  & > * {
    flex: 0 1 30rem;
  }
`;

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
