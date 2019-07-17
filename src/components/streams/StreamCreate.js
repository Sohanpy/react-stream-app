import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createStreame } from '../../action';

import StreamForm from './StreamForm';

class StreamCreate extends Component {
    onSubmit = (formValues) => {
        //console.log(formValues);   
        this.props.createStreame(formValues);
    }

    render() {
        //console.log(this.props)
        return (
            <div>
                <h3>Create a Stream</h3>
                <StreamForm onSubmit={this.onSubmit} />
            </div>
        );
    }
}



export default connect(null, { createStreame })(StreamCreate);