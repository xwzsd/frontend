export class Category {
  id: number;
  name: string;
  alias: string;
  createdAt: Date;
  updatedAt: Date;

  constructor(obj: any) {
    this.id        = obj && obj.id         || null;
    this.name      = obj && obj.name       || '';
    this.alias     = obj && obj.alias      || '';
    this.createdAt = obj && obj.created_at || null;
    this.updatedAt = obj && obj.updated_at || null;
  }
}
