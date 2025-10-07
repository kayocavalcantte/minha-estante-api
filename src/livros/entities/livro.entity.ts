// import { Livro } from '../../livros/entities/livro.entity';
import { Autor } from "src/autores/entities/autores.entity";
import { Genero } from 'src/generos/entities/generos.entity';
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

  @ManyToOne(() => Genero, genero => genero.livros)
  genero: string;

  @Column()
  ano_publicacao: string;

  @CreateDateColumn()
  data_cadastro: Date;

  @ManyToOne(() => Autor, (autor) => autor.livros)
  autor: Autor[];
}
