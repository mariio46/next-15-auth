'use client';

import * as React from 'react';
import { useFormStatus } from 'react-dom';

import { Loader } from 'lucide-react';

import { Button, type ButtonProps } from './ui/button';

const ServerActionSubmitButton = React.forwardRef<
    HTMLButtonElement,
    Omit<ButtonProps, 'children' | 'type'> & { text?: string }
>(({ disabled, text = 'Submit', ...props }, ref) => {
    const { pending, action, data, method } = useFormStatus();

    console.log({ action, data, method });

    return (
        <Button type='submit' disabled={disabled || pending} ref={ref} {...props}>
            {(disabled || pending) && <Loader className='animate-spin' />}
            {disabled || pending ? 'Processing...' : text}
        </Button>
    );
});

ServerActionSubmitButton.displayName = 'ServerActionSubmitButton';

export { ServerActionSubmitButton };
