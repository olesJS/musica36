import React from 'react';
import './header.css';

class Header extends React.Component{
    render(){
        return(
            <div id='one'>
                <div className='head'>
                    <button id='imgButton' onClick={this.props.main}>
                        <img id='logoPng' title='Перейти на головну' width='45px' height='45px' src='https://musica36.ru/assets/web/v1/logo-77059bf60fe4a22a1915b5e8f9c3623ac43aea2d64d1a969e587986d941ecf87.png' alt='musicaLogo' />
                    </button>
                    <button id='artistsButton' ref='art' onClick={this.props.artists}>Артисти</button>
                    <button id='videoButton' onClick={this.props.video}>Відео</button>
                    <button id='contactsButton' onClick={this.props.contacts}>Контакти</button>
                </div>
            </div>
        )
    }
}

export default Header;