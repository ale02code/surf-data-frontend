const colorClasses = {
  yellow: {
    background: "bg-yellow-800",
    shadow: "shadow-yellow-700",
    button: "bg-yellow-500",
  },
  sky: {
    background: "bg-sky-800",
    shadow: "shadow-sky-700",
    button: "bg-sky-500",
  },
  green: {
    background: "bg-green-800",
    shadow: "shadow-green-700",
    button: "bg-green-500",
  },
};

function ServiceCard({ color, img, title, desc, advantages, price }) {
  const classes = colorClasses[color] || colorClasses["red"];

  return (
    <div
      className={`h-auto w-[265px] p-2 py-4 rounded-lg shadow-md flex flex-col justify-start overflow-hidden ${classes.background} ${classes.shadow} max-md:w-[300px]`}
    >
      <div>
        <div className="h-56 overflow-hidden">
          <div className="flex justify-between items-center mb-2">
            <h6 className="text-3xl font-bold capitalize text-white">
              Plan {title}
            </h6>
            <img className="h-16" src={img} alt="Icon Image" />
          </div>
          <p className="text-md text-gray-100">{desc}</p>
          <span className="text-4xl font-bold flex items-end text-white mb-3">
            {price} <p className="text-xl ml-2">$/mes</p>
          </span>
          <button
            className={`text-white px-4 py-2 rounded-md border-2 border-white w-full ${classes.button}`}
          >
            Elegir Plan
          </button>
        </div>
        <hr className="mt-3 mb-2" />
        <ol className="text-white">
          {advantages.map((ad, index) => (
            <li className="flex" key={index}>
              <span>📌</span>
              {ad}
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}

export default ServiceCard;
