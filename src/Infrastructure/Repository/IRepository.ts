export default abstract class IRepository<T> {
  abstract getAll(): Promise<T[]>;
  abstract getTask(id: any): Promise<T>;
  abstract create(item: T): Promise<T>;

  abstract update(id: string, item: T): Promise<object>;

  abstract delete(id: string): Promise<object>;
}
