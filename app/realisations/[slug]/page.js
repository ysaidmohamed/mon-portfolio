import styles from './page.module.css'
import { getGithubProjects } from '../../../lib/github'

export default async function ProjectDetail({ params }) {
  const { slug } = await params
    const projects = await getGithubProjects()
    const project = projects.find((repository) => repository.slug === slug)

  // Si le projet n'existe pas, afficher un message
  if (!project) {
      return (
          <div className="container">
              <h1>Projet non trouvé</h1>
              <p>Ce projet n&apos;existe pas ou a été supprimé.</p>
          </div>
      )
  }

  return (
    <div className={styles.container}>
          <div className={styles.header}>
              <h1 className={styles.title}>{project.title}</h1>
              <p className={styles.description}>{project.description}</p>
          </div>

          <div className={styles.content}>
              <div className={styles.repositoryPreview}>
                  <div className={styles.previewBar}>
                      <span></span>
                      <span></span>
                      <span></span>
                      <small>github / {project.slug}</small>
                  </div>
                  <div className={styles.previewBody}>
                      <p className={styles.previewLabel}>Repository actif</p>
                      <p className={styles.previewCommand}>$ git remote -v</p>
                      <p className={styles.previewUrl}>{project.github}</p>
                      <div className={styles.stats}>
                          <div>
                              <strong>{project.technologies[0] || 'Web'}</strong>
                              <span>technologie principale</span>
                          </div>
                      </div>
                  </div>
              </div>

              <div className={styles.details}>
                  <h2>Technologies utilisées</h2>
                  <div className={styles.technologies}>
                      {(project.technologies ?? []).map((tech, index) => (
                          <span key={index} className={styles.tech}>
                              {tech}
                          </span>
                      ))}
                  </div>

                  <div className={styles.links}>
                      <a href={project.github} target="_blank" rel="noopener noreferrer" className={styles.link}>
                          Voir le code →
                      </a>
                      {project.demo && (
                          <a href={project.demo} target="_blank" rel="noopener noreferrer" className={`${styles.link} ${styles.linkPrimary}`}>
                              Voir la démo →
                          </a>
                      )}
                  </div>
              </div>
          </div>
      </div>
  )
}