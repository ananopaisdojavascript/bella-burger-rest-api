import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
class User {
  @PrimaryGeneratedColumn()
  id!: number | string | undefined

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
  salon!: boolean

  @Column()
  kitchen!: boolean
}

export default User;