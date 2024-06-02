import Section from './Section';
import Grafico from './Section/subcomponents/Grafico';
import Mostrador from './Section/subcomponents/Mostrador';

const Main = () => {
  return (
    <Section
      title="Temperatura"
      grafico={<Grafico />}
      mostradores={[<Mostrador />, <Mostrador />]}
    ></Section>
  );
};

export default Main;
