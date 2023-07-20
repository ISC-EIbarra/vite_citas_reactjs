import PropTypes from 'prop-types';

const Paciente = ({ paciente, setPaciente, eliminarPaciente }) => {
  const { nombre, propietario, email, fecha, sintomas, id } = paciente;

  const handleEliminar = () => {
    const respuesta = confirm('¿Deseas eliminar este paciente?');
    if (respuesta) {
      eliminarPaciente(id);
    }
  };

  return (
    <div className="mx-5 my-4 bg-white rounded-3xl px-5 py-6">
      <p className="font-bold mb-3 text-gray-700">
        Nombre: <span className="font-normal text-black">{nombre}</span>
      </p>
      <p className="font-bold mb-3 text-gray-700">
        Propietario:{' '}
        <span className="font-normal text-black">{propietario}</span>
      </p>
      <p className="font-bold mb-3 text-gray-700">
        Email: <span className="font-normal text-black">{email}</span>
      </p>
      <p className="font-bold mb-3 text-gray-700">
        Fecha Alta: <span className="font-normal text-black">{fecha}</span>
      </p>
      <p className="font-bold mb-3 text-gray-700">
        Síntomas: <span className="font-normal text-black">{sintomas}</span>
      </p>
      <div className="flex justify-end gap-4">
        <button
          type="button"
          className="py-2 px-6 bg-indigo-600 hover:bg-indigo-700 rounded-3xl text-white"
          onClick={() => setPaciente(paciente)}
        >
          Editar
        </button>
        <button
          className="py-2 px-6 bg-red-600 hover:bg-red-700 rounded-3xl text-white"
          type="button"
          onClick={handleEliminar}
        >
          Eliminar
        </button>
      </div>
    </div>
  );
};

Paciente.propTypes = {
  paciente: PropTypes.object,
  nombre: PropTypes.string,
  propietario: PropTypes.string,
  email: PropTypes.string,
  fecha: PropTypes.string,
  sintomas: PropTypes.string,
  setPaciente: PropTypes.func,
  eliminarPaciente: PropTypes.func,
  id: PropTypes.number,
};

export default Paciente;
