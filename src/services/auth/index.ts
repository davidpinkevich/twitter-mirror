import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from 'services/firebase';

class AuthenticationService {
  async createUser(email: string, password: string) {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      console.log('user: ', user.uid);
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
}

const serviceAuthentication = new AuthenticationService();

export { serviceAuthentication };