import Link from 'next/link';

export default function NotFoundPage() {
  return (
    <div className="flex flex-col items-center justify-center gap-8 h-screen">
      <h1 className="text-5xl text-gray-700">404 Not Found</h1>
      <Link href="/" className="border-b border-gray-700" scroll>
        トップページへ戻る
      </Link>
    </div>
  );
}
