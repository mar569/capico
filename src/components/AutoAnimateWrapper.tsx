import { useAutoAnimate } from '@formkit/auto-animate/react';
import type { ReactNode } from 'react';
interface AutoAnimateWrapperProps {
    children: ReactNode;
}
export const AutoAnimateWrapper = ({ children }: AutoAnimateWrapperProps) => {
    const [parent] = useAutoAnimate();
    return <div ref={parent}>{children}</div>;
};
