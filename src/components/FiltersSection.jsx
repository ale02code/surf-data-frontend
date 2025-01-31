import filterIcon from "../assets/icons/dashboard-icons/filter.svg";

function FiltersSection() {
  return (
    <div className="flex items-center gap-2 border border-gray-300 py-1 px-2 rounded cursor-pointer">
      <img className="h-6" src={filterIcon} alt="filter icon" />
      <select
        name="filters"
        id="filters"
        className="cursor-pointer w-24 outline-none"
      >
        <option value="1" selected disabled>
          Filtros
        </option>
        <option value="mayor">Mayor precio</option>
        <option value="menor">Menor precio</option>
      </select>
    </div>
  );
}

export default FiltersSection;
