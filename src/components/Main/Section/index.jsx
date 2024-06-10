import PropTypes from 'prop-types';

import Mostrador from './subcomponents/Mostrador';

const Section = ({ title, grafico, dadosMostradores, ultimaMedicao, unidade }) => {
  let { valor, horario } = ultimaMedicao;
  horario = new Intl.DateTimeFormat('pt-BR', {
    year: 'numeric',
    day: 'numeric',
    month: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
    hour12: false,
    timeZone: 'America/Sao_Paulo'
  }).format(horario);

  return (
    <div className="border-2 border-black rounded-2xl p-6 max-md:p-0 mb-6">
      <div className="grid grid-cols-4 ">
        <div className="col-span-3 max-md:col-span-4">
          <h2 className="font-bold text-left mb-4 text-xl max-md:p-3 max-md:text-base">{title}</h2>
        </div>
        <div className="col-span-1 max-md:col-span-4 px-4">
          <Mostrador
            dados={{ texto: 'Última Medição', valor }}
            unidade={unidade}
          />
          <small className="text-xs">Hora da captura: {horario}</small>
        </div>
      </div>
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
  ultimaMedicao: PropTypes.object.isRequired,
  unidade: PropTypes.string.isRequired
};

export default Section;
