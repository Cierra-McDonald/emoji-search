import React from 'react';

interface Props { 
    unicodeName: string;
    character: string;
    slug: string;
}

const EmojiItem: React.FC<Props> = ({ unicodeName, character }) => { 
    return ( 
        <div>
            <figure>
                <div>{character}</div> 
                <figcaption>{unicodeName}</figcaption>
            </figure>

        </div>
    )
}

export default EmojiItem;