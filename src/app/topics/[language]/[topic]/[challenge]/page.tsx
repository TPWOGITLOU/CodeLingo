import {getChallenge} from "@/../lib/mongo/utils"
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


const Challenge = async ({params}: {params:{language:string, topic:string, challenge:string}}) => {
    const language = params.language;
    const challenge_id = params.challenge;
    const challengeData = await fetchChallenge(language, challenge_id)
    switch (challengeData.challengeType) {
      case "multiChoice":
          return <MultipleChoice/>
          break;
      case "match":
          return <Matching/>
          break;
      case "typed":
          return <Typed/>
          break;
      case "block":
          return <Block/>
          break;
  }
  
};

export default Challenge;
