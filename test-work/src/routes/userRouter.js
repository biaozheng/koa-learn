import Router from 'koa-router'
import user from '../api/userController'

const router = new Router()

router.prefix('/api')
router.post('/user', user.getUserInfo)

module.exports = router