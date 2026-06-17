# Images des projets

Déposez ici les captures d'écran de chaque projet, dans un sous-dossier nommé d'après
le `slug` du projet (voir `app/data/projects.ts`).

Exemple :

```
public/projects/
  lenspot/
    home.png
    spots.png
  boutique-jcbb/
    catalogue.png
```

Puis référencez-les dans `app/data/projects.ts`, champ `images` du projet :

```ts
images: [
  { src: '/projects/lenspot/home.png', alt: 'Écran d’accueil de Lenspot' },
  { src: '/projects/lenspot/spots.png', alt: 'Liste des spots' }
]
```

La **première image** sert de visuel principal en haut de la page détail ;
les suivantes alimentent la galerie « Aperçus ».

Tant qu'aucune image n'est fournie, un placeholder blueprint est affiché automatiquement.

## Liens (repo / app)

Toujours dans `app/data/projects.ts`, par projet :

- `repo` : URL du dépôt git public (bouton « Code source »). Laisser absent si privé.
- `links` : liens externes (App Store, site en ligne…), ex :
  `links: [{ label: 'Voir sur l’App Store', url: 'https://…', icon: 'appstore' }]`
  Icônes disponibles : `appstore`, `play`, `external`.
