/**
    * @description      : 
    * @author           : Hp
    * @group            : 
    * @created          : 29/07/2024 - 19:07:35
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 29/07/2024
    * - Author          : Hp
    * - Modification    : 
**/
import  PrismaClient  from "@prisma/client";
import { HttpCode } from "../core/constants";
import  Chalk  from "chalk";
const controllerUser = {
 getallUser : async(req:Request,res:Response)=>{
    try{
const user = await Prisma.user.finfMany();
res.send(user).status(HttpCode.OK)
    }catch (error) {
        console.log(chalk.red(error))
    }
 }
}
export default controllerUser;