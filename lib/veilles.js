export const veilles = [
  {
    slug: 'symfony',
    title: 'Symfony',
    description: 'Une synthèse de l’actualité, des événements et des ressources autour de Symfony.',
    image: '/veille/veille1.png',
    technologies: ['Symfony', 'PHP'],
  },
]

export function getVeilleBySlug(slug) {
  return veilles.find((veille) => veille.slug === slug)
}
