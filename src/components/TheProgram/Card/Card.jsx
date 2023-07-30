export default function Card({ img, title, text }) {
  return (
    <div className="flex flex-col w-80 mt-20">
      <img
        src={img}
        alt={title}
        className="w-20 self-center mb-4"
      />
      <h6 className="text-2xl text-white font-bold text-center mb-4">
        {title}
      </h6>
      <p className="text-base font-medium text-center">
        {text}
      </p>
    </div>
  );
}