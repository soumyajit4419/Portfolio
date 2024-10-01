# Customization Guide

<!-- Customization Image -->
<div align="center">
  <img alt="customization" src="../images/customization.png" />
</div>

Note: All icons used in the project are from [React Icons](https://react-icons.github.io/react-icons/).

## Part 1: Essential Changes

### a) GitHub Actions Related

#### `.github/workflows/main_deploy.yml`

In `main_deploy.yml`, update the repository name by replacing `soumyajit4419Portfolio` with your repository name in the following line:

```bash
git remote set-url origin https://${{secrets.PERSONAL_TOKEN}}@github.com/${{secrets.USERNAME}}/soumyajit4419Portfolio.git
```

#### Code Climate Integration

1. Create an account on [Code Climate](https://codeclimate.com/).
2. Grant Code Climate access to your repository.
3. Navigate to **Repo Settings > Test Coverage**.
4. Copy your **Test Reporter ID**.

#### GitHub Repository Secrets

To set up secrets in GitHub:

1. Go to **Settings > Secrets and variables > Actions** within your repository.
2. Add the following secrets:

   - `CC_TEST_REPORTER_ID`: `<Your Test Reporter ID>`
   - `PERSONAL_TOKEN`: `<Your Personal Access Token>` (with repo access)
   - `USERNAME`: `<Your GitHub Username>`
   - `EMAIL`: `<Your GitHub Email>`

### b) GitHub Pages Related

#### `src/App.js`

In `App.js`, update the repository name by replacing `soumyajit4419Portfolio` with your repository name in the following line:

```javascript
basename="/soumyajit4419Portfolio"
```

#### `package.json`

In `package.json`, modify the following line to include your GitHub username and repository name:

```json
"homepage": "https://<GITHUB_USERNAME>.github.io/<GITHUB_REPO_NAME>"
```

## Part 2: Portfolio Customization

### a) General Files

#### `src/data/socialIcons.js`

You can customize your social media links by updating the `socialIcons.js` file. Add new platforms or modify existing links to reflect your profiles.

#### `src/data/navBarItems.js`

The `navBarItems.js` file controls the navigation bar of your portfolio. You can update existing sections, rename them, or remove items based on your needs. For details on adding new sections, refer to Part 4.

#### `src/data/emailJSData.js`

To set up email functionality for the contact form:

1. Create an account on [EmailJS](https://www.emailjs.com/).
2. Create a new service and email template.
3. Copy your public key, service ID, and template ID.
4. Update the `emailJSData.js` file with the corresponding values for `serviceId`, `templateId`, and `userId`.

### b) Resume Section

To replace the resume:

- Add your resume file to the `src/assets` folder, and ensure the file is properly referenced in the portfolio.

### c) Home Section

#### `src/data/interestedRoles.js`

Customize the roles you are interested in or have experience with by updating the `interestedRoles.js` file.

#### `src/components/Home/Greetings.js`

Replace the default name in `Greetings.js` with your own name by modifying the `name` variable.

#### `src/components/Home/Introduction.js`

You can personalize the introduction section by updating the text and replacing the placeholder image in `Introduction.js`. The file is clearly labeled to help you identify the sections to modify.

### d) About Section

#### `src/data/sideActivities.js`

List your hobbies and side activities by editing the `sideActivities.js` file.

#### `src/data/techStackData.js`

Customize the technologies you are proficient in by modifying the `techStackData.js` file. You can easily add new technologies or update the existing ones.

#### `src/data/toolStackData.js`

Similarly, you can update the `toolStackData.js` file with the tools you frequently use. This file supports adding new tools as needed.

#### `src/components/About/AboutMe.js`

Personalize the "About Me" section by updating the `AboutMe.js` file with your own details. You can edit or add new sections to highlight your experience and skills.

#### `src/components/About/GithubContributions.js`

Replace the default GitHub username in `GithubContributions.js` with your own to display your GitHub activity.

### e) Projects Section

#### `src/assets/Projects`

Add the logos or images associated with your projects in the `src/assets/Projects` directory.

#### `projectData.js`

You can showcase your projects by updating the `projectData.js` file with relevant details such as project descriptions, GitHub links, demo links, and images. You can also add new projects or modify the existing ones.

## Part 3: Optional Changes

### `public/favicon.png`

The `favicon.png` file is the small icon that appears in the browser tab next to the website's title. You can replace the default favicon with your own by uploading a new `favicon.png` file in the `public/` directory.

### `public/index.html`

In `index.html`, you can update the following:

- The **title** of the webpage (which appears in the browser tab) can be modified to reflect your portfolio name.
- The **meta tags** should be updated to include relevant descriptions and keywords for better SEO.

### `src/assets/logo.png`

Replace the existing logo in the Navbar with your own by updating the `logo.png` file. Ensure the image fits well in the layout.
