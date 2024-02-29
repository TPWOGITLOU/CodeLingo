const JavaScriptPrimitivesContent = (
    <>
      <h1 className='text-center font-bold underline text-xl'>JavaScript - Primitives</h1>
      <br/>
      <h3 className='font-bold underline text-l text-center'>Primitive Data Types</h3>
      <br/>
      <p className='text-sm text-left indent-8'>Programming languages use lots of different data types to store information. While some of them get pretty complicated, we&apos;ll just be using three simple (or &apos;Primitive&apos;) ones for now:</p>
      <ul className='text-left list-disc list-inside text-sm'>
        <li>Strings</li>
        <li>Numbers</li>
        <li>Booleans</li>
      </ul>
      <h3 className='font-bold underline text-l text-center'>Strings</h3>
      <p className='text-left indent-8 text-sm'>Strings are used to store a group of characters, like letters, numbers, or punctuation. We can use them to make words or sentences. In JavaScript, strings need to be inside a pair of either &apos;single quote&apos; or &quot;double quote&quot; marks so that the program knows where they start and end.</p>
      <h3 className='font-bold underline text-l text-center'>Numbers</h3>
      <p className='text-left indent-8 text-sm'>JavaScript can store numbers in lots of different formats like integers such as 1, 2, 3, 4, or decimals such as 3.14159. These shouldn&apos;t be in quote marks, otherwise JavaScript will think they&apos;re a string of characters and it can do cool stuff (like calculations) with them!</p>

      <h3 className='font-bold underline text-l text-center'>Booleans</h3>
      <p className='text-left indent-8 text-sm'>Booleans are used to tell us if something is &apos;true&apos; or &apos;false&apos;. For example:</p>
      <code className='text-sm text-left indent-8 bg-slate-200 dark:bg-slate-600 rounded-sm p-0.5'><span className="text-blue-700 dark:text-yellow-400">(</span><span className="text-black dark:text-white">9  &lt; 10</span><span className="text-blue-700 dark:text-yellow-400">)</span> is <span className="text-blue-700 dark:text-blue-300">true</span> and (Red is the same as Green) is <span className="text-blue-700 dark:text-blue-300">false</span> even though these are words, JavaScript knows what they mean so when we use them as a boolean they should <em>not</em> be in quote marks (otherwise they&apos;re just stored as a string!)</code>
    </>
  );
  
  const JavaScriptConsoleContent = (
    <>
      <h1 className='text-center font-bold underline text-xl'>JavaScript - The Console</h1>
  
      <h3 className='font-bold underline text-l'>The Console: Displaying Information</h3>
      <p className='text-left indent-8 text-sm'>In order to know what a program is doing, we need to be able to see a human-readable output. In JavaScript, we can use the console to view outputs. There are different methods to share things like errors, but when we just want to output some information we can just use <code className='text-sm bg-slate-200 dark:bg-slate-600 rounded-sm p-0.5 text-black dark:text-white'>console.log<span className="text-blue-700 dark:text-yellow-400">(<span className="text-orange-700 dark:text-white">&quot;message&quot;</span>)</span></code> to share our message.</p>
    </>
  );
  
  const JavaScriptVariablesContent = (
    <>
      <h1 className='text-center font-bold underline text-xl'>JavaScript - Variables</h1>
  
      <h2 className='font-bold underline text-l'>Using Variables</h2>
      <p className='text-left indent-8 text-sm'>Oftentimes, it is useful to package up our data and give it a label. We call these &apos;variables&apos;, and in JavaScript, they must be declared using either <code className='text-sm bg-slate-200 dark:bg-slate-600 rounded-sm p-0.5 text-blue-700 dark:text-blue-300'>const</code> if the value will not change, or <code className='text-sm bg-slate-200 dark:bg-slate-600 rounded-sm p-0.5 text-blue-700 dark:text-blue-300'>let</code> if it will.</p>
  
      <p className='text-left indent-8 text-sm'>Examples:</p>
      <code className='text-sm bg-slate-200 dark:bg-slate-600 text-black dark:text-white rounded-sm p-0.5'><span className="text-blue-700 dark:text-blue-300">const</span> name = <span className="text-orange-700 dark:text-orange-300">&apos;Amera&apos;</span></code>
      <code className='text-sm bg-slate-200 dark:bg-slate-600 text-black dark:text-white rounded-sm p-0.5'><span className="text-blue-700 dark:text-blue-300">let</span> quantity = <span className="text-emerald-600 dark:text-emerald-300">3</span></code>
  
      <h2 className='font-bold underline text-l'>Variable Naming Conventions</h2>
      <p className='text-center text-sm'>Different programming languages have different &lt;strong&gt;conventions&lt;/strong&gt; for all sorts of things, including how we name variables. Some examples include:</p>
      <ul>
        <li>
      <code className='text-sm text-left bg-slate-200 dark:bg-slate-600 text-black dark:text-white rounded-sm p-0.5'>&apos;snake case&apos; where_we_put_underscores_between_words</code>
        </li>
        <li>
      <code className='text-sm text-center bg-slate-200 dark:bg-slate-600 text-black dark:text-white rounded-sm p-0.5'>&apos;kebab case&apos; where-we-put-dashes-between-words</code>
        </li>
        <li>
      <code className='text-sm text-center bg-slate-200 dark:bg-slate-600 text-black dark:text-white rounded-sm p-0.5'>In JavaScript, we use camel case whereWeUseCapitalsBetweenWords</code>
        </li>
      </ul>

    </>
  );
  //
  
  export { JavaScriptPrimitivesContent, JavaScriptConsoleContent, JavaScriptVariablesContent };
  