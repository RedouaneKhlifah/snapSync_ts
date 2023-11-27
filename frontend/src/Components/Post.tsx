import { AiFillLike } from "react-icons/ai";
import { IoMdTrash } from "react-icons/io";
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import { PostProps } from "../interfaces/PostTypes";
import { useAppSelector } from "../hooks/ReduxHooks";
import Loader from "./ui/loader/Loader";
function Post({
  post,
  updateFormByPostData,
  selectedPostId,
  likePostFunc,
  deletePostFunc,
}: PostProps) {
  const loading = useAppSelector((state) => state.PostsReducer.FORM_LOADING);

  return (
    <>
      <div className="rounded-lg border overflow-hidden shadow-xl">
        <div className="h-[315,33px]">
          <div className="w-full">
            <div className=" h-40 border-b-[1px] mb-4 overflow-hidden relative ">
              {selectedPostId === post._id && loading? (
                <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <Loader color="blue" />
                </div>
              ) : (
                <div className="h-full w-full">
                  <img
                    className=" h-full w-full "
                    src={post.image}
                    alt="test"
                  />
                  <div className="absolute left-0 top-0 bg-black  w-full h-full bg-opacity-50 "></div>
                </div>
              )}
              <div className="absolute left-0 top-3 w-full">
                <div className="flex justify-center">
                  <div className="flex justify-between items-center w-10/12 text-white">
                    <span className="text">{post.creator}</span>
                    <div
                      className=" cursor-pointer relative "
                      onClick={() => updateFormByPostData(post)}
                    >
                      <HiOutlineDotsHorizontal />
                    </div>
                  </div>
                </div>
                <span className="text-white text-xs pl-5 font-light">
                  {post.date}
                </span>
              </div>
            </div>
            <div>
              <div className=" pl-5 h-[156px] relative">
                {selectedPostId === post._id && loading ? (
                  <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <Loader color="blue" />
                  </div>
                ) : (
                  <div className="h-full flex justify-start flex-col gap-y-4">
                    <span className=" text-sm text-gray-500  ">
                      {post.tags}
                    </span>
                    <span className=" text-xl font-medium text-gray-800">
                      {post.title}
                    </span>
                    <span className=" text-sm text-gray-500">
                      {post.message}
                    </span>
                    <div className=" w-11/12 flex justify-between pb-5 ">
                      <div
                        className=" text-blue-700 flex items-center gap-1 cursor-pointer "
                        onClick={() => likePostFunc(post._id)}
                      >
                        <AiFillLike className="text-xl  " />
                        <span className=" text-sm select-none ">
                          LIKE {post.like}
                        </span>
                      </div>
                      <div
                        className="text-blue-700 text-xl flex items-center gap-1 cursor-pointer"
                        onClick={() => deletePostFunc(post._id)}
                      >
                        <div className="flex items-center">
                          <IoMdTrash />
                          <span className=" text-sm select-none ">DELETE</span>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Post;
