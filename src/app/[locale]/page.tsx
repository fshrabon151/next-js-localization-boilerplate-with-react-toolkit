import Counter from "@/components/Counter";
import { useTranslations } from "next-intl";

export default function HomePage() {
  const t = useTranslations("home");

  return (
    <div className="space-y-8">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
          {t("title")}
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          {t("description")}
        </p>
      </div>

      <div className="mt-12">
        <h2 className="text-2xl font-semibold text-center mb-6 text-gray-800 dark:text-white">
          {t("counter")}
        </h2>
        <Counter />
      </div>
    </div>
  );
}
