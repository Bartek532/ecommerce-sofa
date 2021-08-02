import type { Sofa } from "types";
import { Layout } from "components/organisms/Layout";
import { ProductView } from "components/organisms/ProductView/ProductView";
import { GetStaticProps, GetStaticPaths } from "next";
import { DatoCMSData } from "lib/datocms";
import { AuthChecker } from "components/organisms/AuthChecker/AuthChecker";

const Product = ({ product }: { product: Sofa }) => {
  return (
    <AuthChecker>
      <Layout>
        <ProductView product={product} />
      </Layout>
    </AuthChecker>
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
    const results: Sofa[] = await DatoCMSData.items.all();
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
