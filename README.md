# Mon E-Portfolio

Portfolio professionnel de **Younness Said Mohamed**, développeur web full-stack.

Le site présente mon parcours scolaire, mes compétences, mes réalisations, mes certificats, mon environnement technologique et ma veille informatique.

## Fonctionnalités

- Présentation personnelle
- Parcours scolaire
- Compétences techniques et professionnelles
- Liste des projets GitHub
- Pages détaillées pour chaque réalisation
- Présentation des certificats
- CV téléchargeable
- Environnement technologique
- Veille informatique
- Liens vers LinkedIn et GitHub
- Design responsive pour ordinateur, tablette et mobile

## Technologies utilisées

- Next.js 16
- React 19
- JavaScript
- TypeScript
- CSS Modules
- Tailwind CSS
- API GitHub
- ESLint

## Structure du projet

```text
app/
├── certificats/
├── competences/
├── cv/
├── environnement/
├── footer/
├── navigation/
├── realisations/
├── technologies/
├── veille/
├── globals.css
├── layout.tsx
└── page.tsx

lib/
├── certificats.js
├── competences.js
├── cv.js
├── environnement.js
├── github.js
├── realisations-content.js
└── veilles.js

public/
├── certificats/
├── competences/
├── cv/
├── environnement/
├── realisations/
└── veille/
```

## Installation

### Prérequis

- Node.js 20 ou une version plus récente
- npm
- Git

### Cloner le projet

```bash
git clone https://github.com/ysaidmohamed/mon-portfolio.git
cd mon-portfolio
```

### Installer les dépendances

```bash
npm install
```

Sous Windows PowerShell, si `npm` est bloqué par la politique d'exécution :

```bash
npm.cmd install
```

## Variables d'environnement

Copier le fichier `.env.example` vers `.env.local`.

Sous Windows PowerShell :

```powershell
Copy-Item .env.example .env.local
```

Renseigner ensuite l'URL de l'API GitHub :

```env
GITHUB_PROJECTS_API_URL=https://api.github.com/users/ysaidmohamed/repos?sort=updated&per_page=12
```

Un token GitHub peut être ajouté pour augmenter la limite d'appels à l'API :

```env
GITHUB_TOKEN=mon_token_github
```

Ne publiez jamais ce token dans le dépôt GitHub.

## Lancer le projet en développement

```bash
npm run dev
```

Sous Windows PowerShell si nécessaire :

```bash
npm.cmd run dev
```

Ouvrir ensuite [http://localhost:3000](http://localhost:3000).

## Scripts disponibles

| Commande | Description |
| --- | --- |
| `npm run dev` | Lance le serveur de développement |
| `npm run build` | Génère la version de production |
| `npm run start` | Lance la version de production |
| `npm run lint` | Vérifie le code avec ESLint |

## Pages disponibles

| Page | URL |
| --- | --- |
| Accueil | `/` |
| Compétences | `/competences` |
| Réalisations | `/realisations` |
| Veille | `/veille` |
| Certificats | `/certificats` |
| Environnement technologique | `/environnement` |
| CV | `/cv` |

Les réalisations GitHub sont accessibles avec une URL de la forme :

```text
/realisations/nom-du-repository
```

## Données GitHub

Les projets affichés dans `/realisations` sont récupérés depuis l'API GitHub.

Les informations utilisées comprennent :

- Le nom du projet
- Sa description
- Le langage principal
- Les topics GitHub
- Le nombre d'étoiles
- Le lien vers le dépôt
- Le lien éventuel vers une démonstration

Les données sont mises en cache pendant une heure afin de limiter les appels à l'API.

## Ressources volumineuses

Les archives ZIP volumineuses des projets ne sont pas incluses dans GitHub en raison des limites de taille imposées par la plateforme.

Elles restent disponibles localement et sont ignorées grâce à la règle suivante :

```gitignore
/public/realisations/*.zip
```

## Déploiement avec Vercel

1. Importer le dépôt GitHub dans Vercel.
2. Sélectionner le framework `Next.js`.
3. Ajouter `GITHUB_PROJECTS_API_URL` dans les variables d'environnement.
4. Ajouter `GITHUB_TOKEN` si nécessaire.
5. Lancer le déploiement.

Vercel détecte automatiquement les commandes Next.js du projet.

## Améliorations possibles

- Ajouter un formulaire de contact
- Ajouter des tests automatisés
- Ajouter un mode sombre
- Ajouter des animations de transition
- Ajouter des images d'aperçu pour les projets
- Ajouter une pagination des projets GitHub
- Mettre en place GitHub Actions pour automatiser le lint et le build

## Contact

**Younness Said Mohamed**

- LinkedIn : [ysaidmohamed](https://www.linkedin.com/in/ysaidmohamed/)
- GitHub : [ysaidmohamed](https://github.com/ysaidmohamed)
- Email : younesssaidmohamed@gmail.com
