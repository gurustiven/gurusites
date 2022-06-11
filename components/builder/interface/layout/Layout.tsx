import styles from './Layout.module.scss'
import { ReactNode } from "react";
import LayoutHeader from "./header/LayoutHeader";

interface LayoutProps {
  children: ReactNode;
  page: string;
}

export default function Layout({ children, page }: LayoutProps) {
  return (
    <div className={`${styles.layout} page--${page}`}>
      <LayoutHeader />
      {children}
    </div>
  )
}
