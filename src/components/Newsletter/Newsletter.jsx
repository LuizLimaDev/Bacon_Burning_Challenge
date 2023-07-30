export default function Newsletter() {
  return (
    <section>
      <div className="container-col-center py-10 bg-orange-100">
        <h1 className="mb-4 text-3xl font-bold">
          Inscreva-se para receber novidades!
        </h1>

        <p className="w-textNewslatter mb-4 text-center text-base text-red-200">
          Promoções, abertura de grupos, dicas, receitas, exercícios neurais e
          muito mais...
        </p>

        <div>
          <input
            type="email"
            placeholder="Digite seu email..."
            className="py-3 pl-4 pr-96 rounded-l-md"
          />

          <button className="button-newslatter">
            Inscrever
          </button>
        </div>
      </div>
    </section>
  );
}