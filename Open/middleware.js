const { response } = require("express")

const timeCheck =(req,res,next)=>{
const date= new Date(Date.now())
if(date.getDay()!=0 && date.getDay()!=6 && date.getHours() >=9 && date.getHours() <= 17)
  next()
else{
  res.redirect('/closing.html')
}

}
module.exports = timeCheck