# shal-consulting.fr

Site statique (HTML/CSS/JS) en production sur https://shal-consulting.fr/, hébergé chez OVHcloud.

## Structure

- `www/` : contenu publié tel quel à la racine du domaine (pages, `assets/`, `.htaccess`)
- `docs/` : guide d'installation manuelle d'origine
- `.github/workflows/deploy.yml` : déploiement automatique

## Déploiement automatique

Chaque `push` sur `main` qui modifie `www/` envoie le dossier sur l'hébergement OVH par FTP(S),
puis vérifie que `/`, `/conseil/` et `/formation/` répondent en 200.
Lancement manuel possible : onglet **Actions → Déploiement OVH → Run workflow**.

### Configuration (Settings → Secrets and variables → Actions)

Secrets (onglet *Secrets*) — valeurs dans l'espace client OVH, Web Cloud → Hébergements → FTP - SSH :

| Secret | Exemple |
|---|---|
| `OVH_FTP_SERVER` | `ftp.cluster0XX.hosting.ovh.net` |
| `OVH_FTP_USERNAME` | identifiant FTP |
| `OVH_FTP_PASSWORD` | mot de passe FTP |

Variables optionnelles (onglet *Variables*) :

| Variable | Défaut | Rôle |
|---|---|---|
| `OVH_FTP_PROTOCOL` | `ftps` | mettre `ftp` si la connexion TLS échoue |
| `OVH_FTP_PORT` | `21` | |
| `OVH_REMOTE_DIR` | `./www/` | dossier racine du domaine sur l'hébergement (avec `/` final) |

### Modifier le site

Éditer les fichiers dans `www/`, committer sur `main` : la mise en ligne suit en ~1 minute.
