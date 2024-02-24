import Layout from "../../components/tamplate/Layout";
import Estate from "../../components/page/Estate.page";
import Car from "../../components/page/Car.page";
import Digital from "../../components/page/Digital.page";
import Kitchen from "../../components/page/Kitchen.page";
import Services from "../../components/page/Services.page";
import PersonaItems from "../../components/page/PersonaItems.page";
import Leisure from "../../components/page/Leisure.page";
import Social from "../../components/page/Social.page";
import Industrial from "../../components/page/Industrial.page";
import Recruitment from "../../components/page/Recruitment.page";
import Product from "../../components/page/Product";
import Header from "../../components/organism/Header.org";
import LayoutWithoutSide from "../../components/tamplate/LayoutWithoutSide";

export const routeItems = [
  {
    path: "/*",
    element: (
      <div className="flex justify-center items-center h-screen w-full">
        not found
      </div>
    ),
  },
  {
    path: "/",
    element: (
      <Layout>
        <Estate />
      </Layout>
    ),
  },
  {
    path: "/estate",
    element: (
      <Layout>
        <Estate />
      </Layout>
    ),
  },
  {
    path: "/car",
    element: (
      <Layout>
        <Car />
      </Layout>
    ),
  },
  {
    path: "/digital",
    element: (
      <Layout>
        <Digital />
      </Layout>
    ),
  },
  {
    path: "/kitchen",
    element: (
      <Layout>
        <Kitchen />
      </Layout>
    ),
  },
  {
    path: "/services",
    element: (
      <Layout>
        <Services />
      </Layout>
    ),
  },
  {
    path: "/personalitems",
    element: (
      <Layout>
        <PersonaItems />
      </Layout>
    ),
  },
  {
    path: "/leisure",
    element: (
      <Layout>
        <Leisure />
      </Layout>
    ),
  },
  {
    path: "/social",
    element: (
      <Layout>
        <Social />
      </Layout>
    ),
  },
  {
    path: "/industrial",
    element: (
      <Layout>
        <Industrial />
      </Layout>
    ),
  },
  {
    path: "/recruitment",
    element: (
      <Layout>
        <Recruitment />
      </Layout>
    ),
  },
  {
    path: "/product",
    element: (
      <LayoutWithoutSide>
        <Product />
      </LayoutWithoutSide>
    ),
  },
];
