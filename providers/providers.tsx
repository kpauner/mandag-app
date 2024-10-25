import QueryProvider from "./query-provider";
import UiProvider from "./ui-provider";
// import IntlProvider from './intl-provider';

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <QueryProvider>
      <UiProvider>{children}</UiProvider>
    </QueryProvider>
  );
}
