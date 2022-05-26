import React from 'react';

const Blogs = () => {
    return (
        <div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 px-12 ">
                <div class="card xs:w-40 w-100 bg-base-100 shadow-xl">
                    <div class="card-body">
                        <h2 class="card-title"> How will you improve the performance of a React Application?</h2>
                        <ul>
                            <li>Using Immutable Data Structures</li>
                            <li>Avoid using Index as Key for map</li>
                            <li>Avoiding Props in Initial States</li>
                            <li>Using Production Mode Flag in Webpack</li>
                            <li>CSS Animations Instead of JS Animations</li>
                            <li>Throttling and Debouncing Event Action in JavaScript</li>
                            <li>Avoid Inline Function Definition in the Render Function.</li>
                            <li>Use React.Fragments to Avoid Additional HTML Element Wrappers</li>



                        </ul>

                    </div>
                </div>

                <div class="card w-100 bg-base-100 shadow-xl">
                    <div class="card-body">
                        <h2 class="card-title"> What are the different ways to manage a state in a React application?</h2>
                        <p><b>Local state -</b> Local state is data we manage in one or another component.</p>
                        <p><b>Global state -</b> Global state is data we manage across multiple components.</p>
                        <p><b>Server state -</b> Data that comes from an external server that must be integrated with our UI state.</p>
                        <p><b>URL state -</b> Data that exists on our URLs, including the pathname and query parameters.</p>
                    </div>
                </div>
                <div class="card w-100 bg-base-100 shadow-xl">
                    <div class="card-body">
                        <h2 class="card-title"> How does prototypical inheritance work?</h2>

                        <p>
                            prototypical inheritance refers to the ability to access object properties from another object. We use a JavaScript prototype to add new properties and methods to an existing object constructor. We can then essentially tell our JS code to inherit properties from a prototype. Prototypical inheritance allows us to reuse the properties or methods from one JavaScript object to another through a reference pointer function.
                        </p>
                        <p>Date objects inherit from Date.prototype.</p>
                        <p>Array objects inherit from Array.prototype.</p>
                        <p>Player objects inherit from Player.prototype.</p>

                    </div>
                </div>
                <div class="card w-100 bg-base-100 shadow-xl">
                    <div class="card-body">
                        <h2 class="card-title"> Why you do not set the state directly in React. For example, if you have const [products, setProducts] = useState([]). Why you do not set products = [...] instead, you use the setProducts</h2>

                        <p>One should never update the state directly because of the following reasons:</p>
                        <p>If you update it directly, calling the setState() afterward may just replace the update you made.</p>
                        <p>When you directly update the state, it does not change this.state immediately. Instead, it creates a pending state transition, and accessing it after calling this method will only return the present value.</p>
                        <p>You will lose control of the state across all components.</p>

                    </div>
                </div>
                <div class="card w-100 bg-base-100 shadow-xl">
                    <div class="card-body">
                        <h2 class="card-title">  What is a unit test? Why should write unit tests?</h2>

                        <p>The main objective of unit testing is to ensure that each individual part is working well and as its supposed to work. The entire system will only be able to work well if the individual parts are working well. Unit testing is performed by the software developers themselves. Sometimes, independent software testers also perform these tests.<br></br>

                            There are two main types of unit testing: manual and automated. The automated method is the most preferred as it is faster and more accurate, but performing this task manually is also an option. The manual approach has a step by step instructional procedure that helps testers perform this task efficiently. The automated unit testing usually involves the developer first writing a section of the code in the application so that the function can be tested.<br></br>

                            After that, when the application is deployed, they remove the test code. They can also isolate the function to test it in a more thorough way. This helps with identifying any dependency that might be there between the tested code and the other data spaces. These dependencies can then be eliminated.

                        </p>

                    </div>
                </div>
                <div class="card w-100 bg-base-100 shadow-xl">
                    <div class="card-body">
                        <h2 class="card-title"> You have an array of products. Each product has a name, price, description, etc. How will you implement a search to find products by name?</h2>

                        <p>
                            The code is save on the src folder in Blogs section as  nameFind.js
                        </p>

                    </div>
                </div>

            </div>

        </div>
    );
};

export default Blogs;