import { useEffect, useState } from 'react';

import Context from '../context/Context';

import Header from './../components/Header';
import Main from './../components/Main';

import { Loader } from '../components/Loader';

import { payload as dados } from '../mock/mock';

const Layout = () => {
  const [payload, setPayload] = useState();
  const [dataDisplay, setDataDisplay] = useState();
  const [isLoading, setIsLoading] = useState(true);

  const getDataAtual = () => {
    const dataAtual = new Date().toLocaleString();
    return dataAtual.substring(6, 10) + '-' + dataAtual.substring(3, 5) + '-' + dataAtual.substring(0, 2);
  };

  const getDadosPorData = (data = getDataAtual()) => {
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
  };

  useEffect(() => {
    getDadosPorData();
  }, []);

  return (
    <Context.Provider value={payload}>
      {isLoading ? (
        <div className="w-full h-screen flex items-center justify-center text-8xl mt-[-32px]">
          <Loader />
        </div>
      ) : (
        <>
          <Header
            handleMudaData={getDadosPorData}
            getDataAtual={getDataAtual}
            dataDisplay={dataDisplay}
          />
          <Main />
        </>
      )}
    </Context.Provider>
  );
};

export default Layout;
