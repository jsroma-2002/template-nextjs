import { PostDataSource } from "@/interfaces/datasources/post-datasource";

export class JsonDatasource extends PostDataSource {
  getPosts(): Promise<any[]> {
    throw new Error("Method not implemented.");
  }
}
