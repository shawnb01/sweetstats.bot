import { AppProps, type AppType } from "next/app";
import { api } from "@/utils/api";
import "@/styles/globals.css";
import { ThemeProvider } from "@/component/theme-provider";
import { Layout } from "@/component/layout";
import { ClerkProvider } from "@clerk/nextjs";
import { dark } from "@clerk/themes";

const MyApp: AppType = ({ Component, pageProps }: AppProps) => {
  return (
    <ThemeProvider attribute="class" defaultTheme="dark">
      <ClerkProvider {...pageProps} appearance={{ baseTheme: dark }}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ClerkProvider>
    </ThemeProvider>
  );
};

export default api.withTRPC(MyApp);
