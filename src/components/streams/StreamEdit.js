import React, { Component } from 'react'
import {connect} from 'react-redux';

import {singleStreams} from '../../action';

class StreamEdit extends Component {
    componentDidMount(){
        this.props.singleStreams(this.props.match.params.id); //258
    }
    render() {
        console.log(this.props);
        return (
            <div>
                <h1>StreamList</h1>
            </div>
        )
    }
}


const mapStateToProps = (state , ownProps) => {
    return { stream : state.stream[ownProps.match.params.id]}
}

export default connect(mapStateToProps , {singleStreams})(StreamEdit);


