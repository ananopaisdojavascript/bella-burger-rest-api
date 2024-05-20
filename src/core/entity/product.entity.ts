import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity()
class Product {
    @PrimaryGeneratedColumn()
    product_id!: number | null | string

    @Column()
    name!: string

    @Column()
    price!: number

    @Column()
    image_url!: string

    @Column()
    category!: string
}

export default Product;