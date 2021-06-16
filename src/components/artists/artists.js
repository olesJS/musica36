import React from 'react';
import './artists.css';

class Artists extends React.Component {
    render(){
        return(
            <div>
                <div className="flexBox">
                    <hr />
                    <div id="scriptonite">
                        <img id='scriptoniteImg' alt='Скриптонит' src='https://musica36.ru/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBEQT09IiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--81a34d384ab131a18b483912f612dab53513ee4a/scryp%20-%20logo.png?locale=ru' />
                        <button onClick={this.props.scrip} id='scriptoniteButt' className='butt'>Перейти до артиста</button>
                    </div>
                    <hr />
                    <div id="truwer">
                        <img id='truwerImg' alt='Truwer' src='https://musica36.ru/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBFUT09IiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--34b454eab7ec43ab4d9a1086ad42af6a7ac9e640/truwer%20-%20logo.png?locale=ru' />
                        <button onClick={this.props.truwer} id='truwerButt' className='butt'>Перейти до артиста</button>
                    </div>
                    <hr />
                    <div id='gruppa'>
                        <img id="gruppaImg" alt='Gruppa Scryptonite' src='https://musica36.ru/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBEUT09IiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--831428c5bf5f80086a56118c2b5b568a53ab0790/gs%20-%20logo.png?locale=ru' />
                        <button onClick={this.props.grp} id='gruppaButt' className='butt'>Перейти до артиста</button>
                    </div>
                    <hr />
                </div>
            </div>
        )
    }
}

export default Artists;