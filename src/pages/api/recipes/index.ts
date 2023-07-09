import { PrismaClient, Recipe, User } from '@prisma/client';
import type { NextApiRequest, NextApiResponse } from 'next';

const prisma = new PrismaClient();

export type RecipeWithUser = Recipe & { user: User };

/* レシピの一覧を取得 */
export default async function handler(_: NextApiRequest, res: NextApiResponse<RecipeWithUser[]>) {
  const recipes = await prisma.recipe.findMany({
    include: {
      user: {},
    },
  });
  res.status(200).json(recipes);
}
