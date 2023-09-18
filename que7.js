// Imagine you are working for a digital banking platform, and your team is tasked with improving 
// the security of customer accounts. Your challenge is to create a function that generates a 
// random 4-digit OTP (One-Time Password) for authentication purposes.

function generateOtp(){
    let num= (Math.random()*9000)+1000
    number=Math.floor(num)
    console.log(number)
   return number    
}

console.log(`Here is your otp: ${generateOtp()}`);