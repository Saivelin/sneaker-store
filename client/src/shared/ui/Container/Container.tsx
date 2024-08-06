import { PropsWithChildren } from "react"
import styles from "./Container.module.scss"

const Container = (props: PropsWithChildren<any>) => {
    return <div {...props} className={`${styles.container} ${props?.className ? props?.className : ""}`}>{props.children}</div>
}

export default Container
