import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class TechDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  logo: string;

  @IsString()
  @IsNotEmpty()
  color: string;

  @IsString()
  @IsNotEmpty()
  url: string;
}
export class TechUpDto {
  @IsString()
  @IsOptional()
  name: string;

  @IsString()
  @IsOptional()
  logo: string;

  @IsString()
  @IsOptional()
  color: string;

  @IsString()
  @IsOptional()
  url: string;
}
