import styles from "./page.module.css";
import Tags from "./technologies/page.js";
import Link from "next/link";

export default function Home() {
  return (
    <div className={`${styles.hero} homePage`}>
      <div className={styles.heroContent}>
        <h1 className={styles.heroTitle}>
          E-Portfolio de <span className={styles.highlight}>Younness Said Mohamed</span>
        </h1>
        <p className={styles.heroSubtitle}>
          Développeur Web Full-Stack
        </p>
        <p className={styles.heroDescription}>
          Vous trouverez sur mon portfolio mon CV et mes projets finis ou en cours d&apos;accomplissement.
        </p>
        <div className={styles.heroButtons}>
          <a href="/cv" className={`${styles.btn} ${styles.btnPrimary}`}>
            CV
          </a>
          <a href="/competences" className={`${styles.btn} ${styles.btnSecondary}`}>
            Compétences
          </a>
          <Link href="/realisations" className={`${styles.btn} ${styles.btnSecondary}`}>
            Réalisations
          </Link>
          <Link href="/veille" className={`${styles.btn} ${styles.btnSecondary}`}>
            Veille
          </Link>
          <Link href="/certificats" className={`${styles.btn} ${styles.btnSecondary}`}>
            Certificats
          </Link>
          <a href="/environnement" className={`${styles.btn} ${styles.btnSecondary}`}>
            Environnement technologique
          </a>
          <a href="mailto:younnesssaidmohamed@gmail.com" className={`${styles.btn} ${styles.btnSecondary}`}>
            Me contacter
          </a>
        </div>
        <div>
          <Tags technologies={["React", "Next.js", "JavaScript","Pack Office","Python","Symfony","HTML/CSS","SQL","Laravel","Linux","PHP","C++","C#","Angular"]} />
        </div>

        <section className={styles.education} aria-labelledby="education-title">
          <div className={styles.educationHeading}>
            <p className={styles.educationEyebrow}>Formation</p>
            <h2 id="education-title">Parcours scolaire</h2>
          </div>
          <div className={styles.educationList}>
            <article className={styles.educationItem}>
              <p className={styles.educationPeriod}>2019 — 2020</p>
              <div>
                <h3>Lycée Jean Renoir</h3>
                <p>Baccalauréat Scientifique.</p>
              </div>
            </article>
            <article className={styles.educationItem}>
              <p className={styles.educationPeriod}>Septembre 2020 — Juin 2021</p>
              <div>
                <h3>Lycée le Rebours</h3>
                <p>1ère année de BTS services informatiques aux organisations.</p>
              </div>
            </article>
            <article className={styles.educationItem}>
              <p className={styles.educationPeriod}>Septembre 2021 — Mai 2022</p>
              <div>
                <h3>Lycée le Rebours</h3>
                <p>2ème année de BTS services informatiques aux organisations.</p>
              </div>
            </article>
            <article className={styles.educationItem}>
              <p className={styles.educationPeriod}>Juillet 2022</p>
              <div>
                <h3>Lycée le Rebours</h3>
                <p>Obtention du BTS services informatiques aux organisations.</p>
              </div>
            </article>
            <article className={styles.educationItem}>
              <p className={styles.educationPeriod}>Septembre 2023 — Mai 2025</p>
              <div>
                <h3>Université Franche-Comté</h3>
                <p>Préparation d&apos;une licence informatique.</p>
              </div>
            </article>
            <article className={styles.educationItem}>
              <p className={styles.educationPeriod}>Juin 2025</p>
              <div>
                <h3>Université Franche-Comté</h3>
                <p>Obtention d&apos;une licence informatique.</p>
              </div>
            </article>
            <article className={`${styles.educationItem} ${styles.educationCurrent}`}>
              <p className={styles.educationPeriod}>Octobre 2025 — En cours</p>
              <div>
                <h3>Université Franche-Comté</h3>
                <p>Préparation d&apos;un master développement et validation logiciel.</p>
              </div>
            </article>
          </div>
        </section>
     </div>
    </div>
  )
}
