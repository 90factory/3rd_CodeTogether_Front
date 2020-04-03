import React from 'react';
import './css/Login.css'
import { Input, Button } from 'semantic-ui-react';

const Login = () => {
    return(
        <div className='login-container'>
            <div className="input-container">
                <div>
                    <Input icon='users' iconPosition='left' placeholder='아이디 입력'/>
                </div>
                <div>
                    <Input type="password" label={{icon:'asterisk'}}
                     labelPosition='left corner'
                    placeholder='비밀번호 입력'/>
                </div>
            </div>
            
            <div className="button-container">
                <Button positive>로그인</Button>
                <Button circular color='google plus' icon='google plus'/>
            </div>
        </div>
    )
}

export default Login;