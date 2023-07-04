import { type AppType } from "next/app";
import { api } from "@/utils/api";
import "@/styles/globals.css";
import { ThemeProvider } from "@/component/theme-provider";
import { Layout } from "@/component/layout";

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <ThemeProvider attribute="class" defaultTheme="dark">
      <Layout>
        <Component {...pageProps} suppressHydrationWarning />
      </Layout>
    </ThemeProvider>
  );
};

export default api.withTRPC(MyApp);
