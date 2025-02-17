import * as React from 'react';

import { cn } from '@/lib/utils';
import * as LucideReact from 'lucide-react';

interface LucideReactIconProps extends Omit<LucideReact.LucideProps, 'name'> {
    name: keyof typeof LucideReact;
}

type LucideReactIconComp = React.FC<LucideReact.LucideProps>;

const LucideReactIcon = React.forwardRef<SVGSVGElement, LucideReactIconProps>(({ className, name, ...props }, ref) => {
    const Icon: LucideReactIconComp = LucideReact[name] as LucideReactIconComp;

    return <Icon ref={ref} className={cn('stroke-[1.8]', className)} {...props} />;
});

LucideReactIcon.displayName = 'LucideReactIcon';

export { LucideReactIcon };
