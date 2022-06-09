// 미들웨어 영역
// ************************
// 아래와 같이 전체 영역에 사용하면 app.use 로 사용하고
// 특정 영역에 사용시 url 다음에 이름을 작성해 준다.
// const logged = (req, res, next) => {
//     console.log(req.url)
//     console.log(req.params)
//     console.log(req.query)
//     // res.send()
//     // res.status(400).json({...})
//     next()
// }
// app.use(logger)
// ************************
// router.get('/sign', logged, (req, res, next) => {
//     // 회원가입 뷰 보여주기
//     // api 전용 코드이니까 적을 내용이 없다... 차단만
//     return res.status(404).json({
//         status : "fail",
//         message : "잘못된 경로 및 Method 입니다."
//     })
// });


export default async (req, res, next) => {
    console.log(req.url)
    console.log(req.params)
    console.log(req.query)
    console.log(req.body)
    next()
}