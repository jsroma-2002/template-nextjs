export class JsonPost {
  userId: number;
  id: number;
  title: string;
  body: string;

  constructor(userId: number, id: number, title: string, body: string) {
    this.userId = userId;
    this.id = id;
    this.title = title;
    this.body = body;
  }

  static fromJson(json: any): JsonPost {
    return new JsonPost(json.userId, json.id, json.title, json.body);
  }
}
