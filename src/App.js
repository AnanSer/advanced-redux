import { Fragment, useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import { uiAction } from "./store/ui-slice";
import Notification from "./components/UI/Notification";

function App() {
  const dispatch = useDispatch();

  const cart = useSelector((state) => state.cart);
  const notification = useSelector((state) => state.ui.notification);
  const showCart = useSelector((state) => state.ui.cartIsVisible);

  let isInitial = true;

  useEffect(() => {
    const sendCartData = async () => {};

    if (isInitial) {
      isInitial = false;
      return;
    }

    sendCartData().catch((error) => {});
  }, [cart, dispatch]);

  return (
    <Fragment>
      {notification && (
        <Notification
          status={notification.status}
          title={notification.title}
          message={notification.message}
        />
      )}
      <Layout>
        {showCart && <Cart />}
        <Products />
      </Layout>
    </Fragment>
  );
}

export default App;
