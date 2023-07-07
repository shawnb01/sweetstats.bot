import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "@/server/api/trpc";

export const guardianRouter = createTRPCRouter({
  top100: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.example.findMany();
  }),
  getAll: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.example.findMany();
  }),
});
