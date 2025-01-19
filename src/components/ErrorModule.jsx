import errorImg from "../assets/icons/dashboard-icons/error.png";

function ErrorModule({ msg }) {
  return (
    <div className="w-screen h-screen text-red-500 text-center mt-4 bg-white absolute top-0 left-0 z-50 flex flex-col justify-center items-center overflow-hidden gap-2">
      <img className="h-32" src={errorImg} alt="Error icon" />
      <p className="text-lg text-wrap">{msg}</p>
    </div>
  );
}

export default ErrorModule;
