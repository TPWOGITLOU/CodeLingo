import { challenge } from "../../lib/mongo/utils"

const Matching = (challengeData: challenge)=>{
    const {_id,
        topic,
        language,
        challengeType,
        challengeQuestion,
        challengeSnippets,
        answer,} = challengeData
      
      
          return <div>
          
          <p>this is a matching challenge about {topic}</p>
          </div>
}

export default Matching