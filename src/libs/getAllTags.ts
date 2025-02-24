import { GetAllPostsMetadata } from './posts';

export const getAllTags = () => {
  const tags = new Set<string>();
  const metadataList = GetAllPostsMetadata();
  metadataList.forEach((metadata) => {
    metadata.tags.forEach((tag) => {
      tags.add(tag);
    });
  });
  return Array.from(tags);
};
