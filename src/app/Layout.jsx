import { useEffect, useState } from 'react';
import Context from '../context/Context';
import Header from './../components/Header';
import Main from './../components/Main';

import { payload as dados } from '../mock/mock';

const Layout = () => {
  const [payload, setPayload] = useState();
  const [dataDisplay, setDataDisplay] = useState();
  const [isLoading, setIsLoading] = useState(true);

  const getDadosPorData = (data = new Date().toISOString().split('T')[0]) => {
    setIsLoading(true);
    try {
      //Fazer requisição POST

      setPayload(dados);
    } catch (e) {
      console.log(e);
    } finally {
      setTimeout(() => setIsLoading(false), 1000);
      setDataDisplay(data);
    }

    return data;
  };

  useEffect(() => {
    getDadosPorData();
  }, []);

  return (
    <Context.Provider value={payload}>
      {isLoading ? (
        <div>Carregando dados</div>
      ) : (
        <>
          <Header
            handleMudaData={getDadosPorData}
            dataDisplay={dataDisplay}
          />
          <Main />
        </>
      )}
    </Context.Provider>
  );
};

export default Layout;
