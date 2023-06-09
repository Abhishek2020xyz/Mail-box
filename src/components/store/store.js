import { configureStore } from "@reduxjs/toolkit";
import AuthReducer from "./AuthReducer";
import inboxslice from "./InboxSlice"
import MailSlice from "./MailSlice";
import sentboxslice from "./SentSlice";

const store = configureStore({
  reducer: { auth: AuthReducer.reducer,
             mail:MailSlice.reducer,
             sent:sentboxslice.reducer,
             in:inboxslice.reducer  },
});

export default store;