// Styling
import { ListWrapper } from "../styles";
// Components
import ProductItem from "./ProductItem";
import SearchBar from "./SearchBar";
import DeleteButton from "./buttons/DeleteButton";
// State
import { useState } from "react";


const ProductList = (props) => {
  const [query, setQuery] = useState("");

  const productList = props.products
    .filter((product) => product.name.includes(query))
    .map((product) => <ProductItem 
    product={product} 
    setProduct={props.setProduct} 
    deleteProduct={props.deleteProduct} 
    key={product.id} 
    />);

  return (
    <>
      <SearchBar setQuery={setQuery} />
      <ListWrapper>{productList}</ListWrapper>
    </>
  );
};

export default ProductList;
