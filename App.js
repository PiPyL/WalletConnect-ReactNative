import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import WalletConnectProvider, {
    useWalletConnect,
    withWalletConnect
} from '@walletconnect/react-native-dapp'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { useEffect } from 'react'

const App = () => {
    const connector = useWalletConnect()

    useEffect(() => {
        // alert(connector.connected)
    }, [])

    return (
        <View
            style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center'
            }}
        >
            <TouchableOpacity
                onPress={() => {
                    connector.connect()
                }}
            >
                <Text>Connect</Text>
            </TouchableOpacity>
        </View>
        // <WalletConnectProvider
        //     bridge='https://bridge.walletconnect.org'
        //     clientMeta={{
        //         description: 'Connect with WalletConnect',
        //         url: 'https://walletconnect.org',
        //         icons: ['https://walletconnect.org/walletconnect-logo.png'],
        //         name: 'WalletConnect'
        //     }}
        //     redirectUrl={Platform.OS === 'web' ? window.location.origin : 'yourappscheme://'}
        //     storageOptions={{
        //         asyncStorage: AsyncStorage
        //     }}
        // >
        //     {connector.connected && (
        //         <TouchableOpacity
        //             onPress={() => {
        //                 connector.connect()
        //             }}
        //         >
        //             <Text>Connect</Text>
        //         </TouchableOpacity>
        //     )}
        // </WalletConnectProvider>
        // <WalletConnectProvider
        //     redirectUrl={Platform.OS === 'web' ? window.location.origin : 'yourappscheme://'}
        //     storageOptions={{
        //         asyncStorage: AsyncStorage
        //     }}
        // >
        //     <View
        //         style={{
        //             justifyContent: 'center',
        //             alignItems: 'center',
        //             flex: 1
        //         }}
        //     >
        // {connector.connected && (
        //     <TouchableOpacity
        //         onPress={() => {
        //             connector.connect()
        //         }}
        //     >
        //         <Text>Connect</Text>
        //     </TouchableOpacity>
        // )}
        //     </View>
        // </WalletConnectProvider>
    )
}

// export default App

export default withWalletConnect(App, {
    clientMeta: {
        description: 'Connect with WalletConnect'
    },
    redirectUrl: Platform.OS === 'web' ? window.location.origin : 'yourappscheme://',
    storageOptions: {
        asyncStorage: AsyncStorage
    }
})

const styles = StyleSheet.create({})
