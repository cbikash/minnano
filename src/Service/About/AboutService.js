import {BASE_URL,STUDY_IN_JAPAN,Home_DESCRIPTION,APPLY_PAGE} from '../../Constant/Constant'
import axios from 'axios'

export const getStudyAt = async() => {
    const data = axios.get(`${BASE_URL}/api/about/${STUDY_IN_JAPAN}`);

    return data
}