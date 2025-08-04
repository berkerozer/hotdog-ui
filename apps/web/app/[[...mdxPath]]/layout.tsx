import { Footer, Layout, Navbar } from "nextra-theme-docs";
import { Banner } from "nextra/components";
import { getPageMap } from "nextra/page-map";
import "nextra-theme-docs/style.css";

const Logo = () => {
  return (
    <div className="flex items-center start space-x-2">
      <div className="flex flex-col items-center justify-center w-9 h-8 space-y-0.5">
        <span className="bg-[#F4C27E] rounded-t-full w-full h-1.5 relative">
          <span className="absolute top-[3px] left-[8px] -translate-x-1/2  bg-[#24201f] rounded-full h-[1.5px] w-[1.5px]" />
          <span className="absolute top-[2px] left-[12px] -translate-x-1/2  bg-[#24201f] rounded-full h-[1.5px] w-[1.5px]" />
          <span className="absolute top-[3px] left-[22px] -translate-x-1/2  bg-[#24201f] rounded-full h-[1.5px] w-[1.5px]" />
          <span className="absolute top-[1.5px] left-[30px] -translate-x-1/2  bg-[#24201f] rounded-full h-[1.5px] w-[1.5px]" />
        </span>
        <span className="bg-[#D14C2C] rounded-full w-12 h-2 relative overflow-hidden"></span>
        <span className="bg-[#F4C27E] rounded-b-full w-full h-1.5 relative">
          <span className="absolute top-[2px] left-[10px] -translate-x-1/2  bg-[#24201f] rounded-full h-[1.5px] w-[1.5px]" />
          <span className="absolute top-[3px] left-[14px] -translate-x-1/2  bg-[#24201f] rounded-full h-[1.5px] w-[1.5px]" />
          <span className="absolute top-[1.5px] left-[18px] -translate-x-1/2  bg-[#24201f] rounded-full h-[1.5px] w-[1.5px]" />
          <span className="absolute top-[2px] left-[28px] -translate-x-1/2  bg-[#24201f] rounded-full h-[1.5px] w-[1.5px]" />
        </span>
      </div>
      <span className="text-lg font-bold text-[#24201f] ml-1 font-sans">
        Hotdog UI
      </span>
    </div>
  );
};

const banner = (
  <Banner storageKey="some-key">Hotdog-ui beta is released 🎉</Banner>
);
const navbar = <Navbar logo={<Logo />} />;
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
