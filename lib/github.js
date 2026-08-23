const defaultApiUrl = 'https://api.github.com/users/ysaidmohamed/repos?sort=updated&per_page=12'

function getApiUrl() {
  return process.env.GITHUB_PROJECTS_API_URL || defaultApiUrl
}

function getHeaders() {
  const token = process.env.GITHUB_TOKEN

  return {
    Accept: 'application/vnd.github+json',
    ...(token ? { Authorization: `Bearer ${token}` } : {}),
  }
}

function normalizeRepository(repository) {
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
      next: { revalidate: 3600 },
    })

    if (!response.ok) {
      console.error(`GitHub API error: ${response.status}`)
      return []
    }

    const payload = await response.json()
    const repositories = Array.isArray(payload) ? payload : payload.items

    if (!Array.isArray(repositories)) {
      console.error('GitHub API response is not a repository list')
      return []
    }

    return repositories.map(normalizeRepository)
  } catch (error) {
    console.error('Unable to load GitHub projects:', error)
    return []
  }
}
