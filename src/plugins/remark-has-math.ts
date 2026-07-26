import type { RemarkPlugin } from "@astrojs/markdown-remark";

type Node = { type: string; children?: Node[] };

const containsMath = (node: Node): boolean =>
  node.type === "math" ||
  node.type === "inlineMath" ||
  (node.children?.some(containsMath) ?? false);

/**
 * Flag entries that contain math, so the KaTeX stylesheet is only loaded on the
 * pages that need it.
 *
 * This runs on the tree `remark-math` produces, so it agrees exactly with what
 * `rehype-katex` ends up rendering: a `$` inside a code block never counts. The
 * flag surfaces as `remarkPluginFrontmatter.hasMath` on the rendered entry.
 */
export const remarkHasMath: RemarkPlugin = () => (tree, file) => {
  if (!containsMath(tree)) {
    return;
  }

  const astro = (file.data.astro ??= {});
  astro.frontmatter ??= {};
  astro.frontmatter.hasMath = true;
};
