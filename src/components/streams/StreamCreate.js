import React, { Component } from 'react';
import { Field , reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { createStreame } from '../../action';

class StreamCreate extends Component {
    renderError({ touched , error}){
        if (touched && error){
            return(
                <div className = "ui error message">
                    <div className = "header">{error}</div>
                </div>
            )
        }
    }

    renderInput = ({input , label , meta}) => {
        //console.log(meta);
        const className = `field ${meta.error && meta.touched ? 'error' : ''}`;
        return (
            <div className = {className}>
                <label>{label}</label>
                <input  {...input} autoComplete ="off" />
                {this.renderError(meta)}
            </div>
        )
    }
    // renderInput (formProp) {
    //     return (<div>
    //                 <input onChange={formProp.input.onChange} value={formProp.input.value} />
    //             </div>)
    // }

    osSubmit = (formValues) => {
        //console.log(formValues);   
        this.props.createStreame(formValues);
    }

    render() {
        //console.log(this.props)
        return (
            <div>
                <form onSubmit = {this.props.handleSubmit(this.osSubmit)} className = "ui form error">
                    <Field name = "title" component = {this.renderInput} label = "Enter Title"/>
                    <Field name = "description" component = {this.renderInput} label = "Enter Description"/>
                    <button className = "ui button primary">Submit</button>
                </form>
            </div>
        )
    }
}

const validate = (formValues) => {
    const error ={};

    if (!formValues.title){
        error.title = 'you must enter a title';
    }
    if (!formValues.description){
        error.description = 'you must enter description';
    }
    return error;
}

const formWrapped = reduxForm({
    form: 'streamCreate',
    validate
})(StreamCreate);

export default connect(null , { createStreame })(formWrapped);