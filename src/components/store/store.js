import { configureStore } from "@reduxjs/toolkit";
import AuthReducer from "./AuthReducer";
import MailSlice from "./MailSlice";
import sentboxslice from "./SentSlice";

const store = configureStore({
  reducer: { auth: AuthReducer,mail:MailSlice.reducer,sent:sentboxslice.reducer  },
});

export default store;