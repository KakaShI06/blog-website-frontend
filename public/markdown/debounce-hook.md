# How to use Debounce with custom hook in Reactjs

I love making custom hook, it's make my life so easy and very easy to implement. In this blog I will tell how easily you can implement debounce to any input element using a custom hook. So let's get started.

## What is custom hook?

It's nothing but a reusable functions.
When you have component logic that needs to be used by multiple components, we can extract that logic to a custom Hook.

## What is Debounce?

Debouncing is a programming practice used to ensure that time-consuming tasks do not fire so often, that it stalls the performance of the web page. In other words, it limits the rate at which a function gets invoked. 

**For eg:** We have search and type `<input />` element and on every `onChange` event we want to call a external api. Hence, it is a bad practice to call a api in every typed word in the input field, this will increase the load on backend and we want to optimise our load as much as possible.

Hence, **Debounce** comes in the picture. So the basic idea is to cancel every previous requests until the user stops typing and show the result of the latest api call.

Now let's get to the implementation part.

## Code

Firstly let's make a normal input field where we want to implement debounce.

```
import { useState } from 'react'

const DebounceInput = () => {
  const [value, setValue] = useState('')
  return (
    <div>
      <input
        placeholder='Mera Input'
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </div>
  )
}

export default DebounceInput
```

Here on every change in value form the state, we want to call external api.

Now, Let's make a new file named `useDebounce.js` where we will be writing debounce logic.

```
import { useEffect, useState } from 'react'

const useDebounce = (value, delay = 500) => {
  const [debouncedValue, setDebouncedValue] = useState(value)

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value)
    }, delay)

    return () => clearTimeout(handler)
  }, [value, delay])

  return debouncedValue
}

export default useDebounce
```

Now let me explain this code line by line (Bhai hai abhi) 

We will be that passing that state value into this functional hook, and we will be passing that into the dependancy of useEffect hook, every that value changes useEffect will trigger. 
Now, if you can see in return statement of useEffect we are clearing the setTime interval. 
Which means that it will cancel all the previous setTimeout interval and preserve the latest setTimeout. And that delay is simply means to wait 500 ms for a user to type before cancelling a previous interval.

Now let's import this hook into the main input element.

```
import { useEffect, useState } from 'react'
import useDebounce from './useDebouce';

const DebounceInput = () => {
  const [value, setValue] = useState('')
  const debounceInput = useDebounce(value)

  useEffect(() => {
    if ( debounceInput ) {
      //fetch api logic here.
    }
  },[debounceInput])

  return (
    <div>
      <input
        placeholder='Mera Input'
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </div>
  )
}

export default DebounceInput
```

After importing our custom hook, we will pass input state value into our hook and add another `useEffect` that will targeting this `debounceInput`. Which simply means we will add this debounceInput into dependancy of `useEffect` and in this `useEffect` we can write a logic of api call.
