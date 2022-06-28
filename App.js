import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import Lista from './src/lista';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      feed: [
        {
          id: '1',
          nome: 'Lucas Silva',
          descricao: 'Bora trabalhar Haha',
          imgperfil: 'https://sujeitoprogramador.com/instareact/fotoPerfil1.png',
          imgPublicacao: 'https://sujeitoprogramador.com/instareact/foto1.png',
          likeada: false,
          likers: 1
        },
        {
          id: '2',
          nome: 'Matheus Henrique',
          descricao: 'Isso sim é ser raiz!!!!!',
          imgperfil: 'https://i.pinimg.com/236x/7f/11/b4/7f11b446acbac4e4396dc82b8b186865.jpg',
          imgPublicacao: 'https://sujeitoprogramador.com/instareact/foto2.png',
          likeada: false,
          likers: 0
        },
        {
          id: '3',
          nome: 'Jose Augusto',
          descricao: 'Mais um dia de muitos bugs :)',
          imgperfil: 'https://sujeitoprogramador.com/instareact/fotoPerfil3.png',
          imgPublicacao: 'https://sujeitoprogramador.com/instareact/foto3.png',
          likeada: false,
          likers: 3
        },
        {
          id: '4',
          nome: 'Gustavo Henrique',
          descricao: 'Isso sim que é TI!',
          imgperfil: 'https://sujeitoprogramador.com/instareact/fotoPerfil1.png',
          imgPublicacao: 'https://sujeitoprogramador.com/instareact/foto4.png',
          likeada: false,
          likers: 1
        },
        {
          id: '5',
          nome: 'Guilherme Corbucci',
          descricao: 'Boa tarde galera do insta...',
          imgperfil: 'https://sujeitoprogramador.com/instareact/fotoPerfil2.png',
          imgPublicacao: 'https://sujeitoprogramador.com/instareact/foto5.png',
          likeada: false,
          likers: 32
        },

        {
          id: '6',
          nome: 'Laila Farias',
          descricao: 'Um lambeijo pra todos vocês!',
          imgperfil: 'https://i.pinimg.com/736x/a3/bd/18/a3bd184e6941ac554285018b50f85718.jpg',
          imgPublicacao: 'https://love.doghero.com.br/wp-content/uploads/2017/09/Golden-destaque.gif',
          likeada: false,
          likers: 42
        },

        {
          id: '7',
          nome: 'Giovanna Freitas',
          descricao: 'Video novo no canal gente!!!',
          imgperfil: 'https://i.pinimg.com/736x/44/c7/21/44c72145dff542a01537267def65d450.jpg',
          imgPublicacao: 'https://i.pinimg.com/736x/14/c3/fa/14c3fab3e51a9efdbfc34f12df2876d6.jpg',
          likeada: false,
          likers: 8
        },

        {
          id: '8',
          nome: 'Mauro Gonçalves',
          descricao: 'Dois mestres de obra!',
          imgperfil: 'https://pbs.twimg.com/profile_images/547232850857046016/Aih3vUW0_400x400.jpeg',
          imgPublicacao: 'https://scontent.fcpq5-1.fna.fbcdn.net/v/t1.6435-9/103700096_3238470872882773_1181186741640788106_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=730e14&_nc_ohc=Nprq3Bryf7cAX-ThkRf&_nc_ht=scontent.fcpq5-1.fna&oh=00_AT_P2RaCsoxx6XuXMdlGB-gdvbeN97m-kcsIDWcGAUJdig&oe=62DF3B6D',
          likeada: false,
          likers: 8
        }
      ]
    }

  }
  render() {
    return (

      <View style={styles.container}>
        <View style={styles.header}>

          <TouchableOpacity>
            <Image style={styles.logo} source={require('./src/img/logo.png')}
            />
          </TouchableOpacity>

          <TouchableOpacity>
            <Image style={styles.send} source={require('./src/img/send.png')}
            />
          </TouchableOpacity>

          


        </View>

        <FlatList
          showsVerticalScrollIndicator={false}
          keyExtractor={(item) => item.id}
          data={this.state.feed}
          renderItem={ ({item}) => <Lista data={item} />}
          />
      </View>

    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1
  },

  header: {
    flexDirection: 'row',
    height: 55,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,

    borderBottomWidth: 0.2,
    borderBottomColor: 'lightgray',
    shadowColor: '#000',
    elevation: 1
  },

  logo: {

  },

  send: {
    height: 25,
    width: 25
  }
});

export default App;
