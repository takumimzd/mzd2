import { BlogListPresentation, Props } from './presentations/presentation';

const blogs: Props['blogs'] = [
  {
    id: 8,
    title: '軽量なグローバル状態管理ライブラリ「zustand」',
    date: '2023/08/08',
    url: 'https://zenn.dev/stmn_inc/articles/f1101cfa20dedc',
    image: 'https://zenn.dev/images/og-large.png',
  },
  {
    id: 7,
    title: 'Popover API さわってみた',
    date: '2023/12/22',
    url: 'https://zenn.dev/stmn_inc/articles/1ce5afa60f0c9a',
    image: 'https://zenn.dev/images/og-large.png',
  },
  {
    id: 6,
    title: 'スケルトンスクリーンを小さく導入してみた',
    date: '2022/12/22',
    url: 'https://tech.stmn.co.jp/entry/2022/12/22/184952',
    image: 'hatena.gif',
  },
  {
    id: 5,
    title: 'インペディメントリスト 〜スクラムチームの一番重要な問題を改善し続ける方法〜',
    date: '2022/12/13',
    url: 'https://tech.stmn.co.jp/entry/2022/12/13/162849',
    image: 'hatena.gif',
  },
  {
    id: 4,
    title: '共通UIコンポーネントで速くクオリティの高いプロダクトを開発をしたい。',
    date: '2022/08/16',
    url: 'https://tech.stmn.co.jp/entry/2022/08/16/153454',
    image: 'hatena.gif',
  },
  {
    id: 3,
    title: 'React SuspenseによるWeb Vitalsの改善',
    date: '2022/03/05',
    url: 'https://zenn.dev/mzd/articles/0b2e54eac31ceb',
    image: 'https://zenn.dev/images/og-large.png',
  },
  {
    id: 2,
    title: '[Typescript]便利なUtility Types',
    date: '2021/12/18',
    url: 'https://zenn.dev/mzd/articles/1967b161f35f0e',
    image: 'https://zenn.dev/images/og-large.png',
  },
  {
    id: 1,
    title: 'Storybookについて調べてみました。',
    date: '2021/05/17',
    url: 'https://tech.stmn.co.jp/entry/2021/05/17/155842',
    image: 'hatena.gif',
  },
];

export const BlogList = () => {
  return <BlogListPresentation blogs={blogs} />;
};
