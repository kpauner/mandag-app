import * as VisuallyHidden from "@radix-ui/react-visually-hidden";

export default function VisuallyHide({
  children,
}: {
  children: React.ReactNode;
}) {
  return <VisuallyHidden.Root>{children}</VisuallyHidden.Root>;
}
