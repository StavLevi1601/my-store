import { FormProvider, useForm } from "react-hook-form";

import { ProductForm } from "../form/product-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  ProductSchemaAdding,
  productSchemaAdding,
} from "../../validations/productSchemaAdding";

type Props = {
  onSave: (product: ProductSchemaAdding) => void;
};

export function ProductAdd({ onSave }: Props) {
  const methods = useForm<ProductSchemaAdding>({
    resolver: zodResolver(productSchemaAdding),
  });

  console.log("Errors:", methods.formState.errors);

  return (
    <div>
      <FormProvider {...methods}>
        <ProductForm onSave={onSave} />
      </FormProvider>
    </div>
  );
}
