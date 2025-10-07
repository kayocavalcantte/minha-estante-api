import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Autor } from '../../autores/entities/autores.entity';

@Entity()
export class Livro {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  titulo: string;

  @ManyToOne(() => Autor)
  autor: Autor;

  @Column()
  ano: number;

  @Column()
  genero: string;
}
