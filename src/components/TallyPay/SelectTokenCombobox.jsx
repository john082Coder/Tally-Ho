import { useEffect, useState } from 'react';
import { Combobox, Transition } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/solid';
import SearchBar from './SearchBar';
import RecentCoins from './RecentCoins';
import AllCoins from './AllCoins';

const tokens = [
    {
        id: 1,
        title: 'Vulture, white-headed',
        icon: 'https://robohash.org/etdelenitivoluptate.png?size=50x50&set=set1',
    },
    {
        id: 2,
        title: 'Red brocket',
        icon: 'https://robohash.org/numquamimpeditvoluptatem.png?size=50x50&set=set1',
    },
    {
        id: 3,
        title: 'Suricate',
        icon: 'https://robohash.org/quitemporibuset.png?size=50x50&set=set1',
    },
    {
        id: 4,
        title: 'Bear, polar',
        icon: 'https://robohash.org/sintullambeatae.png?size=50x50&set=set1',
    },
    {
        id: 5,
        title: 'Black-collared barbet',
        icon: 'https://robohash.org/velautvoluptas.png?size=50x50&set=set1',
    },
    {
        id: 6,
        title: 'Water legaan',
        icon: 'https://robohash.org/illomollitiaeligendi.png?size=50x50&set=set1',
    },
    {
        id: 7,
        title: 'Pacific gull',
        icon: 'https://robohash.org/ametvoluptatumin.png?size=50x50&set=set1',
    },
    {
        id: 8,
        title: "Wallaby, bennett's",
        icon: 'https://robohash.org/excepturiharumvoluptas.png?size=50x50&set=set1',
    },
    {
        id: 9,
        title: 'Purple moorhen',
        icon: 'https://robohash.org/accusamusdolorut.png?size=50x50&set=set1',
    },
    {
        id: 10,
        title: 'Red hartebeest',
        icon: 'https://robohash.org/utatquevoluptatem.png?size=50x50&set=set1',
    },
    {
        id: 11,
        title: 'Caiman, spectacled',
        icon: 'https://robohash.org/beataedolorconsequatur.png?size=50x50&set=set1',
    },
    {
        id: 12,
        title: "Francolin, swainson's",
        icon: 'https://robohash.org/nemovelitcupiditate.png?size=50x50&set=set1',
    },
    {
        id: 13,
        title: 'Yellow-billed stork',
        icon: 'https://robohash.org/ducimusmolestiaealiquid.png?size=50x50&set=set1',
    },
    {
        id: 14,
        title: 'Sockeye salmon',
        icon: 'https://robohash.org/etnemocumque.png?size=50x50&set=set1',
    },
    {
        id: 15,
        title: 'Eastern white pelican',
        icon: 'https://robohash.org/dolornihilaut.png?size=50x50&set=set1',
    },
];

const SelectTokenCombobox = () => {
    const [selected, setSelected] = useState(tokens[3]);
    const [items, setItems] = useState(tokens);
    const [searchString, setSearchString] = useState('');
    const changeHandler = token => {
        setSelected(token);
    };

    useEffect(() => {
        if (searchString.length > 0) {
            setItems(
                tokens.filter(token =>
                    token.title
                        .toLowerCase()
                        .includes(searchString.toLowerCase())
                )
            );
        } else {
            setItems(tokens);
        }
    }, [searchString]);

    return (
        <Combobox value={selected} onChange={changeHandler}>
            {({ open }) => (
                <>
                    <Combobox.Label className='mb-4 block text-sm font-normal text-tallyPay-primaryText'>
                        Select token to Deposit
                    </Combobox.Label>
                    <div className='relative mt-1'>
                        <Combobox.Button className='relative w-full cursor-default rounded-md border border-gray-500 bg-transparent py-4 pl-3 pr-10 text-left text-white shadow-sm sm:text-sm'>
                            <span className='flex items-center'>
                                <div className='polygonIcon bg-tallyPay-background absolute -left-5 overflow-hidden'>
                                    <img
                                        src={selected.icon}
                                        alt=''
                                        className='h-12 w-10 flex-shrink-0 object-cover'
                                    />
                                </div>
                                <span className='ml-5 block truncate'>
                                    {selected.title}
                                </span>
                            </span>
                            <span className='pointer-events-none absolute inset-y-0 right-0 ml-3 flex items-center pr-2'>
                                <ChevronDownIcon
                                    className='h-5 w-5 text-white'
                                    aria-hidden='true'
                                />
                            </span>
                        </Combobox.Button>

                        <Transition
                            show={open}
                            leave='transition ease-in duration-200'
                            leaveFrom='opacity-100 translate-y-0'
                            leaveTo='opacity-0 translate-y-1'
                            as='div'
                            className='flex flex-col'
                        >
                            <SearchBar setSearchString={setSearchString} />
                            <Combobox.Options
                                className='mt-1 max-h-96 w-full overflow-auto bg-gradient-to-b from-[#252525] to-[#4C4F44] p-4 text-base text-white shadow-lg focus:outline-none sm:text-sm'
                                as='div'
                            >
                                <RecentCoins tokens={items} />
                                <AllCoins tokens={items} />
                            </Combobox.Options>
                        </Transition>
                    </div>
                </>
            )}
        </Combobox>
    );
};

export default SelectTokenCombobox;
