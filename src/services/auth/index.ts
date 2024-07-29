import { createUserWithEmailAndPassword, signInWithPopup } from 'firebase/auth';

import { auth, googleProvider } from 'services/firebase';

class AuthenticationService {
  async createUser(email: string, password: string) {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      return userCredential.user;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  async enterWithGoogle() {
    try {
      const userCredential = await signInWithPopup(auth, googleProvider);
      return userCredential.user;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
}

const serviceAuthentication = new AuthenticationService();

export { serviceAuthentication };
