import PropTypes from 'prop-types';

const Section = ({ title, grafico, mostradores }) => {
  return (
    <div className="border-2 border-black rounded-2xl p-6">
      <h2 className="font-bold text-left">{title}</h2>
      <div className="flex max-lg:flex-col">
        <div className="border-2 basis-3/4 p-4">{grafico}</div>
        <div className="border-2 basis-1/4 p-4">
          <div className="flex-col">{mostradores.map((mostrador) => mostrador)}</div>
        </div>
      </div>
    </div>
  );
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
  grafico: PropTypes.node.isRequired,
  mostradores: PropTypes.array.isRequired
};

export default Section;
