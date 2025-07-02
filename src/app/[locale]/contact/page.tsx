import { useTranslations } from "next-intl";

export default function ContactPage() {
  const t = useTranslations("common");

  return (
    <div className="text-center">
      <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
        {t("contact")}
      </h1>
      <p className="text-xl text-gray-600 dark:text-gray-300">
        This is the contact page with internationalization support.
      </p>
    </div>
  );
}
