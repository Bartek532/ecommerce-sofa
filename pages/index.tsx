import { Layout } from "../components/organisms/Layout";
import { Main } from "../components/organisms/Main";
import { DatoCMSData } from "../lib/datocms";
import type { Sofa } from "../types";
import type { GetStaticProps } from "next";

const Home = ({ results }: { results: Sofa[] }) => {
  return (
    <Layout>
      <Main results={results} />
    </Layout>
  );
};

export default Home;

export const getStaticProps: GetStaticProps = async () => {
  try {
    const data = await DatoCMSData.items.all();
    return { props: { results: data }, revalidate: 1 };
  } catch {
    return {
      notFound: true as const,
    };
  }
};
