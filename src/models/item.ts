export class Item {
  id: number;
  name: string;
  price: number;
  description: string;
  createdAt: Date;
  updatedAt: Date;

  constructor(obj: any) {
    this.id        = obj && obj.id         || null;
    this.name      = obj && obj.name       || '';
    this.price     = obj && obj.price      || 0;
    this.description = obj && obj.description      || '';
    this.createdAt = obj && obj.created_at || null;
    this.updatedAt = obj && obj.updated_at || null;
  }
}
