import React, {useEffect} from 'react';
import {getContractData} from './store/action-creators/near';
import {useAppDispatch} from './hooks/useAppDispatch';

const App = () => {
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(getContractData());
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div>
            App
        </div>
    );
}

export default App;
