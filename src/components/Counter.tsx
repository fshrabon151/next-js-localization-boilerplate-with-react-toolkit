"use client";
import { RootState } from "@/lib/store";
import { decrement, increment, reset } from "@/lib/store/counterSlice";
import { useTranslations } from "next-intl";
import { useDispatch, useSelector } from "react-redux";

export default function Counter() {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch();
  const t = useTranslations("counter");

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 max-w-md mx-auto">
      <h2 className="text-2xl font-bold text-center mb-4 text-gray-800 dark:text-white">
        {t("title")}
      </h2>

      <div className="text-center mb-6">
        <p className="text-lg text-gray-600 dark:text-gray-300">
          {t("value", { count })}
        </p>
      </div>

      <div className="flex justify-center space-x-4 rtl:space-x-reverse">
        <button
          onClick={() => dispatch(decrement())}
          className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md font-medium transition-colors"
        >
          {t("decrement")}
        </button>

        <button
          onClick={() => dispatch(reset())}
          className="bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded-md font-medium transition-colors"
        >
          {t("reset")}
        </button>

        <button
          onClick={() => dispatch(increment())}
          className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-md font-medium transition-colors"
        >
          {t("increment")}
        </button>
      </div>
    </div>
  );
}
