import checkImg from "assets/check.png";

export default function CardPlan({ imgPlan, title, price, list }) {
  return (
    <div
      className="container-col-center container-card"
    >
      <div>
        <img
          src={imgPlan}
          alt={title}
          className="w-20 h-20 my-2 mx-auto"
        />
        <p className="mb-10 uppercase font-semibold">
          {title}
        </p>
      </div>

      <div className="flex mb-10">
        <p className="mr-2 text-base">
          R$
        </p>
        <p className="text-6xl font-bold">
          {price}
        </p>
      </div>

      <ul>
        {list.map(item => (
          <li
            key={item}
            className="flex mb-1"
          >
            <img src={checkImg} alt="imagem de checado" />
            <p className="ml-2 text-base">
              {item}
            </p>
          </li>
        ))}
      </ul>

      <button className="button-card-plan mt-auto">
        Participar
      </button>
    </div>
  );
}