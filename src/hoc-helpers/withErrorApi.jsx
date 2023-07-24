import { useState } from 'react';
import ErrorMessage from '../components/ErrorMessage';

export const withErrorApi = (View) => function (props) {
    const [errorApi, setErrorApi] = useState(false);
    return (
        <div>
            {errorApi
                ? <ErrorMessage />
                : (
                    <View
                        setErrorApi={setErrorApi}
                        {...props}
                    />
                )}
        </div>
    );
};
