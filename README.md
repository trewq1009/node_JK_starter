# Node.js Start
## 설치 및 실행 방법
```sh
npm install
```
```sh
npm start
```

## Mac OS M1
- sharp
    - M1의 경우 brew의 경로가 이전 OS들과 달라 오류가 발생할 수 있다
    - 0.29.0 버전 부터 fix 가 되어 그 이후 버전을 설치하면 에러를 방지 할 수 있다.
    ```sh
    npm install sharp@0.31.0
    ```

## app.js
- 서버를 실행 시키기만 하고 그 외의 모듈&라이브러리 등은 loaders 라는 경로에서 불러온다
    - 이곳에서 다양한 기능을 불러온다면 복잡해 보여 가능한 서버 실행만 보여주기 위해 loaders 사용


