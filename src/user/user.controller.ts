import {
  Body,
  Controller,
  Param,
  Post,
  Get,
  Put,
  Patch,
  Delete,
  ParseIntPipe,
} from '@nestjs/common';
import { CreateUserDTO } from './dto/create-user.dto';
import { updatePutUserDTO } from './dto/update-put-user.dto';
import { updatePatchUserDTO } from './dto/update-patch-user.dto copy';
import { UserService } from './user.servide';

@Controller('users')
export class UserController {
  constructor(private readonly UserService: UserService) {}

  @Post()
  async create(@Body() data: CreateUserDTO) {
    return this.UserService.create(data);
  }
  // data contem email, name, password

  @Get()
  async list() {
    return { users: [] };
  }

  @Get(':id')
  async readone(@Param('id', ParseIntPipe) id: number) {
    return { users: {}, id };
  }

  @Put(':id')
  async update(
    @Body() { email, name, password }: updatePutUserDTO,
    @Param('id', ParseIntPipe) id: number,
  ) {
    return {
      method: 'put',
      email,
      name,
      password,
      id,
    };
  }

  @Patch(':id')
  async updatePartial(
    @Body() { email, name, password }: updatePatchUserDTO,
    @Param('id', ParseIntPipe) id: number,
  ) {
    return { method: 'Patch', email, name, password, id };
  }

  @Delete(':id')
  async delete(@Param('id', ParseIntPipe) id: number) {
    return {
      id,
    };
  }
}
