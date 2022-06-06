import React, {FC} from 'react';
import {InitialContract} from './types/initialContract';

interface AppProps extends InitialContract {}

const App: FC<AppProps> = () => {
  return (
    <div>
      App
    </div>
  );
}

export default App;
