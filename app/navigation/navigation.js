'use client'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import styles from './navigation.module.css'

export default function Navigation() {
  const pathname = usePathname()
  const isActive = (href) =>
    href === '/' ? pathname === '/' : pathname === href || pathname.startsWith(`${href}/`)

  const links = [
    { href: '/', label: 'Accueil' },
    { href: '/competences', label: 'Compétences' },
    { href: '/realisations', label: 'Réalisations' },
    { href: '/veille', label: 'Veille' },
    { href: '/certificats', label: 'Certificats' },
    { href: '/environnement', label: 'Environnement' },
    { href: '/cv', label: 'CV' },
    { href: 'mailto:younnesssaidmohamed@gmail.com', label: 'Contact' },
  ]

  return (
    <nav className={styles.nav}>
      <div className="container">
        <Link href="/" className={styles.logo}>
          Mon E-Portfolio
        </Link>

        <ul className={styles.menu}>
          {links.map(({ href, label }) => (
            <li key={href}>
              <Link
                href={href}
                className={isActive(href) ? `${styles.link} ${styles.active}` : styles.link}
                aria-current={isActive(href) ? 'page' : undefined}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}