export interface ITodo {
    _id: string;
    userId: string;
    title: string;
    description: string;
    status: boolean;
    createdAt?: string;
    updatedAt?: string;
}

export interface IUser {
    _id: string;
    username: string;
    password: string;
    email: string;
    createdAt?: string;
    updatedAt?: string;
}

export interface UserData {
    username: string; 
    id: string;
    loggedIn: boolean;
}

export interface LoginFormData {
    "username": string;
    "password": string;
}

export interface RegisterFormData {
    "username": string;
    "email": string;
    "password": string;
    "repeatPassword": string;
}

export interface LoginComponentProps {
    setUserData: React.Dispatch<React.SetStateAction<UserData>>;
}

export interface RegisterComponentProps {
    setUserData: React.Dispatch<React.SetStateAction<UserData>>;    
}

export interface LoginFormProps {
    handleChange: (e: React.ChangeEvent) => void;
    handleLogin: (e: React.FormEvent<HTMLFormElement>) => Promise<void>;
    data: LoginFormData;
}

export interface HomeComponentProps {
    data: UserData;
}

export interface RegisterFormProps {
    handleChange: (e: React.ChangeEvent) => void;
    handleRegister: (e: React.FormEvent<HTMLFormElement>) => Promise<void>;
    data: RegisterFormData;
}

export interface NavbarProps {
    username: string;
}

export interface TodoBoardProps {
    userId: string;
    active: boolean;
    togglePopUp: () => void;
}

export interface CreateTodoFormData {
    title: string;
    description: string;
}

export interface PopUpProps {
    data: CreateTodoFormData;
    togglePopUp: () => void;
    handleChange: (e: React.ChangeEvent) => void;
    createTodo:  () => Promise<void>;
}

export interface TodoItemProps {
    todo: ITodo;
    finishTodo: (id: string, status: boolean) => Promise<void>
    removeTodo: (id: string) => Promise<void>
}

export interface ApiDataType {
    status: string
    message: string
    todo?: ITodo
    todos: ITodo[]
}

export interface AuthSystemResponse {
    status: string
    message: string
    user: IUser
}