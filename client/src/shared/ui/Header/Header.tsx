import { PropsWithChildren } from "react"
import styles from "./Header.module.scss"

const Header = (props : PropsWithChildren<any>) => {
    return <h1 {...props} className={styles.header}>{props.children}</h1>
}

export default Header