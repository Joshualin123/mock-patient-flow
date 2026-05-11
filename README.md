# mock-patient-flow

## How To Run

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

## Project Overview
This project is a simple prototype of a patient -> physician appointment booking UI. It uses stubbed data to demonstrate the general layout of the website. The current features include:

For Patients:
Viewing the physicians that work at the company, along with a general description of them. Useful for resolving things like language barriers and instilling confidence in the patients, knowing they will be in good hands.

Viewing available appointments, along with filtering appointments by physicians working those specific time slots. 

A patient form for patients to provide more detailed information about their needs.

For Admins:

Viewing status of bookings, such as confirmed, cancelled, or pending time slots. 

Viewing forms filled by patients who have registered for a time slot.

Filter appointments, so physicians can easily see their own specific time slots.

## Key Technical / Product Decisions:

Chose a lighter color scheme to seem friendlier.

Made patients and admins login from the same location for design simplicity, but still features security features to keep the patient and admin views separate. (Concerns on security are also addressed below in "Things To Improve", do consider that this is only a mock/prototype). 

Added features with the intention of being as open as possible to users, referring to both patients and admins, such as physician descriptions and clear information on appointment dates/locations. The goal is to allow patients to be as confident and comfortable with their decisions as possible, and allow admins/physicians to get all the information they need about their patients so they can provide maximal assistance.

Added simple color coding features to make some information more clear/intuitive, such as green/red color coding for confirmed/cancelled appointments respectively. 

A standardized navigation bar exists at the top of each page, should any general info be needed to display.

The patient form is made to allow users to provide all the information physicians/admins could need to prepare to help their patients.

## Things To Improve:
Ensuring people cannot enter the patient/admin pages without logging in first, workarounds include simply pasting the url into the browser.

Making account creation more strict, and removing option to create admin accounts in the same way patient accounts are made since they should not be that accessible. Realistically, admin accounts should be provided to employees by developers.

All appointments in patient and admin views are stubbed since this is only a mock, therefore no real data is being used. If there was, functionality to synchronize the patient and admin views would be added. (Example: patient booking an appointment would update status on admin view).

The navigation bar, which pretty much every site has, is empty since there is nothing that needs to be put there.

The styling is really ugly and bare minimum.

A feature for trading time slots with other physicians, or simply taking them, would be useful. This would require the physicians themselves to coordinate externally.

Add place to write key issues for patients in the patient form.

Add address/contact info to site.

