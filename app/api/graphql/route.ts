import { ApolloServer } from "@apollo/server";
import { startServerAndCreateNextHandler } from "@as-integrations/next";
import { PrismaClient } from "@prisma/client";
import { resolvers } from "@/graphql/resolvers"
import { typeDefs } from "@/graphql/schema";
import {NextRequest} from "next/server";
import { prisma } from "@/prisma/db";

export type Context = {
    prisma: PrismaClient
};

const server = new ApolloServer<Context | object>({
    resolvers,
    typeDefs,
    introspection: process.env.VERCEL_ENV !== "production",
});

const handler = startServerAndCreateNextHandler<NextRequest>(server, {
    context: async (req, res) => ({ req, res, prisma }),
});

export async function GET(request: NextRequest) {
    request.headers.append('Access-Control-Allow-Origin', '*');
    request.headers.append('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    request.headers.append('Access-Control-Allow-Headers','Content-Type, Authorization');
    return handler(request);
}


export async function POST(request: NextRequest) {
    request.headers.append('Access-Control-Allow-Origin', '*');
    request.headers.append('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    request.headers.append('Access-Control-Allow-Headers','Content-Type, Authorization');
    return handler(request);
}

