import { ThunkAction } from "redux-thunk/es/types";
import { RootState } from "./Redux";

type POSt_LOADING = "POSt_LOADING";
type FORM_LOADING = "FORM_LOADING";

type POST_ERROR = "POST_ERROR";

type FORM_ERROR = "FORM_ERROR";

type FORMSTATE = FORM_LOADING | FORM_ERROR;

type FETCH_POSTS = "FETCH_POSTS" | POSt_LOADING | POST_ERROR;

type CREATE_POST = "CREATE_POST" | FORMSTATE;

type UPDATE_POST = "UPDATE_POST" | FORMSTATE;

type LIKE_POST = "LIKE_POST" | POST_ERROR;

type DELETE_POST = "DELETE_POST" | POST_ERROR | "DELETE_LOADING";

// type PostActionTypes =
//   | FETCH_POSTS
//   | CREATE_POST
//   | UPDATE_POST
//   | LIKE_POST
//   | FORMSTATE
//   | POST_ERROR
//   | DELETE_POST;

type ActionType<T extends string, P> = {
  type: T;
  payload: P;
};

// type ThunkActionT<A extends string, R, P> =  {
//   void: void;
//   R: RootState;
//   undefined: undefined;
//   ActionType<A, P>;
// };

// Assuming your ThunkAction is defined like this
type ThunkActionsT<A extends string, P> = ThunkAction<
  void,
  RootState,
  undefined,
  ActionType<A, P>
>;

export type {
  FETCH_POSTS,
  CREATE_POST,
  UPDATE_POST,
  LIKE_POST,
  ActionType,
  FORMSTATE,
  POST_ERROR,
  DELETE_POST,
  POSt_LOADING,
  ThunkActionsT,
};
