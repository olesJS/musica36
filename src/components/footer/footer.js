import React from 'react';
import './footer.css';

class Footer extends React.Component {
    render(){
        return(
            <div className='foot'>
                <img className='logoPngF' width='40px' height='40px' src='https://musica36.ru/assets/web/v1/logo-77059bf60fe4a22a1915b5e8f9c3623ac43aea2d64d1a969e587986d941ecf87.png' alt='musicaLogo' />
                <div id='socials'>
                    <a target="_blank" rel="noreferrer" href='https://www.instagram.com/musica.36/'>
                        <img id="instaLogo" alt="Instagram" src='https://facebookbrand.com/wp-content/uploads/2021/03/glyph-logo_May2016_white.png?w=504&h=504' />
                    </a>
                    <a target="_blank" rel="noreferrer" href="https://www.youtube.com/channel/UCO4NT0vVg4VhOl9u3gdfpdg">
                        <img id='youtubeLogo' alt="YouTube" src='https://www.vectorico.com/download/social_media/youtube-dark-square.jpg' />
                    </a>
                    <a target="_blank" rel="noreferrer" href="https://t.me/musica36">
                        <img id='tgLogo' alt="Telegram" src='https://cdn1.iconfinder.com/data/icons/social-black-buttons/512/telegram-512.png' />
                    </a>
                </div>
                <p id='txt'>2021 ООО "Musica36"</p>
            </div>
        )
    }
}

export default Footer;