import { DocsLayout } from "fumadocs-ui/layouts/docs";
import type { ReactNode } from "react";
import { source } from "@/lib/source";
import "fumadocs-ui/style.css";
// ... your other imports
export default function RootDocsLayout({ children }: { children: ReactNode }) {
  return (
    <DocsLayout tree={source.pageTree} nav={{ title: "Group Finder" }}>
      {children}
    </DocsLayout>
  );
}
