import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class SocialDto {
  @IsString()
  @IsNotEmpty()
  logo: string;

  @IsString()
  @IsNotEmpty()
  url: string;
}
export class SocialUpDto {
  @IsString()
  @IsOptional()
  logo: string;

  @IsString()
  @IsOptional()
  url: string;
}
