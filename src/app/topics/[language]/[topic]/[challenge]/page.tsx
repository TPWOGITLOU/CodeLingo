import {challenge, getChallenge} from "@/../lib/mongo/utils"
import MultipleChoice from "@/components/MultipleChoice";
import Matching from "@/components/MatchingChallenge";
import Block from "@/components/BlockChallenge";
import Typed from "@/components/TypedChallenge";

const fetchChallenge = async (language: string, challenge_id :string)=>{
  let collection:string;
  switch (language) {
      case "javascript":
          collection="JS-Questions"
          break;
      case "python":
          collection="PY-Questions"
      break;
      default:
          collection="";
          break;
  }
  try{
      const result = await getChallenge(collection, challenge_id);
      return result
  }catch(err){
      throw new Error("There was a problem fetching the data in the topics page");
  }
}

const mockChallenge : challenge = {
    _id: '0',
    topic: 'print',
    language: 'javascript',
    challengeType: 'block',
    challengeQuestion:  'spell console log',
    challengeSnippets: {},
    answer:{},
}


const Challenge = async ({params}: {params:{language:string, topic:string, challenge:string}}) => {
    const language = params.language;
    const challenge_id = params.challenge;
    //const result = await fetchChallenge(language, challenge_id)
    const result = mockChallenge
    if (result){
        const challengeData = result;
        //challengeData.challengeType = "block"  //hard coded to block!
        switch (challengeData.challengeType) {
        case "multiChoice":
            return <MultipleChoice {...challengeData}/>
        case "match":
            return <Matching {...challengeData}/>
        case "typed":
            return <Typed {...challengeData}/>
        case "block":
            return <Block {...challengeData}/>
        default:
            throw new Error ("There was a problem")
            
    }
  }
  
};

export default Challenge;
