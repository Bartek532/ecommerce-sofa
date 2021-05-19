import { Layout } from "../components/organisms/Layout";
import { AuthChecker } from "../components/organisms/AuthChecker";
import { Main } from "../components/organisms/Main";
import { DatoCMSData } from "../lib/datocms";
import type { Sofa } from "../types";
import type { GetStaticProps } from "next";

const Home = ({ results }: { results: Sofa[] }) => {
  return (
    <AuthChecker>
      <Layout>
        <Main results={results} />
      </Layout>
    </AuthChecker>
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
