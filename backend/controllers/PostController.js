import asynchandler from "express-async-handler";
import { createPost, updatePostById } from "../services/post.js";
import { validator, PostSchema, sanitizer } from "../validator/JoiSchemas.js";
import { CheckRecord } from "../services/helpers/helpers.js";
import Post from "../models/PostModel.js";

/**
 * Retrieves all posts.
 * @async
 * @route {GET} /post
 * @access public
 * @returns {Promise<Array<Document>>} A Promise that resolves to an array of documents representing all posts.
 */
const getAllPosts = asynchandler(async (req, res) => {
    const posts = await Post.find();
    res.json(posts);
});

/**
 * CREATE new post.
 * @async
 * @route {POST} /post
 * @access public
 * @returns {Promise<Document>} A Promise that resolves to an array of documents representing all posts.
 */
const CreatePost = asynchandler(async (req, res) => {
    const SanitizedData = sanitizer(req.body);
    validator(PostSchema, SanitizedData);
    const post = await createPost(req.body);
    res.status(201).json(post);
});

/**
 * Update new post.
 * @async
 * @route {PATCH} /post/id
 * @access public
 * @returns {Promise<Document>} A Promise that resolves  documents representing post.
 */
const UpadetPost = asynchandler(async (req, res) => {
    const SanitizedData = sanitizer(req.body);
    validator(PostSchema, SanitizedData);
    const { id } = req.params;
    await CheckRecord(Post, id);
    const post = await updatePostById(id, SanitizedData);
    res.status(200).json(post);
});

/**
 * Update new post.
 * @async
 * @route {DELETE} /post/id
 * @access public
 * @returns {Promise<Document>} A Promise that resolves to an array of documents representing all post.
 */

const DeletePost = asynchandler(async (req, res) => {
    const { id } = req.params;
    await CheckRecord(Post, id);
    const post = await Post.findByIdAndDelete(id);
    res.status(200).json(post);
});

/**
 * incerement the like value by 1
 * @async
 * @route {PATCH} /post/likes/id
 * @access public
 * @returns {Promise<Document>} A Promise that resolves todocuments representing all post.
 */
const LikePost = asynchandler(async (req, res) => {
    const { id } = req.params;
    const data = { $inc: { like: 1 } };
    const post = await updatePostById(id, data);
    res.status(200).json(post);
});

export { getAllPosts, CreatePost, UpadetPost, DeletePost, LikePost };
