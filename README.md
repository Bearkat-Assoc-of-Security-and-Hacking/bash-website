# Bearkat Association of Security and Hacking (BASH) Official Website

The official website for the Sam Houston State University Bearkat Association of Security and Hacking (BASH) club. This platform serves as a central hub for club information, upcoming meetings, CTF competitions, resources, and more.

## Table of Contents

- [About BASH](https://www.google.com/search?q=%23about-bash)
- [Features](https://www.google.com/search?q=%23features)
- [Tech Stack](https://www.google.com/search?q=%23tech-stack)
- [Project Structure](https://www.google.com/search?q=%23project-structure)
- [Getting Started](https://www.google.com/search?q=%23getting-started)
  - [Prerequisites](https://www.google.com/search?q=%23prerequisites)
  - [Installation](https://www.google.com/search?q=%23installation)
  - [Running the Development Server](https://www.google.com/search?q=%23running-the-development-server)
  - [Environment Variables](https://www.google.com/search?q=%23environment-variables)
- [API Integrations](https://www.google.com/search?q=%23api-integrations)
- [Styling](https://www.google.com/search?q=%23styling)
- [Deployment](https://www.google.com/search?q=%23deployment)
- [Learning Resources](https://www.google.com/search?q=%23learning-resources)
- [Contributing](https://www.google.com/search?q=%23contributing)
- [License](https://www.google.com/search?q=%23license)

---

## About BASH

The Bearkat Association of Security and Hacking (BASH) at Sam Houston State University is dedicated to fostering passionate cybersecurity enthusiasts and future professionals. We provide a hands-on, collaborative environment where students of all skill levels can learn through engaging projects, ethical hacking, and thrilling competitions.

This website aims to be the go-to resource for current and prospective members, keeping everyone informed about club activities and opportunities in the cybersecurity field.

## Features

- **Dynamic Homepage:** Displays the next upcoming meeting powered by the Google Calendar API.
- **CTF Feed:** Integrates with the CTFtime API to show upcoming Capture The Flag competitions.
- **Club Information:** Dedicated pages for Officers, Resources, Schedule, and Sponsors.
- **Responsive Design:** Built with Tailwind CSS for a seamless experience across devices.
- **Community Integration:** Easy access to our Discord server.

## Tech Stack

- **Frontend Framework:** [Next.js](https://nextjs.org) (App Router)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **Dynamic Data:**
  - [CTFtime API](https://ctftime.org/api/) for competition data.
  - [Google Calendar API](https://developers.google.com/calendar/api) for meeting schedules.
- **Icons:** [React Icons](https://react-icons.github.io/react-icons/)
- **Font Optimization:** [`next/font`](<https://www.google.com/search?q=%5Bhttps://nextjs.org/docs/app/building-your-application/optimizing/fonts%5D(https://nextjs.org/docs/app/building-your-application/optimizing/fonts)>) (using Inter font)
- **Hosting:** Vercel (recommended)

## Project Structure

This project utilizes a non-standard but organized file structure:

- **`app/`**: Contains all page-specific components and routes (e.g., `app/competitions/page.js` and its co-located components in `app/competitions/`).
- **`src/`**: Houses global, reusable components (e.g., `src/Navbar.js`, `src/Footer.js`).
- **`lib/`**: Stores utility functions, especially for API interactions (e.g., `lib/googleCalendar.js`).
- **`public/`**: Static assets like images (e.g., `public/images/bearkat-paw.png`, `public/bash-logo-nobg.png`) and potentially Lottie animation JSON files if used.
- **`app/api/`**: Next.js API routes for backend data fetching (e.g., `app/api/ctf/route.js`).

## Getting Started

Follow these steps to set up and run the BASH website locally.

### Prerequisites

- Node.js (LTS version recommended)
- npm, Yarn, pnpm, or Bun package manager

### Installation

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/your-username/bash-website.git # Replace with your repo URL
    cd bash-website
    ```
2.  **Install dependencies:**
    ```bash
    npm install
    # or
    yarn install
    # or
    pnpm install
    # or
    bun install
    ```

### Running the Development Server

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

Open [http://localhost:3000](https://www.google.com/search?q=http://localhost:3000) with your browser to see the result. The page will auto-update as you edit the files.

### Environment Variables

This project requires environment variables for API keys. Create a `.env.local` file in the root of your project:

```
GOOGLE_API_KEY=your_google_api_key_here
GOOGLE_CALENDAR_ID=your_google_calendar_id_here
```

- **`GOOGLE_API_KEY`**: Obtain this from the Google Cloud Console with Calendar API enabled.
- **`GOOGLE_CALENDAR_ID`**: This is the ID of the specific Google Calendar BASH uses for meetings.

## API Integrations

- **Google Calendar API (`lib/googleCalendar.js`):** Fetches the next upcoming meeting details to display on the homepage.
- **CTFtime API (`app/api/ctf/route.js`):** Provides a proxy API route to fetch upcoming CTF events, ensuring server-side data fetching and revalidation.

## Styling

The project uses [Tailwind CSS](https://tailwindcss.com/) for utility-first styling. Custom CSS is defined in `app/globals.css` for global styles and keyframe animations (e.g., the floating logo animation).

## Deployment

The easiest way to deploy this Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

For more details on deploying Next.js applications, refer to the [Next.js Deployment Documentation](https://nextjs.org/docs/app/building-your-application/deploying).

## Learning Resources

To learn more about Next.js and its ecosystem, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.
- [Tailwind CSS Documentation](https://tailwindcss.com/docs) - official documentation for Tailwind CSS.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome\!

## Contributing

We welcome contributions from BASH members\! If you'd like to contribute, please:

1.  Fork the repository.
2.  Create a new branch for your feature or bug fix.
3.  Make your changes and ensure they follow the existing coding style.
4.  Test your changes thoroughly.
5.  Open a pull request with a clear description of your changes.

## License

This project is released under the [MIT License](LICENSE.md).
