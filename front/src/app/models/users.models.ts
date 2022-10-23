export class Users{
    id!: string;
    username!: string;
    email!: string;
    password!: string;
    role!: string;
    friends!: Array<any>;
    createdAt!: Date;
    updatedAt!: Date
}