import errorImg from "../assets/icons/dashboard-icons/error.png";

function ErrorModule({ msg }) {
  return (
    <div className="w-full h-full text-red-500 text-center bg-white flex flex-col justify-center items-center gap-2">
      <img className="h-32" src={errorImg} alt="Error icon" />
      <p className="text-lg text-wrap">{msg}</p>
    </div>
  );
}

export default ErrorModule;
