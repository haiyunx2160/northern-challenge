import React from 'react';
import {connect} from 'react-redux';
import UserInfo from "./UserInfo";
import ThankYou from "./ThankYou";


class SignUpForm extends React.Component {

    render() {
        return (
            <div className='container'>
                    <h1>INTERNSHIP SIGNUP FORM</h1>
                    <div className='hr'></div>

                {this.props.submitted?<ThankYou/>:<UserInfo/>}
            </div>
        )
    }
}

const mapDispatchToProps=dispatch=>{
    return {dispatch}
};

const mapStateTOpROPS =state=>{
    console.log(state);
    return {submitted:state.UserStore.submitted}
};

export default connect(mapStateTOpROPS, mapDispatchToProps)(SignUpForm);
