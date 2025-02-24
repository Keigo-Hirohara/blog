import { Tag } from '@/components/Tag';
import { formatDateForDisplay } from '@/libs/formatDate';
import { GetAllPostSlugs, GetPostBySlug } from '@/libs/posts';
import { MDXRemote } from 'next-mdx-remote/rsc';
import { notFound } from 'next/navigation';
// import Image from 'next/image';
import remarkGfm from 'remark-gfm';

interface PostPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const slugs = GetAllPostSlugs();
  return slugs.map((slug) => ({ params: { slug } }));
}

export default async function PostPage({ params }: PostPageProps) {
  const options = {
    mdxOptions: {
      remarkPlugins: [remarkGfm],
    },
  };

  const { slug } = await params;
  const result = GetPostBySlug(slug);
  console.log(slug);

  if (!result) {
    notFound();
  }

  const { content, frontMatter } = result;

  const displayPublishedAt = formatDateForDisplay(frontMatter.date);

  return (
    <div className="w-full flex flex-col gap-4 items-center">
      <div
        style={{
          backgroundImage: `url(${frontMatter.coverImage})`,
          aspectRatio: '16/9',
          backgroundSize: 'cover',
          width: '100%',
        }}
      >
        <div className="bg-black/70 w-full h-full flex justify-center flex-col px-8 gap-2 z-10 flex items-center break-words">
          <div className="w-4/5 flex flex-col gap-4">
            <h1 className="text-white font-bold text-3xl">
              {frontMatter.title}
            </h1>
            <p className="text-white">{displayPublishedAt}</p>
            <div className="">
              {frontMatter.tags.map((tag) => (
                <Tag key={tag} tag={tag} />
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="w-3/5">
        <article className="prose max-w-full break-words">
          <MDXRemote source={content} options={options} />
        </article>
      </div>
      {/* </div> */}
    </div>
  );
}
