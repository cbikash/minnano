
import {getStudyAt} from '../../Service/About/AboutService'
import {AboutActions} from './AboutSlice'
import {SendMessage} from '../../Service/Message/MessageService'
import { uiActions } from '../uiSlice'



export const getAbout = () =>
{
    return async (dispatch) => {
        const getData = async() => {
            
            const response = await getStudyAt();
            return response.data

        }
        try{
            const res = await getData();
            if(res){
                dispatch(AboutActions.getStudypage(res))
            }
         

        }catch(err){
            console.log(err)
        }

    }
}

export const sendMessageToServer = (data) => {
    return async(dispatch) => {
        const sendData = async (data) => {
            const response = await SendMessage(data);
            return response;
        }
        try{
            const responseData = await sendData(data)
            dispatch(uiActions.showNotification({message: "Successfuly send Message", type: "success",open:true}));
           
        }catch(err){
            dispatch(uiActions.showNotification({message: "Internal Error", type: "error",open:true}));
    
            console.log(err)
        }
    }
}