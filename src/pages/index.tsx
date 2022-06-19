import type { GetServerSideProps, GetStaticProps } from "next";
import Head from "next/head";
import { SubscribeButton } from "../components/SubscribeButton";
import { stripe } from "../services/stripe";

import styles from "./home.module.scss";

interface HomeProps {
  product: {
    priceId: string;
    amount: number;
  }
}

const Home = ({product} : HomeProps) => {

  return (
    <>
      <Head>
        <title>Home | Ignews</title>
      </Head>
      <main className={styles.contentContainer}>
        <section className={styles.hero}>
          <span>👏 Hey, welcome</span>
          <h1>
            New about the <span>React</span> world.
          </h1>
          <p>
            Get access to all the publications <br />{" "}
            <span>for {product.amount} month</span>
          </p>
          <SubscribeButton priceId={product.priceId}/>
        </section>
        <img src="/images/avatar.svg" alt="Girl Coding" />
      </main>
    </>
  );
};

// uma forma de fazer SSR
// export const getServerSideProps: GetServerSideProps = async () => {
//   const price = await stripe.prices.retrieve('price_1L9z5NEA4lwsOjSh3oYY9mXi', {
//     expand:['product']
//   })

//   const product = {
//     priceId: price.id,
//     amount: new Intl.NumberFormat('us-US', {
//       style: 'currency',
//       currency: 'USD'
//     }).format(price.unit_amount! / 100),
//   }
//   return{
//     props:{
//       product,
//     }
//   }
// };

// uma forma de fazer SSG
export const getStaticProps: GetStaticProps = async () => {
  const price = await stripe.prices.retrieve('price_1L9z5NEA4lwsOjSh3oYY9mXi', {
    expand:['product']
  })

  const product = {
    priceId: price.id,
    amount: new Intl.NumberFormat('us-US', {
      style: 'currency',
      currency: 'USD'
    }).format(price.unit_amount! / 100),
  }
  return{
    props:{
      product,
    },
    revalidate: 60 * 60 * 24 //24 hours
  }
};

export default Home;
