import { Controller, Post } from '@nestjs/common';
import { Body } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService) {}
    
    @Post('create')
    create(@Body() createUserDto: any) {
        return this.userService.create(createUserDto);
    }
}
