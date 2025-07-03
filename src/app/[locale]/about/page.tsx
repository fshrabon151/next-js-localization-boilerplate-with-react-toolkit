import { Button } from "@/components/ui/button";
import { useTranslations } from "next-intl";

export default function AboutPage() {
  const t = useTranslations("common");

  return (
    <div className="text-center">
      <h1 className="text-4xl font-bold text-gray-900 mb-4">{t("about")}</h1>
      <p className="text-xl text-gray-600">
        This is the about page with internationalization support.
      </p>

      <div className="relative">
        <input
          id="Name"
          className="peer block w-full h-14 appearance-none rounded-lg border-[1px] bg-transparent px-6 py-2.5 roboto-regular text-txt-100 focus:outline-none focus:ring-0 border-black-100 focus:border-primary-600 "
          placeholder=" "
          type="text"
        />
        <label
          htmlFor="Name"
          className="absolute top-1 left-4 z-0 origin-[0] -translate-y-4 scale-75 transform bg-white roboto-regular text-txt-40 duration-300 peer-placeholder-shown:top-1/2 text-black peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-1 peer-focus:-translate-y-4 peer-focus:scale-75 px-2 peer-focus:px-2 peer-focus:text-primary-600 "
        >
          Name <span className="text-rose-500">*</span>
        </label>
      </div>

      <Button>Click me</Button>
    </div>
  );
}
