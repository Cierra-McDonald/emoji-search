import React from 'react';
import { useEmojis } from '../hooks/emojiHooks';
import EmojiItem from './EmojiItem';

const EmojiListPage: React.FC = () => { 

    const { loading, emojis } = useEmojis();

    const emojiItems = emojis.map(emoji => (<li key={emoji.slug}>
        <EmojiItem {...emoji}/>
    </li>))

        
    if(loading) return <h2>Loading...</h2>
    return (
    <div>
        <ul>
            {emojiItems}
        </ul>
    </div> 

    );


}

export default EmojiListPage;