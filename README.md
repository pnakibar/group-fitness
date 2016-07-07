# group-fitness
## Run
### Pre-requisites
- Android Emulator & React-native environment
  - [Setting up the environment](https://facebook.github.io/react-native/docs/getting-started.html#content)
  - [Android Emulator (after installing the Android Studio)](https://developer.android.com/studio/run/emulator.html)
  - [Android virtual devices](https://developer.android.com/studio/run/managing-avds.html)
  - Add ~/Android/Sdk/tools to your path
- [rnpm](https://github.com/rnpm/rnpm)

### Android
#### Start the Android Emulator
Ensure you already have an AVD!
```bash
emulator -list-avds
emulator -avd 'avd name'
```
#### Serve the content
```bash
npm install
rnpm link
react-native run-android
npm start
```

# Author
Pedro Mathias Nakibar - @pnakibar
