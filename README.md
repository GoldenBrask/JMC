# JMC Aix-Marseille

Projet de site vitrine pour la Junior-Entreprise JMC Aix-Marseille.

## Structure

- `client/` – Application React (Next.js)
- `server/` – API Node.js/Express avec MySQL
- `cms/` – Configuration Strapi ou autre CMS

## Prérequis

- Node.js 18+
- MySQL (base `xowu0020_website`)

## Installation

```bash
# Installer les dépendances
cd server && npm install
cd ../client && npm install
```

Créez ensuite la base de données MySQL `xowu0020_website` et exécutez le
script `server/db/init.sql` pour créer les tables nécessaires.

## Lancement en développement

```bash
# Démarrer l'API
cd server && npm run dev

# Démarrer le front
cd ../client && npm run dev
```

## Déploiement Docker

```bash
docker build -t jmc-server ./server
```

## CI/CD

Une configuration GitHub Actions se trouve dans `.github/workflows/ci.yml`.
