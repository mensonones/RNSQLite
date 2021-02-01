import React from 'react';
import SQLiteManager from '../../database/SQLiteManager';
import {
  Text,
  StyleSheet,
  TouchableOpacity,
  StatusBar,
  TextInput,
  View,
} from 'react-native';

import MovieController from '../../controller/MovieController';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  fileName: {
    fontWeight: 'bold',
    marginTop: 5,
  },
  instructions: {
    color: '#000',
    fontSize: 14,
    marginTop: 20,
    textAlign: 'center',
  },
  welcome: {
    marginTop: 40,
    color: '#000',
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  input: {
    margin: 15,
    height: 40,
    borderColor: '#000',
    borderWidth: 1,
  },
  submitButton: {
    backgroundColor: '#000',
    padding: 10,
    margin: 15,
    height: 40,
  },
  submitButtonText: {
    color: 'white',
    textAlign: 'center',
  },
});

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.movieController = new MovieController();
    this.state = {name: '', description: ''};
  }

  componentDidMount() {
    SQLiteManager.initDB();
  }

  handleName = (text) => {
    this.setState({name: text});
  };
  handleDescription = (text) => {
    this.setState({description: text});
  };
  save = (name, description) => {
    const data = {name, description};
    const arrData = [];
    arrData.push(data);
    this.movieController
      .addMovieReview(arrData)
      .then(() => {
        alert('Reseha salva :)');
        this.setState({name: '', description: ''});
      })
      .catch(() => {
        alert('Error ao salvar resenha :(');
      });
  };

  render() {
    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content" backgroundColor="#000" />
        <Text style={styles.welcome}>SQLite e React Native</Text>
        <Text style={styles.instructions}>
          Insira sua resenha sobre um filme =)
        </Text>
        <TextInput
          style={styles.input}
          underlineColorAndroid="transparent"
          placeholder="Nome do Filme"
          placeholderTextColor="#000"
          autoCapitalize="none"
          value={this.state.name}
          onChangeText={this.handleName}
        />

        <TextInput
          style={styles.input}
          underlineColorAndroid="transparent"
          placeholder="Descricao"
          placeholderTextColor="#000"
          autoCapitalize="none"
          value={this.state.description}
          onChangeText={this.handleDescription}
        />
        <TouchableOpacity
          style={styles.submitButton}
          onPress={() => this.save(this.state.name, this.state.description)}>
          <Text style={styles.submitButtonText}> Salvar </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default Main;
