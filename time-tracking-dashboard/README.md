
# ⏱️ Time Tracking Dashboard

A React-based time tracking app that helps you track time spent on projects and calculate earnings.

## Features

- ⏱️ **Timer** — Start, Stop, Pause and Resume tracking time on any project
- 💰 **Earnings Calculation** — Automatically calculates total earnings based on duration and hourly rate
- ✏️ **Edit Entries** — Edit existing time entries via a modal
- 🗑️ **Delete Entries** — Remove unwanted entries
- 🔍 **Search** — Filter entries by project name
- 💾 **Persistent Storage** — All entries saved to localStorage
- 📅 **Date Tracking** — Each entry is stamped with the date it was logged

## Tech Stack

- React
- CSS
- localStorage

## Getting Started

```bash
git clone https://github.com/iss-webbb/time-tracking-dashboard.git
cd time-tracker
npm install
npm run dev
```

## How to Use

1. Enter a project name, description and hourly rate
2. Hit **Start** to begin tracking
3. Use **Pause / Resume** to temporarily stop the timer
4. Hit **Stop** to save the entry
5. View all entries below with total earnings at the top
6. Use the search bar to filter by project name
