import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
    create(user: any) {
        return 'This action adds a new user';
    }
}
