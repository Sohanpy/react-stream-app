import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { singleStreams, deleteStream } from '../../action';
import Modal from '../Modal';
import history from '../../history';

class StreamDelete extends React.Component {
    componentDidMount() {
        //console.log(this.props);
        this.props.singleStreams(this.props.match.params.id);
    }

    renderAction() {
        const { id } = this.props.match.params;
        return (
            <div className="actions">
                <button onClick={() => this.props.deleteStream(id)} className="ui button negative">Delete</button>
                <Link to='/' className="ui button">Cancel</Link>
            </div>
        )
    }

    renderContent() {
        if (!this.props.stream) {
            return 'Are you sure want to delete this stream?'
        }
        return `Are you sure want to delete ${this.props.stream.title}?`
    }

    render() {
        return (
            <div>
                <Modal
                    title="Delete Stream"
                    description={this.renderContent()}
                    actions={this.renderAction()}
                    onDismiss={() => history.push('/')}
                />
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return { stream: state.stream[ownProps.match.params.id] }
}

export default connect(mapStateToProps, { singleStreams, deleteStream })(StreamDelete);