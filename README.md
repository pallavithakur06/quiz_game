# PAQuiz

PAQuiz is a safe, interactive learning platform designed for kids aged 6-16, focusing on educational quizzes that promote values like kindness, safety, and social awareness. Built with [Next.js](https://nextjs.org), it features a fun, modern UI, dark mode, and progressive quiz levels.

---

## 🚀 Getting Started

First, install dependencies and run the development server:

```bash
npm install
npm run dev
# or
yarn install && yarn dev
# or
pnpm install && pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the app.

---

## 🧩 Features

- **Kid-Friendly Quizzes:** Levels on safety, values, and awareness.
- **Progressive Unlocking:** Complete a level to unlock the next.
- **Dark Mode:** Persistent and instant, with smooth transitions.
- **Responsive Design:** Works great on desktop and mobile.
- **Contact & Newsletter Forms:** Secure, Formspree-powered messaging.
- **Team & About Pages:** Meet the creators and learn about the mission.
- **Accessible UI:** Keyboard and screen-reader friendly.

---

## 🗂️ Project Structure

```
quiz_game/
├── app/
│   ├── Components/
│   │   ├── About.js
│   │   ├── Contact.js
│   │   ├── Faq.js
│   │   ├── Footer.js
│   │   ├── Hero.js
│   │   ├── Navbar.js
│   │   ├── Team.js
│   │   ├── Theme-toggle.js
│   │   └── quiz-game/
│   │       ├── page.js         # Quiz level selection
│   │       ├── level1/
│   │       │   └── page.js
│   │       ├── level2/
│   │       │   └── page.js
│   │       ├── level3/
│   │       │   └── page.js
│   │       ├── level4/
│   │       │   └── page.js
│   │       └── level5/
│   │           └── page.js
│   ├── globals.css
│   ├── layout.js
│   └── page.js                 # Home page
├── public/
│   └── (images, favicon, etc.)
├── README.md
├── package.json
└── ... (other config files)
```

---

## ✉️ Contact & Newsletter

- **Contact Form:** Messages are sent securely to `aniketsahaworkspace@gmail.com` via Formspree.
- **Newsletter Signup:** Parents can subscribe for updates using the footer form.

---

## 🌙 Dark Mode

Dark mode is persistent and instant, using a combination of localStorage and a hydration-safe script in `app/layout.js`.

---

## 🛡️ Safety & Privacy

- COPPA compliant and child-safe.
- No personal data is stored.
- All communication is secure.

---

## 👨‍💻 Contributing

Pull requests and suggestions are welcome! Please open an issue first to discuss changes.

---

## 📚 Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Learn Next.js](https://nextjs.org/learn)
- [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme)

---

## 📝 License

MIT

---

Made with ❤️ by the PAQuiz Team.
