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
                this.setState({isSignedIn: this.auth.isSignedIn.get()})
            })
        })

    }

    renderAuthButton() {
        if(this.state.isSignedIn === null) {
            return <div>Dont Know</div>
        } else if (this.state.isSignedIn) {
            return <div>SignedIn</div>
        } else {
            return <div>SignedOut</div>
        }
    }
    render() {
        return (
            <div>{this.renderAuthButton()}</div>
        )
    }
}

export default GoogleAuth;