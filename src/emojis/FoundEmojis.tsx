import React from 'react'
import styles from './FoundEmojis.module.css';

type SearchProps = { 
    filtered: any,
    loading: boolean
}



const FoundEmojis: React.FC<SearchProps> = ({ filtered, loading }) => { 

    if(loading) return <h2>Loading...</h2>

    return ( 
        <div>
            <ul className={styles.filtered}>
                {filtered.map((filter: any) => (<li 
                key={filter.unicodeName}
                className={styles.list}>
                    <div>{filter.character}</div>
                    <p>{filter.unicodeName}</p>
                </li>
                )
                )}
            </ul>

        </div>
    )
}

export default FoundEmojis;

