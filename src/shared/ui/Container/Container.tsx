import { PropsWithChildren } from "react"
import styles from "./Container.module.scss"

const Container = (props: PropsWithChildren) => {
    return <div {...props} className={styles.container}>{props.children}</div>
}

export default Container
