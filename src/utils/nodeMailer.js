import nodemailer from 'nodemailer'

// export const sendMail = async (user_email, otp_code) => {
//     const transpoter = nodemailer.createTransport({
//         service: 'gmail',
//         port: 465,
//         auth: {
//             user: 'hafizaiqraaslam1@gmail.com',

//             pass: 'yubi brio cdgc jita' 
//         }
//     })

//     const info = {
//         from: 'hafizaiqraaslam1@gmail.com',
//         to: user_email,
//         subject: 'Test-1',
//         // html:'',
//         text: `this is your otp: ${otp_code}`
//     }

//     await transpoter.sendMail(info)
//         .then(info => console.log(info.response))
//         .catch(error => console.log(error))
// }
export const sendMail = async (user_email, otp_code) => {
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        port: 465,
        auth: {
            user: 'hafizaiqraaslam1@gmail.com',
            pass: 'yubi brio cdgc jita'  // ⚠️ Consider using environment variables for this
        }
    });

    const info = {
        from: 'hafizaiqraaslam1@gmail.com',
        to: user_email,
        subject: 'Your OTP Code',
        text: `This is your OTP: ${otp_code}`
    };

    try {
        const response = await transporter.sendMail(info);
        console.log('Email sent: ' + response.response);
        return true;
    } catch (error) {
        console.error('Error sending email:', error);
        return false;
    }
};
