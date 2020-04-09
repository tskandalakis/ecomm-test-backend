
import { Table, Column, Model } from 'sequelize-typescript';

@Table
export class Product extends Model<Product> {
  @Column
  name: string;

  @Column
  title: string;

  @Column
  description: string;

  @Column
  img_url: string;
}