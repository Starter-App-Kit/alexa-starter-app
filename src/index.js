'use strict';
var Alexa = require('alexa-sdk');

var APP_ID = undefined; //OPTIONAL: replace with "amzn1.echo-sdk-ams.app.[your-unique-value-here]";


var techTerms =  [
"The tech term to know is 404. What does it mean? Originally a technical term for Not Found 404 which is an error message",
"The tech term to know is 411. What does it mean? Online jargon, also known as text message shorthand, used primarily in texting, online",
"The tech term to know is 86. What does it mean? Online jargon, also known as text message shorthand, used primarily in texting, online",
"The tech term to know is age. What does it mean? Actually it is '-age' which is a suffix used in slang to exaggerate a word and give",
"The tech term to know is anime. What does it mean? An artistic and sensual type of Japanese animation. On the Internet, one can find",
"The tech term to know is back button. What does it mean? One of the buttons at the top of a Web browser. By clicking on it, you 'go back' to",
"The tech term to know is bandwidth. What does it mean? The technical definition of 'bandwidth' involves the difference between two frequencies",
"The tech term to know is biobreak. What does it mean? An office friendly way of saying that one needs to take a bathroom break.",
"The tech term to know is brain dump. What does it mean? To empty one's brain of any and all information relating to a particular subject",
"The tech term to know is cached out. What does it mean? Slang for extremely tired, as in, 'wiped out.'",
"The tech term to know is cookies. What does it mean? A funny name for a noun that describes a small piece of information about you (about",
"The tech term to know is cryptic. What does it mean? Primarily used as slang, it refers to anything that is hard to read. For example,",
"The tech term to know is dead-tree version. What does it mean? Slang for a printed document or publication, as opposed to an electronic version.",
"The tech term to know is deep dive. What does it mean? Slang for exploring a subject in-depth. For example, 'We did a deep dive on that market",
"The tech term to know is defrag. What does it mean? To optimize your hard drive, usually with a program that 'cleans it up' and makes",
"The tech term to know is delete. What does it mean? To remove a file or erase information.",
"The tech term to know is down time. What does it mean? This expression refers to lost production time due to a broken machine and its operator",
"The tech term to know is eye candy. What does it mean? Slang for extra graphics (or images) included on a Web page with the intent of making",
"The tech term to know is Film at 11. What does it mean? With reference to TV commercials for the late local news, it's a sarcastic phrase",
"The tech term to know is Google. What does it mean? Founded in 1998 by Larry Page and Sergey Brin, two Stanford Ph.D. candidates who developed",
"The tech term to know is hot spot. What does it mean? In the world of IT this term refers to places that have wireless Internet connections",
"The tech term to know is huge pipes. What does it mean? Slang for a high-bandwidth Internet connection.",
"The tech term to know is interface. What does it mean? In a general sense, it is the portion of a program that interacts between a user and",
"The tech term to know is just-in-time (JIT). What does it mean? Traditionally, this phrase describes a compiler that turns Java bytecode, for example,",
"The tech term to know is legacy media. What does it mean? Media that is considered 'old,' such as radio, television, and especially newspapers",
"The tech term to know is McLuhanism. What does it mean? A term for a catchy phrase or slogan coined by Marshall McLuhan, popular writer and",
"The tech term to know is meatspace. What does it mean? Slang for the real world, as opposed to cyberspace.",
"The tech term to know is mommy-save. What does it mean? Slang for the act of indiscriminately clicking 'Save' without first choosing an appropriate",
"The tech term to know is morph or morphing. What does it mean? From the term 'metamorphosis,' it is to turn one thing into another. It most commonly",
"The tech term to know is multitasking. What does it mean? The simultaneous execution of more than one task. For example, a computer that launches",
"The tech term to know is navigate. What does it mean? The act of moving around the Web by clicking on hypertext links (or paths) that take",
"The tech term to know is opt-out. What does it mean? Any time a user requests to be removed from any kind of online program, he or she",
"The tech term to know is PDFing. What does it mean? An example of a word morphing, this term once described the process of turning a document",
"The tech term to know is photoshopped. What does it mean? A play on the word 'Photoshop,' the software graphics program created by Adobe, it",
"The tech term to know is PING or ping. What does it mean? Traditionally this term refers to an Internet program used to determine whether a",
"The tech term to know is plug-and-play. What does it mean? A standard for add-in hardware that requires it to identify itself on demand (see:",
"The tech term to know is plugged-in. What does it mean? Slang for wired, or being connected.",
"The tech term to know is radar screen. What does it mean? In modern jargon, this refers to the range of interests that a company or individual",
"The tech term to know is rant-and-rave. What does it mean? To speak on and on about something you feel passionate for. Users often rant-and-rave",
"The tech term to know is robot. What does it mean? Traditionally, it's a device that can move and react to sensory input. Robots are",
"The tech term to know is scaleable or scalability. What does it mean? Refers to the ability of hardware or software or even a brand, to adapt to increased",
"The tech term to know is shelfware. What does it mean? Slang for software that is so worthless it remains in the shrink-wrapped box on the",
"The tech term to know is showstopper. What does it mean? Slang for anything that has the potential to halt the shipment or to stop the launch",
"The tech term to know is spammin'. What does it mean? Slang for speaking aimlessly on a mishmash of topics, or to stuff someone's brain",
"The tech term to know is surf or surfing. What does it mean? To browse or look at information on the Web by pointing and clicking and navigating",
"The tech term to know is thread. What does it mean? Originally it referred to a chain of postings on a single subject in a newsgroup",
"The tech term to know is TMI. What does it mean? Online jargon, also known as text message shorthand, used primarily in texting, online",
"The tech term to know is unplugged. What does it mean? Slang for being not connected. The opposite of wired. It also refers to acoustic music",
"The tech term to know is user. What does it mean? A term that defines the online audience, it also refers to anyone who 'uses' a computer",
"The tech term to know is yoyo mode. What does it mean? The state in which a computer rapidly alternates several times between being up and"
];

exports.handler = function(event, context, callback) {
    console.log("I have reached here!");
    var alexa = Alexa.handler(event, context);
    alexa.appId = APP_ID;
    alexa.registerHandlers(handlers);
    alexa.execute();
};

var handlers = {
    'TeachTechTerms': function () {
        // Get a random space fact from the space facts list
        var factIndex = Math.floor(Math.random() * techTerms.length);
        var techTerm = techTerms[factIndex];

        this.emit(':tell', techTerm);
    },
    'AMAZON.HelpIntent': function () {
        var speechOutput = "You can say tell me a space fact, or, you can say exit... What can I help you with?";
        var reprompt = "What can I help you with?";
        this.emit(':ask', speechOutput, reprompt);
    },
    'AMAZON.CancelIntent': function () {
        this.emit(':tell', 'Goodbye!');
    },
    'AMAZON.StopIntent': function () {
        this.emit(':tell', 'Goodbye!');
    }
};