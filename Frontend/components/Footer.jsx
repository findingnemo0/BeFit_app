import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'

const Footer = ({
    pCTA_title = " ",
    sCTA_title = " ",
    showPrimaryCTA = true,
    showSecondaryCTA = true,
    onPrimaryPress,
    onSecondaryPress,
}) => {
  return (
        // Footer container
    <View
        style={{
            width: "100%",
            flexDirection:"row",
            justifyContent: "space-between",
            alignItems: "center",
            gap:16,
            height:76,
            backgroundColor:"#EDF2F7",
            borderTopWidth:1.5,
            borderColor:"#EEEEEE",
            paddingHorizontal:16,
        }}
    >
        {/* Secondary CTA */}
        {showSecondaryCTA &&(
            <TouchableOpacity 
                className='bg-boxfill'
                onPress={onSecondaryPress}
                style={{
                    flex:1,
                    height:44,
                    alignContent:"center",
                    alignItems:"center",
                    paddingHorizontal:16,
                    paddingVertical:8,
                    borderRadius:12,
                    borderWidth:1.5,
                    borderColor:"#EEEEEE",
                }}
            >
                <Text 
                    className=''
                >
                    {sCTA_title}
                </Text>
            </TouchableOpacity>
        )}

        {/* Primary CTA */}
        {showPrimaryCTA &&(
            <TouchableOpacity 
                className='bg-primary'
                onPress={onPrimaryPress}
                style={{
                    flex:1,
                    height:44,
                    alignContent:"center",
                    alignItems:"center",
                    paddingHorizontal:16,
                    paddingVertical:8,
                    borderRadius:12,
                    borderWidth:1.5,
                }}
            >
                <Text 
                    className='text-white'
                >
                    {pCTA_title}
                </Text>
            </TouchableOpacity>
        )}
    </View>
  )
}

export default Footer;