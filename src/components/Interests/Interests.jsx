import { MdVerified } from "react-icons/md";

function Interests() {
  return (
    <>
      <h1 className="text-2xl items-center">
        <span className="italic md:not-italic text-sky-500 ml-8 glow-text">
          thangthugian
        </span>
        <MdVerified className="inline-block text-sky-400 ml-1" />
        <span className="text-orange-200 mr-3">:~$</span>
        <span className="text-slate-700 glow-text">glow interests.md</span>
      </h1>
      <ul className="ml-8 mt-4 text-2xl">
        {/* <span className="rounded-xl  p-1 m-2 bg-violet-500 text-white">
          Interests
        </span> */}
        <li className="list-disc ml-8 mt-4">linux</li>
        <li className="list-disc ml-8">terminals and terminal tools</li>
        <li className="list-disc ml-8">cyber security</li>
        <li className="list-disc ml-8">backend development</li>
      </ul>
    </>
  );
}

export default Interests;
