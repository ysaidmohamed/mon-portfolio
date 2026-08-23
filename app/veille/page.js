import Link from 'next/link'
import Image from 'next/image'
import { veilles } from '../../lib/veilles'
import styles from './page.module.css'

export default async function Veille() {
  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <div className={styles.headingRow}>
          <h1>Mes veilles technologiques</h1>
          <span className={styles.projectCount}>{veilles.length} veilles</span>
        </div>
        <p className={styles.description}>
          Mes veilles technologiques.
        </p>
      </header>

      {veilles.length > 0 ? (
        <div className={styles.grid}>
          {veilles.map((veille, index) => (
          <Link
            key={veille.slug}
            href={`/veille/${veille.slug}`}
            className={`${styles.card} ${styles[`card${index + 1}`]}`}
          >
            <div className={styles.cardImage}>
              <Image
                src={veille.image}
                alt={`Récapitulatif de ${veille.title}`}
                fill
                sizes="(max-width: 600px) calc(100vw - 2.5rem), calc(100vw - 4rem)"
                className={styles.image}
              />
              <Image
                src={veille.image}
                alt=""
                fill
                aria-hidden="true"
                sizes="(max-width: 600px) calc(100vw - 2.5rem), calc(100vw - 4rem)"
                className={styles.blurredImage}
              />
            </div>
            <div className={styles.cardTopline}>
              <span className={styles.arrow} aria-hidden="true">↗</span>
            </div>
            <div className={styles.cardContent}>
              <h2>{veille.title}</h2>
              <p>{veille.description}</p>
            </div>
            <div className={styles.tags}>
              {veille.technologies.map((technology) => (
                <span key={technology}>{technology}</span>
              ))}
            </div>
          </Link>
          ))}
        </div>
      ) : (
        <p className={styles.emptyState}>
          Aucune veille n&apos;est disponible pour le moment.
        </p>
      )}
    </div>
  )
}