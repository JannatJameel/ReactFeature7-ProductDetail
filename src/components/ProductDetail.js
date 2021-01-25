import { DetailWrapper, ThemeButton } from "../styles";
import DeleteButton from "./buttons/DeleteButton";

const ProductDetail = (props) => {
  const product = props.product;
  const setProduct = props.setProduct;
  const deleteProduct = props.deleteProduct;

  return (
    <DetailWrapper>
      <h1>{product.name}</h1>
      <img src={product.image} alt={product.name} />
      <p>{product.description}</p>
      <p>{product.price} KD</p>
      <ThemeButton onClick={() => setProduct(null)}>Home</ThemeButton>
      <DeleteButton productid={product.id} deleteProduct={deleteProduct} setProduct={setProduct}/>
    </DetailWrapper>
  );
};

export default ProductDetail;
