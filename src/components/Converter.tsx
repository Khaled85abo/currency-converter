import { Fragment, useEffect, useState } from "react";
import { Combobox, Transition } from "@headlessui/react";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/20/solid";
import { useAppDispatch } from "../hooks/redux";
import { setCurrency } from "../redux/features/currency/currencySlice";

type Currency = {
  id: number;
  name: string;
  value: string;
};
const currencies: Currency[] = [
  { id: 1, name: "USD", value: "usd" },
  { id: 2, name: "SEK", value: "sek" },
  { id: 3, name: "EUR", value: "eur" },
  { id: 4, name: "DNK", value: "dnk" },
  { id: 5, name: "NRK", value: "nrk" },
];

type ComboboxInputProps = {
  currencies: Currency[];
  selected: Currency;
  setSelected: React.Dispatch<React.SetStateAction<Currency>>;
};
function ComboboxInput({
  selected,
  setSelected,
  currencies,
}: ComboboxInputProps) {
  const [query, setQuery] = useState("");
  const filteredPeople =
    query === ""
      ? currencies
      : currencies.filter((currency) =>
          currency.name
            .toLowerCase()
            .replace(/\s+/g, "")
            .includes(query.toLowerCase().replace(/\s+/g, ""))
        );

  return (
    <div className="w-72">
      <Combobox value={selected} onChange={setSelected}>
        <div className="relative mt-1">
          <div className="relative w-full cursor-default overflow-hidden rounded-lg bg-white text-left shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75 focus-visible:ring-offset-2 focus-visible:ring-offset-teal-300 sm:text-sm">
            <Combobox.Input
              className="w-full border-none py-2 pl-3 pr-10 text-sm leading-5 text-gray-900 focus:ring-0"
              displayValue={(currency: Currency) => currency.name}
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
              {filteredPeople.length === 0 && query !== "" ? (
                <div className="relative cursor-default select-none px-4 py-2 text-gray-700">
                  Nothing found.
                </div>
              ) : (
                filteredPeople.map((person) => (
                  <Combobox.Option
                    key={person.id}
                    className={({ active }) =>
                      `relative cursor-default select-none py-2 pl-10 pr-4 ${
                        active ? "bg-teal-600 text-white" : "text-gray-900"
                      }`
                    }
                    value={person}
                  >
                    {({ selected, active }) => (
                      <>
                        <span
                          className={`block truncate ${
                            selected ? "font-medium" : "font-normal"
                          }`}
                        >
                          {person.name}
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
  const [fromCurrency, setFromCurrency] = useState<Currency>(currencies[0]);
  const [toCurrency, setToCurrency] = useState<Currency>(currencies[1]);
  const dispatch = useAppDispatch();

  const handleSelectFromCurrency = (currency: Currency) => {
    setFromCurrency(currency);
    dispatch(setCurrency(currency.name));
  };

  useEffect(() => {
    console.log("From currency: ", fromCurrency);
    console.log("To currency: ", toCurrency);
  }, [fromCurrency, toCurrency]);

  return (
    <div className="border-4 mx-18 p-8 text-black bg-white">
      <div className="flex justify-between items-center gap-3">
        <input type="number" />
        <ComboboxInput
          currencies={currencies}
          selected={fromCurrency}
          setSelected={handleSelectFromCurrency}
        />
        <button className="bg-white rounded-full [aspect-ratio: 1/1]">
          Reverse
        </button>
        <ComboboxInput
          currencies={currencies}
          selected={toCurrency}
          setSelected={setToCurrency}
        />
      </div>
      <div className="flex justify-between mt-8">
        <div className="flex  items-center gap-3">
          <img src="" alt="info" className="d-block" />
          <p className="text-xs md:max-w-[400px]">
            We use the mid-market rate for our Converter. This is for
            informational purposes only. You won’t receive this rate when
            sending money. Login to view send rates
          </p>
        </div>
        <button>Convert</button>
      </div>
    </div>
  );
};

export default Converter;
