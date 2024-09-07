import React, { useState } from 'react';

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
  IonIcon,
  IonAlert,
  IonToast,
  IonSpinner
} from '@ionic/react';
import { logoGoogle, logoFacebook } from 'ionicons/icons';
import './Login.css';

const Login: React.FC = () => {
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [rememberMe, setRememberMe] = useState<boolean>(false);
  const [showAlert, setShowAlert] = useState<boolean>(false);
  const [alertMessage, setAlertMessage] = useState<string>('');
  const [showToast, setShowToast] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);

  const handleLogin = async () => {
    if (username === "" || password === "") {
      setAlertMessage("Please fill out all fields.");
      setShowAlert(true);
      return;
    }

    setLoading(true); // Simulate loading
    setTimeout(() => {
      if (username === "admin" && password === "password") {
        setShowToast(true);
      } else {
        setAlertMessage("Invalid username or password.");
        setShowAlert(true);
      }
      setLoading(false); 
    }, 1500);
  };

  return (
    <IonPage>
      <IonContent className="login-content">
        <div className="bubbles">
          <div className="bubble"></div>
          <div className="bubble"></div>
          <div className="bubble"></div>
          <div className="bubble"></div>
          <div className="bubble"></div>
          <div className="bubble"></div>
        </div>
        {/* Login Box */}
        <div className="login-box">
          <div className="logo">
            <IonIcon icon={logoGoogle} />
          </div>
          <IonText className="login-header">Welcome, User!</IonText>
          <IonGrid>
            <IonRow className="ion-justify-content-center">
              <IonCol size="12" sizeMd="7">
                <IonButton fill="outline" expand="block" className="social-btn">
                  <IonIcon slot="start" icon={logoGoogle} />
                  Google
                </IonButton>
              </IonCol>
              <IonCol size="12" sizeMd="7">
                <IonButton fill="outline" expand="block" className="social-btn">
                  <IonIcon slot="start" icon={logoFacebook} />
                  Facebook
                </IonButton>
              </IonCol>
            </IonRow>
          </IonGrid>

          <IonText className="or-text">or</IonText>

          <IonItem>
            <IonLabel position="floating">Email address or Username</IonLabel>
            <IonInput
              type="text"
              value={username}
              onIonChange={e => setUsername(e.detail.value!)}
            />
          </IonItem>

          <IonItem>
            <IonLabel position="floating">Password</IonLabel>
            <IonInput
              type="password"
              value={password}
              onIonChange={e => setPassword(e.detail.value!)}
            />
          </IonItem>
        <br/>
          <div className="options">
            <IonCheckbox
              checked={rememberMe}
              className="remember-me"
              onIonChange={e => setRememberMe(e.detail.checked)}
            />
            Remember Me
            <IonText className="forgot-password">Forgot Password</IonText>
          </div>
          <br/>
          <IonButton expand="block" className="login-btn" onClick={handleLogin}>
            {loading ? <IonSpinner name="crescent" /> : "Sign In"}
          </IonButton>

          <IonText className="create-account">
            Not registered yet? Try Signing Up! <a href="/signup">Create an Account</a>
          </IonText>
        </div>

        {/* Alert for login error */}
        <IonAlert
          isOpen={showAlert}
          onDidDismiss={() => setShowAlert(false)}
          header="Login Failed"
          message={alertMessage}
          buttons={["Ok"]}
        />

        {/* Toast for successful login */}
        <IonToast
          isOpen={showToast}
          onDidDismiss={() => setShowToast(false)}
          message="Login successful!"
          duration={2000}
        />
      </IonContent>
    </IonPage>
  );
};

export default Login;
