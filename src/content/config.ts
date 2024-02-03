import { defineCollection, z } from "astro:content";

const cocktailsCollection = defineCollection({
    schema: ({ image }) =>
        z.object({
            name: z.string(),
            price: z.number(),
            description: z.string(),
            textWidth: z.string(),
            imageWidth: z.string().optional(),
            image: image(),
        }),
});

export const collections = {
    cocktails: cocktailsCollection,
};
