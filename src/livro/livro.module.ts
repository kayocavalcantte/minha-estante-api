import { Module } from '@nestjs/common';
import { LivroService } from './livro.service';
import { LivroController } from './livro.controller';
import { AutoresModule } from '../autores/autores.module';

@Module({
  imports: [AutoresModule],
  controllers: [LivroController],
  providers: [LivroService],
})
export class LivroModule {}
