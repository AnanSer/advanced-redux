import { uiAction } from "./ui-slice";

import { cartActions } from "./cart-slice";

export const fetchCartData = () => {
  return async (dispatch) => {
    const fetchData = async () => {
      const response = await fetch(
        "https://react-http-6b4a6.firebaseio.com/cart.json"
      );

      if (!response.ok) {
        throw new Error("Could not fetch cart data!");
      }

      const data = await response.json();

      return data;
    };

    try {
      const cartData = await fetchData();
      dispatch(
        cartActions.replaceCart({
          items: cartData.items || [],
          totalQuantity: cartData.totalQuantity,
        })
      );
    } catch (error) {
      dispatch(
        uiAction.showNotification({
          status: "error",
          title: "Error!",
          message: "Fetching cart data failed!",
        })
      );
    }
  };
};

export const sendCartData = (cart) => {
  return async (dispatch) => {
    dispatch(
      uiAction.showNotification({
        status: "pending",
        title: "Sending...",
        message: "Sending cart data!",
      })
    );

    const sendRequest = async () => {
      const response = await fetch(
        "https://project-1-13247-default-rtdb.firebaseio.com/cart.json",
        {
          method: "PUT",
          body: JSON.stringify({
            items: cart.items,
            totalQuantity: cart.totalQuantity,
          }),
        }
      );

      if (!response.ok) {
        throw new Error("Sending cart data failed.");
      }
    };

    try {
      await sendRequest();

      dispatch(
        uiAction.showNotification({
          status: "success",
          title: "Success!",
          message: "Sent cart data successfully!",
        })
      );
    } catch (error) {
      dispatch(
        uiAction.showNotification({
          status: "error",
          title: "Error!",
          message: "Sending cart data failed!",
        })
      );
    }
  };
};

// export const fetchCartData = () => {
//   return async (dispatch) => {
//     const fetchData = async () => {
//       const response = await fetch(
//         "https://project-1-13247-default-rtdb.firebaseio.com/cart.json"
//       );

//       if (!response.ok) {
//         throw new Error("Could not fetch cart data");
//       }

//       const data = await response.json();

//       return data;
//     };

//     try {
//       const cartData = await fetchData();
//       dispatch(
//         cartActions.replaceCart({
//           items: cartData.items || [],
//           totalQuantitly: cartData.totalQuantitly,
//         })
//       );
//     } catch (error) {}
//   };
// };

// export const sendCartData = (cart) => {
//   return async (dispatch) => {
//     dispatch(
//       uiAction.showNotification({
//         status: "error ...",
//         title: "Error...",
//         message: "fetching  cart data!",
//       })
//     );

//     const sendRequest = async () => {
//       const response = await fetch(
//         "https://project-1-13247-default-rtdb.firebaseio.com/cart.json",
//         {
//           method: "PUT",
//           body: JSON.stringify({
//             items: cart.items,
//             totalQuantitly: cart.totalQuantity,
//           }),
//         }
//       );

//       if (!response.ok) {
//         throw new Error("sending cart data failed");
//       }
//     };
//     try {
//       await sendRequest();
//       dispatch(
//         uiAction.showNotification({
//           status: "success",
//           title: "Success...",
//           message: "sending cart data successfullly",
//         })
//       );
//     } catch (error) {
//       dispatch(
//         uiAction.showNotification({
//           status: "error",
//           title: "Error...",
//           message: "Sending cart data failed",
//         })
//       );
//     }
//   };
// };
