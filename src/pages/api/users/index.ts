import { PrismaClient, User } from '@prisma/client';
import type { NextApiRequest, NextApiResponse } from 'next';

const prisma = new PrismaClient();

/* ユーザーの一覧を取得 */
export default async function handler(_: NextApiRequest, res: NextApiResponse<User[]>) {
  const users = await prisma.user.findMany();
  res.status(200).json(users);
}
