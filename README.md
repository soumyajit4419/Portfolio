<h2 align="center">
  Vercel Deployment GitHub Action
</h2>

<div align="center">
  <img alt="Demo" src="./Images/readme-img1.png" />
</div>

<br/>

<center>

[![forthebadge](https://forthebadge.com/images/badges/built-with-love.svg)](https://forthebadge.com) &nbsp;
[![forthebadge](https://forthebadge.com/images/badges/made-with-javascript.svg)](https://forthebadge.com) &nbsp;
[![forthebadge](https://forthebadge.com/images/badges/open-source.svg)](https://forthebadge.com) &nbsp;
![GitHub Repo stars](https://img.shields.io/github/stars/your-username/your-repo-name?color=blue&logo=github&style=for-the-badge) &nbsp;
![GitHub forks](https://img.shields.io/github/forks/your-username/your-repo-name?color=blue&logo=github&style=for-the-badge)

</center>

<h3 align="center">
    🔹
    <a href="https://github.com/your-username/your-repo-name/issues">Report Bug</a> &nbsp; &nbsp;
    🔹
    <a href="https://github.com/your-username/your-repo-name/issues">Request Feature</a>
</h3>

## TL;DR

You can fork this repo to modify and make changes of your own. Please give proper credit by linking back to [your-username](https://github.com/your-username/your-repo-name). Thanks!

## Requirements

Before using this GitHub Action, make sure you have the following set up:

- Vercel account: Sign up for a Vercel account at [https://vercel.com](https://vercel.com).
- Vercel token: Generate a Vercel token with appropriate permissions in your Vercel account settings. Add the token as a secret named `VERCEL_TOKEN` in your GitHub repository.
- Vercel organization ID: Obtain your Vercel organization ID and add it as a secret named `VERCEL_ORG_ID` in your GitHub repository.
- Vercel project ID: Obtain the project ID for your Vercel project and add it as a secret named `VERCEL_PROJECT_ID_STATIC` in your GitHub repository.

## Workflow Details

The GitHub Action workflow is triggered on every push to the `preview/fix` branch. Here's an overview of the workflow steps:

1. **Checkout code:** This step checks out the repository code for the workflow to run on.

2. **Allow unsecure commands:** This step sets an environment variable to allow unsecure commands during the workflow.

3. **Deploy to Staging:** This step uses the Vercel GitHub Action (`amondnet/vercel-action`) to deploy the React application to Vercel. It requires the Vercel token, organization ID, project ID, and scope as secret inputs.

## Usage

To use this GitHub Action in your repository, create a YAML file (e.g., `.github/workflows/vercel.yaml`) and copy the provided workflow code into it. Make sure to set up the required secrets in your GitHub repository settings.

```yaml
name: Vercel Deployment

on:
  push:
    branches:
      - preview/fix

jobs:
  deploy:
    runs-on: ubuntu-latest

    steps:
      - name: Checkout code
        uses: actions/checkout@v2
        
      - name: Allow unsecure commands
        run: echo "ACTIONS_ALLOW_UNSECURE_COMMANDS=true" >> $GITHUB_ENV

      - name: Deploy to Staging
        id: deploy-vercel-staging
        uses: amondnet/vercel-action@v20
        with:
          vercel-token: ${{ secrets.VERCEL_TOKEN }}
          vercel-org-id: ${{ secrets.VERCEL_ORG_ID }}
          vercel-project-id: ${{ secrets.VERCEL_PROJECT_ID_STATIC}}
          scope: ${{ secrets.VERCEL_ORG_ID }}
Feel free to customize the workflow according to your deployment needs.

License
This GitHub Action is licensed under the MIT License.

javascript
Copy code

Replace `your-username` and `your-repo-name` with your GitHub username and
