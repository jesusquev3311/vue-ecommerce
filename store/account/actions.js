import Axios from 'axios';
import router from '../../src/router';

const login = ({ commit }) => {
  const url = 'https://randomuser.me/api/';

  Axios.get(url).then(({ data }) => {
    const userData = {
      displayName: data.results[0].name.first,
      email: data.results[0].email,
      photoURL: data.results[0].picture.thumbnail,
      uid: data.results[0].login.uuid,
    };
    commit('setUserData', userData);
    router.push('/');
  })
    .catch((error) => {
      console.error(error);
    });
};

export default login;
