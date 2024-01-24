export class Post {
  private id: number;
  private title: string;
  private text: string;

  constructor(id: number, title: string, text: string) {
    this.id = id;
    this.title = title;
    this.text = text;
  }

  public getId(): number {
    return this.id;
  }

  public getTitle(): string {
    return this.title;
  }

  public getText(): string {
    return this.text;
  }

  public setTitle(title: string): void {
    this.title = title;
  }

  public setText(text: string): void {
    this.text = text;
  }

  public setId(id: number): void {
    this.id = id;
  }
}
