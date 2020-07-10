import React , {useEffect} from 'react';
import {BASE_URL} from '../config/index'
import { createAction } from '../utils/createAction';
import AsyncStorage from '@react-native-community/async-storage';

export function UseAuth (){
    const [state,dispatch] = React.useReducer(reduser = (state , action)=>{
        switch (action.type) {
            case 'SET_USER':
            return {
                ...state,
                user : { ...action.payload },
            };
            case 'REMOVE_USER':
            return {
                ...state,
                user : undefined,
            };
            default:
            return state;
        }
        },{user : undefined});
    const auth = React.useMemo(() => (
        {
            login : async (email,password) => {
                let user;
                await fetch(BASE_URL+'/login', {
                    method: 'post',
                    headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                    email: email,
                    password: password,
                    }),
                })
                    .then(res => res.json())
                    .then(res => {
                    user = {
                        token : res.tokens,
                        email : res.user.email,
                        name : res.user.name,
                    };
                    });
                try {
                    await AsyncStorage.setItem('user', JSON.stringify(user))
                  } catch (e) {
                        console.log(e)
                  }
                dispatch(createAction('SET_USER',user));
            
            },
            
            logout: async () => {
                try {
                    await AsyncStorage.removeItem('user');
                  } catch(e) {
                    console.log(e)
                  }
                dispatch(createAction('REMOVE_USER'));
            },
        }
    ), []);

    useEffect(() => {
        setTimeout (async () => {
            let user ;
            try {
                const jsonValue = await AsyncStorage.getItem('user')
                user = jsonValue != null ? JSON.parse(jsonValue) : null ;
            } catch(e) {
                console.log(e);
            }
            if(user !== null){
                console.log(user);
                dispatch(createAction('SET_USER',user));
            }
        } , 1000);
    }, [])
    return {auth ,state};
}
