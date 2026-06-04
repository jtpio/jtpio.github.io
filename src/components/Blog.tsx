import type { CollectionEntry } from "astro:content";
import { createEffect, createSignal, For } from "solid-js";
import ArrowCard from "@components/ArrowCard";

type Props = {
  data: CollectionEntry<"blog">[];
  tags: string[];
};

export default function Blog(props: Props) {
  const [filter] = createSignal(new Set<string>());
  const [posts, setPosts] = createSignal<CollectionEntry<"blog">[]>([]);

  createEffect(() => {
    setPosts(
      props.data.filter((entry) =>
        Array.from(filter()).every((value) =>
          entry.data.tags.some(
            (tag: string) => tag.toLowerCase() === String(value).toLowerCase()
          )
        )
      )
    );
  });

  return (
    <div class="grid grid-cols-1 sm:grid-cols-3 gap-6">
      <div class="col-span-3 sm:col-span-3">
        <div class="flex flex-col">
          <div class="text-sm uppercase mb-2">
            SHOWING {posts().length} POSTS
          </div>
          <ul class="flex flex-col gap-3">
            <For each={posts()}>
              {(post) => (
                <li>
                  <ArrowCard entry={post} />
                </li>
              )}
            </For>
          </ul>
        </div>
      </div>
    </div>
  );
}
