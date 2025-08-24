import { View, Text, Dimensions, TouchableOpacity ,Image} from 'react-native'
import React from 'react'

const {height,width} =Dimensions.get('window')
const AddOrganisation = () => {
  return (
    <View style={{
         marginHorizontal: width * 0.05,
          marginVertical: height * 0.02
    }}>
        <Image 
        
        style={{
             height: height * 0.05,
              width: width * 0.065,
        }}
        source={require('../images/backArrow.png')}/>
     <View>
           <Text
           style={{
            fontSize:width*0.055
           }}>Start your own organisation</Text>
        <TouchableOpacity style={{
              backgroundColor: 'lightgrey',
              height:height*0.09,
              width:width*0.87,
              borderRadius:width*0.03,
              flexDirection:'row',
              alignContent:'center',
              padding:width*0.02,
              marginVertical:height*0.025
        }}>
            <Image 
            style={{
                  height: height * 0.075,
            width: width * 0.15
            }}
            source={require('../images/public.png')}/>
            <Text style={{
                marginTop:height*0.025,
                marginLeft:width*0.025
            }}>Public Organisation</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{
              backgroundColor: 'lightgrey',
              height:height*0.09,
              width:width*0.87,
              borderRadius:width*0.03,
              flexDirection:'row',
              alignContent:'center',
              padding:width*0.02,
              marginVertical:height*0.015
        }}>
            <Image 
            style={{
                  height: height * 0.075,
            width: width * 0.15
            }}
            source={require('../images/private.png')}/>
            <Text style={{
                marginTop:height*0.025,
                marginLeft:width*0.025
            }}>Private Organisation</Text>
        </TouchableOpacity>
     </View>
    </View>
  )
}

export default AddOrganisation