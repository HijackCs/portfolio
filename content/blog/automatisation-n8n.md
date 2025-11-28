---

title: "Découverte de l'automatisation : comment j'utilise n8n au quotidien"
description: "Retour d'expérience : comment j'ai mis en place des automatisations fiables et puissantes grâce à n8n, avec un exemple concret basé sur un simulateur de prix."
published: "2025-11-28"
category: "Développement"
image: "/images/blog/automatisation-n8n/automatisation-n8n-hero.png"
tags: ["automation", "n8n", "nocode", "workflow", "freelance"]
featured: false
readingTime: 8
author:
    name: "Hugo Schroder"
    bio: "Développeur web full-stack"
    avatar: "/images/hugo.jpg"
--------------------------
Automatiser son activité, ce n’est pas simplement gagner du temps. C’est créer un système qui travaille pour vous pendant que vous faites autre chose: coder, échanger avec un client, courir, ou simplement prendre un café. J'ai beaucoup entendu parler d'outils comme **Make** ou encore **Zapier**, mais ces outils sont payants, limités et assez fermés. J’ai donc choisi d'utiliser **n8n**, qui, contrairement à ses concurrents, peut être auto-hébergé et offre une liberté totale. 
Aujourd'hui, certaines tâches disparaissent complètement de ma charge mentale.

## n8n: à quoi ça sert ? 

n8n est un outil d’automatisation visuel qui permet de connecter toutes ses applis et de créer des workflows sans écrire une seule ligne de code. 
On choisit des blocs (triggers, actions, API...), on les relie entre eux, et n8n exécute automatiquement toutes les tâches répétitives. 
C’est flexible, puissant, et surtout parfaitement adapté dès qu’on veut aller un peu plus loin que les automatisations “simples”.

Là où Make et Zapier sont très pratiques mais rapidement limitants (et coûteux), n8n se distingue par sa liberté totale: auto-hébergement, accès complet aux données, scripts avancés, branchement sur n’importe quelle API,... bref : un outil que vous contrôlez vraiment, et qui ne vous met jamais de plafond.

## Le formulaire Tally : juste une porte d’entrée

![Tally Formulaire](/images/blog/automatisation-n8n/formulaireTally.png)

L'idée était simple : créer un formulaire qui permet aux potentiels clients d'avoir une fourchette de prix pour la réalisation de leur site, automatiquement. J'ai fait le choix d'utiliser Tally, qui est un outil en ligne qui permet de créer des formulaires modernes en quelques minutes, sans aucune complexité technique. 

L’interface ressemble à celle d’un document, ce qui permet d’ajouter questions, logiques conditionnelles, paiements ou intégrations de manière très naturelle.
C’est un peu le “Notion des formulaires” : simple à utiliser, mais suffisamment puissant pour gérer enquêtes, inscriptions, commandes ou demandes clients. On a d'ailleurs l'impression d'utiliser Notion, l'utilisation des "/" pour ajouter des blocs, ou encore la navigation dans les menus, tout est identique.

Comparé à Typeform ou Google Forms, Tally se démarque par sa souplesse, son design plus propre, et surtout un modèle ultra-généreux (la plupart des fonctionnalités avancées sont gratuites). C’est l’outil idéal pour créer un formulaire pro sans se prendre la tête.

Mais encore une fois, le formulaire n’est que la surface. Le vrai travail commence après l’envoi, et c’est là que n8n prend le relais.

## L'intérêt d'utiliser n8n

Lorsqu'un utilisateur remplit le formulaire, c’est là que n8n commence réellement à travailler.
![Aperçu du workflow n8n](/images/blog/automatisation-n8n/n8nWorkflow.png)

### Réception du flux

La première chose que fait n8n, c’est récupérer le payload JSON envoyé par Tally. C’est brut, souvent verbeux, mais c’est une base parfaite. On y retrouve la structure complète des réponses, les champs du formulaire, les valeurs choisies, tout ce dont j’ai besoin pour comprendre l’intention de la personne.

### Comprendre la demande

Une fois les données reçues, n8n peut passer à l’étape la plus importante: l’interprétation.
Un script JavaScript s'exécute, afin de normaliser les données, et de calculer les prix correspondants en fonction des choix faits par l'utilisateur dans le formulaire.

### L’action finale

Une fois les différents prix calculés, on peut enfin utiliser les données. On va en parallèle, envoyer un mail à l'utilisateur avec la fourchette de prix correspondant à son projet et créer une fiche dans Notion pour pouvoir suivre la demande du potentiel client.

## Ce que ça change pour moi au quotidien

Cette automatisation me fait gagner beaucoup de temps, mais surtout, elle m’apporte de la régularité.
Je ne perds plus aucune information: tout arrive dans Notion, proprement structuré.
Je vois d’où viennent les demandes, je réponds plus vite, mes prix restent cohérents et je peux analyser les tendances.

Et surtout: je reste disponible mentalement pour les vraies tâches. Le code, la réflexion, la création.


## L’automatisation, un outil

L’automatisation n’est pas là pour remplacer l’humain.
Je ne veux pas automatiser la relation, les échanges, les ressentis.
Ce que n8n m’apporte, c’est un assistant invisible qui supprime les étapes lourdes et garde mon attention pour ce qui compte vraiment.

Une bonne automatisation ne déshumanise rien : elle amplifie votre style.

## Conclusion

n8n est devenu un outil qui structure mon activité sans me contraindre, et qui me laisse de la place pour ce que j’aime faire : créer, accompagner, et construire des projets solides.

**Points clés à retenir :**
- n8n permet d’automatiser ses processus tout en gardant un contrôle total sur sa logique métier.

- Le combo Tally → n8n transforme une simple soumission de formulaire en un workflow complet: analyse, calcul, suivi, relance.

- Une automatisation bien pensée ne remplace pas l’humain: elle élimine juste les tâches répétitives et évite les oublis.

- Centraliser toutes les demandes dans Notion donne une vision plus claire et cohérente de son activité.

- L’automatisation devient réellement puissante quand elle prolonge votre manière de travailler, sans la dénaturer.

---

**Besoin d'aide pour votre projet d'automatisation ?** [Contactez-moi](/contact) pour discuter de vos besoins !

**Ressources utiles :**
- [Documentation officielle n8n](https://docs.n8n.io/)
- [Workflows prêts à l’emploi](https://n8n.io/workflows)
- [Formulaire Tally](https://tally.so/)
- [Notion API](https://developers.notion.com)
