import React, { Component } from 'react'
import { connect } from 'react-redux';
//import { Link } from 'react-router-dom';

import { fetchStrems } from '../../action';
import strems from '../../api/strems';

class Streamlist extends Component {
    componentDidMount() {
        this.props.fetchStrems();
    }

    renderList() {
        return this.props.streams.map(stream => {
            return (
                <div className="item" key={stream.id}>
                    <i className="large middle aligned icon camera" />
                    <div className="content">
                        {stream.title}
                        <div className="description">{stream.description}</div>
                    </div>
                </div>
            )
        })
    }

    render() {
        //console.log(this.props.streams);
        return (
            <div>
                <h2>Streams</h2>
                <div className="ui celled list">{this.renderList()}</div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return { streams: Object.values(state.stream) };
};

export default connect(mapStateToProps, { fetchStrems })(Streamlist);