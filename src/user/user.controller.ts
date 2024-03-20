import { Body, Controller, Param, Post, Get } from '@nestjs/common';

@Controller('users')
export class UserController {
  @Post()
  async create(@Body() body) {
    return { body };
  }

  @Get()
  async list() {
    return { users: [] };
  }

  @Get(':id')
  async readone(@Param() params) {
    return { users: {}, params };
  }
}
