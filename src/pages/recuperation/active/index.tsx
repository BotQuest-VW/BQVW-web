import { ReactNode, useState } from "react";
import "./style.css";

const Lorem = (): ReactNode => {
  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          justifyItems: "center",
          margin: 50,
          fontSize: 25,
          fontWeight: 400,
          height: 500,
          width: 450,
        }}
      >
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem voluptatem
        quam, ad, molestias quod saepe ipsam, accusamus pariatur dignissimos
        placeat iusto aspernatur ullam ipsum esse enim voluptatibus voluptas
        doloremque harum.
      </div>
    </>
  );
};

const popUpComponent = (): ReactNode => {
  return (
    <>
      <div style={{ width: 617, height: 548, flexShrink: 0 }} id="LINK ENVIADO">
        <div
          style={{
            widows: 617,
            height: 504,
            flexShrink: 0,
            borderRadius: 94.72,
            backgroundColor: "white",
            boxShadow:
              " 0px 14.060005187988281px 15.539999961853027px 0px rgba(0, 0, 0, 0.56);",
          }}
        >
          <p
            style={{
              color: "black",
              fontFamily: "montSerrat",
              fontSize: 64,
              fontStyle: "normal",
              fontWeight: 900,
            }}
          ></p>{" "}
        </div>
      </div>
    </>
  );
};

export default function Active() {
  const [visible, setVisible] = useState(false);

  const handleVisible = () => setTimeout(() => setVisible(true), 1500);
  handleVisible();

  return (
    <>
      {visible === true ? (
        <>
          <div
            style={{
              width: 1450,
              display: "flex",
              flexDirection: "row",
              overflowX: "scroll",
            }}
          >
            <Lorem />
            <Lorem />
            <Lorem />

            <popUpComponent />
          </div>
        </>
      ) : (
        <div
          style={{
            display: "flex",
            width: 1000,
            height: 500,
            alignItems: "center",
            justifyContent: "center",
            padding: "20px 650px",
            fontSize: 59,
            flexShrink: 1,
          }}
        >
          carregando ...
        </div>
      )}
    </>
  );
}
