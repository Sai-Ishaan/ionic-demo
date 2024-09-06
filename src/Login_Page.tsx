import React, {useState} from 'react';

import {
  IonPage,
  IonContent,
  IonInput,
  IonButton,
  IonItem,
  IonLabel,
  IonCheckbox,
  IonGrid,
  IonRow,
  IonCol,
  IonText,
  IonIcon
} from '@ionic/react';
import { logoGoogle, logoFacebook} from 'ionicons/icons';
import './Login.css';

const Login: React.FC = ()=> {
    const [email, setEmail] = useState<string>('');
    const [username, setUsername] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [showToast, setShowToast] = useState(false);
    const [rememberMe, setRememberMe] = useState<boolean>(false);
   const handleLogin = () =>{
       if(username==="admin" && password==="password"){
           setShowToast(true);
   }  
      else{
       alert('Invalid Credentials! Try again');
   } 
 };

return(
   <IonPage>
       <IonContent className="login-content">
          <div className="login-box">

            <div className="logo">
               <IonIcon icon={logoGoogle}/>
            </div> 
               <IonText className="login-header">Welcome, User!</IonText>
              <IonGrid>
                  <IonRow className="ion-justify-content-center">
                  <IonCol size="auto">
                     <IonButton fill="outline" className="socials">
                     <IonIcon slot="start" icon={logoGoogle}/>
                       Google
                     </IonButton>
                   </IonCol>
                   <IonCol size="auto">
                     <IonButton fill="outline" className="socials">
                     <IonIcon slot="start" icon={logoFacebook}/>
                       Facebook
                     </IonButton>
                   </IonCol>
                  </IonRow>    
              </IonGrid>

         <IonText className="or-text">or</IonText>
            <IonItem>
             <center>  <IonLabel position="floating">Email address or Username</IonLabel></center> 
             <center>  <IonInput type="text" value={username} onIonChange={e => setUsername(e.detail.value!)}/></center><br/>
             <center>   <IonLabel position="floating">Password</IonLabel></center>
             <center>  <IonInput type="password" value={password} onIonChange={(e)=>setPassword(e.detail.value!)}/></center>
            </IonItem>
          <div className="options">
          <IonCheckbox
              checked={rememberMe}
              className='remember-me'
              onIonChange={(e) => setRememberMe(e.detail.checked!)}
            >Remember Me</IonCheckbox>
           <IonText className="forgot-password">Forgot Password</IonText>
          </div>
             <IonButton expand="block" className="login-btn" onClick={handleLogin}>
             Sign In
             </IonButton>
             <br/>
             <br/>
             <IonText className="create-account">
                  Not registered yet? Try Signing Up!<a href="/signup" >Create an Account</a>
             </IonText>
          </div>
       </IonContent>
   </IonPage>
 );
};

export default Login;