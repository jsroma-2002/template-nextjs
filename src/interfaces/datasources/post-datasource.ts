import { Post } from "../entities/post";

export abstract class PostDataSource {
  abstract getPosts(): Promise<Post[]>;
}
