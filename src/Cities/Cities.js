import React from 'react';
import {
 
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableWithoutFeedback
} from 'react-native';

import {colors} from '../theme'
export default class Cities extends React.Component {
    render() {
        console.log('cities',this.props)
        return (
            <View>
                <Text>Hello From Add Cities</Text>
            </View>
        )
    }
}