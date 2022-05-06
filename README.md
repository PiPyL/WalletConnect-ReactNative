# WalletConnect-ReactNative
Instructions for setting up walletconnect with react native

Docs: https://docs.walletconnect.com/quick-start/dapps/react-native

Step 1: Run “npx rn-nodeify --hack --install process,crypto,events,constant,console,stream,url,util”

Step 2: Run “npm i @walletconnect/react-native-dapp – save”

Step 3: Run “npm i react-native-svg @react-native-async-storage/async-storage –save”

Step 4: Add “import './shim'” at index.js

Step 5: Add code below in manifest at metro.config.js
    resolver: {
        extraNodeModules: {
            stream: require.resolve('stream-browserify'),
            crypto: require.resolve('react-native-crypto')
        }
    }
    
Step 6: Run “npx pod-install” (for iOS)

Step 7: Add xml below at AndroidManifest.xml (main) (for Android)
    <queries>
        <intent>
            <action android:name="android.intent.action.VIEW" />
            <data android:scheme="rainbow" />
        </intent>

        <intent>
            <action android:name="android.intent.action.VIEW" />
            <data android:scheme="trust" />
        </intent>

        <intent>
            <action android:name="android.intent.action.VIEW" />
            <data android:scheme="argent" />
        </intent>

        <intent>
            <action android:name="android.intent.action.VIEW" />
            <data android:scheme="metamask" />
        </intent>

        <intent>
            <action android:name="android.intent.action.VIEW" />
            <data android:scheme="gnosissafe" />
        </intent>

        <intent>
            <action android:name="android.intent.action.VIEW" />
            <data android:scheme="cryptowallet" />
        </intent>

        <intent>
            <action android:name="android.intent.action.VIEW" />
            <data android:scheme="pillarwallet" />
        </intent>

        <intent>
            <action android:name="android.intent.action.VIEW" />
            <data android:scheme="imtokenv2" />
        </intent>

        <intent>
            <action android:name="android.intent.action.VIEW" />
            <data android:scheme="ontoprovider" />
        </intent>

        <intent>
            <action android:name="android.intent.action.VIEW" />
            <data android:scheme="tpoutside" />
        </intent>

        <intent>
            <action android:name="android.intent.action.VIEW" />
            <data android:scheme="mathwallet" />
        </intent>

        <intent>
            <action android:name="android.intent.action.VIEW" />
            <data android:scheme="steakwallet" />
        </intent>

        <intent>
            <action android:name="android.intent.action.VIEW" />
            <data android:scheme="bitpay" />
        </intent>

        <intent>
            <action android:name="android.intent.action.VIEW" />
            <data android:scheme="ledgerlive" />
        </intent>

        <intent>
            <action android:name="android.intent.action.VIEW" />
            <data android:scheme="awallet" />
        </intent>

        <intent>
            <action android:name="android.intent.action.VIEW" />
            <data android:scheme="1inch" />
        </intent>

        <intent>
            <action android:name="android.intent.action.VIEW" />
            <data android:scheme="huobiwallet" />
        </intent>

        <intent>
            <action android:name="android.intent.action.VIEW" />
            <data android:scheme="eidoo" />
        </intent>

        <intent>
            <action android:name="android.intent.action.VIEW" />
            <data android:scheme="mykeywalletconnect" />
        </intent>

        <intent>
            <action android:name="android.intent.action.VIEW" />
            <data android:scheme="coin98" />
        </intent>

        <intent>
            <action android:name="android.intent.action.VIEW" />
            <data android:scheme="coolwallet" />
        </intent>

        <intent>
            <action android:name="android.intent.action.VIEW" />
            <data android:scheme="dcent" />
        </intent>

        <intent>
            <action android:name="android.intent.action.VIEW" />
            <data android:scheme="zel" />
        </intent>

        <intent>
            <action android:name="android.intent.action.VIEW" />
            <data android:scheme="nash" />
        </intent>

        <intent>
            <action android:name="android.intent.action.VIEW" />
            <data android:scheme="coinomi" />
        </intent>

        <intent>
            <action android:name="android.intent.action.VIEW" />
            <data android:scheme="cybavowallet" />
        </intent>

        <intent>
            <action android:name="android.intent.action.VIEW" />
            <data android:scheme="safepalwallet" />
        </intent>

        <intent>
            <action android:name="android.intent.action.VIEW" />
            <data android:scheme="easypocket" />
        </intent>

        <intent>
            <action android:name="android.intent.action.VIEW" />
            <data android:scheme="bridgewallet" />
        </intent>

        <intent>
            <action android:name="android.intent.action.VIEW" />
            <data android:scheme="sparkpoint" />
        </intent>

        <intent>
            <action android:name="android.intent.action.VIEW" />
            <data android:scheme="bitkeep" />
        </intent>

        <intent>
            <action android:name="android.intent.action.VIEW" />
            <data android:scheme="peakdefiwallet" />
        </intent>

        <intent>
            <action android:name="android.intent.action.VIEW" />
            <data android:scheme="moneyunstoppable" />
        </intent>

        <intent>
            <action android:name="android.intent.action.VIEW" />
            <data android:scheme="halodefiwallet" />
        </intent>

        <intent>
            <action android:name="android.intent.action.VIEW" />
            <data android:scheme="ellipal" />
        </intent>

        <intent>
            <action android:name="android.intent.action.VIEW" />
            <data android:scheme="aktionariat" />
        </intent>

        <intent>
            <action android:name="android.intent.action.VIEW" />
            <data android:scheme="talken-wallet" />
        </intent>

        <intent>
            <action android:name="android.intent.action.VIEW" />
            <data android:scheme="flare" />
        </intent>

        <intent>
            <action android:name="android.intent.action.VIEW" />
            <data android:scheme="kyberswap" />
        </intent>

        <intent>
            <action android:name="android.intent.action.VIEW" />
            <data android:scheme="atoken" />
        </intent>

        <intent>
            <action android:name="android.intent.action.VIEW" />
            <data android:scheme="tongue" />
        </intent>

        <intent>
            <action android:name="android.intent.action.VIEW" />
            <data android:scheme="rwallet" />
        </intent>

        <intent>
            <action android:name="android.intent.action.VIEW" />
            <data android:scheme="plasmapay" />
        </intent>

        <intent>
            <action android:name="android.intent.action.VIEW" />
            <data android:scheme="o3wallet" />
        </intent>

        <intent>
            <action android:name="android.intent.action.VIEW" />
            <data android:scheme="hashme" />
        </intent>

        <intent>
            <action android:name="android.intent.action.VIEW" />
            <data android:scheme="defiantapp" />
        </intent>

        <intent>
            <action android:name="android.intent.action.VIEW" />
            <data android:scheme="celo" />
        </intent>

        <intent>
            <action android:name="android.intent.action.VIEW" />
            <data android:scheme="celowallet" />
        </intent>

        <intent>
            <action android:name="android.intent.action.VIEW" />
            <data android:scheme="essentials" />
        </intent>

        <intent>
            <action android:name="android.intent.action.VIEW" />
            <data android:scheme="fuse.cash" />
        </intent>

        <intent>
            <action android:name="android.intent.action.VIEW" />
            <data android:scheme="stasis" />
        </intent>

        <intent>
            <action android:name="android.intent.action.VIEW" />
            <data android:scheme="julwallet" />
        </intent>

        <intent>
            <action android:name="android.intent.action.VIEW" />
            <data android:scheme="bitpie" />
        </intent>

        <intent>
            <action android:name="android.intent.action.VIEW" />
            <data android:scheme="archipage" />
        </intent>

        <intent>
            <action android:name="android.intent.action.VIEW" />
            <data android:scheme="tangem" />
        </intent>

        <intent>
            <action android:name="android.intent.action.VIEW" />
            <data android:scheme="yitoken" />
        </intent>

        <intent>
            <action android:name="android.intent.action.VIEW" />
            <data android:scheme="abt" />
        </intent>

        <intent>
            <action android:name="android.intent.action.VIEW" />
            <data android:scheme="GDWalletWC" />
        </intent>

        <intent>
            <action android:name="android.intent.action.VIEW" />
            <data android:scheme="airgap-wallet" />
        </intent>

        <intent>
            <action android:name="android.intent.action.VIEW" />
            <data android:scheme="secux" />
        </intent>

        <intent>
            <action android:name="android.intent.action.VIEW" />
            <data android:scheme="orangewallet" />
        </intent>

        <intent>
            <action android:name="android.intent.action.VIEW" />
            <data android:scheme="avacus" />
        </intent>

        <intent>
            <action android:name="android.intent.action.VIEW" />
            <data android:scheme="krystalWallet" />
        </intent>

        <intent>
            <action android:name="android.intent.action.VIEW" />
            <data android:scheme="ambire" />
        </intent>

        <intent>
            <action android:name="android.intent.action.VIEW" />
            <data android:scheme="zeluswallet" />
        </intent>

        <intent>
            <action android:name="android.intent.action.VIEW" />
            <data android:scheme="okex" />
        </intent>

        <intent>
            <action android:name="android.intent.action.VIEW" />
            <data android:scheme="thorwallet" />
        </intent>

        <intent>
            <action android:name="android.intent.action.VIEW" />
            <data android:scheme="helix-id" />
        </intent>

        <intent>
            <action android:name="android.intent.action.VIEW" />
            <data android:scheme="coinstats" />
        </intent>

        <intent>
            <action android:name="android.intent.action.VIEW" />
            <data android:scheme="talkapp" />
        </intent>

        <intent>
            <action android:name="android.intent.action.VIEW" />
            <data android:scheme="cardwallet" />
        </intent>

        <intent>
            <action android:name="android.intent.action.VIEW" />
            <data android:scheme="cryptobrowser" />
        </intent>

        <intent>
            <action android:name="android.intent.action.VIEW" />
            <data android:scheme="lobstr" />
        </intent>

        <intent>
            <action android:name="android.intent.action.VIEW" />
            <data android:scheme="kleverwallet" />
        </intent>

        <intent>
            <action android:name="android.intent.action.VIEW" />
            <data android:scheme="leadwallet" />
        </intent>

        <intent>
            <action android:name="android.intent.action.VIEW" />
            <data android:scheme="edge" />
        </intent>

        <intent>
            <action android:name="android.intent.action.VIEW" />
            <data android:scheme="https" />
        </intent>

        <intent>
            <action android:name="android.intent.action.VIEW" />
            <data android:scheme="autonomy-wc" />
        </intent>

        <intent>
            <action android:name="android.intent.action.VIEW" />
            <data android:scheme="nefti" />
        </intent>

        <intent>
            <action android:name="android.intent.action.VIEW" />
            <data android:scheme="goldbit" />
        </intent>

        <intent>
            <action android:name="android.intent.action.VIEW" />
            <data android:scheme="sone" />
        </intent>

        <intent>
            <action android:name="android.intent.action.VIEW" />
            <data android:scheme="celo" />
        </intent>

        <intent>
            <action android:name="android.intent.action.VIEW" />
            <data android:scheme="UvToken" />
        </intent>

        <intent>
            <action android:name="android.intent.action.VIEW" />
            <data android:scheme="wattwallet" />
        </intent>

        <intent>
            <action android:name="android.intent.action.VIEW" />
            <data android:scheme="coingrig" />
        </intent>

        <intent>
            <action android:name="android.intent.action.VIEW" />
            <data android:scheme="assure" />
        </intent>

        <intent>
            <action android:name="android.intent.action.VIEW" />
            <data android:scheme="safemoon" />
        </intent>

        <intent>
            <action android:name="android.intent.action.VIEW" />
            <data android:scheme="spot" />
        </intent>

        <intent>
            <action android:name="android.intent.action.VIEW" />
            <data android:scheme="tk" />
        </intent>

        <intent>
            <action android:name="android.intent.action.VIEW" />
            <data android:scheme="frontier" />
        </intent>

        <intent>
            <action android:name="android.intent.action.VIEW" />
            <data android:scheme="ricewallet" />
        </intent>

        <intent>
            <action android:name="android.intent.action.VIEW" />
            <data android:scheme="keyring" />
        </intent>

        <intent>
            <action android:name="android.intent.action.VIEW" />
            <data android:scheme="xfunwallet" />
        </intent>

        <intent>
            <action android:name="android.intent.action.VIEW" />
            <data android:scheme="qubic" />
        </intent>

        <intent>
            <action android:name="android.intent.action.VIEW" />
            <data android:scheme="pltwallet" />
        </intent>

        <intent>
            <action android:name="android.intent.action.VIEW" />
            <data android:scheme="ancrypto" />
        </intent>

        <intent>
            <action android:name="android.intent.action.VIEW" />
            <data android:scheme="ttmwalletapp" />
        </intent>
</queries>

Docs:
https://docs.walletconnect.com/quick-start/dapps/react-native

Step 1: Run “npx rn-nodeify --hack --install process,crypto,events,constant,console,stream,url,util”
Step 2: Run “npm i @walletconnect/react-native-dapp – save”
Step 3: Run “npm i react-native-svg @react-native-async-storage/async-storage –save”
Step 4: Add “import './shim'” at index.js
Step 5: Add code below in manifest at metro.config.js
    resolver: {
        extraNodeModules: {
            stream: require.resolve('stream-browserify'),
            crypto: require.resolve('react-native-crypto')
        }
    }

Step 4: Run “npx pod-install” (for iOS)
Step 5: Add xml below at AndroidManifest.xml (main)
    <queries>
        <intent>
            <action android:name="android.intent.action.VIEW" />
            <data android:scheme="rainbow" />
        </intent>

        <intent>
            <action android:name="android.intent.action.VIEW" />
            <data android:scheme="trust" />
        </intent>

        <intent>
            <action android:name="android.intent.action.VIEW" />
            <data android:scheme="argent" />
        </intent>

        <intent>
            <action android:name="android.intent.action.VIEW" />
            <data android:scheme="metamask" />
        </intent>

        <intent>
            <action android:name="android.intent.action.VIEW" />
            <data android:scheme="gnosissafe" />
        </intent>

        <intent>
            <action android:name="android.intent.action.VIEW" />
            <data android:scheme="cryptowallet" />
        </intent>

        <intent>
            <action android:name="android.intent.action.VIEW" />
            <data android:scheme="pillarwallet" />
        </intent>

        <intent>
            <action android:name="android.intent.action.VIEW" />
            <data android:scheme="imtokenv2" />
        </intent>

        <intent>
            <action android:name="android.intent.action.VIEW" />
            <data android:scheme="ontoprovider" />
        </intent>

        <intent>
            <action android:name="android.intent.action.VIEW" />
            <data android:scheme="tpoutside" />
        </intent>

        <intent>
            <action android:name="android.intent.action.VIEW" />
            <data android:scheme="mathwallet" />
        </intent>

        <intent>
            <action android:name="android.intent.action.VIEW" />
            <data android:scheme="steakwallet" />
        </intent>

        <intent>
            <action android:name="android.intent.action.VIEW" />
            <data android:scheme="bitpay" />
        </intent>

        <intent>
            <action android:name="android.intent.action.VIEW" />
            <data android:scheme="ledgerlive" />
        </intent>

        <intent>
            <action android:name="android.intent.action.VIEW" />
            <data android:scheme="awallet" />
        </intent>

        <intent>
            <action android:name="android.intent.action.VIEW" />
            <data android:scheme="1inch" />
        </intent>

        <intent>
            <action android:name="android.intent.action.VIEW" />
            <data android:scheme="huobiwallet" />
        </intent>

        <intent>
            <action android:name="android.intent.action.VIEW" />
            <data android:scheme="eidoo" />
        </intent>

        <intent>
            <action android:name="android.intent.action.VIEW" />
            <data android:scheme="mykeywalletconnect" />
        </intent>

        <intent>
            <action android:name="android.intent.action.VIEW" />
            <data android:scheme="coin98" />
        </intent>

        <intent>
            <action android:name="android.intent.action.VIEW" />
            <data android:scheme="coolwallet" />
        </intent>

        <intent>
            <action android:name="android.intent.action.VIEW" />
            <data android:scheme="dcent" />
        </intent>

        <intent>
            <action android:name="android.intent.action.VIEW" />
            <data android:scheme="zel" />
        </intent>

        <intent>
            <action android:name="android.intent.action.VIEW" />
            <data android:scheme="nash" />
        </intent>

        <intent>
            <action android:name="android.intent.action.VIEW" />
            <data android:scheme="coinomi" />
        </intent>

        <intent>
            <action android:name="android.intent.action.VIEW" />
            <data android:scheme="cybavowallet" />
        </intent>

        <intent>
            <action android:name="android.intent.action.VIEW" />
            <data android:scheme="safepalwallet" />
        </intent>

        <intent>
            <action android:name="android.intent.action.VIEW" />
            <data android:scheme="easypocket" />
        </intent>

        <intent>
            <action android:name="android.intent.action.VIEW" />
            <data android:scheme="bridgewallet" />
        </intent>

        <intent>
            <action android:name="android.intent.action.VIEW" />
            <data android:scheme="sparkpoint" />
        </intent>

        <intent>
            <action android:name="android.intent.action.VIEW" />
            <data android:scheme="bitkeep" />
        </intent>

        <intent>
            <action android:name="android.intent.action.VIEW" />
            <data android:scheme="peakdefiwallet" />
        </intent>

        <intent>
            <action android:name="android.intent.action.VIEW" />
            <data android:scheme="moneyunstoppable" />
        </intent>

        <intent>
            <action android:name="android.intent.action.VIEW" />
            <data android:scheme="halodefiwallet" />
        </intent>

        <intent>
            <action android:name="android.intent.action.VIEW" />
            <data android:scheme="ellipal" />
        </intent>

        <intent>
            <action android:name="android.intent.action.VIEW" />
            <data android:scheme="aktionariat" />
        </intent>

        <intent>
            <action android:name="android.intent.action.VIEW" />
            <data android:scheme="talken-wallet" />
        </intent>

        <intent>
            <action android:name="android.intent.action.VIEW" />
            <data android:scheme="flare" />
        </intent>

        <intent>
            <action android:name="android.intent.action.VIEW" />
            <data android:scheme="kyberswap" />
        </intent>

        <intent>
            <action android:name="android.intent.action.VIEW" />
            <data android:scheme="atoken" />
        </intent>

        <intent>
            <action android:name="android.intent.action.VIEW" />
            <data android:scheme="tongue" />
        </intent>

        <intent>
            <action android:name="android.intent.action.VIEW" />
            <data android:scheme="rwallet" />
        </intent>

        <intent>
            <action android:name="android.intent.action.VIEW" />
            <data android:scheme="plasmapay" />
        </intent>

        <intent>
            <action android:name="android.intent.action.VIEW" />
            <data android:scheme="o3wallet" />
        </intent>

        <intent>
            <action android:name="android.intent.action.VIEW" />
            <data android:scheme="hashme" />
        </intent>

        <intent>
            <action android:name="android.intent.action.VIEW" />
            <data android:scheme="defiantapp" />
        </intent>

        <intent>
            <action android:name="android.intent.action.VIEW" />
            <data android:scheme="celo" />
        </intent>

        <intent>
            <action android:name="android.intent.action.VIEW" />
            <data android:scheme="celowallet" />
        </intent>

        <intent>
            <action android:name="android.intent.action.VIEW" />
            <data android:scheme="essentials" />
        </intent>

        <intent>
            <action android:name="android.intent.action.VIEW" />
            <data android:scheme="fuse.cash" />
        </intent>

        <intent>
            <action android:name="android.intent.action.VIEW" />
            <data android:scheme="stasis" />
        </intent>

        <intent>
            <action android:name="android.intent.action.VIEW" />
            <data android:scheme="julwallet" />
        </intent>

        <intent>
            <action android:name="android.intent.action.VIEW" />
            <data android:scheme="bitpie" />
        </intent>

        <intent>
            <action android:name="android.intent.action.VIEW" />
            <data android:scheme="archipage" />
        </intent>

        <intent>
            <action android:name="android.intent.action.VIEW" />
            <data android:scheme="tangem" />
        </intent>

        <intent>
            <action android:name="android.intent.action.VIEW" />
            <data android:scheme="yitoken" />
        </intent>

        <intent>
            <action android:name="android.intent.action.VIEW" />
            <data android:scheme="abt" />
        </intent>

        <intent>
            <action android:name="android.intent.action.VIEW" />
            <data android:scheme="GDWalletWC" />
        </intent>

        <intent>
            <action android:name="android.intent.action.VIEW" />
            <data android:scheme="airgap-wallet" />
        </intent>

        <intent>
            <action android:name="android.intent.action.VIEW" />
            <data android:scheme="secux" />
        </intent>

        <intent>
            <action android:name="android.intent.action.VIEW" />
            <data android:scheme="orangewallet" />
        </intent>

        <intent>
            <action android:name="android.intent.action.VIEW" />
            <data android:scheme="avacus" />
        </intent>

        <intent>
            <action android:name="android.intent.action.VIEW" />
            <data android:scheme="krystalWallet" />
        </intent>

        <intent>
            <action android:name="android.intent.action.VIEW" />
            <data android:scheme="ambire" />
        </intent>

        <intent>
            <action android:name="android.intent.action.VIEW" />
            <data android:scheme="zeluswallet" />
        </intent>

        <intent>
            <action android:name="android.intent.action.VIEW" />
            <data android:scheme="okex" />
        </intent>

        <intent>
            <action android:name="android.intent.action.VIEW" />
            <data android:scheme="thorwallet" />
        </intent>

        <intent>
            <action android:name="android.intent.action.VIEW" />
            <data android:scheme="helix-id" />
        </intent>

        <intent>
            <action android:name="android.intent.action.VIEW" />
            <data android:scheme="coinstats" />
        </intent>

        <intent>
            <action android:name="android.intent.action.VIEW" />
            <data android:scheme="talkapp" />
        </intent>

        <intent>
            <action android:name="android.intent.action.VIEW" />
            <data android:scheme="cardwallet" />
        </intent>

        <intent>
            <action android:name="android.intent.action.VIEW" />
            <data android:scheme="cryptobrowser" />
        </intent>

        <intent>
            <action android:name="android.intent.action.VIEW" />
            <data android:scheme="lobstr" />
        </intent>

        <intent>
            <action android:name="android.intent.action.VIEW" />
            <data android:scheme="kleverwallet" />
        </intent>

        <intent>
            <action android:name="android.intent.action.VIEW" />
            <data android:scheme="leadwallet" />
        </intent>

        <intent>
            <action android:name="android.intent.action.VIEW" />
            <data android:scheme="edge" />
        </intent>

        <intent>
            <action android:name="android.intent.action.VIEW" />
            <data android:scheme="https" />
        </intent>

        <intent>
            <action android:name="android.intent.action.VIEW" />
            <data android:scheme="autonomy-wc" />
        </intent>

        <intent>
            <action android:name="android.intent.action.VIEW" />
            <data android:scheme="nefti" />
        </intent>

        <intent>
            <action android:name="android.intent.action.VIEW" />
            <data android:scheme="goldbit" />
        </intent>

        <intent>
            <action android:name="android.intent.action.VIEW" />
            <data android:scheme="sone" />
        </intent>

        <intent>
            <action android:name="android.intent.action.VIEW" />
            <data android:scheme="celo" />
        </intent>

        <intent>
            <action android:name="android.intent.action.VIEW" />
            <data android:scheme="UvToken" />
        </intent>

        <intent>
            <action android:name="android.intent.action.VIEW" />
            <data android:scheme="wattwallet" />
        </intent>

        <intent>
            <action android:name="android.intent.action.VIEW" />
            <data android:scheme="coingrig" />
        </intent>

        <intent>
            <action android:name="android.intent.action.VIEW" />
            <data android:scheme="assure" />
        </intent>

        <intent>
            <action android:name="android.intent.action.VIEW" />
            <data android:scheme="safemoon" />
        </intent>

        <intent>
            <action android:name="android.intent.action.VIEW" />
            <data android:scheme="spot" />
        </intent>

        <intent>
            <action android:name="android.intent.action.VIEW" />
            <data android:scheme="tk" />
        </intent>

        <intent>
            <action android:name="android.intent.action.VIEW" />
            <data android:scheme="frontier" />
        </intent>

        <intent>
            <action android:name="android.intent.action.VIEW" />
            <data android:scheme="ricewallet" />
        </intent>

        <intent>
            <action android:name="android.intent.action.VIEW" />
            <data android:scheme="keyring" />
        </intent>

        <intent>
            <action android:name="android.intent.action.VIEW" />
            <data android:scheme="xfunwallet" />
        </intent>

        <intent>
            <action android:name="android.intent.action.VIEW" />
            <data android:scheme="qubic" />
        </intent>

        <intent>
            <action android:name="android.intent.action.VIEW" />
            <data android:scheme="pltwallet" />
        </intent>

        <intent>
            <action android:name="android.intent.action.VIEW" />
            <data android:scheme="ancrypto" />
        </intent>

        <intent>
            <action android:name="android.intent.action.VIEW" />
            <data android:scheme="ttmwalletapp" />
        </intent>
</queries>
