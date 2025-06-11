function BioInstagram({ onClose }) {
  return (
    <div className="border-2 border-blue-400 rounded-xl p-6 w-[450px] h-[500px] relative ">
      <button
        className="absolute top-2 right-3 text-white hover:text-red-400 font-bold"
        onClick={onClose}
      >
        ✕
      </button>

      <h2 className="font-bold text-lg mb-4 text-blue-300">
        Instagram Profile
      </h2>

      <div className="flex items-center space-x-4">
        <img
          src="/image/avatar3.png"
          alt="Avatar"
          className="rounded-full size-16 border-2 border-emerald-400"
        />
        <div>
          <h3 className="text-lg font-semibold text-blue-300">thangthugian</h3>
          <p className="text-sm font-thin">Instagram</p>
        </div>
      </div>

      <div className="mt-4">
        <h4 className="text-sm font-semibold mb-1 text-violet-500">Bio</h4>
        <p className="text-sm text-white bg-[#1b2a3f] p-5 rounded-lg">
          Sharing photos from my travels, coding setups, and daily life.
        </p>
      </div>

      <div className="mt-5">
        <h4 className="text-sm font-semibold mb-2 text-violet-500">Stats ⏳</h4>
        <div className="grid grid-cols-3 gap-2 text-center text-sm">
          <div className="bg-[#0d1117] border border-gray-700 rounded p-2">
            <p className="font-bold text-blue-400">1</p>
            <p className=" font-thin">repositories</p>
          </div>
          <div className="bg-[#0d1117] border border-gray-700 rounded p-2">
            <p className="font-bold text-blue-400">0</p>
            <p className=" font-thin">followers</p>
          </div>
          <div className="bg-[#0d1117] border border-gray-700 rounded p-2">
            <p className="font-bold text-blue-400">1</p>
            <p className=" font-thin">following</p>
          </div>
        </div>
      </div>

      <div className="mt-7 flex justify-end">
        <button
          onClick={onClose}
          className="bg-cyan-400 text-black font-semibold text-xl px-6 py-1 rounded hover:bg-cyan-500"
        >
          <a href="https://www.instagram.com/thangthugian/"> visit</a>
        </button>
      </div>
    </div>
  );
}

export default BioInstagram;
