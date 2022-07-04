import { z } from "zod";

const JobVal = z.object({
    summary: z.object({ 
        text: z.string(),
        tags: z.array(z.string())
    }),
    bullets: z.array(
        z.object({ 
            text: z.string(),
            tags: z.array(z.string())
        })
    )
})

export type JobType = z.infer<typeof JobVal>;