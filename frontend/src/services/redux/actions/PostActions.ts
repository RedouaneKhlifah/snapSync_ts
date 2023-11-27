import { RootState } from "../../../interfaces/reduxTypes/Redux";
import { ThunkAction, ThunkDispatch } from "redux-thunk";
import {
  FETCH_POSTS,
  CREATE_POST,
  UPDATE_POST,
  LIKE_POST,
  ActionType,
  DELETE_POST,
} from "../../../interfaces/reduxTypes/actionsTypes";

import {
  DeleteRecord,
  GetRecords,
  // PostReacord,
  PatchRecord,
  PostReacord,
  // DeleteRecord,
} from "../../api/Axios";

import {
  postsLoading,
  postsError,
  fetchPostsSuccessReq,
  formLoading,
  CreatePostSuccessReq,
  formError,
  updatePostsSuccessReq,
  likePostsSuccessReq,
  DeletePostSuccess,
  deleteLoding,
} from "./postActionCreators";
import { postType } from "../../../interfaces/PostTypes";
import { formState } from "../../../interfaces/FormTypes";

const fetchPosts = (): ThunkAction<
  void,
  RootState,
  unknown,
  ActionType<FETCH_POSTS, postType[] | Error | null>
> => {
  return async (
    dispatch: ThunkDispatch<
      void,
      unknown,
      ActionType<FETCH_POSTS, postType[] | Error | null>
    >
  ) => {
    try {
      dispatch(postsLoading());
      const response = await GetRecords("/post");
      dispatch(fetchPostsSuccessReq(response.data));
    } catch (error) {
      error instanceof Error && dispatch(postsError(error));
    }
  };
};

const CreatePost = (
  data: formState
): ThunkAction<void, RootState, unknown, ActionType<CREATE_POST, postType>> => {
  return async (
    dispatch: ThunkDispatch<
      void,
      unknown,
      ActionType<CREATE_POST, postType | Error | null>
    >
  ) => {
    try {
      dispatch(formLoading());
      const response = await PostReacord("/post", data);
      dispatch(CreatePostSuccessReq(response.data));
    } catch (error) {
      console.log(error);
      error instanceof Error && dispatch(formError(error));
    }
  };
};

const UpdatePost = (
  id: string,
  data: formState
): ThunkAction<void, RootState, unknown, ActionType<CREATE_POST, postType>> => {
  return async (
    dispatch: ThunkDispatch<
      void,
      unknown,
      ActionType<UPDATE_POST, postType | Error | null>
    >
  ) => {
    try {
      dispatch(formLoading());
      const response = await PatchRecord("/post", id, data);
      dispatch(updatePostsSuccessReq(response.data));
    } catch (error) {
      error instanceof Error && dispatch(formError(error));
    }
  };
};

const DeletePost = (
  id: string
): ThunkAction<void, RootState, unknown, ActionType<DELETE_POST, postType>> => {
  return async (
    dispatch: ThunkDispatch<
      void,
      unknown,
      ActionType<DELETE_POST, postType | Error | null>
    >
  ) => {
    try {
      dispatch(deleteLoding());
      const response = await DeleteRecord("/post", id);
      dispatch(DeletePostSuccess(response.data));
    } catch (error) {
      error instanceof Error && dispatch(postsError(error));
    }
  };
};

const likePost = (
  id: string
): ThunkAction<void, RootState, unknown, ActionType<LIKE_POST, postType>> => {
  return async (
    dispatch: ThunkDispatch<
      void,
      unknown,
      ActionType<LIKE_POST, postType | Error | null>
    >
  ) => {
    try {
      const response = await PatchRecord("/post/likes", id);
      dispatch(likePostsSuccessReq(response.data));
    } catch (error) {
      dispatch(likePostsSuccessReq(null));
      throw error;
    }
  };
};

export { fetchPosts, CreatePost, UpdatePost, likePost, DeletePost };
