import rss from "@astrojs/rss";
import { getCollection } from "astro:content";
import { SITE } from "@consts";

type Context = {
  site: string;
};

export async function GET(context: Context) {
  const posts = await getCollection("blog");

  const items = [...posts];

  items.sort(
    (a, b) => new Date(b.data.date).getTime() - new Date(a.data.date).getTime()
  );

  // filter out drafts and external posts
  const filtered = items.filter(
    (item) => !item.data.draft && !item.data.external
  );

  return rss({
    title: SITE.TITLE,
    description: SITE.DESCRIPTION,
    site: context.site,
    items: filtered.map((item) => ({
      title: item.data.title,
      pubDate: item.data.date,
      link: `/blog/${item.slug}/`,
    })),
  });
}
