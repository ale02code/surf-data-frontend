function InfoCard({ src, qua, label }) {
  return (
    <div className="w-full border border-gray-300 overflow-hidden my-2">
      <div className="w-full p-2">
        <img
          className="h-9 mb-3"
          draggable="false"
          src={src}
          alt={label + " icon"}
        />
        <strong className="text-3xl">{qua}</strong>
        <p className="text-base">{label}</p>
      </div>
    </div>
  );
}

export default InfoCard;
