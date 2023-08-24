import React from 'react'
import OpenAI from 'openai';


const chatGptAPI = async() => {
  const openai = new OpenAI({
    apiKey: "",
    dangerouslyAllowBrowser: true
    // apiKey: process.env.OPENAI_API_KEY // This is also the default, can be omitted
  });
  const chatCompletion = await openai.chat.completions.create({
    model: "gpt-3.5-turbo",
    messages: [{"role": "user", "content": "Say I'm playing Poker, with 5 other players. I'll give you my hand, and maybe the community cards. Regardless, I want you to rate the hand (weak hand, moderately strong hand), and give me my relative hand strength (vs possible poker hands) in percentage. First value is rating of the hand (weak, moderate, relatively strong, ect). 2nd value is hand strength %. 3rd value is % chance of hitting a straight. 4th value is % chance of hitting a flush. My hand: As-4s. Community: 2h-5d-jh-3c. Give me the answer in the form of an array. No explanations, just the array."},
    // messages: [{"role": "user", "content": "Saying I'm playing poker. My hand is: As, 4s. Community Cards: None. What is my relative hand strength (in %)? What are the chances (% wise) I get a straight on the flop? On the turn? On the river? Answer in an array, and don't round the number!! and then the explanation of how you got the numbers. First value of the array: flop %. 2nd value: turn %. 3rd value: river %"},
    {"role": "assistant", "content":"[40%, 30%, 12.51%, 10.24%]"},
    ],
  });
  console.log(chatCompletion.choices[0].message.content);



  console.log(chatCompletion)
  return (
    chatCompletion.choices[0].message.content
  )
}

export default chatGptAPI