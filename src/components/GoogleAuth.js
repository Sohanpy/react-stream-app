//with redux

import React, { Component } from 'react';
import {connect} from 'react-redux';
import {signIn , signOut} from '../action';

class GoogleAuth extends Component {

    componentDidMount() {
        window.gapi.load('client:auth2', () => {
            window.gapi.client.init({
                clientId: '207066145599-24v8oluj8r0np1j542h7ed6obj2crqv0.apps.googleusercontent.com',
                scope: 'email'
            }).then(() => {
                this.auth = window.gapi.auth2.getAuthInstance();
                this.onAuthChange(this.auth.isSignedIn.get())
                this.auth.isSignedIn.listen(this.onAuthChange);
            })
        });
    }

    onAuthChange = (isSignedIn) => {
        if(isSignedIn){
            this.props.signIn(this.auth.currentUser.get().getId());
        }else{
            this.props.signOut();
        }
    };

    onSignIn = () => {
        this.auth.signIn();  
    }

    onSignOut = () => {
        this.auth.signOut();
    }

    renderAuthButton() {
        if (this.props.isSignedIn === null) {
            return null
        } else if (this.props.isSignedIn === true) {
            return (
                <button onClick={this.onSignOut} className="ui red google button">
                    <i className="google icon" />
                    Sign Out
                </button>
            );
        } else {
            return (
                <button onClick={this.onSignIn} className="ui red google button">
                    <i className="google icon" />
                    Sign in with google
                </button>
            );
        }
    }

    render() {
        return (
            <div>
                <h1>{this.renderAuthButton()}</h1>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return { isSignedIn : state.auth.isSignedIn }
}

export default connect(mapStateToProps , {signIn , signOut})(GoogleAuth);




// .then function data response kore







//google auth setup without redux

// import React, { Component } from 'react'

// export default class GoogleAuth extends Component {
//     state = { isSignedIn: null }

//     componentDidMount() {
//         window.gapi.load('client:auth2', () => {
//             window.gapi.client.init({
//                 clientId: '207066145599-24v8oluj8r0np1j542h7ed6obj2crqv0.apps.googleusercontent.com',
//                 scope: 'email'
//             }).then(() => {
//                 this.auth = window.gapi.auth2.getAuthInstance();
//                 this.onAuthChange();
//                 this.auth.isSignedIn.listen(this.onAuthChange);
//             })
//         });
//     }

//     onAuthChange = () => {
//         this.setState({ isSignedIn: this.auth.isSignedIn.get() });
//     };

//     onSignIn = () => {
//         this.auth.signIn();
//     }

//     onSignOut = () => {
//         this.auth.signOut();
//     }

//     renderAuthButton() {
//         if (this.state.isSignedIn === null) {
//             return <div></div>
//         } else if (this.state.isSignedIn === true) {
//             return (
//                 <button onClick={this.onSignOut} className="ui red google button">
//                     <i className="google icon" />
//                     Sign Out
//                 </button>
//             );
//         } else {
//             return (
//                 <button onClick={this.onSignIn} className="ui red google button">
//                     <i className="google icon" />
//                     sign in with google
//                 </button>
//             );
//         }
//     }

//     render() {
//         return (
//             <div>
//                 <h1>{this.renderAuthButton()}</h1>
//             </div>
//         )
//     }
// }
