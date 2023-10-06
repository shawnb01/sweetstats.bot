import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "@/server/api/trpc";

export const guardianRouter = createTRPCRouter({
  findPlayerByNameAndCode: publicProcedure
    .input(z.object({ name: z.string(), code: z.string() }))
    .query(({ input }) => {
      return {
        name: input.name,
        code: input.code,
      };
    }),

  getTop10SortedByLight: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.destinyCharacter.findMany({
      orderBy: {
        light: "desc",
      },
      take: 10,
    });
  }),
  getAllSortedByLight: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.destinyCharacter.findMany({
      orderBy: {
        light: "desc",
      },
    });
  }),
});
