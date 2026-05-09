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

Currently appointment selecting page simply displays all appointments, even though user had to choose a doctor on the previous page. Would make more sense if it started off by filtering by that doctor specifically, but still give the user a clear option of disabling the filter.

All appointments in patient and admin views are stubbed since this is only a mock, therefore no real data is being used. If there was, functionality to synchronize the patient and admin views would be added.

A feature for filtering the admin view of appointments by physicians, so physicians logging on can see which appointments are for them specifically, but still give them the option to claim others. On that note, creating a functionality for letting physicians claim another physicians would be useful (in the event a physician cannot make it to some appointment, or if 2 physicians want to trade time slots).

The navigation bar, which pretty much every site has, is empty since there is nothing that needs to be put there.

The styling is really ugly and bare minimum.