
    // whatever we doing with js same thing with react 
    // creating h1 tag with namaste
    const heading1 = React.createElement('h1',
    {
        id:'title',
    },
    "Namaste Everyone!");
    
    const heading2 = React.createElement('h2',
    {
        id:'title',
    },
    "Namaste Everyone ! this is heading 2");

    const container = React.createElement('div',{
        id:'container',
    },[heading1,heading2]);
    
    console.log(heading1) // react element is object
    const root = ReactDOM.createRoot(document.getElementById('root'));

    // passing a react element inside the root
    root.render(container);