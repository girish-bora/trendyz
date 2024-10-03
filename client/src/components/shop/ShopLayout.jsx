import { Outlet } from "react-router-dom";
import ShopHeader from "./ShopHeader";

const ShopLayout = () => {
  return (
    <div>
      <div className="flex flex-col bg-white overflow-hidden">
        {/* common header */}
        <ShopHeader />
        <main className="flex flex-col w-full">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default ShopLayout;
