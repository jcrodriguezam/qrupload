import firebase from "firebase";


const firebaseErrors = (error) => {
  return {
    errorCode: error.code,
    errorMessage: error.message,
    email: error.email,
    credential: error.credential
  }
}

export default {
  state: {},
  reducers: { },
  effects: (dispatch) => ({
    async getDefaultAvatar() {
      const avatars = [];
      const storage = firebase.storage();
      // Create a storage reference from our storage service
      var storageRef = storage.ref();
      var listRef = storageRef.child('users/avatars');
      // Find all the prefixes and items.
      const allAvatars = await listRef.listAll()
      for (let i = 0; i < allAvatars.items.length; i++) {
        const item = allAvatars.items[i]
        const imgPath = await item.getDownloadURL();
          avatars.push({
            name: item.name.split('.')[0],
            path: imgPath,
          })
        
      }
        if (avatars.length) {
          const defaultAvatar = Math.floor(Math.random() * (avatars.length -1) );
          return avatars[defaultAvatar].path;
        };

       return null;
    },
    async updateProfile(payload) {
      try {
        const {
          name,
          surname,
          phoneNumber,
          photoURL
        } = payload;

        const user = await firebase.auth().currentUser;
        const displayName = `${name} ${surname}`;
        // const defaultAvatar = Math.floor(Math.random() * 20) + 1;
        const avatar = await dispatch.users.getDefaultAvatar();
        await user.updateProfile({
          displayName,
          phoneNumber,
          photoURL: photoURL || avatar,
        });
        
        return user;        
      } catch(error) {
        return firebaseErrors(error);
      };
    },
    async updateEmail(payload) {
      try {
        const { email } = payload;
        const user = await firebase.auth().currentUser;
        await user.updateEmail(email);
        return user;        
      } catch(error) {
        return firebaseErrors(error);
      };
    },
    async updatePassword(payload) {
      try {
        const { password } = payload;
        const user = await firebase.auth().currentUser;
        await user.updatePassword(password);
        return user;        
      } catch(error) {
        return firebaseErrors(error);
      };
    },
    async sendEmailVerification(payload) {
      try {
        const user = await firebase.auth().currentUser;
        await user.sendEmailVerification();
        return true;        
      } catch(error) {
        return firebaseErrors(error);
      };
    },
    async sendPasswordResetEmail(payload) {
      try {
        console.log('dentro de send password email')
        const { email } = payload;
        console.log('---> ', email)
        await firebase.auth().sendPasswordResetEmail(email);
        console.log('pasamos')
        return true;        
      } catch(error) {
        return firebaseErrors(error);
      };
    },
  })
};
