import { PostDataSource } from "@/interfaces/datasources/post-datasource";
import { Post } from "@/interfaces/entities/post";
import { PostMapper } from "../mappers/post-mapper";
import { JsonPost } from "../models/json-placeholder/json-post";
import { JsonResponse } from "../models/json-placeholder/json-response";

export class JsonDatasource extends PostDataSource {
  readonly baseURL = "https://jsonplaceholder.typicode.com/";

  async getPosts(): Promise<Post[]> {
    const response = await fetch(`${this.baseURL}/posts`);

    const data = await response.json();

    const placeHolderResponse = JsonResponse.fromJson(data);

    const posts: Post[] = placeHolderResponse.data.map((item: JsonPost) =>
      PostMapper.jsonPlaceHolderToEntity(item)
    );

    return posts;
  }
}
