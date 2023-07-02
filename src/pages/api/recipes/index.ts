import { PrismaClient, Recipe } from '@prisma/client';
import type { NextApiRequest, NextApiResponse } from 'next';

const prisma = new PrismaClient();

/* レシピの一覧を取得 */
export default async function handler(_: NextApiRequest, res: NextApiResponse<Recipe[]>) {
  const recipes = await prisma.recipe.findMany();
  res.status(200).json(recipes);
}
