import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import clsx from "clsx";
import styles from "./index.module.css";

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />"
    >
      <div className={clsx("container", styles.mainContainer)}>
        <aside className={clsx("col", "col--3", styles.sidebar)}>
          <div>Sidebar</div>
        </aside>
        <main className={clsx("col", "col--9", styles.mainContent)}>
          <h1>Welcome to {siteConfig.title}</h1>
        </main>
      </div>
    </Layout>
  );
}
