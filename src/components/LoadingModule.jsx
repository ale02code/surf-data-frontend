function LoadingModule() {
  return (
    <div className="flex items-center justify-center min-h-screen w-screen bg-gray-100 absolute left-0 top-0">
      <div className="flex items-center space-x-2">
        <div className="w-5 h-5 rounded-full animate-spin border-2 border-solid border-blue-500 border-t-transparent"></div>
        <span className="text-lg text-gray-600">Cargando...</span>
      </div>
    </div>
  );
}

export default LoadingModule;
