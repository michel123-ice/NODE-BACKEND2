import e from "express";
import path from 'path';
import { fileURLToPath } from "url";
import mongoose from 'mongoose'
import cookieParser from "cookie-parser";   
import { config } from "dotenv";
import cors from 'cors';
config()
import userRouter from './routes/userRoutes.js';
import postRouter from './routes/postRoutes.js';
// const express = require('express');
// const path = require('path');
const app = e();
const port = process.env.PORT || 3500 ;
const MONGODB_URL = process.env.MONGODB_URI


mongoose
  .connect(MONGODB_URL)
  .then(()=>console.log("mongodb connected successfully"))
    .catch((err)=>console.log("mongodb connection failed",err));

    app.use(cookieParser());

app.use(e.json());
app.use(e.urlencoded({extended:true}))

app.use(e.static('./box'))

app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true,
}));

app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'box','index.html'))
})

app.use('/user', userRouter);
// app.use('/comment', CommentRouter);
app.use('/post', postRouter);


// app.post('/register', forSignup);

// app.get('/post',getAllPosts);

// app.get('/post/:id', get1post);

// app.delete('post/:id', del1post);

// app.put('/post/id',update1post);

// app.post('/create',(req,res)=>{
    // let {firstname,lastname,email,password} = req.body

    // let myTable = `
        
    // // <table border="1">
    // //     <thead>
    // //         <tr>
    // //             <th>FirstName</th>
    // //             <th>LastName</th>
    // //             <th>Email</th>
    // //             <th>Password</th>
    // //         </tr>
    // //     </thead>
    // //     <tbody>
    //         // <tr>
    //         //     <td>${firstname}</td>
    //         //     <td>${lastname}</td>
    //         //     <td>${email}</td>
    //         //     <td>${password}</td>
    // //         </tr>
    // //     </tbody>
    // // </table>
    // // `

    // res.send(myTable)
// })

// app.post('/create',(req,res)=>{
//     let myTable = `
        
//     <table border="1">
//         <thead>
//             <tr>
//                 <th>FirstName</th>
//                 <th>LastName</th>
//                 <th>Email</th>
//                 <th>Password</th>
//             </tr>
//         </thead>
//         <tbody>
//             <tr>
//                 <td>${req.body.firstname}</td>
//                 <td>${req.body.lastname}</td>
//                 <td>${req.body.email}</td>
//                 <td>${req.body.password}</td>
//             </tr>
//         </tbody>
//     </table>
//     `

//     res.send(myTable)
// })


// app.get('/about',(req,res)=>{
//     res.sendFile(path.join(__dirname,'box','about.html'))
// })


app.listen(port,()=>{
    console.log(`server is runninng on port : ${port}`)
    // console.log("server is running on port " + port)
})
