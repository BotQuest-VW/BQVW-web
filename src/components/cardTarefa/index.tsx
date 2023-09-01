import "./style.css";

export default function CardTarefa(props: any) {
  return (
    <>
      <div className="itemCard">
        <div>
          <span className="bolinha"></span>
          <p>{props.titulo}</p>
        </div>
        <label className="container">
          <input type="checkbox" />
          <span className="checkmark"></span>
        </label>
      </div>
    </>
  );
}
