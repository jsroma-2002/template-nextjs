import { Post } from "@/interfaces/entities/post";
import { JsonPost } from "../models/json-placeholder/json-post";

export class PostMapper {
  static jsonPlaceHolderToEntity(placeholderPost: JsonPost): Post {
    return new Post(
      placeholderPost.id,
      placeholderPost.title,
      placeholderPost.body
    );
  }
}
