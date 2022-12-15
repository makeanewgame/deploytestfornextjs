'use client';

import { MDXRemote, type MDXRemoteSerializeResult } from 'next-mdx-remote';
import { useThemeStore } from '@/stores/theme-store';
import { MdxComponents } from '@/components/mdx-components';
import clsx from 'clsx';

interface MdxContentProps {
  source: MDXRemoteSerializeResult;
}

export function MdxContent({ source }: MdxContentProps) {
  const fontSize = useThemeStore((state) => state.fontSize);
  const isSerif = useThemeStore((state) => state.isSerif);

  return (
    <section
      className={clsx(
        isSerif && 'font-serif',
        'prose-' + fontSize,
        'prose prose-slate max-w-none py-8 prose-headings:drop-shadow-sm prose-a:text-rose-700 prose-a:no-underline prose-blockquote:border-l-slate-800 prose-code:m-0 prose-code:inline-block prose-code:rounded prose-code:bg-slate-500 prose-code:px-2 prose-code:font-mono prose-code:text-slate-200 prose-code:before:content-none prose-code:after:content-none prose-ul:my-1 prose-li:my-0 prose-li:marker:text-slate-600 prose-hr:border-slate-700 dark:prose-invert dark:text-rose-50 dark:prose-headings:text-rose-50 dark:prose-a:text-rose-300 dark:prose-blockquote:border-l-slate-300 dark:prose-blockquote:text-rose-50 dark:prose-code:bg-slate-400 dark:prose-code:text-slate-700 dark:prose-li:marker:text-slate-400 dark:prose-hr:border-slate-300',
      )}
    >
      <MDXRemote {...source} components={MdxComponents} />
    </section>
  );
}
