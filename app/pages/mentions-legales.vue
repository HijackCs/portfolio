<template>
  <div
    ref="root"
    class="mx-auto max-w-4xl px-6 pb-24 pt-32"
  >
    <p
      data-reveal
      class="font-mono text-xs tracking-[0.25em] text-primary uppercase"
    >
      // mentions légales
    </p>
    <h1
      data-reveal
      class="mt-3 font-display text-4xl font-bold tracking-tight sm:text-5xl"
    >
      Informations <SharedGradientText>légales</SharedGradientText>
    </h1>

    <div class="mt-12 flex flex-col gap-6">
      <!-- Éditeur du site -->
      <section
        data-reveal
        class="rounded-xl border border-line bg-surface p-6 sm:p-8"
      >
        <h2 class="font-display text-xl font-semibold tracking-tight">
          Éditeur du site
        </h2>
        <dl class="mt-5 flex flex-col gap-3 text-sm">
          <div
            v-for="row in editeur"
            :key="row.label"
            class="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:gap-4"
          >
            <dt class="font-mono text-xs text-muted sm:w-56 sm:shrink-0">
              {{ row.label }}
            </dt>
            <dd class="text-ink/90">
              <a
                v-if="row.href"
                :href="row.href"
                class="text-primary transition-colors hover:text-ink"
              >{{ row.value }}</a>
              <template v-else>
                {{ row.value }}
              </template>
            </dd>
          </div>
        </dl>

        <div class="mt-6 border-t border-line pt-6">
          <p class="text-sm leading-relaxed text-ink/90">
            Bénéficiaire d’un <strong class="font-semibold text-ink">CAPE</strong>
            (Contrat d’Appui au Projet d’Entreprise) jusqu’au 2 novembre 2026.
          </p>
          <dl class="mt-4 flex flex-col gap-3 text-sm">
            <div
              v-for="row in cape"
              :key="row.label"
              class="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:gap-4"
            >
              <dt class="font-mono text-xs text-muted sm:w-56 sm:shrink-0">
                {{ row.label }}
              </dt>
              <dd class="text-ink/90">
                {{ row.value }}
              </dd>
            </div>
          </dl>
        </div>
      </section>

      <!-- Réalisation -->
      <section
        data-reveal
        class="rounded-xl border border-line bg-surface p-6 sm:p-8"
      >
        <h2 class="font-display text-xl font-semibold tracking-tight">
          Réalisation du site
        </h2>
        <dl class="mt-5 flex flex-col gap-3 text-sm">
          <div class="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:gap-4">
            <dt class="font-mono text-xs text-muted sm:w-56 sm:shrink-0">
              Conception & développement
            </dt>
            <dd class="text-ink/90">
              Hugo Schroder
            </dd>
          </div>
          <div class="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:gap-4">
            <dt class="font-mono text-xs text-muted sm:w-56 sm:shrink-0">
              Technologies
            </dt>
            <dd class="flex flex-wrap gap-2">
              <span
                v-for="tech in ['Nuxt.js', 'Vue.js', 'Tailwind CSS', 'GSAP']"
                :key="tech"
                class="badge"
              >{{ tech }}</span>
            </dd>
          </div>
        </dl>
      </section>

      <!-- Hébergement -->
      <section
        data-reveal
        class="rounded-xl border border-line bg-surface p-6 sm:p-8"
      >
        <h2 class="font-display text-xl font-semibold tracking-tight">
          Hébergement
        </h2>
        <dl class="mt-5 flex flex-col gap-3 text-sm">
          <div
            v-for="row in hebergement"
            :key="row.label"
            class="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:gap-4"
          >
            <dt class="font-mono text-xs text-muted sm:w-56 sm:shrink-0">
              {{ row.label }}
            </dt>
            <dd class="text-ink/90">
              <a
                v-if="row.href"
                :href="row.href"
                target="_blank"
                rel="noopener noreferrer"
                class="text-primary transition-colors hover:text-ink"
              >{{ row.value }}</a>
              <template v-else>
                {{ row.value }}
              </template>
            </dd>
          </div>
        </dl>
      </section>

      <!-- Propriété intellectuelle -->
      <section
        data-reveal
        class="rounded-xl border border-line bg-surface p-6 sm:p-8"
      >
        <h2 class="font-display text-xl font-semibold tracking-tight">
          Propriété intellectuelle
        </h2>
        <div class="mt-5 space-y-4 text-sm leading-relaxed text-muted">
          <p>
            L’ensemble du contenu de ce site (textes, images, vidéos, design, code source)
            est la propriété exclusive de
            <strong class="font-semibold text-ink">Hugo Schroder</strong>, sauf mention contraire.
          </p>
          <p>
            Toute reproduction, distribution, modification, adaptation, retransmission ou
            publication de ces différents éléments est strictement interdite sans l’accord
            écrit préalable de Hugo Schroder.
          </p>
          <p>
            Les marques, logos et autres signes distinctifs reproduits sur ce site sont la
            propriété de leurs titulaires respectifs.
          </p>
        </div>
      </section>

      <!-- RGPD -->
      <section
        data-reveal
        class="rounded-xl border border-line bg-surface p-6 sm:p-8"
      >
        <h2 class="font-display text-xl font-semibold tracking-tight">
          Protection des données personnelles (RGPD)
        </h2>
        <div class="mt-5 space-y-4 text-sm leading-relaxed text-muted">
          <h3 class="font-mono text-xs tracking-[0.2em] text-primary uppercase">
            Collecte des données
          </h3>
          <p>
            Ce site ne collecte aucune donnée personnelle de manière automatique. Les seules
            données collectées sont celles que vous transmettez volontairement par email.
          </p>

          <h3 class="pt-2 font-mono text-xs tracking-[0.2em] text-primary uppercase">
            Utilisation des données
          </h3>
          <p>Les données que vous communiquez sont utilisées uniquement pour :</p>
          <ul class="flex flex-col gap-2">
            <li
              v-for="item in usageData"
              :key="item"
              class="flex items-start gap-2.5 text-ink/90"
            >
              <span class="mt-[7px] block size-1.5 shrink-0 rotate-45 bg-gradient-signature" />
              {{ item }}
            </li>
          </ul>

          <h3 class="pt-2 font-mono text-xs tracking-[0.2em] text-primary uppercase">
            Conservation des données
          </h3>
          <p>
            Vos données sont conservées uniquement le temps nécessaire au traitement de votre
            demande et conformément aux obligations légales.
          </p>

          <h3 class="pt-2 font-mono text-xs tracking-[0.2em] text-primary uppercase">
            Vos droits
          </h3>
          <p>
            Conformément au RGPD, vous disposez d’un droit d’accès, de rectification, de
            suppression et d’opposition au traitement de vos données personnelles. Pour exercer
            ces droits, contactez-nous à :
            <a
              href="mailto:contact@hugoschroder.dev"
              class="text-primary transition-colors hover:text-ink"
            >contact@hugoschroder.dev</a>.
          </p>
        </div>
      </section>

      <!-- Cookies -->
      <section
        data-reveal
        class="rounded-xl border border-line bg-surface p-6 sm:p-8"
      >
        <h2 class="font-display text-xl font-semibold tracking-tight">
          Cookies et outils d’analyse
        </h2>
        <div class="mt-5 space-y-4 text-sm leading-relaxed text-muted">
          <p>
            Ce site utilise des outils d’analyse pour améliorer l’expérience utilisateur et
            optimiser les performances. Aucune donnée n’est utilisée à des fins publicitaires
            ou commerciales.
          </p>

          <h3 class="pt-2 font-mono text-xs tracking-[0.2em] text-primary uppercase">
            Vercel Analytics
          </h3>
          <p>
            Nous utilisons <strong class="font-semibold text-ink">Vercel Analytics</strong>
            pour collecter des données anonymisées sur :
          </p>
          <ul class="flex flex-col gap-2">
            <li
              v-for="item in vercelData"
              :key="item"
              class="flex items-start gap-2.5 text-ink/90"
            >
              <span class="mt-[7px] block size-1.5 shrink-0 rotate-45 bg-gradient-signature" />
              {{ item }}
            </li>
          </ul>
          <p>
            Ces données sont collectées dans le respect de la vie privée, sans identification
            personnelle. Plus d’informations :
            <a
              href="https://vercel.com/docs/analytics/privacy-policy"
              target="_blank"
              rel="noopener noreferrer"
              class="text-primary transition-colors hover:text-ink"
            >politique de confidentialité Vercel Analytics</a>.
          </p>

          <h3 class="pt-2 font-mono text-xs tracking-[0.2em] text-primary uppercase">
            Google Search Console
          </h3>
          <p>
            Nous utilisons
            <strong class="font-semibold text-ink">Google Search Console</strong> pour :
          </p>
          <ul class="flex flex-col gap-2">
            <li
              v-for="item in googleData"
              :key="item"
              class="flex items-start gap-2.5 text-ink/90"
            >
              <span class="mt-[7px] block size-1.5 shrink-0 rotate-45 bg-gradient-signature" />
              {{ item }}
            </li>
          </ul>
          <p>
            Cet outil ne collecte pas de données personnelles identifiables. Plus
            d’informations :
            <a
              href="https://policies.google.com/privacy"
              target="_blank"
              rel="noopener noreferrer"
              class="text-primary transition-colors hover:text-ink"
            >politique de confidentialité Google</a>.
          </p>

          <h3 class="pt-2 font-mono text-xs tracking-[0.2em] text-primary uppercase">
            Gestion des cookies
          </h3>
          <p>
            Vous pouvez à tout moment désactiver les cookies dans les paramètres de votre
            navigateur. Cela peut toutefois affecter certaines fonctionnalités du site.
          </p>
        </div>
      </section>

      <!-- Responsabilité -->
      <section
        data-reveal
        class="rounded-xl border border-line bg-surface p-6 sm:p-8"
      >
        <h2 class="font-display text-xl font-semibold tracking-tight">
          Limitation de responsabilité
        </h2>
        <div class="mt-5 space-y-4 text-sm leading-relaxed text-muted">
          <p>
            Hugo Schroder s’efforce d’assurer l’exactitude et la mise à jour des informations
            diffusées sur ce site. Il ne peut toutefois garantir l’exactitude, la précision ou
            l’exhaustivité des informations mises à disposition.
          </p>
          <p>
            Hugo Schroder ne pourra être tenu responsable des dommages directs ou indirects
            résultant de l’accès au site ou de son utilisation.
          </p>
        </div>
      </section>

      <!-- Droit applicable -->
      <section
        data-reveal
        class="rounded-xl border border-line bg-surface p-6 sm:p-8"
      >
        <h2 class="font-display text-xl font-semibold tracking-tight">
          Droit applicable
        </h2>
        <div class="mt-5 space-y-4 text-sm leading-relaxed text-muted">
          <p>
            Les présentes mentions légales sont régies par le droit français. En cas de litige
            et à défaut d’accord amiable, le litige sera porté devant les tribunaux français
            conformément aux règles de compétence en vigueur.
          </p>
        </div>
      </section>

      <p
        data-reveal
        class="pt-2 text-center font-mono text-xs text-muted"
      >
        Dernière mise à jour : juin 2026
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
const root = ref<HTMLElement | null>(null)
useScrollReveal(root)

const editeur = [
  { label: 'Directeur de publication', value: 'Hugo Schroder' },
  { label: 'Email', value: 'contact@hugoschroder.dev', href: 'mailto:contact@hugoschroder.dev' },
  { label: 'Site web', value: 'hugoschroder.dev', href: 'https://hugoschroder.dev' }
]

const cape = [
  { label: 'Structure d’accompagnement', value: 'Espace des Entrepreneurs — Incubatest' },
  { label: 'SIRET', value: '418 541 553 000 32' },
  { label: 'TVA intracommunautaire', value: 'FR 23 418 541 553' },
  { label: 'Code NAF', value: '8899B' }
]

const hebergement = [
  { label: 'Hébergeur', value: 'Vercel Inc.' },
  { label: 'Adresse', value: '340 S Lemon Ave #4133, Walnut, CA 91789, USA' },
  { label: 'Site web', value: 'vercel.com', href: 'https://vercel.com' }
]

const usageData = [
  'Répondre à vos demandes de contact',
  'Vous fournir les informations demandées',
  'Établir un devis ou une proposition commerciale'
]

const vercelData = [
  'Les pages visitées',
  'Les performances du site',
  'Les données de navigation (anonymisées)'
]

const googleData = [
  'Analyser le référencement du site',
  'Comprendre comment les visiteurs trouvent le site',
  'Améliorer la visibilité dans les résultats de recherche'
]
</script>
