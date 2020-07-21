import React , {useEffect} from 'react';
import {BASE_URL} from '../config/index';
import { createAction } from '../utils/createAction';
import AsyncStorage from '@react-native-community/async-storage';

export function UseAuth (){
    const [state,dispatch] = React.useReducer( (state , action)=>{
        switch (action.type) {
            case 'SET_USER':
            return {
                ...state,
                user : { ...action.payload.user },
                emploi : { ...action.payload.emploi },
                justification : { ...action.payload.justification },
                loading : false ,
                error : undefined 
            };
            case 'SET_ERROR':
            return {
                ...state,
                error : { ...action.payload },
                loading : false 
            };
            case 'REMOVE_USER':
            return {
                ...state,
                user : undefined,
                emploi : undefined,
                justification : undefined,
            };
            case 'SET_LOADING':
            return {
                ...state,
                loading : action.payload,
            };
            case 'REFRESH_SCHEDULE':
            return {
                ...state,
                emploi : { ...action.payload },
            };
            case 'REFRESH_JUSTIFICATION':
            return {
                ...state,
                justification : { ...action.payload },
            };
            default:
            return state;
        }
        },{user : undefined , loading : true , error : undefined ,emploi : [], justification : []});
    const auth = React.useMemo(() => (
        {
            login : async (email,password) => {
                let user = null;
                let emploi;
                let justification;
                let error ;
                try { await fetch(BASE_URL+'/login', {
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
                        if (res.code === 200)
                        {
                            user = {
                                token : res.tokens,
                                email : res.user.email,
                                name : res.user.name,
                                id : res.user.id,
                                classe : res.user.classe,
                                groupe : res.user.groupe,
                            };
                            emploi = res.emploi;
                            justification = res.justification;
                        }
                        else if(res.code === 400) {
                            error = {
                                message : res.message
                            }
                        }
                        else if(res.message === 'The given data was invalid.'){
                            error = {
                                message : 'Utilisez une adresse e-mail et un mot de passe valides '
                            }
                        }else {
                            console.log(res.message)
                            error = {
                                message : 'some other error '
                            }
                        }
                    });
                }catch(e){
                    error = {
                        message : 'serveur ne répond pas'
                    }
                }
                if(user !== null) {
                    try {
                        await AsyncStorage.setItem('user', JSON.stringify(user));
                    } catch (e) {
                            console.log(e)
                    }
                    try {
                        await AsyncStorage.setItem('emploi', JSON.stringify(emploi));
                    } catch (e) {
                            console.log(e)
                    }
                    try {
                        await AsyncStorage.setItem('justification', JSON.stringify(justification));
                    } catch (e) {
                            console.log(e)
                    }
                    dispatch(createAction('SET_USER',{user , emploi, justification}));
                } else {
                    dispatch(createAction('SET_ERROR',error));
                }
                
            
            },
            
            logout: async () => {
                let user ;
                let emploi ;
                try {
                    var jsonValue = await AsyncStorage.getItem('user') ;
                    user = jsonValue != null ? JSON.parse(jsonValue) : null ;
                    jsonValue = await AsyncStorage.getItem('emploi') ;
                    emploi = jsonValue != null ? JSON.parse(jsonValue) : null ;
                    
                } catch(e) {
                    console.log(e);
                }
                fetch(BASE_URL+'/logout', {
                    method: 'post',
                    headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                    id: user.id,
                    }),
                });
                try {
                    await AsyncStorage.removeItem('user');
                    await AsyncStorage.removeItem('emploi');
                    await AsyncStorage.removeItem('justification');
                  } catch(e) {
                    console.log(e)
                  }
                dispatch(createAction('REMOVE_USER')); 
            },



            refresh: async () => {
                let emploi;
                let error ;
                let user ;
                try {
                    var jsonValue = await AsyncStorage.getItem('user') ;
                    user = jsonValue != null ? JSON.parse(jsonValue) : null ;
                    jsonValue = await AsyncStorage.getItem('emploi') ;
                    emploi = jsonValue != null ? JSON.parse(jsonValue) : null ;
                } catch(e) {
                    console.log(e);
                }
                try { await fetch(BASE_URL+'/emploi', {
                    method: 'post',
                    headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                    id : user.id
                    }),
                })
                    .then(res => res.json())
                    .then(res => {
                        if (res.code === 200)
                        {
                            emploi = res.emploi;
                        }
                    });
                }catch(e){
                    //console.log(e);
                }
                await AsyncStorage.setItem('emploi', JSON.stringify(emploi));
                dispatch(createAction('REFRESH_SCHEDULE' , emploi));
            },


            refreshJustification: async () => {
                let justification;
                let error ;
                let user ;
                try {
                    var jsonValue = await AsyncStorage.getItem('user') ;
                    user = jsonValue != null ? JSON.parse(jsonValue) : null ;
                    jsonValue = await AsyncStorage.getItem('justification') ;
                    justification = jsonValue != null ? JSON.parse(jsonValue) : null ;
                } catch(e) {
                    console.log(e);
                }
                try { await fetch(BASE_URL+'/justification', {
                    method: 'post',
                    headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                    id : user.id
                    }),
                })
                    .then(res => res.json())
                    .then(res => {
                        if (res.code === 200)
                        {
                            justification = res.justification;
                        }
                    });
                }catch(e){
                    console.log(e);

                    //  message d'erroor serveur ne repond pas
                }
                await AsyncStorage.setItem('justification', JSON.stringify(justification));
                dispatch(createAction('REFRESH_JUSTIFICATION' , justification));
            },
        }
    ), []);

    useEffect(() => {
        setTimeout (async () => {
            let user ;
            let emploi ;
            let justification ;
            try {
                var jsonValue = await AsyncStorage.getItem('user')
                user = jsonValue != null ? JSON.parse(jsonValue) : null ;
                jsonValue = await AsyncStorage.getItem('emploi')
                emploi = jsonValue != null ? JSON.parse(jsonValue) : null ;
                jsonValue = await AsyncStorage.getItem('justification')
                justification = jsonValue != null ? JSON.parse(jsonValue) : null ;
            } catch(e) {
                console.log(e);
            }
            if(user !== null){
                dispatch(createAction('SET_USER',{user , emploi , justification}));
            }else {
                dispatch(createAction('SET_LOADING',false));
            }
        } , 3000);
    }, [])
    return {auth ,state};
}
