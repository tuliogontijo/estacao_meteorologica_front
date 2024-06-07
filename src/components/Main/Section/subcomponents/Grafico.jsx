import PropTypes from 'prop-types';

import { Line } from '@ant-design/charts';

const Grafico = ({ dados }) => {
  const { unidade, dadosGrafico } = dados;

  const menorValor = Math.min(...dadosGrafico.map((dado) => dado.valor));

  const props = {
    data: dadosGrafico,
    xField: 'hora',
    yField: 'valor',
    tooltip: { title: (d) => d.hora + ':00 horas', items: [{ channel: 'y', valueFormatter: (d) => d + unidade }] },
    point: {
      shapeField: 'square',
      sizeField: 4
    },
    axis: {
      x: { title: 'Hora' },
      y: { title: unidade }
    },
    style: {
      lineWidth: 2
    },
    scale: {
      x: {
        domainMin: 0,
        domainMax: 24,
        tickCount: 24
      },
      y: {
        domainMin: menorValor >= 0 ? menorValor - 10 : menorValor - 2
      }
    }
  };

  return (
    <Line
      className="w-full"
      {...props}
    />
  );
};

Grafico.propTypes = {
  dados: PropTypes.object.isRequired
};

export default Grafico;
