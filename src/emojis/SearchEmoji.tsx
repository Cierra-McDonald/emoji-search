import React, { useState } from 'react';
import { EmojiCharacter, EmojiList } from '../types/types';
import EmojiItem from './EmojiItem';
import { getEmojiByName } from '../services/emoji-api';
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
                    />
                    <br/>
                    <br/>
            <FoundEmojis
             filtered={filterEmojis} />
        </div>
    )

};

export default SearchEmoji;