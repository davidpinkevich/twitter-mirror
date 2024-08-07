import { type User } from 'firebase/auth';
import { collection, doc, getDoc, getDocs, setDoc, updateDoc } from 'firebase/firestore';
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';

import { serviceAuthentication } from 'services/auth';
import { db, storage } from 'services/firebase';
import { createID } from 'utils/createID';
import { stringDate } from 'utils/getDateValues';
import { TypesFormModal, TypeTweet, TypeUser } from 'types';

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
        tweets: [],
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
        tweets: [],
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
        tweets: user.tweets.map((item) => ({ ...item, photo: downloadURL })),
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
        tweets: user.tweets.map((item) => ({ ...item, linkTG: data?.linkTG ?? null })),
      });
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  async createTweet(user: TypeUser, uid: string, text: string, image: File | null) {
    try {
      if (image) {
        const mountainsRef = ref(storage, image.name);
        await uploadBytes(mountainsRef, image);
        const downloadURL = await getDownloadURL(mountainsRef);
        const tweet = {
          text,
          name: user.name,
          id: createID(),
          timestamp: Date.now(),
          photo: user?.photo ?? null,
          image: downloadURL,
          likes: [],
          linkTG: user?.linkTG ?? null,
          uid,
        };
        await updateDoc(doc(db, 'users', uid), {
          ...user,
          tweets: [...user.tweets, tweet],
        });
        return tweet;
      } else {
        const tweet = {
          text,
          name: user.name,
          id: createID(),
          timestamp: Date.now(),
          photo: user.photo,
          linkTG: user?.linkTG ?? null,
          image: null,
          likes: [],
          uid,
        };
        await updateDoc(doc(db, 'users', uid), {
          ...user,
          tweets: [...user.tweets, tweet],
        });
        return tweet;
      }
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  async deleteTweet(user: TypeUser, uid: string, tweetID: number) {
    try {
      await updateDoc(doc(db, 'users', uid), {
        ...user,
        tweets: user.tweets.filter((item) => item.id !== tweetID),
      });
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  async changeLike(user: TypeUser, tweet: TypeTweet) {
    const userTweet = await this.viewUser(tweet.uid);
    try {
      const tweets = userTweet.tweets.map((item) => {
        if (tweet.id === item.id && item.likes.includes(user.uid)) {
          const newLikes = [...item.likes];
          const index = newLikes.findIndex((item) => item.includes(user.uid));
          if (index !== -1) newLikes.splice(index, 1);
          return { ...tweet, likes: newLikes };
        } else if (tweet.id === item.id && !item.likes.includes(user.uid)) {
          const newLikes = [...item.likes];
          newLikes.push(user.uid);
          return { ...item, likes: newLikes };
        } else {
          return item;
        }
      });
      await updateDoc(doc(db, 'users', tweet.uid), {
        ...userTweet,
        tweets,
      });
      return tweets.filter((item) => item.id === tweet.id)[0];
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  async searchTweet(input: string) {
    try {
      const docRef = collection(db, 'users');
      const docSnap = await getDocs(docRef);
      const tweets = docSnap.docs.map((item) => {
        const body = item.data();
        const newItem = {
          name: body.name,
          linkTG: body.linkTG,
          photo: body.photo,
          tweets: body.tweets,
        };
        return newItem;
      }) as Array<{
        name: string;
        linkTG: string;
        photo: string;
        tweets: Array<TypeTweet>;
      }>;
      const result = tweets.flatMap((user) => {
        return user.tweets.map((tweet) => ({
          ...tweet,
          name: user.name,
          photo: user.photo,
          linkTG: user.linkTG,
        }));
      });

      return result.filter((item) => item.text.toLowerCase().includes(input.trim().toLowerCase()));
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  async getAllTweets() {
    try {
      const docRef = collection(db, 'users');
      const docSnap = await getDocs(docRef);
      const arr: TypeUser[] = [];
      docSnap.forEach((item) => {
        arr.push(item.data() as TypeUser);
      });
      return arr
        .map((item) => item.tweets)
        .flat(1)
        .sort((a, b) => a.timestamp - b.timestamp);
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  async getAllUsers(uid: string, input: string) {
    try {
      const docRef = collection(db, 'users');
      const docSnap = await getDocs(docRef);
      const arr: TypeUser[] = [];
      docSnap.forEach((item) => {
        arr.push(item.data() as TypeUser);
      });
      return arr
        .filter((item) => item.uid !== uid)
        .filter((item) => (item.name as string).toLowerCase().includes(input.trim().toLowerCase()));
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
}

const serviceCollections = new CollectionsService();

export { serviceCollections };
