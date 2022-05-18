import express from 'express';
import { prisma } from './prisma';
import nodemailer from 'nodemailer'
import { SubmitFeedbackUseCase } from './use-cases/submit-feedback-use-case';
import { PrismaFeedbacksRepository } from './repositories/prisma/prisma-feedbacks-repository';

export const routes = express.Router()

  

routes.post('/feedbacks',async (req, res)=>{
    
const {type, comment, screenshot} = req.body;
const prismaFeedbacksRepository = new PrismaFeedbacksRepository()


const submitFeedbackUseCase = new SubmitFeedbackUseCase(prismaFeedbacksRepository)
    
await submitFeedbackUseCase.execute({
    type,comment,screenshot,
})

 

    
    //console.log(req.body);
    return res.status(201).send()
})