import React, { Component } from 'react';
import {
    Text,
    TouchableWithoutFeedback,
    View,
    LayoutAnimation
} from 'react-native';
import { CardSection } from './common';
import { connect } from 'react-redux';
import * as actions from '../actions';

class ListItem extends Component {
    componentWillUpdate() {
        LayoutAnimation.spring();
    }

    renderDescription() {
        const { expanded, library } = this.props;

        if (expanded) {
            return (
                <CardSection>
                    <Text style={{ flex:1 }}>{ library.description }</Text>
                </CardSection>
            )
        }
    }

    render() {
        const { titleStyle } = styles;
        const { id, title } = this.props.library;

        return(
            <TouchableWithoutFeedback onPress={() => this.props.selectLibrary(id)}>
                <View>
                    <CardSection>
                        <Text style={titleStyle}>{ title }</Text>
                    </CardSection>
                    {this.renderDescription()}
                </View>
            </TouchableWithoutFeedback>
        );
    }
}

const styles = {
    titleStyle: {
        fontSize: 18,
        paddingLeft: 15
    }
}

// own props is equal the current component props
const mapStateToProps = (state, ownProps) => {
    const expanded = state.selectedLibraryId === ownProps.library.id
    return { expanded };
}
// connect first param mapStateToProps, second the actioncreators
// this action creator will be in this.props too, so we can call it :)
export default connect(mapStateToProps, actions)(ListItem);
