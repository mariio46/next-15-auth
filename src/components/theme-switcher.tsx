'use client';

import { useTheme } from 'next-themes';

import { Button, type ButtonProps } from './ui/button';
import { LucideReactIcon } from './ui/lucide-react-icon';

interface ThemeSwitcherProps {
    tabIndex?: number;
    variant?: ButtonProps['variant'];
}

const ThemeSwitcher = ({ tabIndex, variant = 'outline' }: ThemeSwitcherProps) => {
    const { theme, setTheme } = useTheme();

    return (
        <Button
            variant={variant}
            className='h-7 w-7'
            size='icon'
            type='button'
            tabIndex={tabIndex}
            aria-label={'Switch to ' + theme === 'light' ? 'dark' : 'light' + 'mode'}
            onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
            <span className='sr-only'>Theme Swticher</span>
            <LucideReactIcon name='Sun' className='rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0' />
            <LucideReactIcon
                name='Moon'
                className='absolute rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100'
            />
        </Button>
    );
};

export { ThemeSwitcher };
