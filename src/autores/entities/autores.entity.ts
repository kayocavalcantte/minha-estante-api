// import { Livro } from '../../livros/entities/livro.entity';
import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, OneToMany } from 'typeorm';

@Entity()
export class Autor {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nome: string;

  @Column()
  sobrenome: string;

  @Column({ nullable: true })
  nacionalidade: string;

  @Column({ type: 'date', nullable: true })
  data_nascimento: string;

  @Column({ nullable: true })
  website: string;

  @CreateDateColumn()
  data_cadastro: Date;

  // @OneToMany(() => Livro, livro => livro.autor)
  // livros: Livro[];
}