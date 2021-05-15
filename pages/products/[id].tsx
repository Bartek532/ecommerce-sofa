import type { Sofa } from "../../types";
import { Layout } from "../../components/organisms/Layout";
import { ProductView } from "../../components/organisms/ProductView";
import { GetStaticProps, GetStaticPaths } from "next";
import { DatoCMSData } from "../../lib/datocms";

const Product = ({ product }: { product: Sofa }) => {
  return (
    <Layout>
      <ProductView product={product} />
    </Layout>
  );
};

export default Product;

export const getStaticProps: GetStaticProps = async context => {
  try {
    const product: Sofa = await DatoCMSData.items.find(context.params!.id);

    if (!product) {
      return {
        notFound: true as const,
      };
    }

    return { props: { product } };
  } catch {
    return {
      notFound: true as const,
    };
  }
};

export const getStaticPaths: GetStaticPaths = async () => {
  try {
    const results: Sofa[] = await await DatoCMSData.items.all();
    return {
      paths: results.map(({ id }) => ({
        params: { id },
      })),
      fallback: "blocking" as const,
    };
  } catch (err) {
    throw err;
  }
};