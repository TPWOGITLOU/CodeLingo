const JavaScriptPrimitivesContent = (
    <>
      <h1 className='text-center font-bold underline text-16xl'>JavaScript - Primitives</h1>
      <br/>
      <h3 className='font-bold underline text-12xl text-center'>Primitive Data Types</h3>
      <br/>
      <p className='text-10xl text-center'>Programming languages use lots of different data types to store information. While some of them get pretty complicated, we&apos;ll just be using three simple (or &apos;Primitive&apos;) ones for now:</p>
      <ul className='text-center'>
        <li>Strings</li>
        <li>Numbers</li>
        <li>Booleans</li>
      </ul>
      <br/>
      <h3 className='font-bold underline text-12xl text-center'>Strings</h3>
      <p className='text-center text-10xl'>Strings are used to store a group of characters, like letters, numbers, or punctuation. We can use them to make words or sentences. In JavaScript, strings need to be inside a pair of either &apos;single quote&apos; or &quot;double quote&quot; marks so that the program knows where they start and end.</p>
      <br/>
      <h3 className='font-bold underline text-12xl text-center'>Numbers</h3>
      <p className='text-center text-10xl'>JavaScript can store numbers in lots of different formats like integers such as 1, 2, 3, 4, or decimals such as 3.14159. These shouldn&apos;t be in quote marks, otherwise JavaScript will think they&apos;re a string of characters and it can do cool stuff (like calculations) with them!</p>
      <br/>
      <h3 className='font-bold underline text-12xl text-center'>Booleans</h3>
      <p className='text-center text-10xl'>Booleans are used to tell us if something is &apos;true&apos; or &apos;false&apos;. For example:</p>
      <code className='text-10xl text-center'>(9 &lt; 10) is &apos;true&apos; and (Red is the same as Green) is &apos;false&apos; even though these are words, JavaScript knows what they mean so when we use them as a boolean they should <em>not</em> be in quote marks (otherwise they&apos;re just stored as a string!)</code>
    </>
  );
  
  const JavaScriptConsoleContent = (
    <>
      <h1 className='text-center font-bold underline text-16xl'>JavaScript - The Console</h1>
  
      <h3 className='font-bold underline text-12xl'>The Console: Displaying Information</h3>
      <p className='text-center text-10xl'>In order to know what a program is doing, we need to be able to see a human-readable output. In JavaScript, we can use the &lt;em&gt;console&lt;/em&gt; to view outputs. There are different &lt;em&gt;methods&lt;/em&gt; to share things like errors, but when we just want to output some information we can just use <code className='text-10xl'>console.log(&quot;message&quot;)</code> to share our message.</p>
    </>
  );
  
  const JavaScriptVariablesContent = (
    <>
      <h1 className='text-center font-bold underline text-16xl'>JavaScript - Variables</h1>
  
      <h2 className='font-bold underline text-12xl'>Using Variables</h2>
      <p className='text-center text-10xl'>Oftentimes, it is useful to package up our data and give it a label. We call these &apos;variables&apos;, and in JavaScript, they must be &lt;em&gt;declared&lt;/em&gt; using either <code className='text-10xl'>const</code> if the value will not change, or <code className='text-10xl'>let</code> if it will.</p>
  
      <p className='text-center text-10xl'>Examples:</p>
      <code className='text-10xl'>const name = &apos;Amera&apos;</code>
      <code className='text-10xl'>let quantity = 3</code>
  
      <h2 className='font-bold underline text-12xl'>Variable Naming Conventions</h2>
      <p className='text-center text-10xl'>Different programming languages have different &lt;strong&gt;conventions&lt;/strong&gt; for all sorts of things, including how we name variables. Some examples include:</p>
  
      <code className='text-10xl text-center'>&apos;snake case&apos; where_we_put_underscores_between_words</code>
      <code className='text-10xl text-center'>&apos;kebab case&apos; where-we-put-dashes-between-words</code>
      <code className='text-10xl text-center'>In JavaScript, we use camel case whereWeUseCapitalsBetweenWords</code>
    </>
  );
  //
  
  export { JavaScriptPrimitivesContent, JavaScriptConsoleContent, JavaScriptVariablesContent };
  