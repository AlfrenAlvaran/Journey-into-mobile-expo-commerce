import { View, Text } from 'react-native'
import React from 'react'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

export default function SafeScreen({children}: {children: React.ReactNode}) {
  const inset = useSafeAreaInsets();
    return (
    <View className='flex-grow bg-gray-100 justify-center' style={{paddingTop: inset.top}}>
        {children}
    </View>
  )
}