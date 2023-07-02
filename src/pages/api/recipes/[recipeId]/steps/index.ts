import { PrismaClient, RecipeStep } from '@prisma/client';
import type { NextApiRequest, NextApiResponse } from 'next';

const prisma = new PrismaClient();

/* レシピの手順を取得 */
export default async function handler(req: NextApiRequest, res: NextApiResponse<RecipeStep[]>) {
  const steps = await prisma.recipeStep.findMany({
    where: {
      recipeId: Number(req.query.recipeId),
    },
    orderBy: {
      order: 'asc',
    },
    include: {
      recipeStepImages: {},
    },
  });
  res.status(200).json(steps);
}
