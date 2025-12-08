---

title: "Comment héberger un serveur n8n sur Home Assistant ?"
description: "Découvrez comment héberger gratuitement une instance n8n sur un serveur Home Assistant, accessible depuis l’extérieur et prête à automatiser votre activité (Tally, Notion,Google Sheets…)."
published: "2025-12-08"
category: "Développement"
image: "/images/blog/home-assistant-n8n/homeAssistantN8nHero.png"
tags: ["automation", "n8n", "workflow", "Home Assistant", "Raspberry Pi"]
featured: true
readingTime: 10
author:
    name: "Hugo Schroder"
    bio: "Développeur web full-stack"
    avatar: "/images/hugo.jpg"
--------------------------
Dans l'article précédent, j'ai présenté l'automatisation avec n8n, et comment elle peut être utilisée pour gagner du 
temps et de la cohérence dans son activité. 
J'ai évoqué le fait qu'il était possible d'auto-héberger n8n. Aujourd'hui, nous allons voir comment faire tourner une
instance n8n sur un serveur utilisant Home Assistant et comment configurer le tout pour pouvoir utiliser des plugins
accédants à l'extérieur. 

## Contexte
J'ai commencé à utiliser n8n avec la version gratuite disponible en ligne directement sur le site
[n8n](https://n8n.io/), mais cette version est assez vite limitée, il faut assez rapidement payer si l'on veut avoir
plusieurs workflows qui tournent.

J'ai chez moi un Raspberry Pi 5 4GB, faisant tourner un serveur Home Assistant sous Home Assistant OS, me permettant de 
gérer toute ma domotique. J'ai alors fait des recherches et me suis rendu compte qu'il était possible d'héberger une
instance n8n sur Raspberry Pi. Je suis tombé sur un projet permettant d'ajouter cette même instance directement depuis
l'interface de Home Assistant, au lieu d'utiliser Docker et de faire l'ensemble de la configuration manuellement.

## Mise en place
### Prérequis
J'ai dans mon cas utilisé un Raspberry Pi étant donné que c'est ce dont je dispose, mais l'installation devrait 
fonctionner peu importe le support, tant que vous utilisez Home Assistant OS.

Il est également nécessaire d'avoir un nom de domaine, et un certificat SSL pour pouvoir accéder à l'instance n8n depuis
l'extérieur. 

En revanche, le serveur n8n tournant localement, il n'est pas nécessaire d'avoir un compte n8n.
### Installation du module n8n
Il faut tout d'abord ajouter le repository n8n dans Home Assistant.

Pour cela, il faut aller dans 
```
Paramètres > 
Modules complémentaires > 
Boutique des Modules Complémentaires > 
dépôts (3 petits points en haut à droite)
```
et ajouter l'url du dépot [https://github.com/Rbillon59/hass-n8n](https://github.com/Rbillon59/hass-n8n).
![setup Repo](/images/blog/home-assistant-n8n/setupRepo.png)

Une fois cela fait, il faut rafraichir la page pour voir le nouveau module, il faut ensuite l'ouvrir et cliquer sur
"Installer".
Lorsque le module est installé, il est d'ores et déjà possible de l'utiliser en cliquant sur "Ouvrir l'interface 
utilisateur Web".

![open n8n](/images/blog/home-assistant-n8n/n8nInstalled.png)
En cliquant sur ce bouton, on arrive sur un formulaire demandant email, prénom, nom et mot de passe.

Il est important de bien les retenir, car ils vous permettront de vous reconnecter plus tard à votre instance n8n.

Par défaut n8n n'a pas d'authentification, il est donc nécessaire de la mettre en place, soit comme évoqué juste
au-dessus via l'UI, ou alors via des variables d'environnement :
```javascript
"N8N_GENERIC_AUTH_TRUSTED_PROXIES: true"
"N8N_GENERIC_AUTH_ACTIVE: true"
"N8N_GENERIC_AUTH_USERNAME: votre_nom_d_utilisateur"
"N8N_GENERIC_AUTH_PASSWORD: votre_mot_de_passe"
```
Si vous souhaitez utiliser des variables d'environnement, il faut les ajouter dans la configuration du module, 
dans la partie "Configuration".

### Communication avec l'extérieur
Afin de permettre à notre serveur n8n de communiquer avec l'extérieur et d'en exploiter le plein potentiel, il est 
nécessaire de modifier la configuration du module.

Pour cela, il faut quitter l'interface utilisateur, et arrêter le serveur n8n.

Il faut ensuite aller dans l'onglet "Configuration", puis dans la partie "réseau" cliquer sur 
"Activer les ports désactivés" et ajouter le port `5678` afin de pouvoir accéder à n8n depuis l'extérieur.
![config Réseau](/images/blog/home-assistant-n8n/configReseau.png)

L’accès "Ouvrir l’interface utilisateur Web" dans Home Assistant utilise un système appelé Ingress, qui encapsule 
n8n dans Home Assistant.
L’accès via un nom de domaine, lui, passe par un port dédié `5678` et fonctionne de manière indépendante.

Une fois cela fait, il faut ajouter ceci dans la partie supérieure de la configuration :
```javascript
timezone: Europe/Berlin
env_vars_list:
  - "N8N_PATH: /"
  - "N8N_EDITOR_BASE_URL: https://n8n.nom.domaine/"
  - "WEBHOOK_URL: https://hooks.nom.domaine/"
  - "N8N_GENERIC_AUTH_TRUSTED_PROXIES: true"
  - "N8N_LOG_LEVEL: debug"
cmd_line_args: ""

```
Il est évidemment nécessaire de remplacer `nom.domaine` par votre propre nom de domaine. Une fois ces modifications 
faites, il suffit d'enregistrer la configuration et de redémarrer le serveur n8n.
Le domaine du webhook peut être différent du domaine de l’UI n8n, mais ce n’est pas obligatoire.

### Configuration du nom de domaine
**⚠️ Important : si vous exposez votre instance n8n sur Internet, activez
obligatoirement une authentification interne ou une protection via
Cloudflare Access. L’interface n8n ne doit jamais être accessible publiquement
sans protection.**

La suite de la configuration dépend de votre configuration de Home Assistant, ainsi que du lien existant entre votre
serveur Home Assistant et votre nom de domaine.

Pour sécuriser l’accès à votre interface n8n ou Home Assistant, je recommande fortement d’utiliser Cloudflare Access, ce
qui évite d’exposer un service critique directement sur Internet.

J'utilise personnellement Cloudflare via le module Cloudflared, comme recommandé dans la documentation du module n8n. 
Pour ajouter ce module, il faut ajouter ce dépot 
[https://github.com/brenner-tobias/ha-addons](https://github.com/brenner-tobias/ha-addons) comme fait précédemment avec 
n8n.

Je ne rentrerai pas en détail sur la configuration de Cloudflare avec Home Assistant dans cet article, mais si le sujet 
vous intéresse, je pourrai écrire un article expliquant en détail comment le mettre en place et comment le sécuriser.


Une fois cette configuration faite, il est maintenant possible d'accéder à n8n directement depuis l'url
`https://n8n.nom.domaine/`, sans devoir passer par l'interface utilisateur de Home Assistant. Il est nécessaire de se 
connecter en utiliser l'email et le mot de passe que vous avez renseigné lors de la première connexion au serveur.



## Limitations
L'ensemble du système fonctionne plutôt bien, toutefois, voici quelques limites à noter :
- n8n fonctionne parfaitement sur Raspberry Pi et est suffisant, mais certains workflow très lourds pourraient être limités par la puissance du Raspberry pi.
- n8n ne gère pas le multi-utilisateur en version auto-hébergée, pour la majorité des personnes ce n'est pas un problème, mais c'est à notifier.
- Il n'est pas possible de garder Ingress + domaine externe 100% compatibles, une fois le domaine externe mis en place, l'Ingress ne fonctionne plus.

## Conclusion
Mettre en place n8n sur Home Assistant est finalement assez simple une fois que
l’on connaît les étapes et les subtilités de l’accès externe. Cette configuration
permet d’obtenir un serveur d’automatisation complet, auto-hébergé, sécurisé et
entièrement gratuit, capable d’interagir avec des services comme Tally, Notion,
Google Sheets, ou encore vos objets connectés gérés par Home Assistant.

C’est une solution idéale si l’on souhaite centraliser ses automatisations sans
payer un abonnement mensuel ou déployer une infrastructure complexe.

Dans de prochains articles, je pourrai détailler :
- comment sécuriser totalement son instance avec Cloudflare Access,
- comment surveiller et optimiser les performances de n8n.

N’hésitez pas à me dire si vous souhaitez un guide complet sur la configuration
Cloudflare + Home Assistant, ou des idées de workflows utiles à implémenter !

---

**Besoin d'aide pour votre projet d'automatisation ?** [Contactez-moi](/contact) pour discuter de vos besoins !

**Ressources utiles :**
- [Documentation officielle n8n](https://docs.n8n.io/)
- [Workflows prêts à l’emploi](https://n8n.io/workflows)
- [Module hass-n8n](https://github.com/Rbillon59/hass-n8n)
- [CloudFlare](https://www.cloudflare.com)