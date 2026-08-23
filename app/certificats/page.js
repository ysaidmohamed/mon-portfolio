import Link from 'next/link'
import { certificats } from '../../lib/certificats'
import styles from './page.module.css'

export default function Certificats() {
  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <div className={styles.headingRow}>
          <h1>Mes certificats</h1>
          <span className={styles.projectCount}>{certificats.length} certificats</span>
        </div>
        <p className={styles.description}>
          Retrouvez ici mes certifications et attestations.
        </p>
      </header>

      {certificats.length > 0 ? (
        <div className={styles.grid}>
          {certificats.map((certificat, index) => (
            <Link
              key={certificat.slug}
              href={`/certificats/${certificat.slug}`}
              className={`${styles.card} ${styles[`card${index + 1}`]}`}
            >
              <div className={styles.preview} aria-hidden="true">
                <iframe src={`${certificat.pdf}#toolbar=0&navpanes=0`} title="" tabIndex="-1" />
              </div>
              <div className={styles.cardTopline}>
                <span className={styles.arrow} aria-hidden="true">↗</span>
              </div>
              <div className={styles.cardContent}>
                <h2>{certificat.title}</h2>
                {certificat.description && <p>{certificat.description}</p>}
              </div>
            </Link>
          ))}
        </div>
      ) : (
        <p className={styles.emptyState}>Aucun certificat n&apos;est disponible pour le moment.</p>
      )}
    </div>
  )
}