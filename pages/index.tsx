import { Layout } from "../components/organisms/Layout";
import { Main } from "../components/organisms/Main";
import { useProduct } from "../context/ProductContext";
import { DatoCMSData } from "../lib/datocms";
import { useEffect } from "react";
import type { Sofa } from "../types";

const Home = ({ results }: { results: Sofa[] }) => {
  return (
    <Layout>
      <Main results={results} />
    </Layout>
  );
};

export default Home;

export async function getStaticProps() {
  try {
    const data = await DatoCMSData.items.all();
    return { props: { results: data }, revalidate: 1 };
  } catch {
    return {
      notFound: true as const,
    };
  }
}
