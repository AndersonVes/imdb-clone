import React, { useContext } from 'react';

import { Link } from 'react-router-dom';

import RMDBLogo from '../../images/logo.png';
import TMDBLogo from '../../images/tmdb_logo.svg';

import { Wrapper, Content, LogoImg, TMDBLogoImg } from './Header.styles';

//Context
import { Context } from '../../context';

const Header = () => {
    const [user] = useContext(Context)
    console.log(user);

    return (
        <Wrapper>
            <Content>
                <Link to='/'>
                    <LogoImg src={RMDBLogo} alt='Rmdb logo' />
                </Link>
                {user ? (
                    <span>Loggedin as {user.username}</span>)
                    : (
                        <Link to='/login'>
                            <span>Login</span>
                        </Link>
                    )
                }
            </Content>
        </Wrapper>
    );
}

export default Header;