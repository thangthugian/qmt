import { useEffect, useState } from "react";
import { MdVerified } from "react-icons/md";

function Header() {
  const [typedText, setTypedText] = useState("");
  const fullText = "I come from Bac Giang, Vietnam";

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setTypedText(fullText.slice(0, i));
      i++;
      if (i > fullText.length) clearInterval(interval);
    }, 50);
    return () => clearInterval(interval);
  }, []);

  return (
    <header className="flex m-8">
      <h1 className="text-2xl flex items-center">
        <span className="italic md:not-italic text-sky-500 glow-text">
          thangthugian
        </span>
        <MdVerified className="inline-block text-sky-400 ml-1" />
        <span>
          <span className="text-orange-200 mr-3">:~$</span>{" "}
        </span>
        <span className=" text-blue-600 dark:text-sky-400">
          <span className="text-slate-700">echo</span> "
          <span className="text-amber-500  glow-text text-2xl font-thin">
            {typedText}
          </span>
          "
        </span>
      </h1>
    </header>
  );
}

export default Header;
