'use client';

import * as React from 'react';

import { useTheme } from 'next-themes';

import { Label } from '@/components/ui/label';
import { LucideReactIcon } from '@/components/ui/lucide-react-icon';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Skeleton } from '@/components/ui/skeleton';

const ThemeSelectionCard = () => {
    const [ready, setReady] = React.useState(false);

    const { theme, setTheme } = useTheme();

    React.useEffect(() => {
        setReady(true);
    }, []);

    if (!ready) {
        return (
            <div className='grid gap-2 sm:grid-cols-3'>
                <Skeleton className='h-[5.711rem] w-full' />
                <Skeleton className='h-[5.711rem] w-full' />
                <Skeleton className='h-[5.711rem] w-full' />
            </div>
        );
    }

    return (
        <RadioGroup className='gap-2 md:grid-cols-3' defaultValue={theme} onValueChange={(e) => setTheme(e)}>
            <div className='relative flex h-[6rem] w-full items-start gap-2 rounded-lg border border-input p-4 shadow-sm shadow-black/5 has-[[data-state=checked]]:border-ring has-[[data-state=checked]]:bg-accent'>
                <RadioGroupItem
                    value='light'
                    id='theme-light'
                    aria-describedby='theme-light-description'
                    className='order-1 after:absolute after:inset-0'
                />
                <div className='flex grow items-start gap-3'>
                    <LucideReactIcon name='SunMedium' className='size-5 shrink-0' />
                    <div className='grid grow gap-2'>
                        <Label htmlFor='theme-light'>Light</Label>
                        <p id='theme-light-description' className='text-xs text-muted-foreground'>
                            Change your app theme to be light.
                        </p>
                    </div>
                </div>
            </div>
            <div className='relative flex h-[6rem] w-full items-start gap-2 rounded-lg border border-input p-4 shadow-sm shadow-black/5 has-[[data-state=checked]]:border-ring has-[[data-state=checked]]:bg-accent'>
                <RadioGroupItem
                    value='dark'
                    id='theme-dark'
                    aria-describedby='theme-dark-description'
                    className='order-1 after:absolute after:inset-0'
                />
                <div className='flex grow items-start gap-3'>
                    <LucideReactIcon name='MoonStar' className='size-5 shrink-0' />
                    <div className='grid grow gap-2'>
                        <Label htmlFor='theme-dark'>Dark</Label>
                        <p id='theme-dark-description' className='text-xs text-muted-foreground'>
                            Change your app theme to be dark.
                        </p>
                    </div>
                </div>
            </div>
            <div className='relative flex h-[6rem] w-full items-start gap-2 rounded-lg border border-input p-4 shadow-sm shadow-black/5 has-[[data-state=checked]]:border-ring has-[[data-state=checked]]:bg-accent'>
                <RadioGroupItem
                    value='system'
                    id='theme-system'
                    aria-describedby='theme-system-description'
                    className='order-1 after:absolute after:inset-0'
                />
                <div className='flex grow items-start gap-3'>
                    <LucideReactIcon name='MonitorCog' className='size-5 shrink-0' />
                    <div className='grid grow gap-2'>
                        <Label htmlFor='theme-system'>System</Label>
                        <p id='theme-system-description' className='text-xs text-muted-foreground'>
                            Change your app theme to synchronize with your device.
                        </p>
                    </div>
                </div>
            </div>
        </RadioGroup>
    );
};

export { ThemeSelectionCard };
