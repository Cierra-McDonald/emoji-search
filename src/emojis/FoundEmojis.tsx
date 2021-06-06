import React from 'react'

type SearchProps = { 
    filtered: any,
}

const FoundEmojis: React.FC<SearchProps> = ({ filtered }) => { 
    console.log(filtered)
    
    return ( 
        <div>
            {filtered.map((filter: any)=> (<li key={filter.unicodeName}>
                <div>{filter.character}</div>
                <p>{filter.unicodeName}</p>
            </li>
            )
            )}

        </div>
    )
}

export default FoundEmojis;

