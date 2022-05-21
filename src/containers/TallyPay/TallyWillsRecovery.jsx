import { useReducer } from 'react';
import {
    ConnectWalletButton,
    TPInput,
    TPPasswordInputs,
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

const TallyWillsRecovery = () => {
    //! the form data is not perfecty done, neither the reducer
    // todo: Complete the form data and reducer
    const [state, dispatch] = useReducer(reducer, {
        formData: {
            token: '',
            address: '',
            amount: '',
            amountUSD: '',
            password: '',
            confirmPassword: '',
            inheritorAddress: '',
            inheritorEmail: '',
            sendAmount: '',
            otherInheritors: [
                { id: nanoid(), percent: '0.00%' },
                { id: nanoid(), percent: '0.00%' },
                { id: nanoid(), percent: '0.00%' },
                { id: nanoid(), percent: '0.00%' },
            ],
        },
    });

    console.log(state.formData);

    return (
        <form
            className='container mx-auto max-w-xl pb-6'
            onSubmit={e => {
                e.preventDefault();
                console.log(state);
            }}
        >
            <div className='mt-4 w-full'>
                <p className='inline-flex items-center text-sm font-normal text-tallyPay-primaryText'>
                    Loss of wallet address
                </p>
                <TPInput
                    placeholder='Click here to paste lost wallet Address'
                    name='address'
                    dispatch={dispatch}
                />
            </div>

            <p className='my-4 text-white'>
                Require an Inheritor to connect wallet to validate wallet change
                <span className='ml-2 text-tallyPay-primaryText'>*</span>
            </p>

            <div className='mt-4 w-full'>
                <p className='inline-flex items-center text-sm font-normal text-tallyPay-primaryText'>
                    Replace lost wallet with new wallet address
                </p>
                <TPInput
                    placeholder='Click here to paste your new wallet Address replacement'
                    name='replaceAddress'
                    dispatch={dispatch}
                />
            </div>

            <div className='mt-4 w-full'>
                <input
                    type='password'
                    name='currentPassword'
                    id='currentPassword'
                    className='block w-full rounded-lg border border-tallyPay-gray-lighter bg-transparent p-2.5 text-sm text-white '
                    placeholder='Current password'
                    required
                />
            </div>

            <div className='mt-4 w-full'>
                <p className='inline-flex items-center text-sm font-normal text-tallyPay-primaryText'>
                    Replace lost wallet with new wallet address
                </p>
                <p className='mb-4 text-sm text-white'>
                    If you are using your replacement wallet for the first time
                    connect new wallet and enter a new password.
                </p>
                <TPPasswordInputs
                    password={state.formData.password}
                    confirmPassword={state.formData.confirmPassword}
                    dispatch={dispatch}
                />
            </div>

            <div className='mt-6 flex w-full flex-col items-center justify-center'>
                <ConnectWalletButton />
                <p className='text-white'>
                    <span>Gas Fee: </span>
                    <span className='text-tallyPay-primaryText'>0.0003</span>
                </p>
            </div>

            <div className='mt-4 text-center text-sm text-white'>
                <p className='text-tallyPay-primaryText'>New wallet is owner</p>
                <p>Connect new wallet in private and create a new password</p>
            </div>
        </form>
    );
};

export default TallyWillsRecovery;
