import { MdVerified } from "react-icons/md";

function Contribute() {
  return (
    <>
      <h1 className="text-2xl flex items-center ml-8 mt-4">
        <span className="italic md:not-italic text-sky-500 glow-text">
          thangthugian
        </span>
        <MdVerified className="inline-block text-sky-400 ml-1" />
        <span>
          <span className="text-orange-200 mr-3">:~$</span>{" "}
        </span>
        <span className="glow-text">comments.txt</span>
      </h1>
      <ul className="ml-8 mt-4 text-2xl">
        <li className="list-disc ml-8">
          Give me your feedback{" "}
          <a
            className="text-blue-300 font-bold hover:text-red-500"
            href="https://docs.google.com/forms/d/e/1FAIpQLSeJxmDDAeXjwo7VBAtE28T3qDTg7LCkT_dHcNUJgUn2kDSdyA/viewform?usp=dialog"
          >
            here
          </a>
          .
        </li>
      </ul>
      <h1 className="m-8 text-xl">
        This personal page is designed based on my inspiration for{" "}
        <span className="text-orange-400">terminal tools</span>
      </h1>
    </>
  );
}

export default Contribute;
