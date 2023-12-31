import { postType } from "../../../interfaces/PostTypes";
import { costumeFormHandler } from "../../../utils/costumeFormHandler";
import {
  ActionType,
  CREATE_POST,
  DELETE_POST,
  FETCH_POSTS,
  FORMSTATE,
  LIKE_POST,
  UPDATE_POST,
  costumeError,
} from "../types/actionsTypes";

const postsLoading = (): ActionType<"POSt_LOADING", null> => {
  return { type: "POSt_LOADING", payload: null };
};

const postsError = (error: Error): ActionType<"POST_ERROR", Error> => {
  return { type: "POST_ERROR", payload: error };
};

const fetchPostsSuccessReq = (
  payload: postType[]
): ActionType<FETCH_POSTS, postType[]> => {
  return {
    type: "FETCH_POSTS",
    payload: payload,
  };
};

const formLoading = (): ActionType<FORMSTATE, null> => {
  return { type: "FORM_LOADING", payload: null };
};

const CreatePostSuccessReq = (
  payload: postType
): ActionType<CREATE_POST, postType> => {
  return {
    type: "CREATE_POST",
    payload: payload,
  };
};

const formError = (
  error: string
): ActionType<FORMSTATE, costumeError<string, string>> => {
  const customError = costumeFormHandler(error);
  return { type: "FORM_ERROR", payload: customError };
};

const deleteLoding = (): ActionType<"DELETE_LOADING", null> => {
  return {
    type: "DELETE_LOADING",
    payload: null,
  };
};

const updatePostsSuccessReq = (
  payload: postType
): ActionType<UPDATE_POST, postType> => {
  return {
    type: "UPDATE_POST",
    payload: payload,
  };
};

const DeletePostSuccess = (
  payload: postType
): ActionType<DELETE_POST, postType> => {
  return {
    type: "DELETE_POST",
    payload: payload,
  };
};

const likePostsSuccessReq = (
  payload: postType | null
): ActionType<LIKE_POST, postType | null> => {
  return {
    type: "LIKE_POST",
    payload: payload,
  };
};

export {
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
};
