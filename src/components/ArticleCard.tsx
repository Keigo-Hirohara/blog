import { formatDateForDisplay } from '@/libs/formatDate';
import { ArticleMetadata } from '@/types/article';
import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';

export const ArticleCard: FC<ArticleMetadata> = ({
  slug,
  title,
  description,
  date,
  coverImage,
}) => {
  return (
    <Link
      key={slug}
      href={`/articles/${slug}`}
      className="bg-gray-50 p-4 flex justify-between flex-col w-sm"
      scroll
    >
      <div className="grow flex justify-between flex-col">
        <h2 className="grow text-2xl font-bold text-gray-700 break-words">
          {title}
        </h2>
        <p className="grow my-8 text-gray-500 break-words line-clamp-3">
          {description}
        </p>
      </div>
      <div className="w-full aspect-2/3">
        <p className="text-gray-500 text-xs mb-2">
          {formatDateForDisplay(date)}
        </p>
        <Image
          alt={title}
          src={coverImage}
          width="0"
          height="0"
          layout="responsive"
          className="object-cover"
        />
      </div>
    </Link>
  );
};
