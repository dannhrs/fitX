import { View, Text } from 'react-native'
import React from 'react'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { StatusBar, Image, TextInput, TouchableOpacity, Alert, Keyboard } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import  Animated,{ FadeIn, FadeOut, FadeInDown } from 'react-native-reanimated';
import {useRouter} from 'expo-router';


export default function Index() {
    const router = useRouter();
  return (
    <View className="flex-1 flex justify-end">
    <StatusBar style="light" />
   <Image className="h-full w-full absolute" source={require('../assets/images/gymdes.jpeg')} />

   <LinearGradient
   colors={['transparent', '#1818ib']}
   style={{width: wp(100), height: hp(70)}}
   start={{x: 0.5, y:0}}
   end={{x: 0.5, y:0.8}}
   className="flex justify-end pb-12 space-y-8"
   >
    <Animated.View entering={FadeInDown.delay(100).springify()} className="flex items-center">

    <Text style={{fontSize: hp(3.8)}} className="text-white font-bold tracking-wide">
        Mejores <Text className=" text-rose-500">Entrenamientos</Text> 
    </Text>

    <Text style={{fontSize: hp(3.8)}} className="text-white font-bold tracking-wide">
       Para ti
    </Text>
    </Animated.View>

     <Animated.View entering={FadeInDown.delay(200).springify()}>

        <TouchableOpacity
        onPress={()=> router.push('home')}
         style={{height: hp(6), width: wp(70) }}
         className="bg-rose-500 flex items-center justify-center mx-auto rounded-full border-[2px] border-neutral-200"
        >

            <Text style={{fontSize: hp (3)}} className="text-white font-bold tracking-widest">
                Get Started

            </Text>
        </TouchableOpacity>

     </Animated.View>

   </LinearGradient>
    </View>
  )
}
