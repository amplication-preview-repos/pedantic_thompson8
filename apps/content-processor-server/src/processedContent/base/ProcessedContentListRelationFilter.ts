/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { ProcessedContentWhereInput } from "./ProcessedContentWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class ProcessedContentListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => ProcessedContentWhereInput,
  })
  @ValidateNested()
  @Type(() => ProcessedContentWhereInput)
  @IsOptional()
  @Field(() => ProcessedContentWhereInput, {
    nullable: true,
  })
  every?: ProcessedContentWhereInput;

  @ApiProperty({
    required: false,
    type: () => ProcessedContentWhereInput,
  })
  @ValidateNested()
  @Type(() => ProcessedContentWhereInput)
  @IsOptional()
  @Field(() => ProcessedContentWhereInput, {
    nullable: true,
  })
  some?: ProcessedContentWhereInput;

  @ApiProperty({
    required: false,
    type: () => ProcessedContentWhereInput,
  })
  @ValidateNested()
  @Type(() => ProcessedContentWhereInput)
  @IsOptional()
  @Field(() => ProcessedContentWhereInput, {
    nullable: true,
  })
  none?: ProcessedContentWhereInput;
}
export { ProcessedContentListRelationFilter as ProcessedContentListRelationFilter };
