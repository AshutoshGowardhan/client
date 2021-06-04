import React from 'react';

class GoogleAuth extends React.Component {
    state = {isSignedIn:null};
    componentDidMount(){
        window.gapi.load('client:auth2',()=>{
            window.gapi.client.init({
                clientId: '997653619340-isdqg1gcg1hld0ildpfi05nr0j5n9o2c.apps.googleusercontent.com',
                scope: 'email'
            }).then(()=> {
                this.auth = window.gapi.auth2.getAuthInstance();
                this.setState({isSignedIn: this.auth.isSignedIn.get()});
                this.auth.isSignedIn.listen(this.onAuthChange);
            })
        })

    }

    onAuthChange = () => {
        this.setState({ isSignedIn: this.auth.isSignedIn.get()})
    }

    onSignIn = () => {
        this.auth.signIn();
    }
    onSignOut = () => {
        this.auth.signOut();
    }

    renderAuthButton() {
        if(this.state.isSignedIn === null) {
            return <div>Dont Know</div>
        } else if (this.state.isSignedIn) {
            return (
                <button onClick={this.onSignOut} className="ui red google button">
                    <i className="google icon"></i>
                    Sign Out
                </button>
            )
        } else {
            return (
                <button onClick={this.onSignIn} className="ui red google button">
                  <i className="google icon"></i> 
                  Sign In
                </button>
                )
        }
    }
    render() {
        return (
            <div>{this.renderAuthButton()}</div>
        )
    }
}

export default GoogleAuth;