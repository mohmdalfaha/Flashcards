import Carousel from "react-native-snap-carousel";
import FlipCard from 'react-native-flip-card';
import { Card } from 'react-native-paper';

import React, { PureComponent } from "react";
import { Dimensions, Text, View, Image, StyleSheet, Button,TouchableOpacity} from "react-native";

const itemWidth = 300;
const itemHeight = 450;
export default class CardsList extends PureComponent {
    state = {
        index: 0,
    };

    _renderItem = ({ item }) => {
        return (
            <View
                style={{
                    width: itemWidth,
                    height: itemHeight,
                    backgroundColor: "white",
                    alignItems: "center",
                    justifyContent: "center",
                    alignContent: 'center',
                }}
            >
            <FlipCard
                  style={styles.card}
                    friction={14}
                    perspective={1000}
                    flipHorizontal={false}
                    flipVertical={true}
                    flip={false}
                    onFlipEnd={(isFlipEnd)=>{console.log('isFlipEnd', isFlipEnd)}}
                  >
                    <View style={styles.face}>
                        <Text> Why React is cool</Text>
                    </View>
                    <View style={styles.back}>
                        <Text> Because It's Reactive lol `{this.state.index}`!!</Text>
                        <TouchableOpacity>
                <Text> Correct </Text>
                </TouchableOpacity>
                <TouchableOpacity>
                <Text> Incorrect </Text>
                </TouchableOpacity>
                    </View>
                  </FlipCard>
                        <Text style={{ color: "whitesmoke" }}>{`${this.state.index}`}</Text>
            </View>
        );
    };

    _onSnapToItem = index => {
        this.setState({ index });
    };

    render() {
        const data = [0, 1,2,3];
        return (
            <View style={styles.container}>
                <Carousel
                    containerCustomStyle={styles.cardContainer}
                    data={data}
                    itemHeight={itemHeight}
                    itemWidth={itemWidth}
                    onSnapToItem={this._onSnapToItem}
                    renderItem={this._renderItem}
                    sliderWidth={Dimensions.get("window").width}
                    firstItem={2}
                    layout={'stack'}
                    loop={true}
                />
                <Text style={{ color: "#192a56" }}>{`Active index: ${this.state.index}`}</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
     justifyContent: "center",
      alignItems: "center",
  },
  card: {
    flex:1,
    height: 201,
    width: 375,
    overflow: "hidden",
    justifyContent:'center',
    alignContent:'center',
  },
  cardContainer: {
    paddingTop: 40,
  },
  face: {
    flex:1,
    backgroundColor: "#192a56",
  },
  back: {
    flex:1,
    backgroundColor: "#fbc531",
  },
})