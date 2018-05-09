import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  FlatList
} from "react-native";
import axios from "axios";
import Aluno from './Aluno'

export default class CronometroContainer extends React.Component {
  state = {
    time: 0,
    alunos: [{ nome: "teste", email: "teste" }]
  };

  start() {
    this.setState({
      time: (this.state.time += 1)
    });
  }
  componentWillMount() {
    axios
      .get("http://www.homo.ages.pucrs.br/fluxoapipy/alunos")
      .then(response =>
        this.setState({ alunos: response.data.Alunos.slice(0, 30) })
      );
  }


  renderItem = ({ item }) => {
    return (
      <Aluno aluno = { item } />
    )
  };


  render() {
    return (
      <View style = {{backgroundColor:'orange'}} >
        <View>
          <Text style={{ fontSize: 30, alignSelf: "center", marginTop: 40 }}>
            {this.state.alunos.length}
          </Text>
        </View>
        <FlatList
          data={this.state.alunos}
          extraData={this.state}
          renderItem={this.renderItem}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  btn: {
    width: 70,
    height: 70,
    borderRadius: 35,
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
