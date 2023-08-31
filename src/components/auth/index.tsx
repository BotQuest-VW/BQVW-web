import "./style.css";

import { ReactNode, useState } from "react";
const Auth = (): ReactNode => {
  const [path, setPath] = useState<string>();

  function overviewed(tag: string) {
    const url = new URL(tag);
  }

  const url = overviewed(
    "https://firebase.google.com/docs?gad=1&gclid=Cj0KCQjw9MCnBhCYARIsAB1WQVU7KQaNqLOpnK3nqefy3MFI86987DzAqCJUdePBD246CJ3IDPGwbsYaAgX7EALw_wcB&gclsrc=aw.ds&hl=pt-br"
  );

  return (
    <div>
      <button className="openai-com-by">
        <div className="text-wrapper">continue com o Google</div>

        <img
          className="span"
          alt="Span"
          src="https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/gjfrcfap6qe-30%3A4?alt=media&token=eb3fe251-6f97-4f52-b94e-6846544c8c57"
        />
      </button>
    </div>
  );
};

export default function GoogleAuth() {
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyItems: "center",
          marginLeft: 30,
        }}
      >
        <Auth />
      </div>
    </>
  );
}
