# Scalpal 

> A medical platform interface built with React and TypeScript from a Figma design.

## Overview

**Scalpal** is a frontend application designed for healthcare professionals.

It provides a dashboard, patient information, mailbox and simulated authentication.

The name *Scalpal* is a wordplay between **scalpel** and **pal**.

## Demo

Log in with a DummyJSON test user (check the DummyJSON docs for current credentials):

Username: emilys  
Password: emilyspass

---

## Features

### Authentication

A login page connected to the **DummyJSON API** is used to simulate authentication.

- Form state managed with React
- API requests using `fetch`
- Access token stored in `localStorage`
- User information retrieved from the authenticated API endpoint

### Dashboard

A dashboard providing an overview of the user's activity and information, based on the original Figma design.

### Patients

A patient section displaying fictional patient data and corresponding information.

### Mailbox

An interactive mailbox allowing users to:

- Browse email previews
- Select an email
- Read the full email content
- Mark emails as read or unread

---

## Architecture

Scalpal is built as a **single-page application** using React Router for client-side navigation.

The application uses nested routes:

```text
├── Login
└── OverallPage        (shared layout)
    ├── /dashboard
    ├── /patients
    └── /mail
```

## Getting started

- bash
- git clone https://github.com/lyhamster/scalpal.git
- cd scalpal
- npm install
- npm run dev

## Tech Stack
- React
- TypeScript
- React Router
- Tailwind CSS
- Fetch API
- DummyJSON
- Figma

### Scope & Limitations
Scalpal is a frontend portfolio project, not a production medical application.
All patient and medical data is fictional.
Authentication is simulated using DummyJSON and localStorage. The project does not implement production-level security, a backend, a database or protected routes.
These choices were intentional, as the main focus of the project was frontend development and UI implementation.
