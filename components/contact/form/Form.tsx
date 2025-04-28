export const Form = () => {
  return (
    <div>
      <h1 className="text-4xl font-bold">Contactanos Ya!</h1>
      <form className="space-y-2">
        <div className="flex flex-col gap-y-4 my-5 border border-gray-200 p-2">
          <input
            type="text"
            name="name"
            className="w-full text-gray-500 outline-none"
            placeholder="nombre"
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2  my-5  ">
          <div className="p-2 border border-gray-200">
            <input
              type="text"
              name="email"
              className=" text-gray-500 outline-none"
              placeholder="telefono"
            />
          </div>
          <div className="p-2 border border-gray-200">
            <input
              type="text"
              name="phone"
              className=" text-gray-500 outline-none"
              placeholder="correo electronico"
            />
          </div>
        </div>
        <div className="flex flex-col gap-y-4 my-5 border border-gray-200 p-2">
          <textarea
            name="description"
            className="w-full text-gray-500 h-32 outline-none"
            placeholder="mensaje"
          />
        </div>

        <button className="btn-primary w-full" type="submit">
          Cotizar
        </button>
      </form>
    </div>
  );
};
