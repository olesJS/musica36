import React from 'react';
import './article.css';

class Article extends React.Component{
    render(){
        return(
            <div>
                <h1 id='articleTitle'>Послухати новинки від Musica36</h1>
                <div className='wrapper'>
                    <div id="whistlesPapers">
                        <img id="whistlesPapersImg" alt="Свистки и бумажки" src="https://the-flow.ru/uploads/images/catalog/element/605d1803d119c.jpg" />
                        <a className="aaa" href="https://band.link/MJGPt" target="_blink" rel="noreferrer"><p id="whistlesPapersName">Скриптонит - Свистки и бумажки</p></a>
                    </div>
                    <div id="mama">
                        <img id="mamaImg" alt="Мама" src="https://images.genius.com/ef3b2d4ac1d439e9473f73282d8bfb77.1000x1000x1.jpg" />
                        <a className="aaa" href="https://band.link/4JPE5" target="_blink" rel="noreferrer"><p id="mamaName"> Скриптонит ft. Feduk, Truwer, Niman & Баста - Мама</p></a>
                    </div>
                    <div id="sumka">
                        <img id='sumkaImg' alt="Сумка" src='https://images.genius.com/8b295f8a829ecb710907825ec18a8e60.1000x1000x1.jpg' />
                        <a className='aaa' href='https://band.link/9YNPY' target='_blink' rel="noreferrer"><p id="sumkaName">qurt ft. Скриптонит - Сумка</p></a>
                    </div>
                    <div id="hybrid">
                        <img id="hybridImg" alt="Hybrid" src="https://the-flow.ru/uploads/images/catalog/element/6085db4308867.jpeg" />
                        <a className="aaa" href="https://band.link/zmIfT" target="_blink" rel="noreferrer"><p id="hybridName">qurt ft. Truwer - Hybrid (EP)</p></a>
                    </div>
                    <div id="atlanta">
                        <img id="atlantaImg" alt="НеАтланта" src="https://images.genius.com/0db59317712a0de45471db78477b238f.300x300x1.jpg"/>
                        <a className="aaa" href="https://band.link/ROMls" target="_blink" rel="noreferrer"><p id="atlantaName">Rodionis - Не Атланта</p></a>
                    </div>
                    <div id="chisti">
                        <img id="chistiImg" alt="Чистий Freestyle" src="https://i1.sndcdn.com/artworks-mc8YsHX7WuBrPF0N-Bmo2nw-t500x500.jpg" />
                        <a className="aaa" href="https://band.link/VUVyf" target="_blink" rel="noreferrer"><p id="chistiiName">Gee Baller - Чистий Freestyle</p></a>
                    </div>
                </div>
            </div>
        )
    }
}

export default Article;