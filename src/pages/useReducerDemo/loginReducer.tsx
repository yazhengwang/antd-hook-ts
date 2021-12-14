import { useReducer } from "react";
import { Spin, Space, Result, Button } from 'antd';
import { ILAction, ILState } from "./typings";
import './index.less'


const initState = {
    name: '',
    pwd: '',
    isLoading: false,
    error: '',
    isLoggedIn: false,
}
const  loginReducer=(state: ILState, action:ILAction)=> {
    switch(action.type) {
        case 'login':
            return {
                ...state,
                isLoggedIn: false,
                isLoading: true,
                error: '',
            }
        case 'success':
            return {
                ...state,
                name: 'success',
                pwd: '1234567',
                isLoggedIn: true,
                isLoading: false,
                error: '',
            }
        case 'error':
            return {
                ...state,
                error: action.payload&&action.payload.error,
                name: '',
                pwd: '',
                isLoggedIn: false,
                isLoading: false,
            }
        default: 
            return state;
    }
}
function LoginPageReducer() {
    const [state, dispatch] = useReducer(loginReducer, initState);
    const { name, pwd, isLoading, error, isLoggedIn } = state;

    const loginSuccess = () => {
        dispatch({ type: 'login' });
        setTimeout(()=>{
            dispatch({ type: 'success' });
        },2000)
    }

    const loginError = () => {
        dispatch({ type: 'login' });
        setTimeout(()=>{
            dispatch({
                type: 'error',
                payload: { error: '登录失败，请检查账户或密码是否正确~' }
            });

        },2000)
       
    }
    return ( 
        <div className='center'>
            {isLoading&& <Space size="middle">
                    <Spin size="large" />
                </Space>}
            {!isLoading&&<Result
                status={isLoggedIn?'success':'error'}
                title={isLoggedIn?'恭喜！登录成功':error}
                subTitle={isLoggedIn?'当前的登录用户为:'+name+'密码为：'+ pwd:''}
                extra={[
                <Button type="primary" key="success" onClick={loginSuccess}>
                   模拟登录成功
                </Button>,
                <Button key="error" onClick={loginError}>模拟登录失败</Button>,
                ]}
            />}
        </div>
    )
}

export default LoginPageReducer;