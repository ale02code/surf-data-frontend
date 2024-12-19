function ServiceCard({ color, img, title, desc, advantages, price }) {
  return (
    <div
      className={`h-auto w-[265px] p-2 py-4 bg-${color}-800 rounded-lg shadow-${color}-700 shadow-md flex flex-col justify-around overflow-hidden`}
    >
      <div>
        <div className="h-56 overflow-hidden">
          <div className="flex items-center justify-between mb-1">
            <h6 className="text-3xl font-bold capitalize text-white font-agrandir">
              Plan {title}
            </h6>
            <img className="h-16" src={img} alt="Icon Image" />
          </div>
          <p className="text-md text-gray-100 text-balance">{desc}</p>
          <span className="text-4xl font-bold flex items-end text-white mb-3">
            {price} <p className="text-xl ml-2">$/mes</p>
          </span>
          <button
            className={`bg-${color}-500 text-white px-4 py-2 rounded-md font-agrandir border-2 border-white button-texture w-full`}
          >
            Elegir Plan
          </button>
        </div>
        <hr className="mt-3 mb-2" />
        <div className="h-48 overflow-hidden">
          <ol className="text-white">
            {advantages.map((ad, index) => (
              <li key={index}>* {ad}</li>
            ))}
          </ol>
        </div>
      </div>
    </div>
  );
}

export default ServiceCard;
