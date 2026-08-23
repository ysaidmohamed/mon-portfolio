import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { getVeilleBySlug, veilles } from '../../../lib/veilles'
import styles from './page.module.css'

export function generateStaticParams() {
  return veilles.map((veille) => ({ slug: veille.slug }))
}

export default async function VeilleDetail({ params }) {
  const { slug } = await params
  const veille = getVeilleBySlug(slug)

  if (!veille) {
    notFound()
  }

  return (
    <div className={styles.page}>
      <Link href="/veille" className={styles.backLink}>
        ← Toutes les veilles
      </Link>

      <header className={styles.header}>
        <p className={styles.eyebrow}>Veille technologique</p>
        <h1>{veille.title}</h1>
        {veille.description && <p className={styles.description}>{veille.description}</p>}
      </header>

      <div className={styles.recap}>
        <Image
          src={veille.image}
          alt={`Récapitulatif de la veille ${veille.title}`}
          width={1920}
          height={620}
          sizes="(max-width: 600px) calc(100vw - 2.5rem), calc(100vw - 4rem)"
          priority
        />
      </div>

      {veille.technologies?.length > 0 && (
        <section className={styles.infos}>
          <h2>Informations</h2>
          <div className={styles.tags}>
            {veille.technologies.map((technology) => (
              <span key={technology}>{technology}</span>
            ))}
          </div>
        </section>
      )}
    </div>
  )
}
