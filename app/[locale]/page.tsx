import { useTranslations } from "next-intl";

import RentCalculatorForm from "@/components/rent-calculator/RentCalculatorForm";

export default function Index() {
  const t = useTranslations("RentCalculator");
  return (
    <main className="md:px-6 py-4 flex flex-col items-center">
      <h2 className="text-2xl font-bold text-center my-3">{t("title")}</h2>
      <p className="text-center">{t("description")}</p>
      <div className="w-full lg:w-2/3 my-6 border md:p-4 rounded-lg">
        <RentCalculatorForm />
      </div>
    </main>
  );
}
