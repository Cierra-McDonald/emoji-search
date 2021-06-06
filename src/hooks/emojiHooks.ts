import { useState, useEffect } from 'react';
import { getEmojis } from '../services/emoji-api';
import { EmojiList } from '../types/types';


//custom hooks begin with "use", otherwise you receive a React error
export const useEmojis = () => { 
    const [ emojis, setEmojis ] = useState<EmojiList[]>([]);
    const [loading, setLoading ] = useState<boolean>(true);
    const [search, setSearch] = useState<string>('')



    useEffect(() => { 
        getEmojis()
            .then(allEmojis => setEmojis(allEmojis))
            .finally(() => setLoading(false));
    }, [])

    
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearch(e.target.value);
    }

    //filter through emojis to search for specific ones
    const filterEmojis = emojis.filter(emoji => { 
        return emoji.unicodeName.toLowerCase().includes(search.toLowerCase())
    })

    return { emojis, loading, search, handleChange, filterEmojis }

}
