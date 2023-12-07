import store from "../store";
import reducers from "../reducers";

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof reducers>;

