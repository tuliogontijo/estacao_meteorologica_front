const Mostrador = ({ dados, unidade }) => {
  return (
    <div className="border-2 border-black rounded-2xl p-4 text-left flex gap-3 items-center">
      <span className="text-base">{dados.texto}:</span>
      <span className="text-2xl font-bold">
        {dados.valor}
        {unidade}
      </span>
    </div>
  );
};

export default Mostrador;
