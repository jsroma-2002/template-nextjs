export abstract class PostDataSource {
  abstract getPosts(): Promise<any[]>;
}
