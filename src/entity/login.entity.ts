import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
class Login {
  @PrimaryGeneratedColumn()
  id!: number | string | undefined

  @Column()
  name!: string

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