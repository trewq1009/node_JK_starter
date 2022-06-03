import express from "express";

// controller
import authController from "../controllers/authController";

const router = express.Router();

// 미들웨어 영역
// ************************
// 아래와 같이 전체 영역에 사용하면 app.use 로 사용하고
// 특정 영역에 사용시 url 다음에 이름을 작성해 준다.
const logged = (req, res, next) => {
    console.log(req.url)
    console.log(req.params)
    console.log(req.query)
    // res.send()
    // res.status(400).json({...})
    next()
}
// app.use(logger)
// ************************




router.get('/sign', logged, (req, res, next) => {
    // 회원가입 뷰 보여주기
    // api 전용 코드이니까 적을 내용이 없다... 차단만
    return res.status(404).json({
        status : "fail",
        message : "잘못된 경로 및 Method 입니다."
    })
});

router.post('/sign', (req, res, next) => {
    // 회원 가입 데이터 DB 저장
    // 컨트롤러 호출 및 함수 인계?
})

router.post('/login', (req, res, next) => {
    // 로그인 검증
});
router.post('/logout', (req, res, next) => {
    // 로그아웃
})
router.get('/profile', (req, res, next) => {
    // 프로필 확인
})
router.get('/profile/:id', (req, res, next) => {
    // 특정 회원 프로필 확인
    // const id = Number(req.params.id)
})

// 컨트롤러 사용시
// router.post('/delete', authController.test);





export default router;