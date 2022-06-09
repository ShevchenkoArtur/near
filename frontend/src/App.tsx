import React, {FC, useEffect} from 'react';
import Template from './components/Template';
import {InitialContract} from './types/initialContract';
import {useAppDispatch} from './hooks/useAppDispatch';
import {setContractData} from './store/reducers/nearReducer';

interface AppProps {
    contractData: InitialContract
}

const App: FC<AppProps> = (props) => {
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(setContractData(props.contractData));
    }, []);

    return <Template />;
}

export default App;
