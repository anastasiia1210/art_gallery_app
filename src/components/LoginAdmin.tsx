import './login-admin.css'
import { useForm } from 'react-hook-form';
import {LoginService} from "../services/LoginService";
import {useNavigate} from 'react-router-dom';

function LoginAdmin(){
    const { register, handleSubmit, formState: { errors } } = useForm();
    const navigate = useNavigate();
    const onSubmit = async (data) => {
        const token = await LoginService.login(data.login, data.password);
        if (token) {
            console.log(localStorage.token);
            navigate('/admin/genres');
        }
    };

    return(
        <div className="container d-flex justify-content-center align-items-center vh-100">
            <div className="form-div">
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Login</label>
                    <input type="email" className="form-control login" id="exampleInputEmail1" aria-describedby="emailHelp"
                           placeholder="Login" {...register("login", { required: true })}/>
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Password</label>
                    <input type="password" className="form-control login" id="exampleInputPassword1" placeholder="Password"
                           {...register("password", { required: true })}/>
                </div>
                <button type="submit" className="btn btn-primary">Увійти</button>
            </form>
            </div>
        </div>
    )
}
export default LoginAdmin;
