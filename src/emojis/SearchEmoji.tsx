import React from 'react';
import FoundEmojis from './FoundEmojis'
import { useEmojis } from '../hooks/emojiHooks';


const SearchEmoji: React.FC = () => { 
    
    const { search, handleChange, filterEmojis } = useEmojis();
    return ( 
        <div>
                <input
                    type="text"
                    value={search}
                    placeholder={"Search Emoji"}
                    onChange={handleChange}
                    style={{width: '35vh', height: '5vh', borderRadius: '.5em'}}
                    />
                    <br/>
                    <br/>
            <FoundEmojis
             filtered={filterEmojis} />
        </div>
    )

};

export default SearchEmoji;