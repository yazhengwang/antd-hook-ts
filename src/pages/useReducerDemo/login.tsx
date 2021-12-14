import { useState } from "react";
import { Spin, Space, Result, Button } from 'antd';
import './index.less'

function LoginPage() {
    const [name, setName] = useState<string>(''); // 用户名
    const [pwd, setPwd] = useState<string>(''); // 密码
    const [isLoading, setIsLoading] = useState<boolean>(false); // 是否展示loading，发送请求中
    const [error, setError] = useState<string>(''); // 错误信息
    const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false); // 是否登录

    const loginSuccess = () => {
        setError('');
        setIsLoading(true);
        setTimeout(()=>{
            setIsLoggedIn(true);
            setIsLoading(false);
            setName('initializer');
            setPwd('123456789');
        },2000)
    }

    const loginError = () => {
        setIsLoading(true);
        setIsLoggedIn(false);
        setTimeout(()=>{
            setError('登录失败，请检查账户或密码是否正确~');
            setName('');
            setPwd('');
            setIsLoading(false);
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

export default LoginPage;