export class MyDto {
  @ApiProperty()
  @IsString()
  lastName: string;

  birthName?: string;
}
