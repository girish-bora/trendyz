import { Route, Routes } from "react-router-dom";
import AuthLayout from "./components/auth/AuthLayout";
import AuthLogin from "./pages/auth/AuthLogin";
import AuthRegister from "./pages/auth/AuthRegister";
import AdminLayout from "./components/admin/AdminLayout";
import AdminDashboard from "./pages/admin/AdminDashboard";
import AdminProducts from "./pages/admin/AdminProducts";
import AdminOrders from "./pages/admin/AdminOrders";
import AdminFeatures from "./pages/admin/AdminFeatures";
import CheckAuth from "./components/common/CheckAuth";
import ShopLayout from "./components/shop/ShopLayout";
import NotFound from "./pages/not-found/NotFound";
import ShopHome from "./pages/shop/ShopHome";
import ShopProducts from "./pages/shop/ShopProducts";
import ShopCheckout from "./pages/shop/ShopCheckout";
import ShopAccount from "./pages/shop/ShopAccount";
import UnAuth from "./pages/unauth/UnAuth";
import { useDispatch, useSelector } from "react-redux";
import { checkAuth } from "./store/auth/authSlice";
import { useEffect } from "react";
import { Skeleton } from "./components/ui/skeleton";
import PaypalReturnPage from "./pages/shop/PaypalReturn";
import PaymentSuccessPage from "./pages/shop/PaymentSuccess";
import SearchProducts from "./pages/shop/ShopSearch";

function App() {
  const { isAuthenticated, user, isLoading } = useSelector(
    (state) => state.auth
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkAuth());
  }, [dispatch]);

  if (isLoading) return <Skeleton className="w-[800] bg-black h-[600px]" />;

  return (
    <div className="flex flex-col overflow-hidden bg-white">
      <Routes>
        <Route
          path="/"
          element={
            <CheckAuth
              isAuthenticated={isAuthenticated}
              user={user}
            ></CheckAuth>
          }
        />
        <Route
          path="/auth"
          element={
            <CheckAuth isAuthenticated={isAuthenticated} user={user}>
              <AuthLayout />
            </CheckAuth>
          }
        >
          <Route path="login" element={<AuthLogin />} />
          <Route path="register" element={<AuthRegister />} />
        </Route>
        <Route
          path="/admin"
          element={
            <CheckAuth isAuthenticated={isAuthenticated} user={user}>
              <AdminLayout />
            </CheckAuth>
          }
        >
          <Route path="dashboard" element={<AdminDashboard />} />
          <Route path="products" element={<AdminProducts />} />
          <Route path="orders" element={<AdminOrders />} />
          <Route path="features" element={<AdminFeatures />} />
        </Route>
        <Route
          path="/shop"
          element={
            <CheckAuth isAuthenticated={isAuthenticated} user={user}>
              <ShopLayout />
            </CheckAuth>
          }
        >
          <Route path="home" element={<ShopHome />} />
          <Route path="listing" element={<ShopProducts />} />
          <Route path="checkout" element={<ShopCheckout />} />
          <Route path="account" element={<ShopAccount />} />
          <Route path="paypal-return" element={<PaypalReturnPage />} />
          <Route path="paypal-success" element={<PaymentSuccessPage />} />
          <Route path="search" element={<SearchProducts />} />
        </Route>
        <Route path="*" element={<NotFound />} />
        <Route path="/unauth-page" element={<UnAuth />} />
      </Routes>
    </div>
  );
}

export default App;
