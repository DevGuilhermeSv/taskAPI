import { Injectable } from '@nestjs/common';
import IRepository from './IRepository';
import { Repository as TypeRep } from 'typeorm';
@Injectable()
export default class Repository<T> implements IRepository<T> {
  // eslint-disable-next-line prettier/prettier
  
  private _repository: TypeRep<T>;
  public get repository(): TypeRep<T> {
    return this._repository;
  }

  constructor(repository: TypeRep<T>) {
    this._repository = repository;
  }
  getAll(): Promise<T[]> {
    return this._repository.find();
  }
  getTask(id: any): Promise<T> {
    return this._repository.findOne(id);
  }
  async create(item: T): Promise<T> {
    return this._repository.create(item);
  }

  update(id: any, item: T): Promise<object> {
    return this._repository.update({ id }, item as object);
  }

  delete(id: string): Promise<object> {
    return this._repository.delete(id);
  }
}
