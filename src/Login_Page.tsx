import React,{useState} from "react";
import{
    IonContent,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonButton,
    IonIcon,
    IonItem,
    IonLabel,
    IonToast,
    IonInput,
    IonPage
} from '@ionic/react';
import './Login.css';
const Login:React.FC=()=>{
    const [username, setUsername] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [showToast, setShowToast] = useState(false);
    
    const handleLogin = ()=>{
        if (username==="admin" && password==='password'){
            setShowToast(true);
        }
        else{
            alert('Invalid Credentials! Try again :)');

        }
    };

    return(
        <IonPage>
            <IonHeader>
                <IonToolbar>
                      <IonTitle>Login</IonTitle>
                </IonToolbar>
            </IonHeader>
          <IonContent className="paddin">
                 <IonItem>
                    <IonLabel position="stacked">Username</IonLabel>
                    <IonInput type="text" value={username} onIonChange={e => setUsername(e.detail.value!)}
                    clearInput
                    />             
                    </IonItem>
                  <IonItem>
                    <IonLabel position="stacked">Password</IonLabel>
                        <IonInput
                           type="password"
                           value={password}
                           placeholder="Enter your password"
                           onIonChange={e => setPassword(e.detail.value!)}
                           clearInput
                        />   </IonItem>   
                        <IonButton expand="full" onClick={handleLogin} className="margin-top">Login</IonButton>
                        <IonToast
                        isOpen={showToast}
                        onDidDismiss={() => setShowToast(false)}
                        message="Login Successful"
                        duration={2000}/>
                    </IonContent>           
        </IonPage>
    );
};

export default Login;