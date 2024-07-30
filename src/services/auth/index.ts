import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
} from 'firebase/auth';
import { collection, getDocs, query, where } from 'firebase/firestore';

import { auth, db,googleProvider } from 'services/firebase';

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

  async userSignInEmail(email: string, password: string) {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);

      return userCredential.user;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  async userSignInPhone(phone: string, password: string) {
    console.log('reqest phone');
    try {
      const docRef = query(collection(db, 'users'), where('data.phone', '==', phone));
      const docSnap = await getDocs(docRef);
      const email = docSnap.docs.map((item) => item.data())[0].data.email;
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      return userCredential.user;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
}

const serviceAuthentication = new AuthenticationService();

export { serviceAuthentication };
