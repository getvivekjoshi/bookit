import nc from 'next-connect'
import dbConnect from '../../../config/dbConnect'

import {allRooms, newRooms, getSingleRoom} from '../../../controllers/roomController'
import onError from '../../../middlewares/errors'

const handler = nc({onError});
dbConnect();


handler.get(allRooms)
handler.get(getSingleRoom)
handler.post(newRooms)

export default handler