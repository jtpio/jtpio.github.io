import type { RemarkPlugin } from "@astrojs/markdown-remark";
import { visit, EXIT } from "unist-util-visit";
// registers the `math` and `inlineMath` node types on mdast
import type {} from "mdast-util-math";

/**
 * Flag entries that contain math, so the KaTeX stylesheet is only loaded on the
 * pages that need it.
 *
 * This runs on the tree `remark-math` produces, so it agrees exactly with what
 * `rehype-katex` ends up rendering: a `$` inside a code block never counts. The
 * flag surfaces as `remarkPluginFrontmatter.hasMath` on the rendered entry.
 */
export const remarkHasMath: RemarkPlugin = () => (tree, file) => {
  visit(tree, (node) => {
    if (node.type !== "math" && node.type !== "inlineMath") {
      return;
    }

    const astro = (file.data.astro ??= {});
    astro.frontmatter ??= {};
    astro.frontmatter.hasMath = true;
    return EXIT;
  });
};
