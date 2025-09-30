import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AutoresModule } from './autores/autores.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite', // Tipo do banco de dados
      database: 'estante.db', // Nome do arquivo do banco
      entities: [__dirname + '/**/*.entity{.ts,.js}'], // Onde encontrar as entidades
      synchronize: true, // Sincroniza o schema do banco com as entidades (ótimo para dev)
    }),
    AutoresModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}