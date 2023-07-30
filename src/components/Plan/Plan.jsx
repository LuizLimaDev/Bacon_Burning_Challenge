import CardPlan from "./CardPlan/CardPlan";
import individualPlanImg from "assets/user.svg";
import groupPlanImg from "assets/group.svg";

export default function Plan() {
  const individualPlanList = [
    "Atendimento individualizado.",
    "Avaliação Física.",
    "Receitas saudáveis.",
    "Exercícios Neurais.",
    "Tabela de exercícios"
  ];
  const groupPlanList = [
    "Atendimento ccoletivo.",
    "Receitas saudáveis.",
    "Exercícios Neurais.",
  ];

  return (
    <section id="plan">
      <div className="flex flex-col items-center">
        <h3 className="mb-12 text-orange-200 uppercase font-semibold">
          Planos
        </h3>

        <div className="flex gap-10">
          <CardPlan
            imgPlan={individualPlanImg}
            title='Individual'
            price='150'
            list={individualPlanList}
          />
          <CardPlan
            imgPlan={groupPlanImg}
            title='Grupo'
            price='50'
            list={groupPlanList}
          />
        </div>
      </div>
    </section>
  );
}