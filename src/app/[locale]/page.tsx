import Counter from "@/components/Counter";
import { useTranslations } from "next-intl";

export default function HomePage() {
  const t = useTranslations("home");

  return (
    <div className="max-w-4xl mx-auto px-4 py-10 space-y-16">
      {/* Hero Section */}
      <section className="text-center space-y-4">
        <h1 className="text-4xl font-bold text-blue-600">{t("title")}</h1>
        <p className="text-lg text-gray-700 max-w-2xl mx-auto">
          {t("description")}
        </p>
      </section>

      {/* Counter Section */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold text-center text-gray-800">
          {t("counter")}
        </h2>
        <Counter />
      </section>
    </div>
  );
}
