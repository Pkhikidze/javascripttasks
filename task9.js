let availableRooms = 5
let roomPrice = 50
let discount = 10

let userBalance = 100   
let userHasDiscount = true
let userRoomCount = 1

const paymentComplete = (availableRooms > 0 && roomPrice - discount) && ( userRoomCount <= availableRooms && userBalance >= roomPrice - (userHasDiscount > 0 && discount) )
 console.log(paymentComplete);