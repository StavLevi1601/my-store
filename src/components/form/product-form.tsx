import { useFormContext } from "react-hook-form";
import { ProductSchema } from "../../validations/productSchema";
import { useState } from "react";
import { Button } from "../store-style";
import {
  ImageLabel,
  Image,
  ImageInput,
  Fields,
  FormAddProduct,
  InputFields,
  TextArea,
  Label,
  Errors,
  InputDiv,
  ButtonDiv,
  DigitPrice,
} from "./product-form-style";
import uploadedImage from "../../assets/images/image-icon.png";

type Props = {
  onSave: (product: ProductSchema) => void;
};

export function ProductForm({ onSave }: Props) {
  const [image, setImage] = useState<string | undefined>(uploadedImage);

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useFormContext<ProductSchema>();

  const onSubmit = (data: ProductSchema) => {
    const productData = { ...data, price: Number(data.price) };
    onSave({ ...productData, image });
  };

  const handleImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0];
      const reader = new FileReader();

      reader.onloadend = () => {
        const imageUrl = reader.result as string;
        setImage(imageUrl);
        localStorage.setItem("product-image", imageUrl);
      };

      reader.readAsDataURL(file);
    }
  };

  const fields: Array<keyof Omit<ProductSchema, "id" | "creationDate">> = [
    "name",
    "description",
    "price",
  ];

  return (
    <FormAddProduct onSubmit={handleSubmit(onSubmit)}>
      <ImageLabel htmlFor="image-file">
        <Image src={image} />
      </ImageLabel>

      <ImageInput
        type="file"
        id="image-file"
        accept="image/x-png, image/jpeg"
        onChange={handleImage}
      />

      {fields.map((field) => {
        return (
          <Fields key={`${field}`}>
            <Label htmlFor={`${field}`}>{field}</Label>
            {field === "description" ? (
              <TextArea id={`${field}`} {...register(`${field}`)} />
            ) : (
              <>
                <InputDiv>
                  <InputFields
                    id={`${field}`}
                    type={field === "price" ? "number" : "text"}
                    style={field === "price" ? { width: "100px" } : {}}
                    {...register(`${field}`)}
                  />
                  <DigitPrice>{field === "price" ? "$" : ""}</DigitPrice>
                </InputDiv>
              </>
            )}
            {errors[field] && (
              <Errors>{errors[field]?.message?.toString()}</Errors>
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
