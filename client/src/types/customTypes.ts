export interface ITodo {
    _id: string;
    userId: string;
    title: string;
    description: string;
    status: boolean;
    createdAt?: Date;
    updatedAt?: Date;
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

export interface LoginFormProps {
    handleChange: (e: React.ChangeEvent) => void;
    handleLogin: (e: React.FormEvent<HTMLFormElement>) => void;
    data: LoginFormData;
}

export interface HomeComponentProps {
    data: UserData;
}

export interface RegisterFormProps {
    handleChange: (e: React.ChangeEvent) => void;
    handleRegister: (e: React.FormEvent<HTMLFormElement>) => void;
    data: RegisterFormData;
}

export interface NavbarProps {
    username: string;
}

export interface TodoBoardProps {
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
    createTodo:  (data: CreateTodoFormData) => Promise<void>;
}