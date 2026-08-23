export const environnementSections = [
  {
    title: 'Un service d’authentification',
    content: 'Login ou e-mail + mot de passe sécurisé pour accéder au PC et aux environnements de travail.',
    resource: {
      label: 'Voir l’environnement de travail',
      href: '/environnement/authentification.png',
    },
  },
  {
    title: 'Un SGBD',
    content: 'PhpMyAdmin utilisé avec WampServer64 en local.',
    resource: {
      label: 'Voir PhpMyAdmin et WampServer64',
      href: '/environnement/phpmyadmin-wampserver.png',
    },
  },
  {
    title: 'Un accès sécurisé à internet',
    content: 'Connexion WI-FI privée sécurisée avec un mot de passe donné par le fournisseur d’accès à Internet.',
    resource: {
      label: 'Voir la connexion sécurisée',
      href: '/environnement/wifi-securise.png',
    },
  },
  {
    title: 'Un environnement de travail collaboratif',
    content: 'Microsoft Teams et Outlook directement accessibles sur navigateur.',
    resource: {
      label: 'Découvrir Microsoft Teams',
      href: 'https://www.microsoft.com/fr-fr/microsoft-teams/group-chat-software',
    },
  },
  {
    title: 'Deux serveurs, éventuellement virtualisés, basés sur des systèmes d’exploitation différents, dont l’un est un logiciel libre (open source)',
    content: 'WampServer64 (Windows) utilisé pour lancer phpMyAdmin notamment avec le framework Symfony. OpenSSH (Linux) utilisé sur machine virtuelle permettant de partager des fichiers entre deux machines, d’activer le pare-feu ou d’encoder des fichiers.',
    resource: {
      label: 'Voir WampServer64',
      href: '/environnement/wampserver.png',
    },
  },
  {
    title: 'Une solution de sauvegarde',
    content: 'Google Drive et OVH (services de Cloud).',
    resource: {
      label: 'Voir la solution OVH',
      href: '/environnement/sauvegarde-ovh.png',
    },
  },
  {
    title: 'Des ressources dont l’accès est sécurisé et soumis à habilitation',
    content: 'PhpMyAdmin (OVH), fichiers partagés sur Google Drive ou Microsoft Teams, fichiers texte avec la possibilité de choisir qui peut modifier ou lire le document. GitHub est utilisé pour gérer le code source.',
    resource: {
      label: 'Voir le projet GitHub',
      href: 'https://github.com/ProjetMedicament/Projet-Medicament',
    },
  },
  {
    title: 'Deux types de terminaux dont un mobile',
    content: 'Terminal Windows sur ordinateur avec PowerShell. ADB pour Android afin de déboguer des programmes Android en C#.',
    resource: {
      label: 'Voir le terminal Windows',
      href: '/environnement/terminal-windows.png',
    },
  },
  {
    title: 'Gestion des incidents',
    content: 'GLPI est utilisé pour la gestion des tickets.',
    resource: {
      label: 'Découvrir GLPI',
      href: 'https://glpi-project.org/fr/',
    },
  },
  {
    title: 'Détection et prévention des intrusions',
    content: 'Pare-feu Windows et antivirus pour bloquer les programmes inconnus qui entrent dans le réseau ou lors d’une installation.',
    resource: {
      label: 'Voir le pare-feu Windows',
      href: '/environnement/pare-feu-windows.png',
    },
  },
  {
    title: 'Chiffrement',
    content: 'BitLocker est utilisé pour le chiffrement de lecteur sous Windows 11.',
    resource: {
      label: 'Voir BitLocker',
      href: '/environnement/bitlocker.png',
    },
  },
  {
    title: 'Analyse de trafic',
    content: 'La commande netstat est utilisée dans l’invite de commandes Windows 11. Wireshark analyse les paquets qui entrent dans le réseau.',
    resource: {
      label: 'Voir la commande netstat',
      href: '/environnement/netstat.png',
    },
  },
  {
    title: 'Un ou deux environnements de développement disposant d’outils de gestion de tests et supportant un framework et au moins deux langages',
    content: 'Visual Studio 2019 supporte les langages C# et PHP et peut lire du JSON grâce aux packages NuGet. Le framework .NET est également utilisé.',
  },
  {
    title: 'Une bibliothèque de composants logiciels',
    content: 'jQuery est utilisé sur Visual Studio Code et Visual Studio 2019.',
  },
  {
    title: 'Un SGBD avec langage de programmation associé',
    content: 'MySQL est utilisé sur phpMyAdmin avec le langage SQL.',
  },
  {
    title: 'Un logiciel de gestion de versions et de suivi de problèmes d’ordre logiciel',
    content: 'GitHub permet de publier les programmes en ligne et de les rendre accessibles à une équipe.',
    resource: {
      label: 'Voir le projet GitHub',
      href: 'https://github.com/ProjetMedicament/Projet-E5',
    },
  },
  {
    title: 'Une solution permettant de tester les comportements anormaux d’une application',
    content: 'Les tests unitaires sur Visual Studio 2019 créent une version test des fonctions afin de vérifier qu’elles retournent le résultat attendu.',
  },
  {
    title: 'Du code exécuté sur le système d’exploitation d’une solution technique d’accès fixe',
    content: 'Commandes DOS dans l’invite de commandes Windows 11 et langage C sur le terminal Ubuntu via une machine virtuelle VMware.',
  },
  {
    title: 'Du code exécuté dans un navigateur Web',
    content: 'PHP et le framework Symfony sont exécutés dans le navigateur Web.',
  },
  {
    title: 'Du code exécuté sur le système d’exploitation d’une solution technique d’accès mobile',
    content: 'Débogage USB avec Visual Studio 2019 pour tester un programme directement sur un téléphone portable.',
  },
  {
    title: 'Du code exécuté sur le système d’exploitation d’une solution technique d’accès mobile',
    content: 'C# et Xamarin avec Visual Studio 2019.',
  },
  {
    title: 'Du code exécuté sur le système d’exploitation d’un serveur',
    content: 'Commandes du terminal Linux pour utiliser OpenSSL.',
  },
]
