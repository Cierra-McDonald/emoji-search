import React from 'react';
import styles from './EmojiItem.module.css';

interface Props { 
    unicodeName: string;
    character: string;
    slug: string;
}

const EmojiItem: React.FC<Props> = ({ unicodeName, character }) => { 
    return ( 
        <div>
            <figure className={styles.emojicap}>
                <div>{character}</div> 
                <figcaption>{unicodeName}</figcaption>
            </figure>

        </div>
    )
}

export default EmojiItem;