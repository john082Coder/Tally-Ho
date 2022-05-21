import { useReducer } from 'react';
import {
    ConnectWalletButton,
    SelectTokenCombobox,
    TPChangeInheritorRadio,
    TPDoubleInput,
    TPEditableButton,
    TPInput,
    TPRadioGroup,
} from '../../components';
import { produce } from 'immer';
import { nanoid } from 'nanoid';

const reducer = (state, action) => {
    switch (action.type) {
        case 'updateFormData':
            return produce(state, draft => {
                draft.formData[action.field] = action.value;
            });
        case 'updateOtherInheritors':
            return produce(state, draft => {
                draft.formData.otherInheritors[action.index].percent =
                    action.value;
            });
        default:
            return state;
    }
};

const TallyWillsRemove = () => {
    //! the form data is not perfecty done, neither the reducer
    // todo: Complete the form data and reducer
    const [state, dispatch] = useReducer(reducer, {
        formData: {
            token: '',
            address: '',
            amount: '',
            amountUSD: '',
            inheritorAddress: '',
            inheritorEmail: '',
            sendAmount: '',
            wallets: [
                { name: 'Wallet 1', value: '30%' },
                { name: 'Wallet 2', value: '30%' },
                { name: 'Wallet 3', value: '30%' },
                { name: 'Wallet 4', value: '30%' },
            ],
            selectedWallet: { name: 'Wallet 1' },
            otherInheritors: [
                { id: nanoid(), percent: '0.00%' },
                { id: nanoid(), percent: '0.00%' },
                { id: nanoid(), percent: '0.00%' },
                { id: nanoid(), percent: '0.00%' },
            ],
            changeWallet: { name: 'Wallet 1' },
        },
    });

    console.log(state.formData);

    return (
        <form
            className='container mx-auto min-h-screen max-w-xl'
            onSubmit={e => {
                e.preventDefault();
                console.log(state);
            }}
        >
            <div className='w-full'>
                <SelectTokenCombobox />
            </div>

            <div className='mt-4 w-full'>
                <TPInput
                    label='Click here to paste Address'
                    name='address'
                    dispatch={dispatch}
                />
            </div>

            <div className='mt-6 w-full'>
                <TPDoubleInput
                    label='Amount'
                    name='amount'
                    rightIcon='BNB'
                    bottomLabel='Amount in USD'
                    bottomRightIcon='USD'
                    bottomName='amountUSD'
                    dispatch={dispatch}
                />
            </div>

            <div className='mt-6 w-full bg-[#282D32]/40 p-4'>
                <p className='text-center text-white'>Remove Inheritor</p>

                <TPRadioGroup
                    options={state.formData.wallets}
                    title='Remove Inheritor wallet Address'
                    label='Choose a wallet'
                    value={state.formData.selectedWallet}
                    onChange={value => {
                        dispatch({
                            type: 'updateFormData',
                            field: 'selectedWallet',
                            value,
                        });
                    }}
                />

                <div className='mt-6 w-full'>
                    <p className='mb-4 inline-flex items-center text-sm font-normal text-tallyPay-primaryText'>
                        Adjust % of other inheritors{' '}
                    </p>

                    <div className='flex items-center gap-6'>
                        {state.formData.otherInheritors?.map((item, index) => (
                            <TPEditableButton
                                showTitle={false}
                                item={item}
                                index={index}
                            />
                        ))}
                    </div>
                </div>
            </div>

            <div className='mt-6 w-full bg-[#282D32]/40 p-4'>
                <div>
                    <p className='text-center text-white'>Change Inheritor</p>
                    <TPChangeInheritorRadio
                        options={state.formData.wallets}
                        onChange={value => {
                            dispatch({
                                type: 'updateFormData',
                                field: 'changeWallet',
                                value,
                            });
                        }}
                        value={state.formData.changeWallet}
                    />
                </div>
                <div className='mt-4'>
                    <TPInput
                        label='Click here to paste new wallet Address Replacment'
                        name='walletAddressReplacement'
                        dispatch={dispatch}
                    />
                </div>
                <div className='mt-4'>
                    <TPInput
                        label='Click here to paste new Email Address Replacment (if required)'
                        name='walletEmailReplacement'
                        dispatch={dispatch}
                    />
                </div>
            </div>

            <div className='mt-6 grid w-full grid-cols-1 gap-y-4 md:grid-cols-2'>
                <div className='flex max-w-fit flex-col'>
                    <div className='flex items-center space-x-2 text-white'>
                        <span>Available :</span>
                        <span>Tally 0.348384</span>
                    </div>
                    <span className='self-end text-tallyPay-primaryText'>
                        0.2445 USD
                    </span>
                </div>

                <div className='flex items-start justify-end space-x-2 text-white'>
                    <span>Defi Account Balance : </span>
                    <span className='text-tallyPay-primaryText'>345.73USD</span>
                </div>

                <div className=' flex max-w-fit flex-col'>
                    <div className='flex items-center space-x-2 text-white'>
                        <span>Available :</span>
                        <span>BNB 0.348384</span>
                    </div>
                    <span className='self-end text-tallyPay-primaryText'>
                        0.2445 USD
                    </span>
                </div>
            </div>

            <div className='my-6 flex w-full flex-col items-center justify-center'>
                <ConnectWalletButton price='10,000 Tally' />
            </div>
        </form>
    );
};

export default TallyWillsRemove;
