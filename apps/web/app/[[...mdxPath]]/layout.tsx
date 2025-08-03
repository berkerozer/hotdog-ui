import { Footer, Layout, Navbar } from "nextra-theme-docs";
import { Banner } from "nextra/components";
import { getPageMap } from "nextra/page-map";
import "nextra-theme-docs/style.css";

const banner = (
  <Banner storageKey="some-key">Hotdog-ui beta is released 🎉</Banner>
);
const navbar = <Navbar logo={<b>Nextra</b>} />;
const footer = <Footer>MIT {new Date().getFullYear()} © Nextra.</Footer>;

export default async function DocsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Layout
      banner={banner}
      navbar={navbar}
      pageMap={await getPageMap()}
      docsRepositoryBase="https://github.com/shuding/nextra/tree/main/docs"
      footer={footer}
    >
      {children}
    </Layout>
  );
}
