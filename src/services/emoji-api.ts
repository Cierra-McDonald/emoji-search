import { EmojiCharacter, EmojiList } from '../types/types';
const URL = process.env.REACT_APP_API_URL as string;


export const getEmojis = async(): Promise<EmojiList[]> => { 
    const res = await fetch(URL);
    const emojis = await res.json();

    if(!res.ok) throw new Error('Uh oh, an error has occured!')

    return emojis;

}

// export const getOneEmoji = async(): Promise<EmojiCharacter{}> => { 
//     const res = await fetch(`${URL}/`)
//     const emojo = await res.json();

//     if(!res.ok) throw new Error('Uh oh! there was an error!')

//     return emojo;
// }

export const getEmojiByName = async(name: string): Promise<EmojiList[]> => {
    
    const res = await fetch(`${URL}/search/${name}`);
    const emojos = await res.json();

    if(!res.ok) throw new Error('Uh oh! Error!')

    return emojos;

}
