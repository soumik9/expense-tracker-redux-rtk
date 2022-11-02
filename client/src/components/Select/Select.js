import { Listbox, Transition } from '@headlessui/react';
import React, { Fragment } from 'react';
import { BsCheck } from 'react-icons/bs';
import { HiOutlineChevronUpDown } from 'react-icons/hi2';

const Select = ({ selected, setSelected, datas, label, divCss, id }) => {

    return (
        <div className={`relative w-full mb-3 ${divCss}`}>
            <label className="block text-blueGray-600 text-sm font-bold mb-3" htmlFor={id}>
                {label}
            </label>
            <Listbox value={selected} onChange={setSelected}>
                <div className="relative mt-1">
                    <Listbox.Button className="relative w-full cursor-default rounded-lg bg-white pl-3 pr-10 text-left shadow-sm focus:shadow focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm border border-gray-300 px-3 py-3">
                        <span className="block truncate">{selected.name}</span>
                        <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                            <HiOutlineChevronUpDown
                                className="h-5 w-5 text-gray-400 cursor-pointer"
                                aria-hidden={true}
                            />
                        </span>
                    </Listbox.Button>
                    <Transition
                        as={Fragment}
                        leave="transition ease-in duration-100"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <Listbox.Options className="absolute mt-1 max-h-[120px] scrollbar w-full overflow-y-scroll rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm ">
                            {datas.map((item, itemIdx) => (
                                <Listbox.Option
                                    key={itemIdx}
                                    className={({ active, selected }) => `relative cursor-default select-none py-2 pl-10 pr-4 text-black ${active && 'bg-[#34495e]/75 text-white'} ${selected && 'bg-[#34495e] text-white'}`}
                                    value={item}
                                >
                                    {({ selected }) => (
                                        <>
                                            <span className={`block truncate ${selected ? 'font-medium' : 'font-normal'}`}>
                                                {item.name}
                                            </span>
                                            {selected ? (
                                                <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                                                    <BsCheck
                                                        className="h-5 w-5 text-white"
                                                        aria-hidden={true}
                                                    />
                                                </span>
                                            ) : null}
                                        </>
                                    )}
                                </Listbox.Option>
                            ))}
                        </Listbox.Options>
                    </Transition>
                </div>
            </Listbox>
        </div>




    );
};

export default Select;