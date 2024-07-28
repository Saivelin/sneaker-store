import { PropsWithChildren } from "react"

const Button = (props: PropsWithChildren) => {
    return <button {...props}>{props.children}</button>
}

export default Button
