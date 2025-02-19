'use client';

import * as React from 'react';

import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from '@/components/ui/dialog';

import { DeleteAccountForm } from './form';

const DeleteAccountDialog = ({ children }: { children: React.ReactNode }) => {
    const [open, setOpen] = React.useState(false);

    function closeDialog() {
        setOpen(false);
    }

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>{children}</DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Are you absolutely sure?</DialogTitle>
                    <DialogDescription>
                        Once your account is deleted, all of its resources and data will be permanently deleted. Please
                        enter your password to confirm you would like to permanently delete your account.
                    </DialogDescription>
                </DialogHeader>

                <DeleteAccountForm closeDialog={closeDialog} />
            </DialogContent>
        </Dialog>
    );
};

export { DeleteAccountDialog };
