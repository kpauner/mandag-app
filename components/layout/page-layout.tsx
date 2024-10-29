import { cva } from "class-variance-authority";

const pageLayoutVariants = cva("mx-auto w-full", {
  variants: {
    variant: {
      default: "w-full flex-1",
      page: "max-w-screen-xl flex flex-1 flex-col gap-4 ",
      post: "max-w-screen-lg flex flex-1 flex-col gap-4 ",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

type PageLayoutProps = {
  children: React.ReactNode;
  as?: React.ElementType;
  variant?: "default" | "page" | "post";
  className?: string;
};

const PageLayout = ({
  children,
  as: Component = "section",
  variant,
  className,
  ...props
}: PageLayoutProps) => {
  return (
    <Component
      {...props}
      className={pageLayoutVariants({ variant, className })}
    >
      {children}
    </Component>
  );
};
PageLayout.displayName = "PageLayout";
export { PageLayout };
