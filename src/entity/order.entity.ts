import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToOne,
  JoinColumn,
} from "typeorm";

import Products from "./product.entity";

@Entity()
class Orders {
  @PrimaryGeneratedColumn()
  order_id!: number;

  @Column()
  client_name!: string;

  @Column()
  server_name!: string;

  @Column()
  table_number!: number;

  @Column()
  quantity!: number;

  @Column()
  product_id!: number;

  @OneToOne(() => Products, (product) => product.product_id, {
    cascade: ['insert', 'update']
  })

  @JoinColumn({ name: 'product_id' })
  product!: Products[];
}

export default Orders;