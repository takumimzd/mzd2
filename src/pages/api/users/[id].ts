import { PrismaClient, User } from '@prisma/client';
import type { NextApiRequest, NextApiResponse } from 'next';

const prisma = new PrismaClient();

/* 指定したidのユーザーを取得 */
export default async function handler(req: NextApiRequest, res: NextApiResponse<User | null>) {
  const user = await prisma.user.findUnique({
    where: {
      id: Number(req.query.id),
    },
  });
  res.status(200).json(user);
}
