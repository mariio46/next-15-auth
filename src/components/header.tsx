import { cn } from '@/lib/utils';

const Header = ({ children, className, ...props }: React.HTMLAttributes<HTMLDivElement>) => {
    return (
        <div className={cn('flex w-full flex-col', className)} {...props}>
            {children}
        </div>
    );
};

const HeaderTitle = ({ children, className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => {
    return (
        <h1 className={cn('text-base font-bold text-foreground lg:text-lg', className)} {...props}>
            {children}
        </h1>
    );
};

const HeaderSubTitle = ({ children, className, ...props }: React.HTMLAttributes<HTMLParagraphElement>) => {
    return (
        <p className={cn('text-sm text-muted-foreground', className)} {...props}>
            {children}
        </p>
    );
};

export { Header, HeaderSubTitle, HeaderTitle };
