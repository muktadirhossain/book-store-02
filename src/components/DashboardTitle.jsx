import { cn } from '../utils/cn'

const DashboardTitle = ({ children, className = '', ...rest }) => {
    return (
        <h2 className={cn('text-center text-3xl font-semibold my-1', className)}
            {...rest}
        > {children}</h2>
    )
}

export default DashboardTitle