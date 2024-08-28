import { ProductSchema } from "../../validations/productSchema";
import {
  DeleteButton,
  ProductContainer,
  ProductDetails,
  ProductImage,
  ProductListContainer,
  ProductName,
} from "../store-style";

type Props = {
  open: (product: ProductSchema) => void;
  products: ProductSchema[];
  currentItems: ProductSchema[] | ProductSchema;
  onDelete: (e: React.MouseEvent, item: ProductSchema) => void;
};

export function ProductList({ open, products, onDelete }: Props) {
  const openProductDetails = (item: ProductSchema) => {
    return () => open(item);
  };

  const handleDelete = (e: React.MouseEvent, item: ProductSchema) => {
    onDelete(e, item);
  };

  return (
    <>
      {products.length > 0 ? (
        <ProductListContainer>
          {products.map((item, index) => (
            <ProductContainer key={index} onClick={openProductDetails(item)}>
              <ProductImage src={item.image} alt={item.name} />
              <ProductDetails>
                <ProductName>{item.name}</ProductName>
                <div>{item.description}</div>
              </ProductDetails>
              <DeleteButton
                onClick={(e: React.MouseEvent<HTMLButtonElement>) =>
                  handleDelete(e, item)
                }
              >
                Delete
              </DeleteButton>
            </ProductContainer>
          ))}
        </ProductListContainer>
      ) : (
        "No products available."
      )}
    </>
  );
}
