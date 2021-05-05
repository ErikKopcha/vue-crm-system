import firebase from 'firebase/app';
import M from 'materialize-css/dist/js/materialize.min';

export default {
  actions: {
    async login({ dispatch, commit }, { email, password }) {
      try {
        console.log(dispatch);
        console.log(commit);
        await firebase.auth().signInWithEmailAndPassword(email, password);
      } catch (e) {
        M.toast({html: e});
        commit('setError', e);
        throw e;
      }
    },
    async register({ dispatch, commit }, { email, password, name} ) {
      try {
        await firebase.auth().createUserWithEmailAndPassword(email, password);
        const uid = await dispatch('getUid');

        await firebase.database().ref(`/users/${uid}/info`).set({
          bill: 10000,
          name: name
        });
      } catch (e) {
        M.toast({html: e});
        commit('setError', e);
        throw e;
      }
    },
    getUid() {
      const user = firebase.auth().currentUser;
      return user ? user.uid : null;
    },
    async logout({commit}) {
      await firebase.auth().signOut();
      commit('clearInfo');
      M.toast({html: 'You are logged out'});
    }
  }
}