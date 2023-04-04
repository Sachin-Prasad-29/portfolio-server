import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class ExpDto {
  @IsString()
  @IsNotEmpty()
  org: string;

  @IsString()
  @IsNotEmpty()
  desination: string;

  @IsString()
  @IsNotEmpty()
  year: string;

  @IsString()
  @IsNotEmpty()
  period: string;

  @IsString()
  @IsNotEmpty()
  url: string;
}

export class ExpUpDto {
  @IsString()
  @IsOptional()
  org: string;

  @IsString()
  @IsOptional()
  desination: string;

  @IsString()
  @IsOptional()
  year: string;

  @IsString()
  @IsOptional()
  period: string;

  @IsString()
  @IsOptional()
  url: string;
}
