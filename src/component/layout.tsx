import { MainNav } from "./main-nav";
import { SiteHeader } from "./site-header";

export const Layout = ({ children }: { children: React.ReactElement }) => {
  return (
    <>
      <SiteHeader />
      <main className="container">{children}</main>
      {/* <footer>Footer</footer> */}
    </>
  );
};
