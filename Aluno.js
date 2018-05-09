import React from "react";
import { StyleSheet, Text, View,TouchableHighlight } from "react-native";
import AlunoDetalhes from './AlunoDetalhes'
export default class Aluno extends React.Component {
  state = {
    mostrarDetalhes: false
  };


mostraEsconde(){
    this.setState({
        mostrarDetalhes:!this.state.mostrarDetalhes
    })
}

  render() {

    aluno  = this.props.aluno
    return (
      <View>
        <View
          style={{
            flexDirection: "row",
            flex: 1,
            paddingBottom: 10,
            padding: 15
          }}
        >
          <Text style = {{color:'white',fontWeight:'bold'}} >{aluno.nome}</Text>
          <View style={{ alignItems: "flex-end", flex: 1 }}>
            <TouchableHighlight
              underlayColor={"#0000"}
              onPress={this.mostraEsconde.bind(this)}
              style={styles.btnList}
            >
              <Text style = {{color:'white'}}  >{!this.state.mostrarDetalhes ? ' Detalhes ': ' Esconder ' }</Text>
            </TouchableHighlight>
          </View>
        </View>
        {this.state.mostrarDetalhes ? <AlunoDetalhes aluno = {aluno} /> : null }
      </View>
    );
  }
}

const styles = StyleSheet.create({
 
  btnList: {
    width: 70,
    height: 35,
    borderRadius: 35,
    backgroundColor: "#ff9933",
    alignItems: "center",
    justifyContent: "center"
  }
});
