import { existsSync, readFileSync, readdirSync } from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { FrontMatter } from '@/types/frontMatter';
import { ArticleMetadata } from '@/types/article';

// MDXファイルのディレクトリ
const ARTICLES_PATH = path.join(process.cwd(), 'src/contents/articles');

// ファイル名（slug）の一覧を取得
export function GetAllPostSlugs() {
  const postFilePaths = readdirSync(ARTICLES_PATH).filter((path) =>
    /\.mdx?$/.test(path)
  );
  return postFilePaths.map((path) => {
    const slug = path.replace(/\.mdx?$/, '');
    return slug;
  });
}

// ファイル一覧を取得
export function GetAllPostsMetadata(): ArticleMetadata[] {
  const slugs = GetAllPostSlugs();
  return slugs.flatMap((slug) => {
    const fetchFrontMatterResult = GetPostBySlug(slug);
    if (!fetchFrontMatterResult) {
      return [];
    }
    const { frontMatter } = fetchFrontMatterResult;

    return [
      {
        slug,
        ...frontMatter,
      },
    ];
  });
}

export function GetLatestPosts(amount: number): ArticleMetadata[] {
  return GetAllPostsMetadata()
    .sort((a, b) => {
      return new Date(b.date).getTime() - new Date(a.date).getTime();
    })
    .slice(0, amount);
}

// slugからファイルの中身を取得
export function GetPostBySlug(slug: string): {
  content: string;
  frontMatter: FrontMatter;
} | null {
  const filePath = `src/contents/articles/${slug}.mdx`;
  if (!existsSync(filePath)) {
    return null;
  }
  const markdown = readFileSync(`src/contents/articles/${slug}.mdx`, 'utf8');

  const { content, data } = matter(markdown);

  return {
    content,
    frontMatter: convertToFrontMatter({ slug, data }),
  };
}

function convertToFrontMatter({
  slug,
  data,
}: {
  slug: string;
  data: {
    [key: string]: string;
  };
}): FrontMatter {
  if (!data.date) {
    console.error(`No date provided for ${slug}`);
    throw new Error('No date provided');
  }
  if (!data.title) {
    console.error(`No title provided for ${slug}`);
    throw new Error('No title provided');
  }
  if (data.tags === undefined) {
    console.error(`No tags provided for ${slug}`);
    throw new Error('No tags provided');
  }
  if (!Array.isArray(data.tags)) {
    console.error(`Invalid tags provided for ${slug}`);
    throw new Error('Invalid tags provided');
  }
  if (!data.coverImage) {
    console.error(`No coverImage provided for ${slug}`);
    throw new Error('No coverImage provided');
  }
  if (!data.description) {
    console.error(`No description provided for ${slug}`);
    throw new Error('No description provided');
  }
  return {
    title: data.title,
    description: data.description,
    date: data.date,
    tags: data.tags,
    coverImage: data.coverImage,
  };
}
