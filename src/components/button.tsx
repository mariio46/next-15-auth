'use client';

import * as React from 'react';
import { useFormStatus } from 'react-dom';

import { Button, type ButtonProps } from './ui/button';
import { LucideReactIcon } from './ui/lucide-react-icon';

const ServerActionSubmitButton = React.forwardRef<
    HTMLButtonElement,
    Omit<ButtonProps, 'children' | 'type'> & { text?: string }
>(({ disabled, text = 'Submit', ...props }, ref) => {
    const { pending } = useFormStatus();

    return (
        <Button type='submit' disabled={disabled || pending} ref={ref} {...props}>
            {(disabled || pending) && <LucideReactIcon name='Loader' className='animate-spin' />}
            {disabled || pending ? 'Processing...' : text}
        </Button>
    );
});

ServerActionSubmitButton.displayName = 'ServerActionSubmitButton';

const ClientActionSubmitButton = React.forwardRef<
    HTMLButtonElement,
    Omit<ButtonProps, 'children' | 'type'> & { text?: string; visibility: boolean }
>(({ disabled, visibility, text = 'Save', ...props }, ref) => {
    return (
        <Button type='submit' disabled={disabled} ref={ref} {...props}>
            {visibility && <LucideReactIcon name='Loader' className='animate-spin' />}
            {visibility ? 'Processing...' : text}
        </Button>
    );
});

ClientActionSubmitButton.displayName = 'ClientActionSubmitButton';

export { ClientActionSubmitButton, ServerActionSubmitButton };
