const PythonVariablesContent = (
    <>
      <h1 className='text-center font-medium underline text-xl'>Python Primitive Data Types</h1>
      <h2 className='text-center font-bold underline text-l'>Strings</h2>
  
      <p className='text-center text-sm'>
        Imagine a string is like a magical necklace made of letters, numbers, and symbols. Just like how you can string together colorful beads to make a beautiful necklace, in a string, you string together letters and words to make sentences and messages! So, whenever you see a bunch of letters or words inside single or double quotation marks, like &apos;hello&apos; or &apos;Python is fun!&apos;, that&apos;s a string! You can use strings to write messages, create stories, and even make your computer talk by showing it what to say. Strings are like the building blocks of words and sentences in the world of computers, and they help us communicate and have fun with our programs!
      </p>
  
      <h2 className='text-center font-bold underline text-l'>Integers</h2>
  
      <p className='text-center text-sm'>
        In Python, integers are whole numbers that you can count on your fingers: 1, 2, 3, and so on, including negative numbers like -1, -2, -3, and zero. Imagine you have a bunch of colorful marbles. Just like you can count how many marbles you have, we use integers to count things or represent numbers without any decimals. They&apos;re super handy when you need to keep track of how many sweets you have left, how many friends you have in your friends list, or how many points you scored in a game! So, think of Python integers as the numbers you use when you&apos;re counting or doing simple maths without any fractions or parts. Cool, right?
      </p>
  
      <h2 className='text-center font-bold underline text-l'>Floats</h2>
  
      <p className='text-center text-sm'>
        Now imagine you have a slice of pizza and you want to know how many bites it will take to eat it. Sometimes, it won&apos;t be a perfect number of bites – it might be something like 2.5 or 3.75 bites. Floats in Python are like those measurements that aren&apos;t just whole numbers. So, while integers are great for counting things like sweets, floats help us work with measurements that can be split into parts, like the amount of pizza you have left or the length of your favorite toy car track. They&apos;re handy for dealing with numbers that have those little bits or fractions. Pretty neat, huh?
      </p>
  
      <h2 className='text-center font-bold underline text-l'>Boolean</h2>
  
      <p className='text-center text-sm'>
        Alright, now imagine you have a super-duper magical button. When you press it, it can either make something happen or not happen. Booleans in Python are like that magical button – they can be either on or off, just like a light switch! So, when we talk about booleans, we&apos;re talking about something being true or false. For example, if I say, &apos;Is the sky blue?&apos; That&apos;s a question, right? The answer could be either yes (true) or no (false). Booleans are like the super helpers in Python that help us make decisions in our programs. We can ask questions like, &apos;Is it raining outside?&apos; If it&apos;s true, we might want to grab our umbrellas. If it&apos;s false, we can leave our umbrellas at home! Booleans help us figure out what our programs should do based on what&apos;s happening around us.
      </p>
    </>
  );
  
  const PythonPrimitivesContent = (
    <>
      <h1 className='text-center font-medium underline text-xl'>Python Variables</h1>
      <h2 className='text-center font-bold underline text-l'>Python Variable Assignment</h2>
  
      <p className='text-center text-sm'>
        Okay, so let&apos;s say you have a cool new toy, and you want to give it a name. Assigning a variable in Python is a bit like giving your toy a name! Here&apos;s how it works:
      </p>
  
      <ul className='text-center'>
        <li>
          First, you think of a name for your toy. It could be anything you like, like &apos;my_toy&apos; or &apos;favorite_toy&apos;
        </li>
        <li>
          Then, you write the name of your toy (the variable name) followed by an equals sign (=).
        </li>
        <li>
          After the equals sign, you put whatever you want to save in your variable. It could be a number, a word, or even a sentence! For example, if you have a toy robot and you want to give it the name &apos;my_robot&apos;, you can do it like this: <code>&apos;my_robot&apos; = &apos;Robot Toy&apos;</code>
        </li>
      </ul>
  
      <p className='text-center text-sm'>
        Now, whenever you want to play with your toy robot, you just ask Python to show you what&apos;s inside the &apos;my_robot&apos; variable, and it&apos;ll tell you it&apos;s &apos;Robot Toy&apos;! So, assigning variables in Python is like giving names to things you want to remember, just like you give names to your toys so you can find them easily when you want to play. Easy peasy!
      </p>
  
      <h2 className='text-center font-bold underline text-l'>Python Naming Conventions</h2>
  
      <p className='text-center text-sm'>
        In Python, there are some rules, or conventions, for naming things. Here are the main rules:
      </p>
  
      <ul className='text-center text-sm'>
        <li>
          Start with a letter: Just like how words start with letters, in Python, names should start with a letter, not a number or symbol.
        </li>
        <li>
          Use letters, numbers, and underscores: You can use letters from A to Z, numbers from 0 to 9, and underscores (_) in names. But no spaces or special characters like $ or @!
        </li>
        <li>
          Make it descriptive: It&apos;s like giving your toy a name that tells you what it is. So, instead of naming your robot &apos;Thingy&apos; you might name it &apos;myRobot&apos; because it&apos;s your robot!
        </li>
        <li>
          CamelCase or snake_case: This one is a bit tricky. You can write names like &apos;myToy&apos; (CamelCase) or &apos;my_toy&apos; (snake_case). CamelCase starts with a lowercase letter and then capitalizes the first letter of each new word, whereas snake_case uses all lowercase letters and separates words with underscores.
        </li>
      </ul>
    </>
  );
  
  const PythonPrintContent = (
    <>
      <h1 className='text-center font-medium underline text-xl'>Printing In Python</h1>
      <h2 className='text-center font-bold underline text-l'>Printing Syntax</h2>
  
      <p className='text-center text-sm'>
        The syntax of the print function is straightforward. You start with the keyword print, followed by brackets (). Inside the brackets, you put whatever you want to display, whether it&apos;s text (enclosed in quotes), numbers, variables, or even mathematical expressions. You can print out any text by enclosing it in single quotes &apos; &apos; or double quotes &apos;&apos; &apos;&apos;. For example: <code>print(&apos;Hello, world!&apos;) print(&apos;Python is awesome!&apos;)</code>
      </p>
  
      <h2 className='text-center font-bold underline text-l'>Variables</h2>
  
      <p className='text-center text-sm'>
        You can also print the value stored in a variable by passing the variable name inside the print function. For example: <code>name = &apos;Alice&apos; print (&apos;Hello&apos;, name)</code>
      </p>
  
      <h2 className='text-center font-bold underline text-l'>Concatenation</h2>
  
      <p className='text-center text-sm'>
        If you want to combine text and variables in the same print statement, you can use commas to separate them. Python automatically adds spaces between the items. For example: <code>age = 10 print(&apos;My age is&apos;, age)</code>
      </p>
    </>
  );
  //
  
  export { PythonPrimitivesContent, PythonPrintContent, PythonVariablesContent };
  