const cardData = [
    {
        name: "How the Web Works",
        content: [{
            ok: false,
            q: "What is JSON and why is it important?",
            a: "JSON stands for JavaScript Object Notation, and is a standardized format for flattening complex data into a string, so it can be sent via HTTP. While based on JavaScript, most backend languages have a method of converting JSON data into a native data structure (such as a dictionary in Python), allowing a JavaScript frontend to easily communicate complex information with a Python backend."
        },
        {
            ok: false,
            q: "What do the following status code ranges represent: 200-level, 300-level, 400-level, 500-level",
            a: "200: Successful request; 300: Add'l action/information needed (e.g. redirect); 400: Request error; 500: Server error"
        },
        {
            ok: false,
            q: "What's the difference between cookies and localStorage?",
            a: "Both are methods of storing small bits of information client-side to maintain some level of state for a user. Cookies are a method that's built-in to modern browsers, and they are small and are sent back with every HTTP request made from a site for which a cookie is present, regardless of whether the cookie is needed for that particular request. localStorage is a property of the window object, which can be directly mutated and updated with important information (similar to what you might include in a cookie), but the data within it must be actively retrieved and included with a request when needed."
        }]
    },
    {
        name: "Frontend",
        content: [
            {
                ok: false,
                q: "Explain event delegation.",
                a: "Event delegation is principal in frontend development whereby event listeners are elevated to parent elements, and functionality is delegated to interactive child components. Rather than each of 10 buttons have their own listener, for example, a single parent element can have a listener and can delegate interactivity and functionality based on which button is clicked. This makes for much simpler and readable code, and avoids the need for duplicate (or near-duplicate) listeners with similar funcationality. It's especially useful if interactive elements are being dynamically added, as utilizing event delegation removes the need to also dynamically add and remove event listeners as well."
            }
        ]
    }
];


export default cardData;