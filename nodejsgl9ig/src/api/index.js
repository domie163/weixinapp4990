import { Router } from 'express'
import UsersController from './Users'
import FileController from './File'
import ConfigController from './Config'
import CommonController from './Common'
import XueshengyonghuController from './Xueshengyonghu'
import ShangjiaController from './Shangjia'
import JianzhifenleiController from './Jianzhifenlei'
import JianzhixinxiController from './Jianzhixinxi'
import JianzhibaomingController from './Jianzhibaoming'
import JubaoxinxiController from './Jubaoxinxi'
import GuanyuwomenController from './Guanyuwomen'
import ChatController from './Chat'
import StoreupController from './Storeup'
import NewsController from './News'
import MessagesController from './Messages'
import DiscussjianzhixinxiController from './Discussjianzhixinxi'

export default ({ config, db }) => {
	let api = Router()

	api.use('/users', UsersController({ config, db }))

	api.use('/file', FileController({ config, db }))

	api.use('/config', ConfigController({ config, db }))

	api.use('/', CommonController({ config, db }))

	api.use('/xueshengyonghu', XueshengyonghuController({ config, db }))

	api.use('/shangjia', ShangjiaController({ config, db }))

	api.use('/jianzhifenlei', JianzhifenleiController({ config, db }))

	api.use('/jianzhixinxi', JianzhixinxiController({ config, db }))

	api.use('/jianzhibaoming', JianzhibaomingController({ config, db }))

	api.use('/jubaoxinxi', JubaoxinxiController({ config, db }))

	api.use('/guanyuwomen', GuanyuwomenController({ config, db }))

	api.use('/chat', ChatController({ config, db }))

	api.use('/storeup', StoreupController({ config, db }))

	api.use('/news', NewsController({ config, db }))

	api.use('/messages', MessagesController({ config, db }))

	api.use('/discussjianzhixinxi', DiscussjianzhixinxiController({ config, db }))

	return api
}
