import { ApiModelProperty } from '@nestjs/swagger';
export class Contact {
  @ApiModelProperty()
  id: string;
  @ApiModelProperty()
  firstname: string;
  @ApiModelProperty()
  lastname: string;
  @ApiModelProperty()
  age: number;
  @ApiModelProperty()
  address: string;
}
