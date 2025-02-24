import Link from 'next/link';

export const Tag = ({
  tag,
  articleAmount,
}: {
  tag: string;
  articleAmount?: number;
}) => {
  return (
    <Link
      href={`/articles?tag=${tag}`}
      className="inline-block bg-gray-200/75 text-gray-900 rounded-full px-4 py-1 text-sm mr-2"
      scroll
    >
      {tag} {articleAmount ? `(${articleAmount})` : ''}
    </Link>
  );
};
