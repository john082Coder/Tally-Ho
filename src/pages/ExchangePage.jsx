import { useEffect, useState } from 'react';
import { Outlet, useNavigate, useParams } from 'react-router-dom';
import { ClaimCard, RadioGroupComp, SettingsModal } from '../components';
import { SliderBanner, SwapSection } from '../containers';

import exchangeGif from '../assets/images/gifs/Tally-ho_Exchange.gif';

const ExchangePage = () => {
    const types = [
        {
            name: 'Exchange',
            value: 'swap',
        },
    ];
    const navigate = useNavigate();
    const { coin } = useParams();

    const [type, setType] = useState(types[0].value);
    const [modalOpen, setModalOpen] = useState(false);

    const setTypeandNavigate = type => {
        setType(type);
        navigate('/swap');
    };

    const openSettingsModal = () => {
        setModalOpen(true);
    };

    useEffect(() => {
        if (!coin) {
            setType('swap');
        }
    }, [coin]);

    return (
        <main>
            <section className='flex min-h-screen flex-col items-center justify-center bg-primary-sidebar px-4 pt-40 pb-8'>
                <div className='flex w-full flex-col justify-center overflow-hidden xl:flex-row'>
                    <div className='flex flex-1 flex-col items-center'>
                        <img
                            src={exchangeGif}
                            alt='gif img'
                            className='mb-8 w-full max-w-lg flex-1'
                        />
                        <h1 className='mb-2 whitespace-nowrap text-center  text-3xl font-bold text-white md:text-[40px]'>
                            Swap BEP20 Tokens
                        </h1>

                        {/* {type === 'pool' && (
                            <div className='mb-4 flex flex-col text-center text-white'>
                                <h3 className=' text-base font-light'>
                                    Earn high yields from transaction fees.
                                </h3>
                                <a
                                    href='https://docs.tally.org/education-hub/how-to-earn-on-tally-farms#:~:text=for%20this%20guide.-,Provide%20Liquidity%2C%20Stake%20LP%20tokens%20%26%20Earn%20BSW,-As%20you%20noticed'
                                    target='_blank'
                                    rel='noopener noreferrer'
                                    className='font-semibold text-primary-brand transition-colors hover:text-primary-brand/80'
                                >
                                    Learn how to add liquidity
                                </a>
                            </div>
                        )} */}
                        <RadioGroupComp
                            type={type}
                            setType={setTypeandNavigate}
                            types={types}
                        />
                        <SwapSection openSettingsModal={openSettingsModal} />
                        {/* {type === 'pool' && !coin && (
                            <LiquiditySection
                                openSettingsModal={openSettingsModal}
                                setType={setType}
                            />
                        )} */}
                        <Outlet />
                    </div>

                    <div className='relative mt-8 flex items-center justify-center xl:mt-0 xl:items-end xl:justify-end'>
                        <ClaimCard />
                    </div>
                </div>
            </section>

            <SliderBanner />

            <SettingsModal open={modalOpen} setOpen={setModalOpen} />
        </main>
    );
};

export default ExchangePage;
