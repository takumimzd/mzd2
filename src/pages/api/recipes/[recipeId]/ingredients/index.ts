import { PrismaClient, RecipeIngredient } from '@prisma/client';
import type { NextApiRequest, NextApiResponse } from 'next';

const prisma = new PrismaClient();

/* レシピの食材を取得 */
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<RecipeIngredient[]>,
) {
  const ingredients = await prisma.recipeIngredient.findMany({
    where: {
      recipeId: Number(req.query.recipeId),
    },
  });
  res.status(200).json(ingredients);
}
