import { pageUnitAmount } from '@/const/pageUnitAmount';
import { ArticleMetadata } from '@/types/article';

export function GetPaginatedArticlesMetadata(
  page: number,
  articleMetadataList: ArticleMetadata[]
): {
  articles: ArticleMetadata[];
  totalPageNumber: number;
} | null {
  const totalPageNumber = Math.ceil(
    articleMetadataList.length / pageUnitAmount
  );
  const start = (page - 1) * pageUnitAmount;
  const end = start + pageUnitAmount;
  const articles = articleMetadataList.slice(start, end);
  if (articles.length === 0) {
    return null;
  }
  return { articles, totalPageNumber };
}
