import { PostDataSource } from "@/interfaces/datasources/post-datasource";
import { PostRepository } from "@/interfaces/repositories/post-repository";

export class PostRepositoryImpl extends PostRepository {
  private datasource: PostDataSource;

  constructor(datasource: PostDataSource) {
    super();
    this.datasource = datasource;
  }

  getPosts(): Promise<any[]> {
    return this.datasource.getPosts();
  }
}
