import React, { Component } from 'react';
import { connect } from 'react-redux';

class LibraryList extends Component {
    render() {
        console.log(this.props);
        return;
    }
}

// Maps the global application state (state) and provide them for LibraryList as props
const mapStateToProps = state => {
    return { libraries: state.libraries };
}

// Weird syntax to wire LibraryList to Store
export default connect(mapStateToProps)(LibraryList);
