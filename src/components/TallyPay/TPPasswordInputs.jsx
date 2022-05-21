const TPPasswordInputs = ({ password, confirmPassword, dispatch }) => {
    const passwordChangeHandler = e => {
        dispatch({
            type: 'updateFormData',
            field: e.target.name,
            value: e.target.value,
        });
    };

    return (
        <>
            <div className='mb-6'>
                <input
                    type='password'
                    name='password'
                    id='password'
                    className='block w-full rounded-lg border border-tallyPay-gray-lighter bg-transparent p-2.5 text-sm text-white '
                    placeholder='Create password'
                    required
                    value={password}
                    onChange={passwordChangeHandler}
                />
            </div>
            <div className='mb-6'>
                <input
                    type='password'
                    id='confirmPassword'
                    name='confirmPassword'
                    className='block w-full rounded-lg border border-tallyPay-gray-lighter bg-transparent p-2.5 text-sm text-white '
                    placeholder='Re-Enter password'
                    required
                    value={confirmPassword}
                    onChange={passwordChangeHandler}
                />
            </div>
        </>
    );
};

export default TPPasswordInputs;
