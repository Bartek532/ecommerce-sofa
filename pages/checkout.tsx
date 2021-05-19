import { Layout } from "../components/organisms/Layout";
import { CheckoutView } from "../components/organisms/CheckoutView";
import { AuthChecker } from "../components/organisms/AuthChecker";

const Checkout = () => {
  return (
    <AuthChecker>
      <Layout>
        <CheckoutView />
      </Layout>
    </AuthChecker>
  );
};

export default Checkout;
