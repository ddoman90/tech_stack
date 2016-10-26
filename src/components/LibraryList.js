import React, { Component } from 'react';
import { ListView } from 'react-native';
import { connect } from 'react-redux';
import ListItem from './ListItem';

class LibraryList extends Component {
    componentWillMount() {
        const ds = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 != r2
        });

        this.dataSource = ds.cloneWithRows(this.props.libraries);
    }

    // always gets the specific object
    renderRow(library) {
        return <ListItem library={library}/>;
    }

    render() {
        return(
            <ListView
                dataSource={this.dataSource}
                renderRow={this.renderRow}
            />
        );
    }
}

// Maps the global application state (state) and provide them for LibraryList as props
const mapStateToProps = state => {
    return { libraries: state.libraries };
}

// Weird syntax to wire LibraryList to Store
export default connect(mapStateToProps)(LibraryList);
