import { ArticleCard } from '@/components/ArticleCard';
import { PaginationNav } from '@/components/PaginationNav';
import { getAllTags } from '@/libs/getAllTags';
import { getArticlesMetadataByTag } from '@/libs/getArticlesMetadataByTag';
import { GetPaginatedArticlesMetadata } from '@/libs/getPaginatedArticles';
import { getLastPageNumber } from '@/libs/getTotalPageAmount';
import { GetAllPostsMetadata } from '@/libs/posts';
import { Metadata } from '@/types/metadata';
import { notFound } from 'next/navigation';

interface Props {
  searchParams: {
    tag: string | null;
    page: number | null;
  };
}

export async function generateStaticParams() {
  const allPostAmount = GetAllPostsMetadata();
  const result: { tag?: string; page: number }[] = [];

  const lastPageNumber = getLastPageNumber(allPostAmount);
  for (let i = 1; i <= lastPageNumber; i++) {
    result.push({ page: i });
  }

  const allTags = getAllTags();
  allTags.forEach((tag) => {
    const articlesInTag = getArticlesMetadataByTag(tag);
    const lastPageNumber = getLastPageNumber(articlesInTag);
    for (let i = 1; i <= lastPageNumber; i++) {
      result.push({ tag, page: i });
    }
  });

  return result;
}

export default async function ArticlesPage({ searchParams }: Props) {
  const { tag, page } = await searchParams;
  const postMetadataList: Metadata[] = tag
    ? getArticlesMetadataByTag(tag)
    : GetAllPostsMetadata();

  const fetchResult = GetPaginatedArticlesMetadata(page || 1, postMetadataList);

  if (!fetchResult) {
    console.log('not found');
    notFound();
  }

  const { articles, totalPageNumber } = fetchResult;

  const paginationQueryParameter = `${tag ? `?tag=${tag}` : ''}`;

  return (
    <div className="flex mt-16 flex-col items-center gap-8">
      <div className="w-4/5 grid gap-16">
        <div className="">
          <h1 className="text-5xl text-gray-700">
            {!tag ? '全ての記事' : tag}
          </h1>
          <p className="text-gray-700">{postMetadataList.length}件</p>
        </div>
        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16
        "
        >
          {articles.map((article) => (
            <ArticleCard key={article.slug} {...article} />
          ))}
        </div>
      </div>
      <PaginationNav
        basePath={`/articles${paginationQueryParameter}`}
        currentPage={page || 1}
        totalPages={totalPageNumber}
      />
    </div>
  );
}
