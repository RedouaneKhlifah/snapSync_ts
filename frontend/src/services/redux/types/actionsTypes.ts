type FORMSTATE = "FORM_LOADING" | "FORM_ERROR";

type POSTSTATE = "POSt_LOADING" | "POST_ERROR";

type FETCH_POSTS = "FETCH_POSTS" | POSTSTATE;

type CREATE_POST = "CREATE_POST" | FORMSTATE;

type UPDATE_POST = "UPDATE_POST" | FORMSTATE;

type LIKE_POST = "LIKE_POST" | "POST_ERROR";

type DELETE_POST = "DELETE_POST" | "POST_ERROR";

type ActionType<T extends string, P> = {
  type: T;
  payload: P;
};

type costumeError<N extends string, A extends string> = {
  title: N;
  message: A;
};
export type {
  FETCH_POSTS,
  CREATE_POST,
  UPDATE_POST,
  LIKE_POST,
  ActionType,
  FORMSTATE,
  DELETE_POST,
  costumeError,
};
