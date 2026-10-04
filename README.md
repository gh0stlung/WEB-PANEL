# TORN X PANEL — GitHub + Vercel

Static deployment package for TORN X PANEL.

- GitHub stores the project.
- Vercel hosts it as a static site.
- Existing browser localStorage remains the local data store, so saved data is separate per device/browser.
- No Firebase database is used for the panel's own storage.
- PWA manifest, service worker, install prompt, favicon and Home Screen icons are included.

## Deploy
Upload this folder to GitHub and import the repository into Vercel. No build command is required; `index.html` is the entry point.

## Important
The original panel contains features that connect to Firebase Realtime Database projects. Those are existing external target connections used by the panel; this package does not add Firebase hosting/authentication/database for storing the panel itself. If those target-connection features are removed completely, the corresponding remote device/SMS functions will no longer work.
