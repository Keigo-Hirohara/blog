import Link from 'next/link';
import { FC } from 'react';

type Props = {
  basePath: string;
  currentPage: number;
  totalPages: number;
};

export const PaginationNav: FC<Props> = (props) => {
  const { basePath, currentPage, totalPages } = props;

  const isExistQueryParameter = basePath.includes('?');

  return (
    <div className="flex gap-2 mb-16 justify-center">
      {Array.from({ length: totalPages }).map((_, index) => {
        if (index + 1 === currentPage) {
          return (
            <p
              key={index}
              className="block w-10 h-12 flex items-center justify-center bg-gray-200 text-gray-700"
            >
              {index + 1}
            </p>
          );
        }

        return currentPage === index + 1 ? (
          <p
            key={index}
            className={`block w-10 h-12 flex items-center justify-center bg-gray-${
              currentPage == index + 1 ? '200' : '100'
            } text-gray-700`}
          >
            {index + 1}
          </p>
        ) : (
          <Link
            key={index}
            href={`${basePath}${isExistQueryParameter ? '&' : '?'}page=${
              index + 1
            }`}
            className={`block w-10 h-12 flex items-center justify-center bg-gray-${
              currentPage == index + 1 ? '200' : '100'
            } text-gray-700`}
            scroll
          >
            {index + 1}
          </Link>
        );
      })}
    </div>
  );
};
