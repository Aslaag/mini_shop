# Mini Shop

Mini Shop est une petite application de catalogue de produits écrite en React + TypeScript et construite avec Vite. Elle sert d'exemple/mini-projet pour afficher, filtrer, consulter et éditer des produits. Les données initiales se trouvent dans `src/data/products.json` mais l'application persiste les modifications dans le `localStorage` sous la clé `miniShopProductsDatas`.

## Fonctions principales

- Affichage d'un catalogue de produits
- Filtrage et tri
- Consultation d'une fiche produit
- Edition d'un produit (prix, stock) via une modale
- Internationalisation (français / anglais)
- Persistance des données dans le `localStorage`

## Prérequis

- Node.js
- pnpm

## Installation

1. Cloner le dépôt et entrer dans le dossier :

```zsh
git clone https://github.com/Aslaag/mini_shop.git
cd mini_shop
```

2. Installer les dépendances (avec `pnpm`) :

```zsh
pnpm install
```

## Scripts utiles

Les scripts disponibles sont définis dans le `package.json` du projet :

- `pnpm dev` : démarre le serveur de développement (Vite) avec HMR
- `pnpm build` : crée la version de production
- `pnpm preview` : prévisualise le build de production
- `pnpm test` : lance les tests unitaires (Vitest)


## Structure du projet

Quelques fichiers et dossiers importants :

- `src/` : code source
  - `components/` : composants réutilisables (cards, modals, forms...)
  - `pages/` : pages (catalogue, vue produit...)
  - `data/products.json` : données initiales
  - `utils/productsStorage.ts` : utilitaire de persistence dans `localStorage`
  - `locales/` : fichiers de traduction
  - `types/` : définitions TypeScript
- `tests/` : tests unitaires
- `vite.config.ts`, `tsconfig.*.json`, `vitest.config.ts` : config

## Persistance des données

L'application initialise les produits en lisant `localStorage` sur la clé `miniShopProductsDatas`. Si aucune donnée n'est trouvée, elle charge `src/data/products.json` et écrit la valeur initiale dans `localStorage`.

Les fonctions principales sont exposées dans `src/utils/productsStorage.ts` :

- `loadProducts()` — charge les produits depuis `localStorage` ou retourne les données incluses
- `saveProducts(products)` — sauvegarde la liste complète dans `localStorage`
- `updateProduct(product)` — met à jour (ou ajoute) un produit et sauvegarde
- `clearStoredProducts()` — supprime la clé dans `localStorage`

Exemple : pour réinitialiser les produits (en développement), vous pouvez exécuter dans la console du navigateur :

```js
localStorage.removeItem('miniShopProductsDatas')
```

## Tests

Le projet utilise Vitest pour les tests unitaires. Pour lancer les tests :

```zsh
pnpm test
```

Ajoute ou modifie des tests dans `tests/unit`.

## Temps passé

Approximativement 8h au total