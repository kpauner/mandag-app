import QueryProvider from "./query-provider";
import { ThemeProvider } from "./theme-provider";
import UiProvider from "./ui-provider";
// import IntlProvider from './intl-provider';

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="light"
      enableSystem={true}
      disableTransitionOnChange
    >
      <QueryProvider>
        <UiProvider>{children}</UiProvider>
      </QueryProvider>
    </ThemeProvider>
  );
}
