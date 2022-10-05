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


## loaders/index.js
### DatabaseLoader
- 각 DB connection 을 진행 시킨다
    - 다양한 DB를 활용시 loaders file 안에 이름을 정한 후 connecting 설정을 하고
    - 이 곳 경로에서 호출해 setting 한다

### DependencyLoader
- 각각의 의존성 주입을 위한 곳
    - 위 와 같이 DB 및 각각 모듈을 설정하고 전역 사용을 위해 사용된다.

    #### Container 설명
    - Container 란 각각 호출한 모듈 및 라이브러리를 사용하기 위한 라이브러리 이다.
        ```javascript
        import {Container} from "typedi";

        Container.set('사용할 이름', 전역설정할라이브러리);
        ```
    - 호출시
        ```javascript
        const a = Container.get('사용할이름');
        ```

### ExpressLoader
- Express 미들웨어 및 기타 설정을 하는 구역이다.

