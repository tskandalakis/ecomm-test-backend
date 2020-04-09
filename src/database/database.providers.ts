import { Sequelize } from 'sequelize-typescript';
import { User } from '../users/user.entity';
import { Product } from '../products/product.entity';

export const databaseProviders = [
  {
    provide: 'SEQUELIZE',
    useFactory: async () => {
      const sequelize = new Sequelize({
        dialect: 'mysql',
        host: 'localhost',
        port: 3306,
        username: 'root',
        password: 'password',
        database: 'nest',
      });
      sequelize.addModels([User,Product]);
      await sequelize.sync();
      return sequelize;
    },
  },
];