import React from 'react'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog"



function accordPage() {

    const faq = [
        {
            "question": "Who is Tejas Agrawal",
            "answer": "Tejas Agrawal is The Best Programmer!"
        },
        {
            "question": "Fav Food",
            "answer": "Haldiram ke dhokle 😂😂"
        },

    ]

    return (
        <div className=' h-screen flex  justify-center items-center flex-col'>
            <h1>Accord Page</h1>
            {
                faq.map(item => (
                    <Accordion type="single" collapsible>
                        <AccordionItem value="item-1">
                            <AccordionTrigger>{item.question}</AccordionTrigger>
                            <AccordionContent>
                                {item.answer}
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                ))
            }


            <AlertDialog>
                <AlertDialogTrigger>Open</AlertDialogTrigger>
                <AlertDialogContent>
                    <AlertDialogHeader>
                        <AlertDialogTitle>Hey How's Going Tejas</AlertDialogTitle>
                        <AlertDialogDescription>
                            This is my first Step toward the ShadCn and NextJS
                            And I am amazed that how simple it is.
                        </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                        <AlertDialogCancel>Cancel</AlertDialogCancel>
                        <AlertDialogAction>Continue</AlertDialogAction>
                    </AlertDialogFooter>
                </AlertDialogContent>
            </AlertDialog>
        </div>


    )
}

export default accordPage
