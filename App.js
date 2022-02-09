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
} from 'react-native';

import {useRef} from 'react';
//screen shot app
import ViewShot from 'react-native-view-shot';



const HelloWorldSceneAR = () => {
  const [text, setText] = useState('Initializing AR...');

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
            color="#ffffff"
            castsShadow={true}
            influenceBitMask={2}
            shadowMapSize={2048}
            shadowNearZ={2}
            shadowFarZ={5}
            shadowOpacity={.7} />
        <Viro3DObject
          source={require('./monkey.obj')}
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
});
