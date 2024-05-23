import { Entity, Column, PrimaryGeneratedColumn } from "typeorm"

@Entity()
class Users {
    @PrimaryGeneratedColumn()
    id!: number

    @Column()
    name!: string

    @Column()
    email!: string

    @Column()
    confirm_email!: string

    @Column()
    password!: string

    @Column()
    confirm_password!: string

    @Column()
    salon!: boolean;

    @Column()
    kitchen!: boolean
}

export default Users;