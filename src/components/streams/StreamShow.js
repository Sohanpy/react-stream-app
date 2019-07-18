import React, { Component } from 'react';
import { connect } from 'react-redux';
import { singleStreams } from '../../action';
class StreamShow extends Component {
    componentDidMount() {
        this.props.singleStreams(this.props.match.params.id);
    }
    render() {
        if (!this.props.stream) {
            return <div>Loading...</div>
        }
        return (
            <div>
                <h1>{this.props.stream.title}</h1>
                <h5>{this.props.stream.description}</h5>
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return { stream: state.stream[ownProps.match.params.id] }
}

export default connect(mapStateToProps, { singleStreams })(StreamShow);