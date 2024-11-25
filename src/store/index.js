import { configureStore } from "@testing-library/react";

import uiSlice from "./ui-slice";

const store = configureStore({
  reducer: { ui: uiSlice.reducer },
});

export default store;
