import React from 'react';
import {FaPlay} from "react-icons/fa";
import {connect} from 'react-redux'

const initialState = {
    emailError: '',
    hobbyError: '',
    done: false
}

class UserInfo extends React.Component {
    state = initialState;

    validate = (e) => {
        e.preventDefault();
        e.persist();
        let email = e.target[0].value;
        let hobbies = e.target[1].value;

        console.log({email:email,
        hobbies:hobbies})

        if (!email) {
            this.setState({emailError: 'Please enter a valid email address.'})
        }

        if (!hobbies) {
            this.setState({hobbyError: 'Please select a hobby.'})
        }

        if (email && hobbies) {
            this.props.dispatch({
                type: 'EMAIL_SUBMIT',
                payload: {
                    email: email,
                    hobbies: hobbies
                }
            })
            this.setState({done: true})
        }
    };

    handleChange = (e) => {
        this.setState(initialState)
        console.log(e.target.value)
    }

    render() {
        return (
            <form onSubmit={(e) => {
                this.validate(e)
            }}>
                <p>Prepare for your career with a Project Management, Web-Development, Graphic design, or Digital
                    Marketing Internship at Northern.</p>
                <div className='row'>
                    <div className='col'>
                        <label className='error'>{this.state.emailError}</label>
                        <input type='email'
                               onChange={(e) => {
                                   this.handleChange(e)
                               }}
                               placeholder='Email Address*'
                               className='form-control mt-4'/>
                    </div>
                    <div className='col'>
                        <label className='error'>{this.state.hobbyError}</label>
                        <select className='form-control mt-4' onChange={(e) => {
                            this.handleChange(e)
                        }}>
                            <option value="" disabled selected>Interests</option>
                            <option value="Hiking">Hiking</option>
                            <option value="Swimming">Swimming</option>
                        </select>
                    </div>
                </div>
                <div className='row'>
                    <div className='col'>
                        <button
                            className='submit form-control mt-4'>{this.state.done && !this.props.submitted ? "Submitting..." : 'Sign Up Now'}
                            &ensp;<FaPlay/></button>

                    </div>
                </div>
            </form>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {dispatch}
};

const mapStateTOpROPS = state => {
    console.log(state);
    return {submitted: state.UserStore.submitted}
}

export default connect(mapStateTOpROPS, mapDispatchToProps)(UserInfo);
