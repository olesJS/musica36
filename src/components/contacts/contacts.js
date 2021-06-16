import React from 'react';
import './contacts.css';

class Contacts extends React.Component {
    render(){
        return(
            <div id='parent'>
                <div id='emails'>
                    <div>
                        <p className='mailName'>Співпраця:</p>
                        <div>
                            <a id='mail' href='mailto:deal@musica36.ru'>deal@musica36.ru</a>
                        </div>
                    </div>

                    <div>
                        <p id='book' className='mailName'>Booking:</p>
                        <div>
                            <a id='mailOne' href='mailto:booking@musica36.ru'>booking@musica36.ru</a>
                        </div>
                    </div>

                    <div>
                        <p id='book' className='mailName'>Booking Скриптонит:</p>
                        <div>
                            <a id='mailTwo' href='mailto:agada@musica36.ru'>agada@musica36.ru</a>
                        </div>
                    </div>
                </div>

                <div id='forms'>
                    <h1 id='formsTxt' className='text'>Відправляйте ваші пропозиції</h1>
                    <input id='firstInput' placeholder='ВАШ EMAIL' type='email' />
                    <textarea id='secondInput' name='message' rows='15' placeholder='ВАШЕ ПОВІДОМЛЕННЯ' ></textarea>
                </div>
            </div>
        )
    }
}

export default Contacts;