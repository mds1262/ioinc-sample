import { initializeApp } from "@firebase/app";
import { 
    getAuth, 
    sendPasswordResetEmail,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    UserCredential,
    signInWithPopup, 
    GoogleAuthProvider
} from '@firebase/auth'
interface LoginInfo {
    loginEmail: string;
    loginPw: string;
  }

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBrs5ZoPHHu-Wi3S0RpJ7FtpsKRe8J3O9A",
    authDomain: "ionic-test-315f4.firebaseapp.com",
    projectId: "ionic-test-315f4",
    storageBucket: "ionic-test-315f4.appspot.com",
    messagingSenderId: "587250190483",
    appId: "1:587250190483:web:3f44e2ade01d0e53766566"
};

const firebaseEnv = {
    firebaseConfig,
    production: false
}


const firebaseApp = initializeApp(firebaseEnv.firebaseConfig)
firebaseApp.automaticDataCollectionEnabled = true;

const auth = getAuth(firebaseApp);

const createUser = async(loginInfo: LoginInfo): Promise<UserCredential> => {
    return await createUserWithEmailAndPassword(auth, loginInfo.loginEmail, loginInfo.loginPw);
}

const loginSign = async(loginInfo: LoginInfo): Promise<UserCredential | undefined> => {
    const result = await signInWithEmailAndPassword(auth,loginInfo.loginEmail, loginInfo.loginPw).catch(async err => {
        return await undefined;
    })
    return await result
}

const resetPassword = async(email:string) => {
    await sendPasswordResetEmail(auth, email);
}

const provider = new GoogleAuthProvider();

const googleLoginPopup = async ():Promise<UserCredential | undefined> => {
   const result = await signInWithPopup(auth, provider).catch(async err => {
       return await undefined
   })
    return result
}

export { firebaseEnv, createUser, loginSign, resetPassword, googleLoginPopup}
