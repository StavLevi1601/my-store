import z from "zod";

export const productSchemaAdding = z.object({
  name: z
    .string()
    .min(1, "The product is required")
    .max(30, "The product name max length is 30 characters"),
  description: z
    .string()
    .max(200, "The description max length is 200 characters")
    .optional(),
  price: z.preprocess(
    (val) => Number(val),
    z.number().min(1, "Price must be at least 1")
  ),
  image: z.string().optional(),
});

export type ProductSchemaAdding = z.infer<typeof productSchemaAdding>;
