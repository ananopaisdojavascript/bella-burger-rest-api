import { Entity, Column, PrimaryGeneratedColumn } from "typeorm"

@Entity()
class Login {
    @PrimaryGeneratedColumn()
    id!: number

    @Column()
    email!: string

    @Column()
    password!: string

    @Column()
    salon!: boolean

    @Column()
    kitchen!: boolean
}

export default Login;