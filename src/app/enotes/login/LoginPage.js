import React from 'react'
import { navigate, Link } from '@reach/router'
import { Button } from '@blueprintjs/core'

const LoginPage = () => {
    const handleSubmit = () => navigate('/profile')

    const loginFormStyle = {
        width: '400px',
        backgroundColor: '#FAFAFA',
        padding: '1em',
        margin: '1em',
        borderRadius: '5px'
    }
    return <div className='row' style={{height:'100vh'}}>
        <div className='col-sm-12 my-auto'>
            <div className='card mx-auto' style={loginFormStyle}>
                <form onSubmit={handleSubmit}>
                    <p><strong>Sign in or </strong><Link to='/signup'>or create an account</Link></p>
                    
                    <div className='form-group'>
                        <input type='username' placeholder='username' className='form-control' />
                    </div>
                    <div className='form-group'>
                        <input type='password' placeholder='password' className='form-control' id='exampleInputPassword1' />
                    </div>
                    <div class="d-flex justify-content-center">
                        <Button type='submit' intent='primary'>Login</Button>
                    </div>
                    
                </form>
            </div>
        </div>
    </div>
}

export default LoginPage