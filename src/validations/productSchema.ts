import z from "zod";

export const productSchema = z.object({
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
  creationDate: z
    .date()
    .max(new Date(), "Creation date cannot be in the future"),
  image: z.string().optional(),
});

export type ProductSchema = z.infer<typeof productSchema>;
