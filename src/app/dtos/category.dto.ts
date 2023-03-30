import {
  IsEnum,
  IsNotEmpty,
  IsOptional,
  IsUrl,
  Length,
  validateOrReject,
} from "class-validator";
import { AccessType, Category } from "../models/category.model";

export interface ICreateCategoryDto
  extends Omit<Category, "id" | "createdAt" | "updatedAt"> {}

export class CreateCategoryDto implements ICreateCategoryDto {
  @IsNotEmpty()
  @Length(4, 140)
  name!: string;

  @IsUrl()
  @IsNotEmpty()
  image!: string;

  @IsOptional()
  @IsEnum(AccessType)
  access?: AccessType | undefined;
}

(async () => {
  try {
    const dto = new CreateCategoryDto();
    dto.name = "a";
    dto.image = "imagen.jpg";
    await validateOrReject(dto);
  } catch (error) {
    console.error(error);
  }
})();
