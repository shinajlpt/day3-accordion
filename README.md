Accordion menus expand and collapse when a user clicks a button. It's a great way to not have to show all the info about a topic up front, and instead give users the option to show only what they need
Create a new project using create-react-app
npx create-react-app react-accordion-demo
Open the src/App.js file and add the content inside it:
Add a new state inside the component as shown
its the state is important "const [isActive, setIsActive] = useState(false)" the usestae using
Also import the useState hook at the top of the file "mport React, { useState } from 'react'"
