import styles from './page.module.css'
import {
  competenceResources,
  competencesCejm,
  competencesTechniques,
  formationCompetences,
  stageOneCompetences,
  stageTwoCompetences,
} from '../../lib/competences'

export const metadata = {
  title: 'Compétences | E-Portfolio',
  description: 'Présentation des compétences acquises pendant ma formation et mes stages.',
}

function ResourceLink({ resource }) {
  const isExternal = resource.href.startsWith('http')

  return (
    <a
      href={resource.href}
      target={isExternal ? '_blank' : undefined}
      rel={isExternal ? 'noopener noreferrer' : undefined}
      className={styles.resource}
    >
      {resource.label} <span aria-hidden="true">↗</span>
    </a>
  )
}

function CompetenceList({ sections }) {
  return (
    <div className={styles.competenceList}>
      {sections.map((section, index) => (
        <article className={styles.competence} key={`${section.title}-${index}`}>
          <div className={styles.competenceBody}>
            <h3>{section.title}</h3>
            {section.items && (
              <ul>
                {section.items.map((item) => <li key={item}>{item}</li>)}
              </ul>
            )}
            {section.content && <p>{section.content}</p>}
            {section.result && <p>{section.result}</p>}
            {section.resource && <ResourceLink resource={section.resource} />}
          </div>
        </article>
      ))}
    </div>
  )
}

export default function Competences() {
  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <p className={styles.eyebrow}>Parcours professionnel</p>
        <h1>Mes compétences</h1>
        <p className={styles.intro}>
          Compétences acquises au fil de ma formation, de mes stages et de mes projets.
        </p>
      </header>

      <nav className={styles.quickLinks} aria-label="Sections de la page">
        <a href="#formation">Lors de ma formation</a>
        <a href="#stage-premiere-annee">Stage de 1ère année</a>
        <a href="#stage-deuxieme-annee">Stage de 2ème année</a>
        <a href="#techniques">Compétences techniques</a>
        <a href="#cejm">Compétences CEJM</a>
      </nav>

      <main>
        <section className={styles.section} id="formation">
          <div className={styles.sectionHeading}>
            <p className={styles.eyebrow}>Formation</p>
            <h2>Lors de ma formation</h2>
          </div>
          <CompetenceList sections={formationCompetences} />
        </section>

        <section className={styles.section} id="stage-premiere-annee">
          <div className={styles.sectionHeading}>
            <p className={styles.eyebrow}>Expérience</p>
            <h2>Stage de 1ère année</h2>
            <p className={styles.period}>17 mai 2021 — 25 juin 2021</p>
          </div>
          <CompetenceList sections={stageOneCompetences} />
        </section>

        <section className={styles.section} id="stage-deuxieme-annee">
          <div className={styles.sectionHeading}>
            <p className={styles.eyebrow}>Expérience</p>
            <h2>Stage de 2ème année</h2>
            <p className={styles.period}>10 janvier 2022 — 18 février 2022</p>
          </div>
          <CompetenceList sections={stageTwoCompetences} />
        </section>

        <section className={styles.section} id="techniques">
          <div className={styles.sectionHeading}>
            <p className={styles.eyebrow}>Savoir-faire</p>
            <h2>Compétences techniques</h2>
          </div>
          <ul className={styles.techniques}>
            {competencesTechniques.map((competence) => (
              <li key={typeof competence === 'string' ? competence : competence.text}>
                {typeof competence === 'string' ? competence : competence.text}
                {typeof competence !== 'string' && competence.resource && (
                  <ResourceLink resource={competence.resource} />
                )}
              </li>
            ))}
          </ul>
        </section>

        <section className={styles.section} id="cejm">
          <div className={styles.sectionHeading}>
            <p className={styles.eyebrow}>CEJM</p>
            <h2>Compétences économiques, juridiques et managériales</h2>
          </div>
          <CompetenceList sections={competencesCejm} />
        </section>
      </main>

      <section className={styles.resources} aria-labelledby="resources-title">
        <div>
          <p className={styles.eyebrow}>Ressources</p>
          <h2 id="resources-title">Documents associés</h2>
        </div>
        <div className={styles.resourceList}>
          {competenceResources.map((resource) => <ResourceLink key={resource.href} resource={resource} />)}
        </div>
      </section>
    </div>
  )
}
