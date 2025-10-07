// import { Livro } from '../../livros/entities/livro.entity';
import { Autor } from "src/autores/entities/autores.entity";
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  ManyToOne,
} from "typeorm";

@Entity()
export class Livro {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  titulo: string;

  @Column({ nullable: true })
  subtitulo: string;

  @Column({ nullable: true })
  sinopse: string;

  @Column({ nullable: true })
  editora: string;

  @Column()
  genero: string;

  @Column()
  ano_publicacao: string;

  @CreateDateColumn()
  data_cadastro: Date;

  @ManyToOne(() => Autor, (autor) => autor.livros)
  autor: Autor[];
}
