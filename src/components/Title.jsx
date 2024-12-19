function Title({ text, color }) {
  return (
    <h4
      className={`${color} text-center text-3xl text-balance font-black uppercase mb-16 mt-14 w-11/12 m-auto`}
    >
      {text}
    </h4>
  );
}

export default Title;
