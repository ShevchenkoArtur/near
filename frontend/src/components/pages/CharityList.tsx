import React from 'react';
import {useAppDispatch} from '../../hooks/useAppDispatch';
import {signOut} from '../../store/action-creators/near';

const CharityList = () => {
    const dispatch = useAppDispatch();
    return (
        <div>
            charity-list
            <button onClick={() => dispatch(signOut())}>sign out</button>
        </div>
    );
};

export default CharityList;