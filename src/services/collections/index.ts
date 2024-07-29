import { type User } from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';

import { db } from 'services/firebase';
import { stringDate } from 'utils/getDateValues';

class CollectionsService {
  async addUserWithEmail(
    uid: string,
    data: { name: string; phone: string; email: string; password: string },
    date: {
      month: string;
      day: string;
      year: string;
    }
  ) {
    try {
      setDoc(doc(db, 'users', uid), {
        data: { ...data, uid },
        date: stringDate(date),
      });
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  async addUserWithGoogle(uid: string, user: User) {
    try {
      setDoc(doc(db, 'users', uid), {
        data: {
          name: user.displayName,
          number: user?.phoneNumber,
          img: user?.photoURL,
          uid: user?.uid,
        },
      });
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
}

const serviceCollections = new CollectionsService();

export { serviceCollections };
