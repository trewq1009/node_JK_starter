const test = ((req, res) => {
    return res.status(200).json({
        status : 'success',
        message : '테스트 입니다.'
    })
})

export default {test};