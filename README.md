# JMC Aix-Marseille

Projet de site vitrine pour la Junior-Entreprise JMC Aix-Marseille.

## Structure

- `client/` – Application React (Next.js)
- `server/` – API Node.js/Express avec MongoDB
- `cms/` – Configuration Strapi ou autre CMS

## Prérequis

- Node.js 18+
- MongoDB

## Installation

```bash
# Installer les dépendances
cd server && npm install
cd ../client && npm install
```

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
