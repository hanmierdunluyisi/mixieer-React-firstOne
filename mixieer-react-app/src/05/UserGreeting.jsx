import PropTypes from 'prop-types';

function UserGreeting(props) {
    const welcomMessage = <h2 className="welcom-message">Welcom {props.username}</h2>

    const loginPrompt =  <h2 className="login-prompt">Please log in to continue</h2>
    if(props.isLoggedIn){
        return(
            welcomMessage
        );
    }
    else{
        return (
            loginPrompt
        )
    }
}

UserGreeting.propTypes =  {
    isLoggedIn: PropTypes.bool.isRequired,
    username: PropTypes.string.isRequired
};

UserGreeting.defaultProps ={
    isLoggedIn:false,
    username:"bro"
}
export default UserGreeting; 