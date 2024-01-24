import { JsonPost } from "./json-post";

export class JsonResponse {
  data: JsonPost[];

  constructor(data: JsonPost[]) {
    this.data = data;
  }

  static fromJson(json: any): JsonResponse {
    return new JsonResponse(json.map((item: any) => JsonPost.fromJson(item)));
  }
}
