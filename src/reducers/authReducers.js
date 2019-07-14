const INITIAL_STATE ={
    isSignedIn : null,
    userId : null
};

export default (state = INITIAL_STATE , action) => {
    switch(action.type){
        case 'SIGN_IN':
            return {...state , isSignedIn : true , userId:action.payload  } //jokhn user login korbe tokhn userid store korbo
        case 'SIGN_OUT':
            return {...state , isSignedIn : false , userId : null} //abar jokhn logout korbe then userid delete kore dbo
        default:
            return state;
    }
};