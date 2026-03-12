import { post } from "../utils/request";

export const PostListBookRoom = async (options) => {
      const result = await post("book-room", options);
      return result;
}
