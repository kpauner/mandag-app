import type { MDXComponents } from "mdx/types";
import defaultComponents from "fumadocs-ui/mdx";
import ColorCard from "./features/docs/components/color-card";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...defaultComponents,
    ColorCard: ColorCard,
    ...components,
  };
}
