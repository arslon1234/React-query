import loadable from "@loadable/component";
import { Loading } from "@components";

const Layout = loadable(() => import("./layout"), {
  fallback: <Loading />,
});
const NotFound = loadable(() => import("./not-found/index"), {
  fallback: <Loading />,
});
const SignIn = loadable(() => import("./auth/pages/sign-in"), {
  fallback: <Loading />,
});
const SignUp = loadable(() => import("./auth/pages/sign-up"), {
  fallback: <Loading />,
});

const Product = loadable(() => import("./product/pages/index"), {
  fallback: <Loading />,
});
const Category = loadable(() => import("./category/pages/index"), {
  fallback: <Loading />,
});
const Brand = loadable(() => import("./brand/pages/index"), {
  fallback: <Loading />,
});
const BrandCategory = loadable(() => import("./brand-category/pages/index"), {
  fallback: <Loading />,
});
const SubCategory = loadable(() => import("./sub-category/pages/index"), {
  fallback: <Loading />,
});
const ProductDetail = loadable(() => import("./product-detail/pages/index"), {
  fallback: <Loading />,
});
import {ProtectedLayout,ProtectedAuth} from "./protected-route";
export {
  Layout,
  NotFound,
  SignIn,
  SignUp,
  Product,
  Category,
  Brand,
  BrandCategory,
  ProtectedLayout,
  ProtectedAuth,
  SubCategory,
  ProductDetail
};
