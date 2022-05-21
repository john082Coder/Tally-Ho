import { ArrowSmRightIcon } from '@heroicons/react/solid';
import { Link } from 'react-router-dom';
import { FarmItem, PoolItem } from '../../components';
import bnbImg from '../../assets/images/tokens/bnb.svg';
import busdImg from '../../assets/images/tokens/busd.svg';
const FarmSection = () => {
    return (
        <section className=' mx-3 flex max-w-6xl flex-col justify-between gap-8 bg-primary-background py-16 md:flex-col xl:mx-auto xl:w-4/5 xl:flex-row '>
            <div className='flex-1 '>
                <div className='mb-6 flex w-full items-center justify-between'>
                    <h2 className='font-comfortaa text-xl font-semibold leading-6 text-primary-darkText md:text-2xl'>
                        Earn TALLY + Fees in Farms
                    </h2>

                    <Link
                        to='/farms'
                        className='flex h-8 w-8 cursor-pointer items-center justify-center rounded-lg bg-primary-brand text-white'
                    >
                        <ArrowSmRightIcon className='h-6 w-6' />
                    </Link>
                </div>

                <div className='mt-4 overflow-hidden rounded-2xl bg-white shadow-2xl'>
                    <FarmItem tokenName={'usdt'} apy={0} />
                    <FarmItem tokenName='bnb' apy={1} tokenImg={bnbImg} />
                    <FarmItem tokenImg={busdImg} tokenName='busd' apy={0} />
                </div>
            </div>

            <div className='flex-1'>
                <div className='mb-6 flex w-full items-center justify-between'>
                    <h2 className='font-comfortaa text-2xl font-semibold leading-6 text-primary-darkText'>
                        Pools
                    </h2>

                    <Link
                        to='/pools'
                        className='flex h-8 w-8 cursor-pointer items-center justify-center rounded-lg bg-primary-brand text-white'
                    >
                        <ArrowSmRightIcon className='h-6 w-6' />
                    </Link>
                </div>

                <div className='mt-4 space-y-4'>
                    <PoolItem
                        tokenName={'usdt'}
                        apy={0}
                        title='Earn Tally'
                        subtitle={'Stake Tally'}
                    />
                    <PoolItem
                        tokenName='bnb'
                        apy={1}
                        tokenImg={bnbImg}
                        title='Auto Compound'
                        subtitle={'Stake TALLY - Earn TALLY'}
                    />
                </div>
            </div>
        </section>
    );
};

export default FarmSection;
