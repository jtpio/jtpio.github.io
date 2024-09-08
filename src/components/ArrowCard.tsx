import { formatDate } from "@lib/utils";
import type { CollectionEntry } from "astro:content";

type Props = {
  entry: CollectionEntry<"blog">;
  pill?: boolean;
};

export default function ArrowCard({ entry, pill }: Props) {
  return (
    <a
      href={entry.data.external ? entry.data.external.url : `/${entry.collection}/${entry.slug}`}
      target={entry.data.external ? "_blank" : "_self"}
      title={entry.data.external ? `Read on ${entry.data.external.name}` : ''}
      class="group py-2 px-4 flex items-center border rounded-lg hover:bg-black/5 hover:dark:bg-white/10 border-black/15 dark:border-white/20 transition-colors duration-300 ease-in-out"
    >
      <div class="w-full group-hover:text-black group-hover:dark:text-white blend">
        <div class="flex flex-wrap items-center gap-2">
          {pill && (
            <div class="text-sm capitalize px-2 py-0.5 rounded-full border border-black/15 dark:border-white/25">
              post
            </div>
          )}
          <div class="text-sm uppercase">{formatDate(entry.data.date)}</div>
        </div>
        <div class="font-semibold mt-1 text-black dark:text-white">
          {entry.data.title}
        </div>

        <ul class="flex flex-wrap mt-2 gap-1">
          {entry.data.tags.map((tag: string) => (
            <li class="text-xs uppercase py-0.5 px-1 rounded bg-black/5 dark:bg-white/20 text-black/75 dark:text-white/75">
              {tag}
            </li>
          ))}
        </ul>
      </div>
      {!entry.data.external && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke-width="2.5"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="stroke-current group-hover:stroke-black group-hover:dark:stroke-white"
        >
          <line
            x1="5"
            y1="12"
            x2="19"
            y2="12"
            class="scale-x-0 group-hover:scale-x-100 translate-x-4 group-hover:translate-x-1 transition-all duration-300 ease-in-out"
          />
          <polyline
            points="12 5 19 12 12 19"
            class="translate-x-0 group-hover:translate-x-1 transition-all duration-300 ease-in-out"
          />
        </svg>
      )}
      {entry.data.external && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 512 512"
          fill="none"
          class="fill-current group-hover:fill-black group-hover:dark:fill-white"
        >
          {/* <!--!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--> */}
          <path d="M432 320H400a16 16 0 0 0 -16 16V448H64V128H208a16 16 0 0 0 16-16V80a16 16 0 0 0 -16-16H48A48 48 0 0 0 0 112V464a48 48 0 0 0 48 48H400a48 48 0 0 0 48-48V336A16 16 0 0 0 432 320zM488 0h-128c-21.4 0-32.1 25.9-17 41l35.7 35.7L135 320.4a24 24 0 0 0 0 34L157.7 377a24 24 0 0 0 34 0L435.3 133.3 471 169c15 15 41 4.5 41-17V24A24 24 0 0 0 488 0z" />
        </svg>
      )}
    </a>
  );
}
