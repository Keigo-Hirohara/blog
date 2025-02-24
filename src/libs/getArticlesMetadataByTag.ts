import { Metadata } from '@/types/metadata';
import { GetAllPostsMetadata } from './posts';

export const getArticlesMetadataByTag = (tag: string): Metadata[] => {
  const metadataList = GetAllPostsMetadata();

  return metadataList.filter((metadata) => metadata.tags.includes(tag));
};
