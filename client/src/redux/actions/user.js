//import { openNotification } from 'utils/helpers';
import { userApi } from 'utils/api';

const Actions = {
  setUserData: data => ({
    type: 'USER:SET_DATA',
    payload: data,
  }),
  setIsAuth: bool => ({
    type: 'USER:SET_IS_AUTH',
    payload: bool,
  }),
  fetchUserData: () => dispatch => {
    userApi
      .getMe()
      .then(({ data }) => {
        dispatch(Actions.setUserData(data));
      })
      .catch(err => {
        if (err.response.status === 403) {
          dispatch(Actions.setIsAuth(false));
          delete window.localStorage.token;
        }
      });
  },
  fetchUserLogin: postData => dispatch => {
    console.log('В fetchUserLogin перед return');
    return userApi
      .signIn(postData)
      .then(({ data }) => {
        const { token } = data;
        console.log('Работает');
        window.axios.defaults.headers.common['token'] = token;
        window.localStorage['token'] = token;
        dispatch(Actions.fetchUserData());
        dispatch(Actions.setIsAuth(true));
        return data;
      })
      .catch(({ response }) => {
        console.log('Что-то пошло не так');
        console.log(response.data.message);
      });
  },
  fetchUserRegister: postData => dispatch => {
    return userApi
    .signUp(postData).then(({data}) => {
      return data;
    })
  },
};

export default Actions;