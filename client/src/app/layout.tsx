import BaseLayout from '@/application/layouts/BaseLayout'
import "./global.scss"
import "./variables.scss"

const layout = ({ children }: { children: React.ReactNode }) => {
    return <BaseLayout>{children}</BaseLayout>
}

export default layout
