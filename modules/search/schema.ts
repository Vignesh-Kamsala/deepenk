import { z } from "zod";

export const searchBodySchema = z.object({
  query: z.string().min(1).max(500),
  category: z.enum(["shopping", "food", "rides", "travel", "hotels"]).optional(),
});

export type SearchBody = z.infer<typeof searchBodySchema>;
