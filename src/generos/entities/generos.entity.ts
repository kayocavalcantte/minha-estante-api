import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, OneToMany } from 'typeorm';
import { Livro } from 'src/livros/entities/livro.entity';

@Entity()
export class Genero {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nome: string;

  @Column({ nullable: true })
  descricao: string;

  @CreateDateColumn()
  data_cadastro: Date;

  @OneToMany(() => Livro, livro => livro.genero)
  livros: Livro[];
}