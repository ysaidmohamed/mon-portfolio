const defaultApiUrl = 'https://api.github.com/users/ysaidmohamed/repos?sort=updated&per_page=12'

function getApiUrl() {
  // L'URL peut être remplacée en local ou dans un autre environnement.
  return process.env.GITHUB_PROJECTS_API_URL || defaultApiUrl
}

function getHeaders() {
  const token = process.env.GITHUB_TOKEN

  // Le token est facultatif : les dépôts publics restent accessibles sans authentification.
  return {
    Accept: 'application/vnd.github+json',
    ...(token ? { Authorization: `Bearer ${token}` } : {}),
  }
}

function normalizeRepository(repository) {
  // GitHub expose les topics et le langage principal séparément ; on les regroupe
  // pour fournir une liste unique directement exploitable par les composants.
  const technologies = [
    ...(repository.topics ?? []),
    ...(repository.language ? [repository.language] : []),
  ]

  return {
    title: repository.name,
    slug: repository.name,
    description: repository.description || 'Projet GitHub sans description.',
    technologies: [...new Set(technologies)],
    github: repository.html_url,
    demo: repository.homepage || null,
    stars: repository.stargazers_count ?? 0,
    updatedAt: repository.updated_at,
  }
}

export async function getGithubProjects() {
  try {
    const response = await fetch(getApiUrl(), {
      headers: getHeaders(),
      // Les projets sont rafraîchis au maximum une fois par heure.
      next: { revalidate: 3600 },
    })

    if (!response.ok) {
      console.error(`GitHub API error: ${response.status}`)
      return []
    }

    const payload = await response.json()
    // L'API utilisateur renvoie un tableau, tandis que l'API de recherche renvoie { items }.
    const repositories = Array.isArray(payload) ? payload : payload.items

    if (!Array.isArray(repositories)) {
      console.error('GitHub API response is not a repository list')
      return []
    }

    return repositories.map(normalizeRepository)
  } catch (error) {
    // Une panne GitHub ne doit pas empêcher le reste du portfolio de s'afficher.
    console.error('Unable to load GitHub projects:', error)
    return []
  }
}
