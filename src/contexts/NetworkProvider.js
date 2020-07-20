import React , {createContext ,useState ,useEffect}from 'react';
import NetInfo from '@react-native-community/netinfo';

export const NetworkContext = createContext();

export function NetworkProvider (){
    const [connection , setConnection] = useState('Offline');
    const handleConnectivityChange = state => {
        if (state.isConnected) {
            setConnection('Online');
        } else {
            setConnection('Offline');
        }
    };
    useEffect(() => {
        NetInfo.addEventListener(handleConnectivityChange);
        return () => {
            null;
        };
    });
    return connection ;
}