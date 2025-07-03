"use client";

import { RootState } from "@/store";
import { decrement, increment, reset } from "@/store/counterSlice";
import { useTranslations } from "next-intl";
import { useDispatch, useSelector } from "react-redux";

export default function Counter() {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch();
  const t = useTranslations("counter");

  return (
    <div className="bg-white border border-gray-200 rounded-xl shadow-sm p-6 max-w-md mx-auto mt-6">
      <h2 className="text-2xl font-semibold text-center text-blue-600 mb-4">
        {t("title")}
      </h2>

      <div className="text-center mb-6">
        <p className="text-lg text-gray-700">{t("value", { count })}</p>
      </div>

      <div className="flex justify-center gap-3 rtl:flex-row-reverse">
        <button
          onClick={() => dispatch(decrement())}
          className="bg-red-100 text-red-600 hover:bg-red-200 px-4 py-2 rounded-lg font-medium transition"
        >
          {t("decrement")}
        </button>

        <button
          onClick={() => dispatch(reset())}
          className="bg-gray-100 text-gray-700 hover:bg-gray-200 px-4 py-2 rounded-lg font-medium transition"
        >
          {t("reset")}
        </button>

        <button
          onClick={() => dispatch(increment())}
          className="bg-green-100 text-green-600 hover:bg-green-200 px-4 py-2 rounded-lg font-medium transition"
        >
          {t("increment")}
        </button>
      </div>
    </div>
  );
}
