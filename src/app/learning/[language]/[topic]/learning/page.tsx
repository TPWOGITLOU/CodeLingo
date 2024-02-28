'use server'
import { pythonLearning } from "../../../../../../lib/interfaces/learningUtils";
import { javascriptLearning } from "../../../../../../lib/interfaces/learningUtils";
import Link from "next/link";
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Divider,
} from "@nextui-org/react";


const Learning = async ({
  params,
}: {
  params: { language: string; topic: string };
}) => {
  let language = params.language;
  let topic = params.topic;

  let pageTitle:string = ''
  let pageSlug:string = ''
  let pageContent:any

  if(language === 'python'){
    switch(topic){

      case 'variables':
        pageTitle = pythonLearning.variables.topic
        pageSlug = pythonLearning.variables.topicSlug
        pageContent =pythonLearning.variables.topicInfo
      break
      case 'print':
        pageTitle = pythonLearning.print.topic
        pageSlug = pythonLearning.print.topicSlug
        pageContent =pythonLearning.print.topicInfo
      break
      case 'primitives':
        pageTitle = pythonLearning.primitives.topic
        pageSlug = pythonLearning.primitives.topicSlug
        pageContent =pythonLearning.primitives.topicInfo
      break
    }
  }
  else {
      switch(topic){
      case 'variables':
        pageTitle = javascriptLearning.variables.topic
        pageSlug = javascriptLearning.variables.topicSlug
        pageContent =javascriptLearning.variables.topicInfo
      break
      case 'console':
        pageTitle = javascriptLearning.console.topic
        pageSlug = javascriptLearning.console.topicSlug
        pageContent =javascriptLearning.console.topicInfo
      break
      case 'primitives':
        pageTitle = javascriptLearning.primitives.topic
        pageSlug = javascriptLearning.primitives.topicSlug
        pageContent =javascriptLearning.primitives.topicInfo
      break
      }
  }

  return (
    <>
      <div className="mt-6 flex flex-row justify-center text-lg">
        <Link href="/">Home</Link>
      </div>
      <section className="mt-10 flex flex-row justify-center">
        <div className="md:max-w-[65%] w-[100%] flex flex-col flex-wrap gap-5">
          <Card className="w-full border-8 border-border-colour  bg-nice-yellow bg-opacity-50 flex-wrap p-5">
            <CardHeader className="flex flex-col">
              <h1 className="text-3xl font-bold">Welcome to Learning</h1>
              <br></br>
              <p className="text-lg font-semibold ">
                Here is some useful information about {pageTitle}
              </p>
              <br />
              <p className="text-lg font-semibold ">
                {pageSlug}
              </p>
            </CardHeader>
            <Divider />
            <CardBody>
              {pageContent}
            </CardBody>
            <CardFooter className="flex justify-center">
              <Link href={`../../../${params.language}/${params.topic}/challenges`}>
              <Button
                radius="full"
                size="sm"
                className="bg-gradient-to-tr from-pink-500 to-yellow-500 text-white shadow-lg"
              >
                Challenges
              </Button>
              </Link>
            </CardFooter>
          </Card>
        </div>
      </section>
    </>
  );
};



export default Learning;
