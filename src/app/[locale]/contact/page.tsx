import { MyForm } from "@/components/MyForm";
import { useTranslations } from "next-intl";

export default function ContactPage() {
  const t = useTranslations("common");

  return (
    <div className="text-center">
      <h1 className="text-4xl font-bold text-gray-900 mb-4">{t("contact")}</h1>
      <p className="text-xl text-gray-600">
        This is the contact page with internationalization support.
      </p>
      <MyForm />
    </div>
  );
}
