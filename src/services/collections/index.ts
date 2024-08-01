import { type User } from 'firebase/auth';
import { doc, getDoc, setDoc, updateDoc } from 'firebase/firestore';
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';

import { serviceAuthentication } from 'services/auth';
import { db, storage } from 'services/firebase';
import { stringDate } from 'utils/getDateValues';
import { TypesFormModal, TypeUser } from 'types';

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
        ...data,
        date: stringDate(date),
        uid,
      });
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
  async addUserWithGoogle(uid: string, user: User) {
    try {
      setDoc(doc(db, 'users', uid), {
        name: user.displayName,
        number: user?.phoneNumber,
        uid: user?.uid,
        photo: user?.photoURL,
      });
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  async viewUser(uid: string) {
    try {
      const docRef = doc(db, 'users', uid);
      const docSnap = await getDoc(docRef);
      return docSnap.data() as TypeUser;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  async updateAvatar(
    user: TypeUser,
    data: TypesFormModal,
    gender: string,
    uid: string,
    file: File
  ) {
    try {
      if (data.password) serviceAuthentication.changePassword(data.password);
      const mountainsRef = ref(storage, file.name);
      await uploadBytes(mountainsRef, file);
      const downloadURL = await getDownloadURL(mountainsRef);
      await updateDoc(doc(db, 'users', uid), {
        ...user,
        ...data,
        gender,
        photo: downloadURL,
      });
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  async updateProfile(user: TypeUser, data: TypesFormModal, gender: string, uid: string) {
    try {
      if (data.password) serviceAuthentication.changePassword(data.password);
      await updateDoc(doc(db, 'users', uid), {
        ...user,
        ...data,
        gender,
      });
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
}

const serviceCollections = new CollectionsService();

export { serviceCollections };