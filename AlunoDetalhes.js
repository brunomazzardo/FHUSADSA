import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  Image
} from "react-native";
export default class AlunoDetalhes extends React.Component {
  state = {
    gosto: true
  };

  gostoNaoGosto() {
    this.setState({
      gosto: !this.state.gosto
    });
  }

  render() {
    return (
      <View
        style={{
          alignItems: "center",
          flexDirection: "row",
          justifyContent: "space-around"
        }}
      >
        <Text style = {{color:'white'}} >{this.props.aluno.email}</Text>
        <TouchableHighlight onPress={this.gostoNaoGosto.bind(this)} underlayColor = {'#0000'} >
          <Image style = {{tintColor:'white'}}
            source={
              this.state.gosto
                ? require("./baseline_thumb_up_black_18dp.png")
                : require("./baseline_thumb_down_black_18dp.png")
            }
          />
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  },
  btnList: {
    width: 70,
    height: 35,
    borderRadius: 35,
    backgroundColor: "#eee",
    alignItems: "center",
    justifyContent: "center"
  }
});
