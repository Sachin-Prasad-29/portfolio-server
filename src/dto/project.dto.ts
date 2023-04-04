import { IsArray, IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class ProjectDto {
  @IsString()
  @IsNotEmpty()
  image: string;

  @IsString()
  @IsNotEmpty()
  title: string;

  @IsString()
  @IsNotEmpty()
  desc: string;

  @IsArray()
  @IsNotEmpty()
  techstack: string[];

  @IsString()
  @IsNotEmpty()
  repoUrl: string;

  @IsString()
  @IsNotEmpty()
  liveUrl: string;
}
export class ProjectUpDto {
  @IsString()
  @IsOptional()
  image: string;

  @IsString()
  @IsOptional()
  title: string;

  @IsString()
  @IsOptional()
  desc: string;

  @IsArray()
  @IsOptional()
  techstack: string[];

  @IsString()
  @IsOptional()
  repoUrl: string;

  @IsString()
  @IsOptional()
  liveUrl: string;
}
