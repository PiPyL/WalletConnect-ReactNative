import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import WalletConnectProvider, {
  useWalletConnect,
  withWalletConnect,
} from "@walletconnect/react-native-dapp";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect } from "react";

const App = () => {
  const connector = useWalletConnect();

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <TouchableOpacity
        onPress={() => {
          connector.connect();
        }}
      >
        <Text>Connect</Text>
      </TouchableOpacity>
    </View>
  );
};

// export default App

export default withWalletConnect(App, {
  clientMeta: {
    description: "Connect with WalletConnect",
  },
  redirectUrl:
    Platform.OS === "web" ? window.location.origin : "yourappscheme://",
  storageOptions: {
    asyncStorage: AsyncStorage,
  },
});

const styles = StyleSheet.create({});
