import React, { useState } from 'react';
import { useEmojis } from '../hooks/emojiHooks';
import EmojiItem from './EmojiItem';
import styles from './EmojiListPage.module.css';

const EmojiListPage: React.FC = () => { 

    const { loading, emojis } = useEmojis();
   

    const emojiItems = emojis.map(emoji => (<li key={emoji.slug} 
    className={styles.list}>
        <EmojiItem {...emoji}/>
    </li>))

        
    if(loading) return <h2>Loading...</h2>
    return (
    <div>
        <ul className={styles.ul}>
            {emojiItems}
        </ul>
    </div> 

    );


}

export default EmojiListPage;