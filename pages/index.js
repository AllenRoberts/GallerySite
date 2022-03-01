import Head from "next/head";
import Layout from "../Components/Layout";
import ModelCarousel from "../Components/ModelCarousel";

export default function Home() {
  return (
      <Layout>
        <ModelCarousel />
      </Layout>
  );
}
