import { AuthChecker } from "../components/organisms/AuthChecker";
import { Main } from "../components/organisms/Main";
import { useProduct } from "../context/ProductContext";
import { DatoCMSData } from "../lib/datocms";
import { useEffect } from "react";
import type { Sofa } from "../types";

const Home = ({ results }: { results: Sofa[] }) => {
  const { setProducts } = useProduct();

  useEffect(() => {
    setProducts(results);
  }, []);

  return (
    <>
      <Main products={results} />
    </>
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
