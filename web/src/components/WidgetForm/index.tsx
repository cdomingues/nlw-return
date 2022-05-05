import { CloseButton } from "../CloseButton";

import bugImgUrl from '../../images/bug.svg';
import ideaImgUrl from '../../images/idea.svg';
import thoughtImgUrl from '../../images/thought.svg';
import { Key } from "phosphor-react";
import { useState } from "react";

import { FeedbackContentStep } from "./Steps/FeedbackContentStep";
import { FeedbackTypeStep } from "./Steps/FeedbackTypeStep";
import { FeedbackSuccessStep } from "./Steps/FeedbackSuccessStep";


export const feedbackTypes = {
    BUG: {
        title:'Problema',
        image:{
            source:bugImgUrl,
            alt:'Imagem de um inseto'
        }
    }
    ,
    IDEA: {
        title: 'Idéia',
        image:{
            source: ideaImgUrl,
            alt:'Imagem de lampada'
        }
    },
    OTHER:{
        title:'Outro',
        image:{
            source: thoughtImgUrl,
            alt: 'Imagem de um balão de pensamento'
        }
    }
    
}



export type FeedbackType = keyof typeof feedbackTypes;


export function Widgetform(){

     const [feedBackType,setFeedBackType] = useState<FeedbackType | null>(null)
     const [feedbackSent,setFeedbackSent] = useState(false)

     function handleRestartFeedback(){
        setFeedbackSent(false);
        setFeedBackType(null)
     }

    return(
        <div className="bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto">
            

              {feedbackSent ?(
              <FeedbackSuccessStep onFeedbackRestartRequested={handleRestartFeedback}/>
              ) : 
              (
                  <>
                { !feedBackType ? (
                      <FeedbackTypeStep onFeedbackTypeChanged ={setFeedBackType}/>
                    ) : (
                        <FeedbackContentStep 
                        feedbackType={feedBackType}
                        onFeedbackRestartRequested={handleRestartFeedback}
                        onFeedbackSent={()=>setFeedbackSent(true)}
                        />
                    )
                }
                </>

              ) 
            }

            <footer className="text-xs text-neutral-400">
            Feito por <a className="underline underline-offset-2" href="">Carlos Domingues</a>
            </footer>
        </div>
    )
}