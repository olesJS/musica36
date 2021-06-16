import React from 'react';
import Header from './components/header/header';
import Footer from './components/footer/footer';
import Article from './components/article/article';
import Artists from './components/artists/artists';
import Scrip from './components/artists/scrip/scrip';
import Truwer from './components/artists/truwer/truwer';
import Grp from './components/artists/grp/grp';
import Video from './components/video/video';
import Contacts from './components/contacts/contacts';

class App extends React.Component {
    constructor(props){
        super(props);
        this.state={
            page: 1,
        }
    }
    changeToMain = () => {
        this.setState({page: 1})
    }
    changeToArtists = () => {
        this.setState({page: 2})
    }
    changeToScrip = () => {
        this.setState({page: 2.1})
    }
    changeToTruwer = () => {
        this.setState({page: 2.2})
    }
    changeToGrp = () => {
        this.setState({page: 2.3})
    }
    changeToVideo = () => {
        this.setState({page: 3})
    }
    changeToContacts = () => {
        this.setState({page: 5})
    }

    mainPage = () => {
        return(
            <div>
                <Header contacts={this.changeToContacts} video={this.changeToVideo} artists={this.changeToArtists} main={this.changeToMain} />
                <Article />
                <Footer />
            </div>
        )
    }
    artistPage = () => {
        return(
            <div>
                <Header contacts={this.changeToContacts} video={this.changeToVideo} artists={this.changeToArtists} main={this.changeToMain} />
                <Artists scrip={this.changeToScrip} truwer={this.changeToTruwer} grp={this.changeToGrp} />
                <Footer />
            </div>
        )
    }
    scripPage = () => {
        return(
            <div>
                <Header contacts={this.changeToContacts} video={this.changeToVideo} artists={this.changeToArtists} main={this.changeToMain} />
                <Scrip />
                <Footer />
            </div>
        )
    }
    truwerPage = () => {
        return(
            <div>
                <Header contacts={this.changeToContacts} video={this.changeToVideo} artists={this.changeToArtists} main={this.changeToMain}/>
                <Truwer />
                <Footer />
            </div>
        )
    }
    grpPage = () => {
        return(
            <div>
                <Header contacts={this.changeToContacts} video={this.changeToVideo} artists={this.changeToArtists} main={this.changeToMain} />
                <Grp />
                <Footer />
            </div>
        )
    }
    videoPage = () => {
        return(
            <div>
                <Header contacts={this.changeToContacts} video={this.changeToVideo} artists={this.changeToArtists} main={this.changeToMain} />
                <Video />
                <Footer />
            </div>
        )
    }
    contactsPage = () => {
        return(
            <div>
                <Header contacts={this.changeToContacts} video={this.changeToVideo} artists={this.changeToArtists} main={this.changeToMain} />
                <Contacts />
                <Footer />
            </div>
        )
    }

    render(){
        if(this.state.page === 1){
            return this.mainPage();
        } else if (this.state.page === 2){
            return this.artistPage();
        } else if (this.state.page === 2.1){
            return this.scripPage();
        } else if (this.state.page === 2.2){
            return this.truwerPage();
        } else if (this.state.page === 2.3){
            return this.grpPage();
        } else if (this.state.page === 3){
            return this.videoPage();
        } else if (this.state.page === 5){
            return this.contactsPage();
        }
    }
}

export default App;