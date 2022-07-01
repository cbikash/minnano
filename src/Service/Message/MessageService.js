
import axios from 'axios'
import {BASE_URL} from '../../Constant/Constant'
export const SendMessage = async (data) => {
    const formData = new FormData()
    formData.append('name', data.name)
    formData.append('address',data.address)
    formData.append('email',data.email)
    formData.append('contact', data.contact)
    formData.append('message', data.message)
    return await axios.post(`${BASE_URL}/api/contact`, formData,{headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
        "Access-Control-Allow-Origin": "*"
        }})
}