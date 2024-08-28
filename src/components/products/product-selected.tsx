import { Button } from "style-components";
import { ProductSchema } from "../../validations/productSchema";
import {
  FormAddProduct,
  ImageLabel,
  Fields,
  Label,
  TextArea,
  InputDiv,
  InputFields,
  DigitPrice,
  ButtonDiv,
  Image,
} from "../form/product-form-style";

type Props = {
  product: ProductSchema;
  formData: {
    id: string;
    name: string;
    description: string;
    price: number;
  };
  setFormData: React.Dispatch<
    React.SetStateAction<{
      id: string;
      name: string;
      description: string;
      price: number;
    }>
  >;
};

export function ProductSelected({ product, formData, setFormData }: Props) {
  if (!product) {
    return <div>Please select a product</div>;
  }

  const fields: Array<keyof Omit<ProductSchema, "creationDate">> = [
    "name",
    "description",
    "price",
  ];

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    console.log(name, value);

    setFormData((prevData) => ({
      ...prevData,
      [name]: name === "price" ? Number(value) : value,
    }));

    localStorage.setItem("productEdit", JSON.stringify(formData));
  };

  return (
    <FormAddProduct>
      <ImageLabel htmlFor="image-file">
        <Image src={product.image} />
      </ImageLabel>

      {fields.map((field) => {
        return (
          <Fields key={field}>
            <Label htmlFor={field}>{field}</Label>
            {field === "description" ? (
              <TextArea
                id={field}
                value={formData.description}
                onChange={handleChange}
                name={field}
              />
            ) : (
              <>
                <InputDiv>
                  <InputFields
                    id={field}
                    type={field === "price" ? "number" : "text"}
                    style={field === "price" ? { width: "100px" } : {}}
                    value={formData[field as keyof typeof formData]}
                    name={field}
                    onChange={handleChange}
                  />
                  <DigitPrice>{field === "price" ? "$" : ""}</DigitPrice>
                </InputDiv>
              </>
            )}
          </Fields>
        );
      })}

      <ButtonDiv>
        <Button type="submit">Save</Button>
      </ButtonDiv>
    </FormAddProduct>
  );
}
