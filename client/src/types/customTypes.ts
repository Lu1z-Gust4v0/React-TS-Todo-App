export interface UserData {
    username: string; 
    id: string;
    loggedIn: boolean;
}

export interface LoginFormData {
    "username": string;
    "password": string;
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