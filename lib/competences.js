export const competenceResources = [
  { label: 'Tableau de synthèse', href: '/realisations/tableau-synthese.pdf', type: 'PDF' },
  { label: 'Environnement technologique', href: '/competences/environnement-technologique.pdf', type: 'PDF' },
  { label: 'Documentation OVH', href: '/competences/documentation-ovh.pdf', type: 'PDF' },
  { label: 'Diagramme de Gantt Symfony', href: '/competences/gantt-symfony.pdf', type: 'PDF' },
]

export const formationCompetences = [
  {
    title: 'Gérer des ressources numériques',
    content: 'Création d’un site de gestion de formation avec solution de sauvegarde interne et externe (OVH).',
  },
  {
    title: 'Gérer la présence en ligne d’une organisation',
    content: 'Site internet du restaurant Uso Baba pour présenter ses produits et mettre en avant ses nouveautés. Utilisation du plugin de référencement Yoast SEO.',
  },
  {
    title: 'Travailler sur des projets',
    content: 'Utilisation de diagrammes de Gantt pour planifier les activités et gérer le temps. Compte-rendu hebdomadaire par mail.',
  },
  {
    title: 'Répondre aux incidents de l’organisation',
    content: 'Documentation permettant au propriétaire d’utiliser l’hébergeur OVH et les bases de données.',
    resource: { label: 'Consulter la documentation OVH', href: '/competences/documentation-ovh.pdf' },
  },
  {
    title: 'Services informatiques toujours à disposition d’une organisation',
    content: 'Navigation intuitive et site responsive.',
  },
  {
    title: 'Protéger les données à caractère personnel',
    content: 'Mots de passe hashés. Les utilisateurs ne peuvent pas accéder aux fichiers du site, même depuis la barre d’URL. Une politique de confidentialité et un choix d’autorisation des cookies sont disponibles sur le site Uso Baba.',
    resource: { label: 'Consulter la politique de confidentialité', href: 'https://www.restaurantusobaba.fr/politique-de-confidentialite/' },
  },
  {
    title: 'Préserver l’identité numérique de l’organisation',
    content: 'URL unique en .fr et certificat SSL prouvant l’identité du site.',
    resource: { label: 'Visiter restaurantusobaba.fr', href: 'https://www.restaurantusobaba.fr/' },
  },
]

export const stageOneCompetences = [
  { title: 'Gérer des ressources numériques', content: 'Création d’un site internet pour le restaurant Uso Baba avec solution de sauvegarde interne et externe (UpdraftPlus et OVH).', resource: { label: 'Visiter restaurantusobaba.fr', href: 'https://www.restaurantusobaba.fr/' } },
  { title: 'Gérer la présence en ligne d’une organisation', content: 'Le site internet du restaurant Uso Baba présente ses produits et met en avant ses nouveautés. Utilisation du plugin de référencement Yoast SEO.', resource: { label: 'Visiter restaurantusobaba.fr', href: 'https://www.restaurantusobaba.fr/' } },
  { title: 'Travailler sur des projets', content: 'Utilisation de diagrammes de Gantt pour planifier les activités et gérer le temps. Compte-rendu hebdomadaire par mail.' },
  { title: 'Répondre aux incidents de l’organisation', content: 'Documentation permettant au propriétaire d’utiliser l’hébergeur OVH et les bases de données.', resource: { label: 'Consulter la documentation OVH', href: '/competences/documentation-ovh.pdf' } },
  { title: 'Services informatiques toujours à disposition d’une organisation', content: 'Navigation intuitive et site responsive.' },
  { title: 'Protéger les données à caractère personnel', content: 'Article sur la politique de confidentialité disponible sur le site du restaurant Uso Baba. L’utilisateur possède le choix d’autorisation des cookies.', resource: { label: 'Voir la politique de confidentialité', href: 'https://www.restaurantusobaba.fr/politique-de-confidentialite/' } },
  { title: 'Préserver l’identité numérique de l’organisation', content: 'URL unique en .fr et certificat SSL prouvant l’identité du site.', resource: { label: 'Visiter restaurantusobaba.fr', href: 'https://www.restaurantusobaba.fr/' } },
]

export const stageTwoCompetences = [
  { title: 'Gérer des ressources numériques', content: 'Création d’une application web en Symfony pour la Maison diocésaine de Paris permettant la composition d’un livret de lectures et de prières sauvegardé sur le serveur cloud OVH. Les fichiers sont aussi sauvegardés sur OneDrive.', resource: { label: 'Voir la sauvegarde OneDrive', href: '/competences/sauvegarde-onedrive.png' } },
  { title: 'Gérer la présence en ligne d’une organisation', content: 'L’utilisateur peut demander l’envoi d’un lien par e-mail pour sauvegarder sa progression dans la composition de son livret. URL courte et site sécurisé par certificat SSL.', resource: { label: 'Voir l’envoi du lien par e-mail', href: '/competences/lien-email.png' } },
  { title: 'Travailler sur des projets', content: 'Utilisation d’un diagramme de Gantt pour planifier les activités et gérer le temps. Compte-rendu hebdomadaire par mail.', resource: { label: 'Voir le diagramme de Gantt', href: '/competences/gantt-symfony.pdf' } },
  { title: 'Répondre aux incidents de l’organisation', content: 'Le fichier ovhconfig permet de passer du mode développement au mode production. Le mode développement permet notamment de gérer les erreurs du serveur grâce à l’interface Symfony.', resource: { label: 'Voir la configuration OVH', href: '/competences/ovhconfig.png' } },
  { title: 'Services informatiques toujours à disposition d’une organisation', content: 'Navigation intuitive et captcha fonctionnel.', resource: { label: 'Voir le captcha', href: '/competences/captcha.png' } },
  { title: 'Protéger les données à caractère personnel', content: 'Système de captcha empêchant le spam lors de l’envoi d’e-mails.' },
  { title: 'Préserver l’identité numérique de l’organisation', content: 'Certificat SSL prouvant l’identité du site. Application rattachée au site de la Maison diocésaine.' },
  { title: 'Concevoir et développer une solution applicative', content: 'Développement sur le framework Symfony d’une application web de création de livret pour la Maison diocésaine de Paris.' },
  { title: 'Assurer la maintenance corrective ou évolutive d’une solution applicative', content: 'Passage du mode production au mode développement permettant de corriger les erreurs liées à PHP.' },
  { title: 'Gérer les données', content: 'Utilisation de bases de données au format XML. L’administrateur peut les télécharger pour les consulter hors ligne via un logiciel SFTP comme FileZilla.', resource: { label: 'Voir les données XML', href: '/competences/donnees-xml.png' } },
  { title: 'Préserver l’identité numérique de l’organisation', content: 'Application web non référencée en mode développement et pare-feu Symfony.' },
  { title: 'Sécuriser les équipements et les usages des utilisateurs', content: 'Droits de lecture, écriture et exécution configurés sur FileZilla.', resource: { label: 'Voir les droits FileZilla', href: '/competences/droits-filezilla.png' } },
  { title: 'Garantir la disponibilité, l’intégrité et la confidentialité des services informatiques et des données face à des cyberattaques', content: 'Le serveur OVH rend automatiquement inaccessible l’application web en présence de fichiers suspects ou d’une mauvaise configuration des droits (erreurs 403 et 500).' },
  { title: 'Assurer la cybersécurité d’une solution applicative et de son développement', content: 'Profiler Symfony en mode développement affichant les logs et les événements lors du chargement de la page. Système de captcha.', resource: { label: 'Voir le profiler Symfony', href: '/competences/profiler-symfony.png' } },
]

export const competencesTechniques = [
  'Projet d’application web en C# permettant d’insérer, modifier et lister des visiteurs et des régions dans une base de données de laboratoire.',
  'Maîtrise d’Excel, PowerPoint, Word, GIMP et Wix.',
  {
    text: 'Projet utilisant Bootstrap et le framework Symfony afin de créer une gestion de formations et des inscriptions aux formations.',
    resource: { label: 'Voir la capture du projet', href: '/competences/bootstrap-symfony.png' },
  },
  'Installation de Docker sur Ubuntu.',
  'Utilisation de Wireshark sur Kali.',
  'Utilisation de Juice Shop afin de trouver les différentes failles présentes.',
]

export const competencesCejm = [
  { title: 'Analyser les conséquences du numérique dans les relations du numérique.', content: 'Analyse des conséquences du numérique sur les relations entre les acteurs de l’entreprise.' },
  { title: 'Analyser les conséquences du numérique sur les modes de production et de consommation de biens et de services de l’entreprise.', content: 'Présence d’un formulaire de contact sur restaurantusobaba.fr permettant de recueillir des avis clients, des demandes d’embauche et des propositions de partenariat.' },
  { title: 'Identifier pour l’entreprise les modalités juridiques de protection des actifs immatériels', content: 'Certificat SSL et page sur la politique de confidentialité disponibles sur restaurantusobaba.fr.', resource: { label: 'Voir restaurantusobaba.fr', href: 'https://www.restaurantusobaba.fr/' } },
  { title: 'Identifier les conséquences juridiques des choix opérés par l’entreprise sur la protection des personnes et des données', content: 'Certificat SSL et page sur la politique de confidentialité disponibles sur restaurantusobaba.fr.' },
  { title: 'Identifier les conséquences du déploiement du numérique sur le management et les processus décisionnels de l’entreprise', content: 'Analyse de l’impact des outils numériques sur l’organisation et les décisions de l’entreprise.' },
  { title: 'Repérer le rôle du système d’information dans le fonctionnement de l’entreprise', content: 'La présence en ligne du restaurant Uso Baba augmente le nombre de commandes en ligne.' },
  { title: 'Décrire les principales tendances du marché du travail', content: 'La rubrique « Plat du jour » de restaurantusobaba.fr varie selon les préférences actuelles de la clientèle.' },
  { title: 'Analyser un contrat de travail et justifier ses clauses au regard des besoins de l’entreprise et des salaires', content: 'Analyse de contrats fictifs dans le cadre de devoirs sur table de CEJM.' },
  { title: 'Caractériser les obligations de l’employeur en matière de protection des salariés', content: 'Système de captcha empêchant le spam lors de l’envoi d’e-mails sur l’application web de création de livret de la Maison diocésaine de Paris.' },
  { title: 'Identifier le rôle des partenaires sociaux dans l’entreprise', content: 'Les comptes Facebook et Instagram du restaurant Uso Baba permettent d’attirer la jeune clientèle utilisant les réseaux sociaux.' },
  { title: 'Identifier les leviers de motivation conciliant l’objectif de l’entreprise et les attentes de l’individu', content: 'Le formulaire de contact de restaurantusobaba.fr peut permettre d’étendre le domaine d’activité sur le long terme via des demandes d’embauche.' },
]
