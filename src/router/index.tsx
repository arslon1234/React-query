import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

import App from "../App";
import {
  SignIn,
  SignUp,
  Layout,
  NotFound,
  Product,
  Brand,
  Category,
  BrandCategory,
  ProtectedLayout,
  ProtectedAuth,
  SubCategory,
  ProductDetail
} from "@modules";
const Index = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<App />}>
        <Route index element={<ProtectedAuth> <SignIn /></ProtectedAuth>} />
        <Route path="sign-up" element={<SignUp />} />
        <Route path="layout/*" element={<ProtectedLayout> <Layout /></ProtectedLayout>}>
          <Route index element={<Product />} />
          <Route path="product/:id" element={<ProductDetail />} />
          <Route path="brand" element={<Brand />} />
          <Route path="brand/:id" element={<BrandCategory />} />
          <Route path="category" element={<Category />} />
          <Route path="category/:id" element={<SubCategory />} />
        </Route>
        <Route path="*" element={<NotFound/>}/>
      </Route>
    )
  );
  return <RouterProvider router={router} />;
};

export default Index;
