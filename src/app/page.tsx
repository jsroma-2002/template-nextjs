import { JsonDatasource } from "@/data/datasources/json-datasource";
import { PostRepositoryImpl } from "@/data/repositories/post-repository-impl";

export default async function Home() {
  const repository = new PostRepositoryImpl(new JsonDatasource());

  const posts = await repository.getPosts();

  console.log(posts);

  return (
    <main className="bg-red-500">
      <h1>Hola</h1>
    </main>
  );
}
