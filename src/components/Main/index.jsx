import Section from './Section';
import Grafico from './Section/subcomponents/Grafico';
import Context from '../../context/Context';
import { useContext } from 'react';

const Main = () => {
  const payload = useContext(Context);
  const grandezas = Object.keys(payload.dados);
  const { dados } = payload;

  return (
    <>
      {grandezas.map((grandeza, index) => {
        const { mostradores, valores: dadosGrafico, unidade } = dados[grandeza];
        return (
          <Section
            key={index}
            title={grandeza}
            grafico={
              <Grafico
                key={index}
                dados={{ unidade, dadosGrafico }}
              />
            }
            dadosMostradores={mostradores}
            unidade={unidade}
          ></Section>
        );
      })}
    </>
  );
};

export default Main;
