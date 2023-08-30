import { ReactNode } from "react";
import "./style.css";

interface Props {
  source: string;
  class: string;
}

export const Image = ({ source, class: design }: Props): ReactNode => {
  return (
    <>
      <img className={design} src={source} alt="" />
    </>
  );
};
