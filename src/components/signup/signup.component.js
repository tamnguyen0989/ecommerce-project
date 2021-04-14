import React, { Component } from 'react';
import CustomButton from '../custom-button/custom-button.component';
import FormInput from '../form-input/form-input.component';
import auth from '../../firebase/firebase.utils'


class Signup extends Component {
    constructor(props) {
        super(props)

        this.state = {
            displayName: '',
            email: '',
            password: '',
            confirmPassword: ''
        }
    }

    handleChange = event => {
        const { name, value } = event.target
        this.setState({
            [name]: value
        })
    }

    handleSubmit = event => {
        event.preventDefault()
        const { displayName, email, password, confirmPassword } = this.state
        if (password !== confirmPassword) {
            alert("passwords don't match")
            return
        }
        try {
            const { user } = await auth.createUserWithEmailAndPassword(email, password)
            await 
        } catch (error) {
            console.error(error);
        }
    }

    render() {
        const { displayName, email, password, confirmPassword } = this.state

        return (
            <div className='sign-up'>
                <h2 className='title'>I do not have a account</h2>
                <span>Sign up with your email and password</span>
                <form className='sign-up-form' onSubmit={this.handleSubmit}>
                    <FormInput
                        label='Display Name'
                        type='text'
                        name='displayName'
                        value={displayName}
                        onChange={this.handleChange}
                        required
                    />
                    <FormInput
                        label='Email'
                        type='text'
                        name='email'
                        value={email}
                        onChange={this.handleChange}
                        required
                    />
                    <FormInput
                        label='Password'
                        type='text'
                        name='password'
                        value={password}
                        onChange={this.handleChange}
                        required
                    />
                    <FormInput
                        label='Confirm Password'
                        type='text'
                        name='confirmPassword'
                        value={confirmPassword}
                        onChange={this.handleChange}
                        required
                    />
                    <CustomButton type='submit' >SIGN UP</CustomButton>
                </form>
            </div>
        );
    }
}

export default Signup;