import { Emoji } from '../types/types';
const URL = process.env.REACT_APP_API_URL as string;


export const getEmojis = async(): Promise<Emoji[]> => { 
    const res = await fetch(URL);
    const emojis = await res.json();

    if(!res.ok) throw new Error('Uh oh, an error has occured!')

    return emojis

}