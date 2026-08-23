import Link from 'next/link'
import { notFound } from 'next/navigation'
import { certificats, getCertificatBySlug } from '../../../lib/certificats'
import styles from './page.module.css'

export function generateStaticParams() {
  return certificats.map((certificat) => ({ slug: certificat.slug }))
}

export default async function CertificatDetail({ params }) {
  const { slug } = await params
  const certificat = getCertificatBySlug(slug)

  if (!certificat) {
    notFound()
  }

  return (
    <div className={styles.page}>
      <Link href="/certificats" className={styles.backLink}>
        ← Tous les certificats
      </Link>

      <header className={styles.header}>
        <p className={styles.eyebrow}>Certification</p>
        <h1>{certificat.title}</h1>
        {certificat.description && <p className={styles.description}>{certificat.description}</p>}
      </header>

      <div className={styles.document}>
        <iframe src={certificat.pdf} title={certificat.title} />
      </div>

      {certificat.infos?.length > 0 && (
        <section className={styles.infos}>
          <h2>Informations</h2>
          {certificat.infos.map((info) => <p key={info}>{info}</p>)}
        </section>
      )}
    </div>
  )
}
