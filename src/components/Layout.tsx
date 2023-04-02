import styles from "./Layout.module.css";
import { ReactNode } from "react";

interface layOutProps {
  children?: ReactNode;
}

const Layout: React.FC<layOutProps> = ({ children }) => (
  <div className={styles.layout}>{children}</div>
);

export default Layout;
