import styles from './page.module.css'
import { environnementSections } from '../../lib/environnement'

export const metadata = {
  title: 'Environnement technologique | E-Portfolio',
  description: 'Présentation de mon environnement technologique de 2020 à 2022.',
}

export default function Environnement() {
  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <p className={styles.eyebrow}>Compétences</p>
        <div className={styles.headingRow}>
          <h1>Environnement technologique</h1>
          <span className={styles.period}>2020 — 2022</span>
        </div>
        <p className={styles.description}>
          Les outils, services et environnements utilisés au cours de ma formation et de mes projets.
        </p>
      </header>

      <main className={styles.content}>
        {environnementSections.map((section, index) => (
          <article className={styles.section} key={`${section.title}-${index}`}>
            <span className={styles.layoutMarker} aria-hidden="true" />
            <div className={styles.sectionBody}>
              <h2>{section.title}</h2>
              <p>{section.content}</p>
              {section.resource && (
                <a
                  href={section.resource.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.resource}
                >
                  {section.resource.label} <span aria-hidden="true">↗</span>
                </a>
              )}
            </div>
          </article>
        ))}
      </main>
    </div>
  )
}
