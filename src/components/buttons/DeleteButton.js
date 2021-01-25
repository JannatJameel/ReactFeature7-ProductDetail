import { MdDeleteForever } from "react-icons/md";
import DeleteButtonStyled from "./ButtonStyled";

const DeleteButton = (props) => {
    const handleDelete = () => {
        props.deleteProduct(props.productid);
        props.setProduct();
    };
    return (
        <DeleteButtonStyled onClick={handleDelete}> <MdDeleteForever/> </DeleteButtonStyled>
    );
};

export default DeleteButton;