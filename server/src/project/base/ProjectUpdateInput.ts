/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/docs/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { CategoryUpdateManyWithoutProjectsInput } from "./CategoryUpdateManyWithoutProjectsInput";
import { ValidateNested, IsOptional, IsString } from "class-validator";
import { Type } from "class-transformer";
import { ProposalUpdateManyWithoutProjectsInput } from "./ProposalUpdateManyWithoutProjectsInput";
@InputType()
class ProjectUpdateInput {
  @ApiProperty({
    required: false,
    type: () => CategoryUpdateManyWithoutProjectsInput,
  })
  @ValidateNested()
  @Type(() => CategoryUpdateManyWithoutProjectsInput)
  @IsOptional()
  @Field(() => CategoryUpdateManyWithoutProjectsInput, {
    nullable: true,
  })
  categories?: CategoryUpdateManyWithoutProjectsInput;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  projectDescription?: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  projectIcon?: string;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  projectName?: string;

  @ApiProperty({
    required: false,
    type: () => ProposalUpdateManyWithoutProjectsInput,
  })
  @ValidateNested()
  @Type(() => ProposalUpdateManyWithoutProjectsInput)
  @IsOptional()
  @Field(() => ProposalUpdateManyWithoutProjectsInput, {
    nullable: true,
  })
  proposals?: ProposalUpdateManyWithoutProjectsInput;
}
export { ProjectUpdateInput };
