# Welcome to your Expo app 👋

This is an [Expo](https://expo.dev) project created with [`create-expo-app`](https://www.npmjs.com/package/create-expo-app).

## Get started

1. Install dependencies

   ```bash
   npm install
   ```

2. Start the app

   ```bash
    npx expo start
   ```

In the output, you'll find options to open the app in a

- [development build](https://docs.expo.dev/develop/development-builds/introduction/)
- [Android emulator](https://docs.expo.dev/workflow/android-studio-emulator/)
- [iOS simulator](https://docs.expo.dev/workflow/ios-simulator/)
- [Expo Go](https://expo.dev/go), a limited sandbox for trying out app development with Expo

You can start developing by editing the files inside the **app** directory. This project uses [file-based routing](https://docs.expo.dev/router/introduction).

## Sentry Issue
When Sentry is enabled, Promise.allSettled is undefined. But works well if Sentry is disabled.

Steps to reproduce:
1. Go to app/(tabs)/index.tsx
2. Add a Sentry DNS to `Sentry.init`
3. Run the app
4. Press "Press me" button
5. See that Promise.allSettled fails
6. Disable Sentry and repeat the process
7. Check that Promise.allSettled works

Tested on iOS and Android

### Sentry enabled
https://github.com/user-attachments/assets/21e69307-cfd4-45e0-a9f2-2e1bd050d9ba

### Sentry disabled
https://github.com/user-attachments/assets/928bb1b8-e147-4699-a525-e19cf6754267

