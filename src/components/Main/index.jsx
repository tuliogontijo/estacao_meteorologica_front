import { useContext } from 'react';
import Context from '../../context/Context';

import Section from './Section';
import Grafico from './Section/subcomponents/Grafico';

const Main = () => {
  const payload = useContext(Context);
  const grandezas = Object.keys(payload.dados);
  const { dados } = payload;

  return (
    <main>
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
    </main>
  );
};

export default Main;
