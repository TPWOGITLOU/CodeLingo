"use client";

import {Accordion, AccordionItem} from "@nextui-org/react";
import TopicProgress from "@/components/TopicProgress";
import { Topic } from "../../lib/mongo/utils"
import TopicTile from "./TopicTile";


const AccordionUI = (topicsList: Topic[]): JSX.Element => {


    console.log(typeof topicsList.topics, "topic List")

    return(<section className="h-screen flex flex-col items-center justify-center content-center font-bold text-center font-mono">
    <Accordion variant="splitted" className="px-80">
        {topicsList.topicList.map((topicData) => {
            return (
                <AccordionItem className="" key={topicData.topicSlug} aria-label={"Accordion-" + topicData.topic} title={<span className="flex flex-row place-items-center justify-between"><p>{topicData.topic}</p><TopicProgress /></span>}>
             <TopicTile key={topicData.topic} name={topicData.topic} slug={topicData.topicSlug} />
                </AccordionItem>
                )
            })}
    </Accordion>
</section>)    
}

export default AccordionUI