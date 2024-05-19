import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity()
class Product {
    @PrimaryGeneratedColumn()
    product_id!: number | null;

    @Column()
    name!: string

    @Column()
    price!: number

    @Column()
    image_url!: string
}

export default Product;