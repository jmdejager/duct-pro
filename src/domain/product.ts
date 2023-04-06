export interface ProductRecord {
  id: number,
  name: string,
  image: string,
}

export class Product {
  private constructor(
    public readonly id: number,
    public readonly name: string,
    public readonly image: string,
  ) {
  }

  public static fromRecord(record: ProductRecord){
    return new Product(
      record.id,
      record.name,
      record.image,
    )
  }
}
