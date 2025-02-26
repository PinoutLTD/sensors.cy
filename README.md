# sensors.social

## 📌 Overview

**sensors.social** is a decentralized application that visualizes data from sensors sending their measurements to the blockchain (Polkadot network, Robonomics parachain). The platform supports two modes of operation:

- **Peer-to-peer connectivity** for direct access to sensor data.
- **Federative concept** for accumulating sensor data and displaying measurement history.

For more details on connectivity and how to deploy your own map interface (or even a connectivity server), visit [Robonomics Academy](https://robonomics.academy/en/learn/sensors-connectivity-course/overview/).

## 🚀 Deployment

### 1️⃣ Clone the Repository

Simply clone the repository and navigate to the project directory:

```sh
 git clone https://github.com/airalab/sensors.social.git
 cd sensors.social
```

If you plan to contribute or customize the project extensively, consider forking it first.

### 2️⃣ Install Dependencies

Ensure **Node.js** and **Yarn** are installed:

```sh
 node -v  # Should be >= 16
 yarn -v  # Should be installed
```

Then install the required dependencies:

```sh
 yarn install
```

### 3️⃣ Start the Server Locally for Development

```sh
 yarn dev
```

## 🔧 Setup Your Own Map (For Experienced Users)

### 1️⃣ Deploy Your Own Instance of the Map

### 2️⃣ Enable GitHub Actions

To activate GitHub Actions in your repository:

- Navigate to the **Actions** tab in your GitHub repository.
- If prompted, enable workflows by clicking **Enable GitHub Actions**.
- Ensure that workflows are correctly set up in `.github/workflows/`.

### 3️⃣ Configure Deployment

#### Option 1: Deploy Without a Custom Domain

- Open `.github/workflows/main.yaml` and remove the line:
  ```yaml
  cname: sensors.social
  ```
- Add the following permissions block right below `runs-on: ubuntu-latest`:
  ```yaml
  permissions:
    contents: write
  ```
- In `vite.config.js`, add the following line to the `defineConfig` object, just above the `plugins` section:
  ```javascript
  base: "/<repository_name>/",
  ```
  Replace `<repository_name>` with the name of your fork.

#### Option 2: Deploy With a Custom Domain

- Open `.github/workflows/main.yaml` and replace:
  ```yaml
  cname: sensors.social
  ```
  with your custom domain:
  ```yaml
  cname: your-custom-domain.com
  ```
- Add the following permissions block right below `runs-on: ubuntu-latest`:
  ```yaml
  permissions:
    contents: write
  ```

### 4️⃣ Finalizing Deployment

After modifying the necessary files, deploy your instance of the map by following these steps:

1. Commit and push the changes to your forked repository:
   ```sh
   git add .
   git commit -m "Configured deployment settings"
   git push origin main
   ```
2. Wait until the GitHub Actions workflow successfully completes.
3. Navigate to the **Pages** section in your repository **Settings**.
4. Enable GitHub Pages by selecting **Deploy from a branch** as the source.
5. Choose the `gh-pages` branch and the root folder.
6. Save the settings—GitHub Pages will deploy your instance of the map.

You can now access your deployed map using the provided GitHub Pages URL.

## ❓ Support

For questions or suggestions, create an **issue** in the repository.

---

