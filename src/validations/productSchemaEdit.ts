import z from "zod";

export const productSchemaEdit = z.object({
  id: z.string(),
  name: z
    .string()
    .min(1, "The product is required")
    .max(30, "The product name max length is 30 characters"),
  description: z
    .string()
    .max(200, "The description max length is 200 characters")
    .optional(),
  price: z.number().min(1),
});

export type ProductSchemaEdit = z.infer<typeof productSchemaEdit>;
