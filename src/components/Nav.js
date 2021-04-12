import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faMusic} from '@fortawesome/free-solid-svg-icons';

const Nav = ({isOpenPlayList, setIsOpenPlayList}) => {

    return (
        <nav>
            <h1>Waves</h1>
            <button onClick={() => setIsOpenPlayList(!isOpenPlayList)}>
               <pre>PlayList  <FontAwesomeIcon icon={faMusic} /></pre>
            </button>
        </nav>
    )
}

export default Nav;