const SubscribeUs = () => {
  return (
    <div className="subscribe-us w-full max-w-screen-2xl h-[350px] bg-[#1d1f2e] flex flex-col justify-center items-center mb-24">
      <div className="flex justify-center items-center px-6 xs:px-0 mb-6">
        <div className="w-8 h-px bg-gray-700"></div>
        <div className="uppercase mx-4 tracking-widest text-gray-400 font-bold text-xs text-center">
          Sign up and get free coffee bags
        </div>
        <div className="w-8 h-px bg-gray-700"></div>
      </div>
      <div className="text-4xl text-white mb-6">Coffee Updates</div>
      <div className="ct-form">
        <div className="flex flex-col md:flex-row justify-center items-center gap-3">
          <div className="ct-form-item text-center">
            <input
              type="email"
              placeholder="quocviet.ce@gmail.com"
              className="px-6 py-4 w-[350px] max-w-[80%] xs:max-w-full bg-inherit border-[1px] border-gray-700 
              outline-none text-white leading-5 
              hover:border-gray-300 duration-500 focus:border-gray-300 
              placeholder:uppercase placeholder:text-xs placeholder:tracking-widest placeholder:font-semibold"
            />
          </div>
          <div className="ct-form-item">
            <button
              type="submit"
              className="ct-button bg-white text-gray-900 w-max max-h-[54px]"
            >
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubscribeUs;
