const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
async function main() {
  await prisma.user.createMany({ data: [{ name: 'MZD' }, { name: 'MZD2' }] });
  await prisma.recipe.createMany({
    data: [
      {
        name: 'からあげ',
        description: 'おいしい唐揚げです。いつもこれで作ってます。',
        userId: 1,
        imageUrl: 'https://picsum.photos/200/300',
      },
      {
        name: 'ラーメン',
        description: 'おいしいラーメンです。いつもこれで作ってます。',
        userId: 1,
        imageUrl: 'https://picsum.photos/200/300',
      },
    ],
  });
  await prisma.recipeIngredient.createMany({
    data: [
      { name: '鶏もも肉', amount: '300g', recipeId: 1 },
      { name: '醤油', amount: '大さじ4', recipeId: 1 },
      { name: 'みりん', amount: '大さじ1', recipeId: 1 },
      { name: '酒', amount: '大さじ1', recipeId: 1 },
      { name: '味の素', amount: '適量', recipeId: 1 },
      { name: 'にんにく', amount: '多ければ多いほど美味しい', recipeId: 1 },
      { name: '油(サラダ油と胡麻油)', amount: '適量', recipeId: 1 },
      { name: '片栗粉', amount: '適量', recipeId: 1 },
    ],
  });
  await prisma.recipeStep.createMany({
    data: [
      { order: 1, description: '鶏もも肉を一口大に切る', recipeId: 1 },
      { order: 2, description: '調味料(☆)に切った鶏もも肉を15分ほど漬ける', recipeId: 1 },
      { order: 3, description: '鶏もも肉と調味料(☆)大さじ3と片栗粉を混ぜる', recipeId: 1 },
      {
        order: 4,
        description:
          '熱した油で鶏もも肉を揚げる。鍋いっぱいにして揚げるんじゃなくて少しずつ揚げると油の温度が低くならないから良いよ',
        recipeId: 1,
      },
    ],
  });
  await prisma.recipeStepImage.createMany({
    data: [
      { imageUrl: 'https://picsum.photos/200/300', recipeStepId: 1 },
      { imageUrl: 'https://picsum.photos/200/300', recipeStepId: 2 },
      { imageUrl: 'https://picsum.photos/200/300', recipeStepId: 2 },
      { imageUrl: 'https://picsum.photos/200/300', recipeStepId: 3 },
      { imageUrl: 'https://picsum.photos/200/300', recipeStepId: 3 },
      { imageUrl: 'https://picsum.photos/200/300', recipeStepId: 4 },
    ],
  });
}
main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
