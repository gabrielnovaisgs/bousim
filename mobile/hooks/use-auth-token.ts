import AsyncStorage from '@react-native-async-storage/async-storage';

export async function getAuthToken(){
    const token = await AsyncStorage.getItem('token')
    return token
}

export function setAuthToken(token:string){
    AsyncStorage.setItem('token', token)
}