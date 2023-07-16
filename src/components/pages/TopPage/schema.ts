import { z } from 'zod';

export const formSchema = z.object({
  portfolioUrl: z.string().url(),
  name: z.string().nonempty(),
  email: z.string().email(),
});

export type FormSchema = z.infer<typeof formSchema>;
