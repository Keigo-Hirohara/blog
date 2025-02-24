import { pageUnitAmount } from '@/const/pageUnitAmount';
import { ArticleMetadata } from '@/types/article';

export const getLastPageNumber = (articles: ArticleMetadata[]) => {
  return Math.ceil(articles.length / pageUnitAmount);
};
