import { initializeApp } from "@firebase/app";
import { 
    getAuth, 
    sendPasswordResetEmail,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    UserCredential
} from '@firebase/auth'
import { LoginInfo } from '@/common/utils/login/loginAuth'

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

const loginSign = async(loginInfo: LoginInfo): Promise<UserCredential> => {
    return await signInWithEmailAndPassword(auth,loginInfo.loginEmail, loginInfo.loginPw)
}

const resetPassword = async(email:string) => {
    await sendPasswordResetEmail(auth, email);
}


export { firebaseEnv, createUser, loginSign, resetPassword}
