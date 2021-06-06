import { useState, useEffect } from 'react';
import { getEmojis } from '../services/emoji-api';
import { EmojiList, EmojiCharacter } from '../types/types';


//custom hooks begin with "use", otherwise you receive a React error
export const useEmojis = () => { 
    const [ emojis, setEmojis ] = useState<EmojiList[]>([]);
    const [loading, setLoading ] = useState<boolean>(true);

    useEffect(() => { 
        getEmojis()
            .then(allEmojis => setEmojis(allEmojis))
            .finally(() => setLoading(false));
    }, [])

    return { emojis, loading }

}
