import store from "../../services/redux/store";
import reducers from "../../services/redux/reducers";

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof reducers>;

