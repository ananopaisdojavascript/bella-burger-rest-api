import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity()
class Products {
    @PrimaryGeneratedColumn()
    product_id!: number

    @Column()
    name!: string

    @Column()
    price!: number

    @Column()
    url!: string

    @Column()
    category!: string
}

export default Products;