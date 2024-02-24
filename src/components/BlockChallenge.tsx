import { challenge } from "../../lib/mongo/utils"


const Block = (challengeData: challenge)=>{
    const {_id,
  topic,
  language,
  challengeType,
  challengeQuestion,
  challengeSnippets,
  answer,} = challengeData


    return <div>
    
    <p>this is a block challenge about {topic}</p>
    </div>
}

export default Block