import axios from "axios";

const URL = "http://localhost:3000/api/admin"

export class LoginService{

    static async login(login: string, password: string): Promise<string>{
        const loginUrl = URL+"/login";
        try {
            const response = await axios.post<{ token: string }>(loginUrl, { login, password });
            const token = response.data.token;
            localStorage.setItem('token', token);
            return token;
        } catch (error) {
            throw new Error('Invalid login credentials');
        }
    }
}
