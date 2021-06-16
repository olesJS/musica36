import React from 'react';
import './grp.css';

class Grp extends React.Component {
    render(){
        return(
            <div>
                <center><img id='mainGrpImg' src='https://musica36.ru/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBEUT09IiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--831428c5bf5f80086a56118c2b5b568a53ab0790/gs%20-%20logo.png?locale=ru' /></center>
                <hr className='horizontal' />
                <div className='container' >
                    <a className='aaa' target='_blank' ref='noreferrer' href='https://band.link/kpsp'><div className='block' id='kpsp' >
                        <img alt='КПСП' className='image' src='https://images.genius.com/b7aa116eb1d0fdcdac4704c66f2ed0da.1000x1000x1.jpg' />
                        <p className='txt'>Gruppa Skryptonite - КПСП</p>
                    </div></a>

                    <a className='aaa' target='_blank' ref='noreferrer' href='https://bnd.lc/nelyubit'><div className='block' id='jusn' >
                        <img alt='Жизнь не любит' className='image' src='https://images.genius.com/e19716286f089a77d5d9e46fc0331986.1000x1000x1.jpg' />
                        <p className='txt'>Gruppa Skryptonite ft. Tayoka - Жизнь не любит</p>
                    </div></a>

                    <a className='aaa' target='_blank' ref='noreferrer' href='https://www.youtube.com/watch?v=_2S70chBJ0k'><div className='block' id='podruga' >
                        <img alt='Podruga' className='image' src='https://i1.sndcdn.com/artworks-53edKizR0qmMbNgh-VEqc8w-t500x500.jpg' />
                        <p id='podTxt' className='txt'>Gruppa Skryptonite ft. Therr Maitz - Podruga</p>
                    </div></a>

                    <a className='aaa' target='_blank' ref='noreferrer' href='https://band.link/solitude'><div className='block' id='solitude' >
                        <img alt='Solitude' className='image' src='https://the-flow.ru/uploads/images/catalog/element/5ca6a67c074db.jpg' />
                        <p className='txt'>Gruppa Skryptonite - Solitude</p>
                    </div></a>

                    <a className='aaa' target='_blank' ref='noreferrer' href='https://band.link/listen3x3'><div className='block' id='three' >
                        <img alt='3x3' className='image' src='https://images.genius.com/ecbc812856a84447c285aefae13f7fc1.1000x1000x1.jpg' />
                        <p className='txt'>Gruppa Skryptonite ft. T-Fest - 3x3</p>
                    </div></a>

                    <a className='aaa' target='_blank' ref='noreferrer' href='https://band.link/O6baq'><div className='block' id='devushku' >
                        <img alt='' className='image' src='https://images.genius.com/c8f93f7a7da1edd1c1d3a35488819e69.1000x1000x1.jpg' />
                        <p id='devTxt' className='txt'>Gruppa Skryptonite ft. Therr Maitz - Любите девушки</p>
                    </div></a>
                </div>
            </div>
        )
    }
}

export default Grp;