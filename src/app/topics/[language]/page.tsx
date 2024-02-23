import Header from "@/components/Header";
import Link from "next/link"


import { getTopics } from "../../../../lib/mongo/utils";
import AccordionUI from "@/components/AccordionUI";

const fetchTopics = async (language: string)=>{
    let collection:string;
    switch (language) {
        case "javascript":
            collection="JS-Topics"
            break;
        case "python":
            collection="PY-Topics"
        break;
        default:
            collection="";
            break;
    }
    try{
        return await getTopics(collection);
    }catch(err){
        throw new Error("There was a problem fetching the data in the topics page");
    }
}


const Topics = async ({params}: {params:{language:string}}) => {
    const language = params.language;
    const topics = await fetchTopics(language)

return (<section>
        <Header />
        <div className="mt-6 flex flex-col items-center justify-center font-bold text-center font-mono">
            <Link href="/">home</Link>           
            <h1 className="p-2 text-xl">Topics</h1>
            <h2>Here are the topics for {language}</h2>
            </div>
                {!topics? <p>loading</p>: 
                <AccordionUI list={topics}/>}          
    </section>)
}

export default Topics