import { FrontMatter } from './frontMatter';

export type ArticleMetadata = {
  slug: string;
} & FrontMatter;

export type Article = {
  content: string;
} & ArticleMetadata;
