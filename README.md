# Login Form

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

A clean and minimal Login Form built with HTML, CSS, and JavaScript. This was created as a beginner frontend project to practice web development fundamentals.

## Preview

The form is displayed centered on a full-screen desert landscape background and features:

- Username input field
- Password input field
- "Remember me" checkbox
- "Forgot password?" link
- Login button with basic client-side validation
- "Register" link

## Project Structure

```
Login-Form/
├── index.html          # Main HTML file
└── assets/
    ├── css/
    │   └── style.css   # Stylesheet and background images
    └── js/
        └── app.js      # Form validation logic
```

## Getting Started

No build tools or dependencies are required. Simply open `index.html` in your browser:

```bash
# Clone the repository
git clone https://github.com/BuddheemaRyan/Login-Form.git

# Open the project
cd Login-Form
open index.html   # macOS
# or
start index.html  # Windows
# or
xdg-open index.html  # Linux
```

## How It Works

When the **Login** button is clicked, the `getInfo()` function in `app.js` runs:

1. Reads the values from the **Username** and **Password** fields.
2. If either field is empty, an alert prompts the user to fill in both fields.
3. If both fields are filled, an alert confirms the login attempt with the entered username.

> **Note:** This project uses client-side validation only and does not connect to a back-end or authentication service. It is intended purely as a front-end UI exercise.

## Technologies Used

| Technology | Purpose |
|------------|---------|
| HTML5 | Page structure and form markup |
| CSS3 | Styling, layout, and background image |
| JavaScript (ES6) | Client-side form validation |

## License

This project is open source and available for personal or educational use.
