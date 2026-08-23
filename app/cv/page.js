import { cv } from '../../lib/cv'
import styles from './page.module.css'

export const metadata = {
  title: 'CV | E-Portfolio',
  description: 'Consultez le curriculum vitae de Younness Said Mohamed.',
}

export default function CvPage() {
  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <p className={styles.eyebrow}>Profil professionnel</p>
        <div className={styles.headingRow}>
          <h1>{cv.title}</h1>
          <a href={cv.pdf} download className={styles.download}>
            Télécharger le CV <span aria-hidden="true">↓</span>
          </a>
        </div>
        {cv.description && <p className={styles.description}>{cv.description}</p>}
      </header>

      <main className={styles.document}>
        <iframe src={cv.pdf} title={cv.title} />
      </main>

      {cv.infos?.length > 0 && (
        <section className={styles.infos}>
          <h2>Informations complémentaires</h2>
          {cv.infos.map((info) => <p key={info}>{info}</p>)}
        </section>
      )}
    </div>
  )
}
