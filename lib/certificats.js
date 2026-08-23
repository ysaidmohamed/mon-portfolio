export const certificats = [
  {
    slug: 'ansii',
    title: 'Certification ANSII',
    pdf: '/certificats/ansii.pdf',
  },
  {
    slug: 'google-analytics-360',
    title: 'Google Analytics 360',
    pdf: '/certificats/googleanalytics-360.pdf',
  },
  {
    slug: 'google-analytics-a',
    title: 'Google Analytics Avancé',
    pdf: '/certificats/googleanalytics-a.pdf',
  },
  {
    slug: 'google-analytics-d',
    title: 'Google Analytics Débutant',
    pdf: '/certificats/googleanalytics-d.pdf',
  },
  {
    slug: 'pix',
    title: 'Certification Pix',
    pdf: '/certificats/pix.pdf',
  },
]

export function getCertificatBySlug(slug) {
  return certificats.find((certificat) => certificat.slug === slug)
}
