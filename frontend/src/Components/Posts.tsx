import { PostsProps, postType } from "../interfaces/PostTypes";
import Post from "./Post";
import { useAppDispatch, useAppSelector } from "../hooks/ReduxHooks";
import {
  fetchPosts,
  likePost,
  DeletePost,
} from "../services/redux/actions/PostActions";

import Loader from "./ui/loader/Loader";
import { useEffect } from "react";

function Posts({
  setFormState,
  SetselectedPostId,
  SelectedPostId,
}: PostsProps) {
  const posts: postType[] = useAppSelector((state) => state.PostsReducer.posts);
  const loading = useAppSelector((state) => state.PostsReducer.POSt_LOADING);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  function updateFormByPostData(post: postType) {
    SetselectedPostId(post._id);
    setFormState({
      title: post.title,
      message: post.message,
      creator: post.creator,
      tags: post.tags.join(""),
      image: post.image,
    });
  }

  const likePostFunc = (id: string) => {
    dispatch(likePost(id));
  };

  function handleDelete(id: string) {
    dispatch(DeletePost(id));
  }

  return (
    <>
      {loading ? (
        <Loader color="blue" />
      ) : (
        posts?.map((post: postType, index: number) => {
          return (
            <Post
              key={index}
              post={post}
              selectedPostId={SelectedPostId}
              updateFormByPostData={updateFormByPostData}
              likePostFunc={likePostFunc}
              deletePostFunc={handleDelete}
            />
          );
        })
      )}
    </>
  );
}

export default Posts;
