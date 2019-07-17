import _ from 'lodash';
import React, { Component } from 'react'
import { connect } from 'react-redux';

import { singleStreams, editStreams } from '../../action';
import StreamForm from './StreamForm';

class StreamEdit extends Component {
    componentDidMount() {
        this.props.singleStreams(this.props.match.params.id); //258
    }

    onSubmit = (formValues) => {
        console.log(formValues);
        this.props.editStreams(this.props.match.params.id, formValues);
    }


    render() {
        if (!this.props.stream) return <div>Loading...</div>;
        return (
            <div>
                <h3>Edit a stream</h3>
                <StreamForm
                    initialValues={_.pick(this.props.stream, 'title', 'description')}
                    onSubmit={this.onSubmit}
                />
            </div>
        );
    }
};

const mapStateToProps = (state, ownProps) => {
    return { stream: state.stream[ownProps.match.params.id] }
}

export default connect(mapStateToProps,
    { singleStreams, editStreams })(StreamEdit);


