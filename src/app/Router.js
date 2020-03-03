import React from 'react'
import { Redirect, Router as ReachRouter } from '@reach/router'
import HomePage from './enotes/main/HomePage'
import LoginPage from './enotes/login/LoginPage'
import ProfilePage from './enotes/main/profile/ProfilePage'
import SignupPage from './enotes/signup/SignupPage'
import NotFound404Page from '../app/enotes/404'
import AdminPage from './enotes/main/AdminPage'

const Router = () => {
    return <ReachRouter>
        <Redirect to='/home' from='/' noThrow />

        <HomePage path='home' />

        <LoginPage path='/login'/>
        <SignupPage path='/signup'/>

        <ProfilePage path='/profile'/>
        <AdminPage path='/admin' />

        <NotFound404Page path='/404' />
    </ReachRouter>
}

export default Router