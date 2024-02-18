import { Fragment, useEffect, useState } from "react";
import { Combobox, Transition } from "@headlessui/react";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/20/solid";
import { useAppDispatch, useAppSelector } from "../hooks/redux";
import {
  setFromCurrency as dispatchSetFromCurrency,
  setToCurrency as dispatchSetToCurrency,
} from "../redux/features/currency/currencySlice";
import useDebounce from "../hooks/useDebounce";
import useGetPrice from "../hooks/useGetPrice";

type ComboboxInputProps = {
  currencies: string[];
  selected: string;
  setSelected: (currency: string) => void;
  label: string;
};
function ComboboxInput({
  selected,
  setSelected,
  currencies,
  label,
}: ComboboxInputProps) {
  const [query, setQuery] = useState("");
  const filteredCurrencies =
    query === ""
      ? currencies
      : currencies.filter((currency) =>
          currency
            .toLowerCase()
            .replace(/\s+/g, "")
            .includes(query.toLowerCase().replace(/\s+/g, ""))
        );

  return (
    <div className="w-72">
      <Combobox value={selected} onChange={setSelected}>
        <div className="relative mt-1">
          <Combobox.Label>{label}</Combobox.Label>
          <div className="relative w-full cursor-default overflow-hidden rounded-lg bg-white text-left shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75 focus-visible:ring-offset-2 focus-visible:ring-offset-teal-300 sm:text-sm">
            <Combobox.Input
              className="w-full border-none py-2 pl-3 pr-10 text-sm leading-5 text-gray-900 focus:ring-0"
              displayValue={(currency: string) => currency}
              onChange={(event) => setQuery(event.target.value)}
            />
            <Combobox.Button className="absolute inset-y-0 right-0 flex items-center pr-2">
              <ChevronUpDownIcon
                className="h-5 w-5 text-gray-400"
                aria-hidden="true"
              />
            </Combobox.Button>
          </div>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
            afterLeave={() => setQuery("")}
          >
            <Combobox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm">
              {filteredCurrencies.length === 0 && query !== "" ? (
                <div className="relative cursor-default select-none px-4 py-2 text-gray-700">
                  Nothing found.
                </div>
              ) : (
                filteredCurrencies.map((currency) => (
                  <Combobox.Option
                    key={currency}
                    className={({ active }) =>
                      `relative cursor-default select-none py-2 pl-10 pr-4 ${
                        active ? "bg-teal-600 text-white" : "text-gray-900"
                      }`
                    }
                    value={currency}
                  >
                    {({ selected, active }) => (
                      <>
                        <span
                          className={`block truncate ${
                            selected ? "font-medium" : "font-normal"
                          }`}
                        >
                          {currency}
                        </span>
                        {selected ? (
                          <span
                            className={`absolute inset-y-0 left-0 flex items-center pl-3 ${
                              active ? "text-white" : "text-teal-600"
                            }`}
                          >
                            <CheckIcon className="h-5 w-5" aria-hidden="true" />
                          </span>
                        ) : null}
                      </>
                    )}
                  </Combobox.Option>
                ))
              )}
            </Combobox.Options>
          </Transition>
        </div>
      </Combobox>
    </div>
  );
}
const Converter = () => {
  const { getPrice } = useGetPrice();
  const [price, setPrice] = useState<number | null>(null);
  const currencies = useAppSelector((state) => state.currency.currencies);
  const [fromCurrency, setFromCurrency] = useState<string>("USD");
  const [toCurrency, setToCurrency] = useState<string>("SEK");
  const [amount, setAmount] = useState<number>(1);
  const debouncedAmount = useDebounce(amount);
  const dispatch = useAppDispatch();

  const handleSelectFromCurrency = (currency: string) => {
    setFromCurrency(currency);
    dispatch(dispatchSetFromCurrency(currency));
  };

  const handleSelectToCurrency = (currency: string) => {
    setToCurrency(currency);
    dispatch(dispatchSetToCurrency(currency));
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log("form submitted");
  };

  const handleSwapCurrencies = () => {
    setFromCurrency(toCurrency);
    setToCurrency(fromCurrency);
  };

  const handleGetPrice = async () => {
    const price = await getPrice({
      amount,
      fromCurrency,
      toCurrency,
    });
    if (price) {
      console.log("price: ", price);
      setPrice(price);
    }
  };
  useEffect(() => {
    console.log("Inside useEffect to get Price");
    handleGetPrice();
  }, [fromCurrency, toCurrency, debouncedAmount]);

  if (!currencies) {
    return <div className="h-[50px]">Loading ...</div>;
  }
  return (
    <div className="h-[50px]">
      <div className="container mx-auto rounded-xl shadow-converter p-8 text-black bg-white relative top-[-200px] max-w-[900px]">
        <div className="">
          <form onSubmit={handleSubmit}>
            <div className="flex justify-between items-center gap-5">
              <div className="w-72">
                <label htmlFor="amount">Amount</label>
                <div className="relative w-full cursor-default overflow-hidden rounded-lg bg-white text-left shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75 focus-visible:ring-offset-2 focus-visible:ring-offset-teal-300 sm:text-sm">
                  <input
                    className="w-full border-none py-2 pl-3 pr-2 text-sm leading-5 text-gray-900 focus:ring-0"
                    id="amount"
                    type="number"
                    value={amount}
                    onChange={(e) => setAmount(Number(e.target.value))}
                  />
                </div>
              </div>

              <ComboboxInput
                label="From"
                currencies={Object.keys(currencies)}
                selected={fromCurrency}
                setSelected={handleSelectFromCurrency}
              />
              <button
                type="button"
                onClick={handleSwapCurrencies}
                className=" [aspect-ratio: 1/1]  self-end mb-2"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height={20}
                  viewBox="0 0 17 17"
                  aria-hidden="true"
                  className="miscellany___StyledIconSwap-sc-1r08bla-2 ikHqUN"
                >
                  <path
                    fill="blue"
                    fillRule="evenodd"
                    d="M11.726 1.273l2.387 2.394H.667V5h13.446l-2.386 2.393.94.94 4-4-4-4-.94.94zM.666 12.333l4 4 .94-.94L3.22 13h13.447v-1.333H3.22l2.386-2.394-.94-.94-4 4z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </button>
              <ComboboxInput
                label="To"
                currencies={Object.keys(currencies)}
                selected={toCurrency}
                setSelected={handleSelectToCurrency}
              />
            </div>
          </form>
          {price && currencies && (
            <div className="mt-8">
              <p>
                {amount} {fromCurrency} -{" "}
                <span className=" text-gray-500">
                  {currencies[fromCurrency]}
                </span>{" "}
                = {price.toFixed(2)} {toCurrency}{" "}
                <span className=" text-gray-500">{currencies[toCurrency]}</span>
              </p>
              {/* <p>
                1 {fromCurrency.name} = to be added {toCurrency.name}
              </p>
              <p>
                1 {toCurrency.name} = to be added {fromCurrency.name}
              </p> */}
            </div>
          )}
          <div className="flex justify-between mt-8">
            <div className="flex  items-center gap-3">
              <img src="" alt="info" className="d-block" />
              <p className="text-xs md:max-w-[400px]">
                We use the mid-market rate for our Converter. This is for
                informational purposes only. You won’t receive this rate when
                sending money. Login to view send rates
              </p>
            </div>
            <button
              onClick={handleGetPrice}
              className="bg-theme-btn-primary-bg-color text-white px-5 py-2 rounded-lg"
            >
              Convert
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Converter;
