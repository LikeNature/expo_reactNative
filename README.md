### ~2021.03.15. Clone Project 메인화면 구현, Expo에서 RN Build test

# React-Native in Expo

https://reactnative.dev/docs/environment-setup

## create-react-native-app 설치하고 사용하기

```bash
npm install -g create-react-native-app
```

## 리액트 네이티브 앱 실행하기

```bash
create-react-native-app testProject
```

## 앱 실행하기

```bash
npm start
```

### Expo 설치하고 사용하기

```bash
npm install -g expo-cli
```

```bash
expo init AwesomeProject

cd AwesomeProject
npm start # you can also use: expo start
```

### 어플리케이션 확인

https://snack.expo.io/@nature0219/cloneproject_rn

### React-Native 초기화

```bash
npm start --reset-cache //메트로 서버 캐시 초기화
```

### Uninstalling npm packeage 

```bash
# using npm install <package-name> in the node_modules folder, run
npm uninstall <package-name>

```

If the package was a development dependency, listed in the devDependencies of the `package.json` file, you must use the `-D` / `--save-dev` flag to remove it from the file:

```bash
npm uninstall -S <package-name>
npm uninstall -D <package-name>
```

If the package is installed **globally**, you need to add the `-g` / `--global` flag:

```bash
npm uninstall -g <package-name>
```

for example:

```bash
npm uninstall -g webpack
```
