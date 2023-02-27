import React from "react";
import { Routes, Route } from "react-router-dom";

import ProductListing from "./presentation/ProductListing";

import { ReactComponent as AssetLoader } from "./assets/images/loader.svg";
import ProductDetail from "./presentation/ProductDetail";
import Cart from "./presentation/Cart";


function App() {
  const isWaiting = () => {
    return (
      <div className="lazy-loader">
        <AssetLoader />
        {/* <img src={asset_loader} alt="Loading" /> */}
      </div>
    );
  };

  return (
    <React.Suspense fallback={isWaiting()}>
      <Routes>

        <Route path="/" element={<ProductListing />} />
        <Route path='/home' element={<ProductListing />} />
        <Route path='/product/:itemId' element={<ProductDetail />} />
        <Route path='/cart' element={<Cart />} />
        {/* <Route path='/reset-password/:reset_token' element={<Auth />} /> */}
        {/* <Route path='/workspace-setup' element={<WorkspaceSetup />} /> */}
        {/* <Route path='/workspace-invite' element={<WorkspaceInvites />} /> */}

        {/* <Route path='tasks/:sessionId' element={<RequireAuth><TaskView /></RequireAuth>} /> */}
        {/* <Route path="/*" element={<RequireAuth><Home /></RequireAuth>} /> */}
      </Routes>
      {/* <ToastContainer transition={Slide} /> */}
    </React.Suspense>
  );
}

export default App;
