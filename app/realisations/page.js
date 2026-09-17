import Link from 'next/link'
import { getGithubProjects } from '../../lib/github'
import {
  realisationsCompetences,
  realisationsResources,
  realisationsStages,
} from '../../lib/realisations-content'
import styles from './page.module.css'

export default async function Realisations() {
  // Les projets sont chargés depuis GitHub afin que cette page reste synchronisée avec le profil.
  const projects = await getGithubProjects()

  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <div className={styles.headingRow}>
          <h1>Mes réalisations</h1>
          <span className={styles.projectCount}>{projects.length} projets</span>
        </div>
        <p className={styles.description}>
          Vous trouverez ici toutes mes réalisations.
        </p>
      </header>

      {projects.length > 0 ? (
        <div className={styles.grid}>
          {projects.map((project, index) => (
          <Link
            key={project.slug}
            href={`/realisations/${project.slug}`}
            className={`${styles.card} ${styles[`card${index + 1}`]}`}
          >
            <div className={styles.cardTopline}>
              <span className={styles.arrow} aria-hidden="true">↗</span>
            </div>
            <div className={styles.cardContent}>
              <h2>{project.title}</h2>
              <p>{project.description}</p>
            </div>
            <div className={styles.tags}>
              {project.technologies.map((technology) => (
                <span key={technology}>{technology}</span>
              ))}
            </div>
          </Link>
          ))}
        </div>
      ) : (
        <p className={styles.emptyState}>
          Aucun projet n&apos;est disponible pour le moment.
        </p>
      )}

      <section className={styles.portfolioContent}>
        <div className={styles.contentHeader}>
          <p className={styles.eyebrow}>Dossier professionnel</p>
          <h2>Parcours et compétences</h2>
          <p className={styles.contentDescription}>
            Retrouvez les réalisations, expériences et compétences mobilisées pendant ma formation.
          </p>
        </div>

        <div className={styles.resources}>
          {realisationsResources.map((resource) => (
            <a key={resource.href} href={resource.href} download className={styles.resource}>
              <span>{resource.type}</span>
              {resource.label}
              <span aria-hidden="true">↓</span>
            </a>
          ))}
        </div>

        <div className={styles.competences}>
          {realisationsCompetences.map((competence, index) => (
            <article className={styles.competence} key={competence.title}>
              <span className={styles.layoutMarker} aria-hidden="true" />
              <div>
                <h3>{competence.title}</h3>
                <ul>
                  {competence.items.map((item) => <li key={item}>{item}</li>)}
                </ul>
                <p className={styles.result}>{competence.result}</p>
                {competence.resource && (
                  <a href={competence.resource.href} target="_blank" rel="noopener noreferrer" className={styles.inlineResource}>
                    {competence.resource.label} ↗
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>

        <div className={styles.stages}>
          <div className={styles.subheading}>
            <p className={styles.eyebrow}>Expériences</p>
            <h2>Stages</h2>
          </div>
          {realisationsStages.map((stage) => (
            <article className={styles.stage} key={stage.title}>
              <p className={styles.stagePeriod}>{stage.period}</p>
              <h3>{stage.title}</h3>
              <p>{stage.description}</p>
            </article>
          ))}
        </div>
      </section>
    </div>
  )
}