import { PrismaClient, Recipe } from '@prisma/client';
import type { NextApiRequest, NextApiResponse } from 'next';

const prisma = new PrismaClient();

/* 指定したidのレシピを取得 */
export default async function handler(req: NextApiRequest, res: NextApiResponse<Recipe | null>) {
  const recipe = await prisma.recipe.findUnique({
    where: {
      id: Number(req.query.id),
    },
  });
  res.status(200).json(recipe);
}
