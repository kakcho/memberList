import React from 'react'
import Header from '../Header/Header';
import UserList from '../../containers/UserList'

import '../../styles/header.css'




const Home = () => {

    return <div>
        <Header/>
        <div className='members'>
            <UserList />
            
        </div>
        </div>
}

export default Home;