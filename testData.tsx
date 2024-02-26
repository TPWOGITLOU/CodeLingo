export interface Challenge {
    topic: string;
    language: string;
    challengeType: string;
    challengeQuestion: string;
    challengeSnippets: [
      {
        Q1: string;
        Q2: string;
        Q3: string;
        Q4: string;
      },
      {
        A1: string;
        A2: string;
        A3: string;
        A4: string;
      }
    ];
    answer: [
      { correctAns1: [string, string] },
      { correctAns2: [string, string] },
      { correctAns3: [string, string] },
      { correctAns4: [string, string] }
    ];
  }
  
  export const challenge: Challenge = {
    topic: "primitives",
    language: "JavaScript",
    challengeType: "match",
    challengeQuestion: "Match the following to the correct JavaScript data type:",
    challengeSnippets: [
      {
        Q1: "Hello",
        Q2: "3.4",
        Q3: "false",
        Q4: "'56'"
      },
      {
        A1: "String",
        A2: "Number",
        A3: "Boolean",
        A4: 'String'
      }
    ],
    answer: [
      { correctAns1: ["Hello", "String"] },
      { correctAns2: ["3.4", "Number"] },
      { correctAns3: ["false", "Boolean"] },
      { correctAns4: ["'56'", "String"] },
    ]
  };
  