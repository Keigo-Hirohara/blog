import { ArticleCard } from '@/components/ArticleCard';
import { Tag } from '@/components/Tag';
import { getAllTags } from '@/libs/getAllTags';
import { getArticlesMetadataByTag } from '@/libs/getArticlesMetadataByTag';
import { GetLatestPosts } from '@/libs/posts';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'アプリ開発者のための実践的SRE',
  description:
    '開発者としてアプリを作る人間が、SREに入門して信頼性を向上できるようになるブログ',
};

export default function Home() {
  const posts = GetLatestPosts(6);
  const tags = getAllTags();
  const articleAmountPerTag = tags
    .map((tag) => {
      const articlesRelatedTag = getArticlesMetadataByTag(tag);
      return {
        tag,
        articleAmount: articlesRelatedTag.length,
      };
    })
    .sort((a, b) => b.articleAmount - a.articleAmount);

  return (
    <div className="w-full flex flex-col gap-16 items-center">
      <div
        style={{
          backgroundImage: `url(/images/320A1775-2.jpg)`,
          backgroundSize: 'cover',
          width: '100%',
          height: '75vh',
          objectFit: 'cover',
        }}
      >
        <div className="bg-black/70 w-full h-full flex justify-center flex-col px-8 gap-2 z-10 flex items-center break-words">
          <div className="w-4/5 flex justify-center">
            <h1 className="text-white text-3xl">
              システムが信頼できると、作る側もすごく安心。
            </h1>
          </div>
        </div>
      </div>
      <div className="w-4/5 grid gap-8">
        <h1 className="text-5xl text-gray-700">最新記事</h1>
        <div className="w-full flex flex-wrap gap-16 justify-center">
          {posts.map((post) => (
            <ArticleCard key={post.slug} {...post} />
          ))}
        </div>
      </div>
      <div className="w-4/5 grid gap-8">
        <h1 className="text-5xl text-gray-700">タグ</h1>
        <div className="flex gap-4">
          {articleAmountPerTag.map(({ tag, articleAmount }) => (
            <Tag key={tag} tag={tag} articleAmount={articleAmount} />
          ))}
        </div>
      </div>
    </div>
  );
}
