const quotes = [
    {
        quote: "Failure does not deserve to be addressed with recrimination or pity. Rather, failure must be honored for the insight it provides. Failure is the grist for learning; it is our teacher. Without taking risk, we can’t fail, and so we don’t learn or grow toward elite performance and top-shelf solutions. Navigate.",
        author: "Mark Divine",
    },
    {
        quote: "It is time you understand that true spirituality means that you yourself become the living expression of the divine teaching you follow.",
        author: "Omraam Mikhaël Aïvanhov",
    },
    {
        quote: "Don’t postpone joy until you have learned all of your lessons. Joy is your lesson.",
        author: "Alan Cohen",
    },
    {
        quote: "You have comfort. You don’t have luxury. And don’t tell me that money plays a part. The luxury I advocate has nothing to do with money. It cannot be bought. It is the reward of those who have no fear of discomfort.",
        author: "Jean Cocteau",
    },
    {
        quote: "A thousand half-loves must be forsaken to take one whole heart home.",
        author: "Rumi",
    }
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];
quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
