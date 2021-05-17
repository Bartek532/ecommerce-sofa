import "../styles/variables.scss";
import "../styles/globals.scss";
import { DefaultSeo } from "next-seo";
import Head from "next/head";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import { MainProvider } from "../context/MainContext";
import { ProductProvider } from "../context/ProductContext";
import { CartProvider } from "../context/CartContext";

const meta = {
  title: "Sofa App",
  description:
    "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga, culpa. Odit totam ex sed repudiandae perferendis hic sint maiores minus!",
};

export const titleTemplate = `%s | ${meta.title}`;

function MyApp({ Component, pageProps }: AppProps) {
  const { asPath } = useRouter();
  return (
    <>
      <DefaultSeo
        title={meta.title}
        description={meta.description}
        openGraph={{
          type: "website",
          title: meta.title,
          locale: "en_EN",
          url: `https://${process.env.NEXT_PUBLIC_URL!}${asPath}`,
          description: meta.description,
          images: [
            {
              url: `https://${process.env.NEXT_PUBLIC_URL!}/logo_lg.png`,
              width: 1000,
              height: 750,
            },
          ],
          site_name: meta.title,
        }}
      />
      <Head>
        <meta
          name="viewport"
          content="width=device-width, user-scalable=yes, initial-scale=1.0, viewport-fit=cover"
        />
      </Head>
      <MainProvider>
        <ProductProvider>
          <CartProvider>
            <Component {...pageProps} />
          </CartProvider>
        </ProductProvider>
      </MainProvider>
    </>
  );
}

export default MyApp;
