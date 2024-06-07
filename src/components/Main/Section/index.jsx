import PropTypes from 'prop-types';

import Mostrador from './subcomponents/Mostrador';

const Section = ({ title, grafico, dadosMostradores, unidade }) => {
  return (
    <div className="border-2 border-black rounded-2xl p-6 max-md:p-0 mb-6">
      <h2 className="font-bold text-left mb-4 text-xl max-md:p-3">{title}</h2>
      <div className="flex max-lg:flex-col">
        <div className="basis-3/4 p-4 max-lg:px-0">{grafico}</div>
        <div className="basis-1/4 p-4">
          <div className="flex flex-col gap-8 max-md:gap-2 justify-center h-full">
            {dadosMostradores.map((dados, index) => (
              <Mostrador
                key={index}
                dados={dados}
                unidade={unidade}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
  grafico: PropTypes.node.isRequired,
  dadosMostradores: PropTypes.array.isRequired,
  unidade: PropTypes.string.isRequired
};

export default Section;
