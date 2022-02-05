/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
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
  ViroBox
} from '@viro-community/react-viro';

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
  
ViroARTrackingTargets.createTargets({ 
	"targetOne" : { source : require('./singe.png'), orientation : "Up",    physicalWidth : 0.25} ,
	"targetTwo" : { source : require('./N1.png'), orientation : "Up",    physicalWidth : 0.25 
	}});// real world width in meters  
  return (
    <ViroARScene onTrackingUpdated={onInitialized}>
		  <ViroARImageMarker target={"targetOne"} >
        
        <Viro3DObject
          source={require('./untitled.obj')}
          position={[0, .1, 0]}
          scale={[-20, -20, -20]}
          // position={[0, .1, 0]}
          // scale={[.1, .1, .1]}
		      type="OBJ"
        />
	  </ViroARImageMarker>
		  <ViroARImageMarker target={"targetTwo"} >
        
        <Viro3DObject
          source={require('./emoji_smile.vrx')}
          position={[0, .1, 0]}
          scale={[-8, -8, -8]}
		      type="VRX"
        />
	  </ViroARImageMarker>
    
      <ViroText
        text={text}
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
