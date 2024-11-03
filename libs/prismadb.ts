import { PrismaClient } from "@prisma/client";

const globalPrisma = global as { prisma?: PrismaClient };

const client = globalPrisma.prisma ?? new PrismaClient();
if (process.env.NODE_ENV !== "production") globalPrisma.prisma = client;

export default client;
