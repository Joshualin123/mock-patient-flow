# mock-patient-flow

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Next, in another terminal, change directory to django-backend by running:

cd django-backend

Then run:

python manage.py runserver

Things to improve:
Ensuring people cannot enter the patient/admin pages without logging in first, workarounds include simply pasting the url into the browser.

Making account creation more strict, and removing option to create admin accounts in the same way patient accounts are made since they should not be that accessible. Realistically, admin accounts should be provided to employees by developers.