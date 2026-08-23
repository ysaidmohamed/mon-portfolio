import Link from 'next/link'
import styles from './footer.module.css'

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.content}>
                <p>&copy; 2026 Mon E-Portfolio</p>
                <nav className={styles.links} aria-label="Réseaux sociaux">
                    <Link href="https://www.linkedin.com/in/younness-said-mohamed/" target="_blank" rel="noreferrer">
                        LinkedIn
                    </Link>
                    <Link href="https://github.com/ysaidmohamed" target="_blank" rel="noreferrer">
                        GitHub
                    </Link>
                </nav>
            </div>
        </footer>
    )
}