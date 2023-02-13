export type Roles = 'administrator'|'guest';

export interface User {
    username: string;
    password: string;
    UpdateAt?: string;
}

export interface UserResponse {
    message: string;
    token: string;
    id: number;
    username:string;
    rol: Roles;
}

export interface UserCreate {
    name: string;
    rol: Roles;
    username: string;
    password: string;
    createdAt?: string;
}

export interface UserEdit {
    id: number;
    name: string;
    rol: Roles;
    username: string;
    password: string;
}

export interface ChangePass{
    username: string;
    password: string;
    newpassword: string;
}
