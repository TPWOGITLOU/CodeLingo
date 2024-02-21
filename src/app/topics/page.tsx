"use client";

import Header from "@/components/Header";
import Link from "next/link"
import { useSearchParams } from "next/navigation"
import TopicTile from "@/components/TopicTile";
import {Accordion, AccordionItem} from "@nextui-org/react";
import TopicProgress from "@/components/TopicProgress";

const fetchTopics = (language: string | null) => {

    //"dev data"
    const pythonTopics = [
        {
            topic: "Primitive Data Types",
            language: "Python",
            topicSlug:
                "In Python, primitive data types are like the LEGO bricks of information storage in programs. There are four main types:\n\nIntegers are bricks that represent whole numbers, like 5 or -10.\n\nFloats are bricks that represent numbers with decimal points, like 3.14 or -1.5. Booleans are special bricks that can only be True or False.\n\nStrings are bricks that represent words or numbers inside quotation marks, like 'hello' or '123'\n\nJust like how you can build amazing things with different LEGO pieces, in Python, we use these data types to create all kinds of fun stuff in our programs!",
            topicInfo: {
            strings:
            "Imagine a string is like a magical necklace made of letters, numbers, and symbols. Just like how you can string together colorful beads to make a beautiful necklace, in a string, you string together letters and words to make sentences and messages!\n\nSo, whenever you see a bunch of letters or words inside single or double quotation marks, like 'hello' or \"Python is fun!\", that's a string! You can use strings to write messages, create stories, and even make your computer talk by showing it what to say. Strings are like the building blocks of words and sentences in the world of computers, and they help us communicate and have fun with our programs!",
            integers:
            "In Python, integers are whole numbers that you can count on your fingers: 1, 2, 3, and so on, including negative numbers like -1, -2, -3, and zero.\n\nImagine you have a bunch of colorful marbles. Just like you can count how many marbles you have, we use integers to count things or represent numbers without any decimals. They're super handy when you need to keep track of how many sweets you have left, how many friends you have in your friends list, or how many points you scored in a game! So, think of Python integers as the numbers you use when you're counting or doing simple maths without any fractions or parts. Cool, right?",
            floats:
            "Now imagine you have a slice of pizza and you want to know how many bites it will take to eat it. Sometimes, it won't be a perfect number of bites – it might be something like 2.5 or 3.75 bites. Floats in Python are like those measurements that aren't just whole numbers.\n\nSo, while integers are great for counting things like sweets, floats help us work with measurements that can be split into parts, like the amount of pizza have left or the length of your favorite toy car track. They're handy for dealing with numbers that have those little bits or fractions. Pretty neat, huh?",
            booleans:
            "Alright, now imagine you have a super-duper magical button. When you press it, it can either make something happen or not happen. Booleans in Python are like that magical button – they can be either on or off, just like a light switch!\n\nSo, when we talk about booleans, we're talking about something being true or false. For example, if I say, 'Is the sky blue?' That's a question, right? The answer could be either yes (true) or no (false).\n\nBooleans are like the super helpers in Python that help us make decisions in our programs. We can ask questions like, 'Is it raining outside?' If it's true, we might want to grab our umbrellas. If it's false, we can leave our umbrellas at home! Booleans help us figure out what our programs should do based on what's happening around us.",
                },
        },
        {
            topic: "Displaying Output",
            language: "Python",
            topicSlug:
                'So, imagine you have a magic wand that can make your words appear in thin air! When you say "Abracadabra!", the wand shows whatever you want it to say. Well, in Python, the print command is a bit like your magic wand! For example, if you want Python to show the word "Hello!", you would say:\n\nprint("Hello!")',
            topicInfo: {
                displayingText:
                    "The syntax of the print function is straightforward. You start with the keyword print, followed by brackets (). Inside the brackets, you put whatever you want to display, whether it's text (enclosed in quotes), numbers, variables, or even mathematical expressions.\n\nYou can print out any text by enclosing it in single quotes ' ' or double quotes \" \". For example:\n\nprint('Hello, world!')\nprint(\"Python is awesome!\")",
                displayingVariables:
                    'You can also print the value stored in a variable by passing the variable name inside the print function. For example:\n\nname = "Alice"\n\nprint("Hello,", name)',
                concatenation:
                    'If you want to combine text and variables in the same print statement, you can use commas to separate them. Python automatically adds spaces between the items. For example:\n\nage = 10\nprint("My age is", age)',
            },
        },
        {
            topic: "Variables",
            language: "Python",
            topicSlug:
                "In Python, if we want to store information for later, we can use special things called variables. They're like containers that hold different types of information, such as numbers, words, or even true/false statements (remember our booleans?).\n\nSo, let's say you want to remember your age. You can create a variable called \"my_age\" and put your age inside it. Then, whenever you need to know your age, you just ask Python to show you what's inside \"my_age\", and it'll tell you!\n\nVariables are super helpful because they let us store and use information in our programs. We use variables to keep track of important stuff and make our programs do all sorts of fun and useful things!",
            topicInfo: {
              assignment:
                'Okay, so let\'s say you have a cool new toy, and you want to give it a name. Assigning a variable in Python is a bit like giving your toy a name!\n\nHere\'s how it works:\n\n1. First, you think of a name for your toy. It could be anything you like, like "my_toy" or "favorite_toy".\n2. Then, you write the name of your toy (the variable name) followed by an equals sign (=).\n3. After the equals sign, you put whatever you want to save in your variable. It could be a number, a word, or even a sentence!\n\nFor example, if you have a toy robot and you want to give it the name "my_robot", you can do it like this:\n\nmy_robot = "Robot Toy"\n\nNow, whenever you want to play with your toy robot, you just ask Python to show you what\'s inside the "my_robot" variable, and it\'ll tell you it\'s "Robot Toy"!\n\nSo, assigning variables in Python is like giving names to things you want to remember, just like you give names to your toys so you can find them easily when you want to play. Easy peasy!',
              namingConventions:
                'In Python, there are some rules, or conventions, for naming things.\n\nHere are the main rules:\n\n1. Start with a letter: Just like how words start with letters, in Python, names should start with a letter, not a number or symbol.\n\n2. Use letters, numbers, and underscores: You can use letters from A to Z, numbers from 0 to 9, and underscores (_) in names. But no spaces or special characters like $ or @!\n\n3. Make it descriptive: It\'s like giving your toy a name that tells you what it is. So, instead of naming your robot "Thingy", you might name it "myRobot" because it\'s your robot!\n\n4. CamelCase or snake_case: This one is a bit tricky. You can write names like "myToy" (CamelCase) or "my_toy" (snake_case). CamelCase starts with a lowercase letter and then capitalises the first letter of each new word, whereas snake_case uses all lowercase letters and separates words with underscores.',
            },
        },

    ]

    const javaScriptTopics = [
        {
          topic: 'arrays',
          language: 'JavaScript',
          topicSlug: 'Arrays: storing a list of data',
          topicInfo: 'Arrays are a neat way of storing a list of data items under a single variable name.'
        },
        {
          topic: 'conditional',
          language: 'JavaScript',
          topicSlug: 'Conditional Logic: making decisions in your code',
          topicInfo: "In any programming language, the code needs to make decisions and carry out actions accordingly depending on different inputs. For example, in a game, if the player's number of lives is 0, then it's game over. In a weather app, if it is being looked at in the morning, show a sunrise graphic; show stars and a moon if it is night time. In this article, we'll explore how so-called conditional statements work in JavaScript."
        },
        {
          topic: 'iteration',
          language: 'JavaScript',
          topicSlug: 'Iteration and Loops: a way to do something repeatedly',
          topicInfo: 'You can think of a loop as a computerized version of the game where you tell someone to take X steps in one direction, then Y steps in another.'
        },
        {
          topic: 'Primitives',
          language: 'JavaScript',
          topicSlug: 'Primitive data types',
          topicInfo: { p1: '#Strings', p2: '#Numbers', p3: '#Booleans' }
        },
        {
          topic: 'Variables',
          language: 'JavaScript',
          topicSlug: 'Storing data in variables',
          topicInfo: {
            p1: '#Storing data in variables.  Often, it is useful to package up our data and give it a label...',
            p2: '#Naming Conventions Different programming languages have different **conventions** for all sorts of things, including...'
          }
        }
      ]
    if(language === 'python'){
        return pythonTopics
    } else if(language === 'javascript'){
        return javaScriptTopics
    } else {
        return [pythonTopics, javaScriptTopics].flat()
    }
}

const Topics = () : JSX.Element => {

    // type Topic = {
    //     topic: string
    //     language: string
    //     topicSlug: string
    //     topicInfo: any
    // }

    const searchParams = useSearchParams()
    const language = searchParams.get('language')
    const topicArray = fetchTopics(language)
    
    return (<section>
        <Header />
        <div className="h-screen flex flex-col items-center justify-center content-center font-bold text-center font-mono">
            <Link href="/">home</Link>
            <h1 className="p-2 text-xl">Topics</h1>
            <h2>Here are the topics for {language ? language : 'all languages'}</h2>
            <Accordion variant="splitted" className="px-80">
                {topicArray.map((topicData) => {
                    return (
                        
                        <AccordionItem className="" key={topicData.topicSlug} aria-label={"Accordion-" + topicData.topic} title={<span className="flex flex-row place-items-center justify-between"><p>{topicData.topic}</p><TopicProgress /></span>}>
                            <TopicTile key={topicData.topic} name={topicData.topic} slug={topicData.topicSlug} />
                        </AccordionItem>
                        )
                    })}
            </Accordion>
        </div>
    </section>)
}

export default Topics