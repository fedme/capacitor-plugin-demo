import { IonButton, IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import OneTrust from './OneTrustPlugin';

const Home: React.FC = () => {

  const onButtonClick = async () => {
    // Call native plugin
    const { value } = await OneTrust.echo({ value: 'Hello World!' });
    
    // Show message from plugin
    console.log("Response from native plugin", value);
    alert(value);
  }

  return (
    <IonPage>

      <IonHeader>
        <IonToolbar>
          <IonTitle>Capacitor Demo</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent className="ion-padding">


        <IonButton onClick={onButtonClick}>
          Click Me
        </IonButton>


      </IonContent>

    </IonPage>
  );
};

export default Home;
