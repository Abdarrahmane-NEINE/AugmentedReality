/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
// import all the components we are going to use

import React, { useState } from 'react';
import {
  ViroARScene,
  ViroText,
  ViroConstants,
  ViroARSceneNavigator,
  Viro3DObject,
  ViroAmbientLight,
  ViroSpotLight,
  ViroARPlaneSelector,
  ViroNode,
  ViroQuad,
  ViroAnimations,
   
  ViroARTrackingTargets,
  ViroARImageMarker,
  ViroBox,

} from '@viro-community/react-viro';



import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Button,

  Modal,
  Alert, 
  Pressable,
  TextInput
} from 'react-native';

import {useRef} from 'react';
//screen shot app
import ViewShot from 'react-native-view-shot';



const HelloWorldSceneAR = () => {
  const [text, setText] = useState('Initializing AR...');
  const [modalVisible , setModalVisible] = useState(false);

  // let [email, setemail] = useState('');  
  // let [firstName, firstName] = useState('');


  function onInitialized(state, reason) {
    console.log('consol', state, reason);
    if (state === ViroConstants.TRACKING_NORMAL) {
      setText('AR Demo!');
    } else if (state === ViroConstants.TRACKING_NONE) {
      // Handle loss of tracking
    }
  }
  
  // const viewShot = useRef(null);

  // captureAndShareScreenshot = () => {
    // viewShot.capture().then((uri) => {
      // RNFS.readFile(uri, 'base64').then((res) => {
        // let urlString = 'data:image/jpeg;base64,' + res;
        // let options = {
          // title: 'Share Title',
          // message: 'Share Message',
          // url: urlString,
          // type: 'image/jpeg',
        // };
        // Share.open(options)
          // .then((res) => {
            // console.log(res);
          // })
          // .catch((err) => {
            // err && console.log(err);
          // });
      // });
    // });
  // };



  // function InsertRecord(){
    // var Email = email;
    // var FirstName = firstName;

    // var checkEmail = RegExp(/^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,3})$/i);
  
    // if ((Email.length==0) || (FirstName.length==0)){
      // alert("Field required !!!");
    // }else if (!(checkEmail).test(Email)){
      // alert("email invalid !!!");
    // }
    // // Password validations
    // // else if (Password.length<8){
    // //   alert("Minimum 08 charactères !!!");
    // // }else if (!((/[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/).test(Password))){
    // //   alert("Veuillez utiliser un caractère spécial, exemple :@#$%^&* ");
    // // }else if (((/[ ]/).test(Password))){
    // //   alert("Veuillez suprimer l'espace dans votre mot de passe !!!");
    // // }else if(Password !== ConfirmPassword){
    // //   alert("mot de passe incorrecte !!!");
    // // }
    
    
    // // else{
      // // GlobalLocalhost = "http:/192.168.10.158";

      // var InsertAPIURL = "http:/192.168.10.158/php/backendMspr/SignUp.php";   //API to render signup

      // var headers = {
        // 'Accept': 'application/json',
        // 'Content-Type': 'application/json'
      // };
      
      // var Data ={
        // Email: Email,
        // FirstName: FirstName
      // };

      // // FETCH func ------------------------------------
      // fetch(InsertAPIURL,{
          // method:'POST',
          // headers:headers,
          // body: JSON.stringify(Data) //convert data to JSON
      // })
      // .then((response)=>response.json()) //check response type of API (CHECK OUTPUT OF DATA IS IN JSON)
      // .then((response)=>{
        // alert(response); 

        // // navigation.navigate("SignIn"); //Navigate to next screen if authentications are valid
      // //   <Mybutton
      // //   title="Connexion"
      // //   customClick={() => navigation.navigate('Connexion')}
      // // />
      // })
      // .catch((error)=>{
          // alert("Error :" + error);
      // })
    // // }
  // }


  //const inputEmail = (text) => {
  //  setemail(text);
  //}
  //const inputPassword = (text) => {
  //  setpassword(text);
  //}


ViroARTrackingTargets.createTargets({ 
	"targetOne" : { source : require('./singe.png'), orientation : "Up",    physicalWidth : 0.25} ,
	"targetTwo" : { source : require('./N1.png'), orientation : "Up",    physicalWidth : 0.25  },
	"targetThree" : { source : require('./monster-mash.png'), orientation : "Up",    physicalWidth : 0.25 }
	});// real world width in meters  
  return (
    
      <ViroARScene onTrackingUpdated={onInitialized}>


      

        <ViroARImageMarker target={"targetOne"} >
              <ViroSpotLight
              innerAngle={5}
              outerAngle={45}
              direction={[0, -1, -.2]}
              position={[0, 3, 0]}
              color="blue"
              castsShadow={true}
              influenceBitMask={2}
              shadowMapSize={2048}
              shadowNearZ={2}
              shadowFarZ={5}
              shadowOpacity={.7} />
          <Viro3DObject
            //  source={require('./monkey.obj')}
            source={require('./testmonkey.gltf')}

            position={[0, .1, 0]}
            scale={[-400, 4, 4]}
        
            type="GLTF"
            //  type="OBJ"
          animation={{name:'Take 001',run:true,loop:true, delay:1000}}
                lightReceivingBitMask={3}
              shadowCastingBitMask={2}
              transformBehaviors={['billboardY']}
          />
      </ViroARImageMarker>
        <ViroARImageMarker target={"targetTwo"} >
              <ViroSpotLight
              innerAngle={5}
              outerAngle={45}
              direction={[0, -1, -.2]}
              position={[0, 3, 0]}
              color="#ffffff"
              castsShadow={true}
              influenceBitMask={2}
              shadowMapSize={2048}
              shadowNearZ={2}
              shadowFarZ={5}
              shadowOpacity={.7} />
          
      <Viro3DObject
            source={require('./snake.obj')}
            // source={require('./emoji_smile.vrx')}

            position={[0, .1, 0]}
            scale={[0.04, 0.04, 0.04]}
        
            // type="VRX"
            type="OBJ"
          animation={{name:'Take 001',run:true,loop:true, delay:1000}}
                lightReceivingBitMask={3}
              shadowCastingBitMask={2}
              transformBehaviors={['billboardY']}
          />
      </ViroARImageMarker>
        <ViroARImageMarker target={"targetThree"} >
              <ViroSpotLight
              innerAngle={5}
              outerAngle={45}
              direction={[0, -1, -.2]}
              position={[0, 3, 0]}
              color="#ffffff"
              castsShadow={true}
              influenceBitMask={2}
              shadowMapSize={2048}
              shadowNearZ={2}
              shadowFarZ={5}
              shadowOpacity={.7} />
          
      <Viro3DObject
            source={require('./snake.obj')}
            // source={require('./emoji_smile.vrx')}

            position={[0, .1, 0]}
            scale={[0.04, 0.04, 0.04]}
        
            // type="VRX"
            type="OBJ"
          animation={{name:'Take 001',run:true,loop:true, delay:1000}}
                lightReceivingBitMask={3}
              shadowCastingBitMask={2}
              transformBehaviors={['billboardY']}
          />
      </ViroARImageMarker>
      <ViroText
          text={''}
          scale={[0.5, 0.5, 0.5]}
          position={[0, 0, -1]}
          style={styles.helloWorldTextStyle}
        />
        
        <ViroAmbientLight color={"#aaaaaa"} />
        
      </ViroARScene>
  //   <View style={styles.centeredView}>
  //      <Modal
  //       animationType="slide"
  //       transparent={true}
  //       visible={modalVisible}
  //       onRequestClose={() => {
  //         Alert.alert("Modal has been closed.");
  //         setModalVisible(!modalVisible);
  //       }}
  //     > 
  //      <View style={styles.centeredView}> 
  //         <View style={styles.modalView}> 
  //           <Text style={styles.modalText}>Hello World!</Text> 
  //           <View style={styles.action}> 
  //             <TextInput
  //              placeholder="Email"
  //             placeholderTextColor="#ff0000"
  //             style={styles.textInput}
  //             onChangeText={inputEmail}
  //           /> 
  //           </View> 
  //             <Pressable 
  //                style={[styles.button, styles.buttonClose]}
  //               onPress={() => setModalVisible(!modalVisible)}
  //             > 
  //               <Text style={styles.textStyle}>Hide Modal</Text> 
  //             </Pressable> 
  //           </View> 
  //           <View style={styles.loginButtonSection}> 
  //             <Pressable 
  //                style={styles.loginButton} 
  //               onPress={()=>{
  //                 InsertRecord() 
  //                }}
  //               >              
  //                 <Text  
  //                    style={styles.text}
  //                 > Enregistrer </Text> 
  //               </Pressable> 
  //           </View> 
            
  //       </View> 
  //     </Modal>
  //     <Pressable 
  //        style={[styles.button, styles.buttonOpen]}
  //       onPress={() => setModalVisible(true)}
  //     > 
  //       <Text style={styles.textStyle}>Show Modal</Text> 
  //     </Pressable> 
  //  </View>
    // </View>
  );
};

export default () => {
  return (
    <ViroARSceneNavigator
      autofocus={true}
      initialScene={{
        scene: HelloWorldSceneAR,
      }}
      style={styles.f1}
    />
  );
};

var styles = StyleSheet.create({
  f1: { flex: 1 },
  helloWorldTextStyle: {
    fontFamily: 'Arial',
    fontSize: 30,
    color: '#ffffff',
    textAlignVertical: 'center',
    textAlign: 'center',
  },
  // modal
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  }
});
