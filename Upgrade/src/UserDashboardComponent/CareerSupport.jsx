import React, { useState } from "react";
import {
    FileText,
    Briefcase,
    CheckCircle,
    Download,
    ChevronDown,
    ChevronUp,
    UserCheck,
    Award,
    ArrowRight,
    Globe,
    Cpu,
    Brain,
    MessageSquare,
    Building2,
    HelpCircle,
    X,
    Target,
    Zap,
    ShieldCheck,
    Search,
    Terminal
} from "lucide-react";
import "../Styles/CareerSupport.css";
import NavBar from "./NavBar";
import { useNavigate } from "react-router-dom";
import atsResume from "../assets/images/ats_resume.png";

// SIMPLE SYNTAX HIGHLIGHTER COMPONENT
const CodeHighlighter = ({ code, lang }) => {
    const highlight = (text) => {
        if (!text) return "";
        let highlighted = text
            .replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;");

        // Comments
        highlighted = highlighted.replace(/(\/\/.*|\/\*[\s\S]*?\*\/|#.*|--.*)/g, '<span class="code-comment">$1</span>');

        // Keywords
        const keywords = /\b(const|let|var|function|return|if|else|for|while|import|from|export|default|class|extends|public|private|static|void|int|boolean|String|List|Map|HashMap|System|out|println|interface|abstract|implements|try|catch|finally|throw|new|this|super|self|def|if|elif|else|print|in|is|not|and|or|lambda|async|await|useEffect|useState|useContext|useMemo|useCallback|SELECT|FROM|WHERE|GROUP\s+BY|ORDER\s+BY|JOIN|LEFT\s+JOIN|INNER\s+JOIN|LIMIT|OFFSET|AS|ON|DISTINCT|INSERT|INTO|VALUES|UPDATE|SET|DELETE)\b/gi;
        highlighted = highlighted.replace(keywords, '<span class="code-keyword">$1</span>');

        // Strings
        highlighted = highlighted.replace(/(['"`])(.*?)\1/g, '<span class="code-string">$1$2$1</span>');

        // Numbers
        highlighted = highlighted.replace(/\b(\d+)\b/g, '<span class="code-number">$1</span>');

        return highlighted;
    };

    return (
        <pre className={`code-editor ${lang}`}>
            <code dangerouslySetInnerHTML={{ __html: highlight(code) }} />
        </pre>
    );
};

// Placeholder images for templates
const modernResume = "https://images.unsplash.com/photo-1586281380349-632531db7ed4?q=80&w=2070&auto=format&fit=crop";
const creativeResume = "https://images.unsplash.com/photo-1626778193179-4d452028646b?q=80&w=1974&auto=format&fit=crop";
const executiveResume = "https://images.unsplash.com/photo-1512418490979-92798cccf340?q=80&w=2070&auto=format&fit=crop";
const startupResume = "https://images.unsplash.com/photo-1506784983877-45594efa4cbe?q=80&w=2068&auto=format&fit=crop";

const CareerSupport = () => {
    const navigate = useNavigate();
    const [activeAccordion, setActiveAccordion] = useState(null);
    const [activeCompany, setActiveCompany] = useState("TCS");
    const [qbCompany, setQbCompany] = useState("TCS");
    const [activeQuestion, setActiveQuestion] = useState(null);
    const [selectedTemplate, setSelectedTemplate] = useState(null);

    const toggleAccordion = (index) => {
        setActiveAccordion(activeAccordion === index ? null : index);
    };

    const mncRoadmap = [
        { title: "Online Assessment", subtitle: "Round 1", desc: "Aptitude (Quants, Logical), Coding, and Psychometric tests.", icon: <Brain size={24} /> },
        { title: "Technical Interview", subtitle: "Round 2", desc: "Deep dive into your projects, DSA, OOPS, and Core Subjects.", icon: <Cpu size={24} /> },
        { title: "Managerial Round", subtitle: "Round 3", desc: "Check for company fit, situational handling, and adaptability.", icon: <Globe size={24} /> },
        { title: "HR Interview", subtitle: "Final Round", desc: "Salary discussion, relocation, and soft skill evaluation.", icon: <MessageSquare size={24} /> }
    ];

    const companyPatterns = {
        TCS: { exam: "TCS NQT", tech: "Core DSA, SDLC, C/C++", hr: "Flexibility, Bonds" },
        Infosys: { exam: "InfyTQ", tech: "Java/Python, DBMS", hr: "Communication, Scenarios" },
        Wipro: { exam: "Elite NTH", tech: "Arrays, DS", hr: "Shift Readiness" },
        Accenture: { exam: "Cognitive", tech: "MS Office, Logical", hr: "Resume Deep-dive" },
        Capgemini: { exam: "Game-based", tech: "Java, OOPS", hr: "Adaptability" },
        Cognizant: { exam: "GenC", tech: "SQL, Programming", hr: "Role Interest" },
        HCL: { exam: "First Career", tech: "OS, Networking", hr: "Commitment" },
        DXC: { exam: "Tech MCQ", tech: "General Theory", hr: "Background info" }
    };

    const questionBank = {
        TCS: [
            { q: "What is the difference between structure and union?", a: "Structures allocate memory for each member separately; Unions share the same memory location for all members." },
            { q: "Explain the four pillars of OOPS.", a: "Abstraction, Encapsulation, Inheritance, and Polymorphism." },
            { q: "What are static variables in C?", a: "Variables that retain their value even after they go out of scope." },
            { q: "Difference between Call by Value and Call by Reference.", a: "Value passes a copy; Reference passes the actual address." },
            { q: "What is an abstract class?", a: "A class that cannot be instantiated and usually contains at least one pure virtual function." },
            { q: "Define SDLC stages.", a: "Planning, Analysis, Design, Implementation, Testing, Maintenance." },
            { q: "What is a deadlock?", a: "A situation where two or more processes are waiting for each other to release resources." },
            { q: "Difference between TCP and UDP.", a: "TCP is connection-oriented and reliable; UDP is connectionless and faster." },
            { q: "What is normalization in DBMS?", a: "Minimizing redundancy by dividing tables into smaller related ones." },
            { q: "Explain Primary vs Unique key.", a: "Primary key cannot be null and is unique; Unique key can have one null value." }
        ],
        Infosys: [
            { q: "What is JVM, JRE, and JDK?", a: "JDK is the kit; JRE is the environment; JVM is the engine that runs bytecode." },
            { q: "Explain method overloading vs overriding.", a: "Overloading: same name, different params; Overriding: same name/params in different classes (inheritance)." },
            { q: "What are Java collections?", a: "A framework that provides an architecture to store and manipulate a group of objects." },
            { q: "Difference between HashMap and Hashtable.", a: "HashMap is non-synchronized and allows one null key; Hashtable is synchronized." },
            { q: "What is a singleton class?", a: "A class that allows only one instance to be created." },
            { q: "Explain 'finally' block in Java.", a: "A block used to execute important code like closing connections, regardless of exception." },
            { q: "What is a lambda expression?", a: "A short way to represent an anonymous function (added in Java 8)." },
            { q: "What is the use of 'super' keyword?", a: "Used to refer to immediate parent class object/methods." },
            { q: "Explain ACID properties in DBMS.", a: "Atomicity, Consistency, Isolation, Durability." },
            { q: "What is a join in SQL?", a: "Used to combine rows from two or more tables based on a related column." }
        ],
        Wipro: [
            { q: "What is an array?", a: "A collection of similar data types stored in contiguous memory locations." },
            { q: "What is a pointer?", a: "A variable that stores the memory address of another variable." },
            { q: "Difference between C and C++?", a: "C is procedural; C++ is object-oriented." },
            { q: "What is a constructor?", a: "A special member function used to initialize objects." },
            { q: "Explain the concept of inheritance.", a: "Mechanism where one class acquires properties of another." },
            { q: "What is a database schema?", a: "The formal representation of database structure." },
            { q: "Define bandwidth.", a: "The maximum data transfer rate of a network or internet connection." },
            { q: "What is the OSI model?", a: "A conceptual framework used to understand network interactions (7 layers)." },
            { q: "What is binary search?", a: "An efficient algorithm for finding an item from a sorted list of items." },
            { q: "Explain recursion.", a: "A process in which a function calls itself as a subroutine." }
        ],
        // Add other companies as needed...
    };

    // Default bank if missing
    const getQB = (company) => questionBank[company] || questionBank["TCS"];

    const recruitmentGuides = [
        {
            type: "Written Round",
            title: "Tactical Aptitude Prep",
            desc: "Focus on Quants (Percentages, Profit/Loss), Logical (Syllogisms, Patterns), and Verbal ability.",
            tips: ["Practice daily on IndiaBix", "Time yourself per question", "Master the 'Elimination Method'"]
        },
        {
            type: "Technical Round",
            title: "Core Subject Mastery",
            desc: "Deep knowledge of your final year project, basic DSA (Stacks, Queues), and OOPS concepts.",
            tips: ["Be ready to write code on paper", "Explain your logic step-by-step", "Don't guess - be honest"]
        },
        {
            type: "HR Round",
            title: "The Confidence Game",
            desc: "Professionalism, communication, and showing you are a cultural fit for the MNC.",
            tips: ["Research company values", "Prepare a great intro", "Always ask a question at the end"]
        }
    ];

    const templates = [
        { id: 1, name: "Gold-Standard ATS 2025", desc: "99% ATS Pass Rate for freshers. Minimalist layout.", image: atsResume, type: "ATS-Friendly" },
        { id: 2, name: "Professional Modern Blue", desc: "Two-column sleek design for IT professionals.", image: modernResume, type: "Modern" },
        { id: 3, name: "Creative Designer Suite", desc: "High-impact visual for marketing and creative roles.", image: creativeResume, type: "Creative" },
        { id: 4, name: "Executive Leadership", desc: "Sophisticated serif layout for management roles.", image: executiveResume, type: "Elite" },
        { id: 5, name: "Startup Lean Template", desc: "Compact single-page layout for quick scanning.", image: startupResume, type: "Minimal" }
    ];

    const handleDownload = (templateName) => {
        // Real download logic using a blob
        const element = document.createElement("a");
        const file = new Blob([`This is a mock template file for: ${templateName}\n\nIn the production version, this would be a real .docx or .pdf template.`], { type: 'text/plain' });
        element.href = URL.createObjectURL(file);
        element.download = `${templateName.replace(/\s+/g, '_')}_UpgradeU.txt`;
        document.body.appendChild(element);
        element.click();
        document.body.removeChild(element);
    };

    const codingQuestions = [
        {
            category: "Java",
            questions: [
                {
                    title: "HashMap vs Hashtable",
                    problem: "Explain the key differences between HashMap and Hashtable and when to use which.",
                    example: "MNCs often ask this to check synchronization knowledge.",
                    solution: "1. HashMap is non-synchronized (faster), Hashtable is synchronized.\n2. HashMap allows one null key, Hashtable does not.\n3. HashMap is preferred for non-threaded apps; use ConcurrentHashMap for threads.",
                    lang: "java"
                },
                {
                    title: "Reverse a String (Java)",
                    problem: "Write a Java program to reverse a string without using built-in reverse functions.",
                    example: "Input: 'UpgradeU' => Output: 'UedargpU'",
                    solution: "public String reverse(String s) {\n    StringBuilder sb = new StringBuilder();\n    for(int i = s.length()-1; i >= 0; i--) sb.append(s.charAt(i));\n    return sb.toString();\n}",
                    lang: "java"
                },
                {
                    title: "Java 8 Streams API",
                    problem: "Filter a list of integers to get only even numbers and then find their sum.",
                    example: "List: [1, 2, 3, 4] => Result: 6",
                    solution: "int sum = list.stream()\n             .filter(n -> n % 2 == 0)\n             .mapToInt(Integer::intValue)\n             .sum();",
                    lang: "java"
                },
                {
                    title: "Singleton Design Pattern",
                    problem: "Implement a thread-safe Singleton class in Java.",
                    example: "Ensures only one instance of a class exists.",
                    solution: "public class Singleton {\n    private static volatile Singleton instance;\n    private Singleton() {}\n    public static Singleton getInstance() {\n        if (instance == null) {\n            synchronized (Singleton.class) {\n                if (instance == null) instance = new Singleton();\n            }\n        }\n        return instance;\n    }\n}",
                    lang: "java"
                },
                {
                    title: "Check Prime Number",
                    problem: "Write a function to check if a number is prime.",
                    example: "Input: 7 => Output: true",
                    solution: "public boolean isPrime(int n) {\n    if (n <= 1) return false;\n    for (int i = 2; i <= Math.sqrt(n); i++) {\n        if (n % i == 0) return false;\n    }\n    return true;\n}",
                    lang: "java"
                },
                {
                    title: "Abstract vs Interface",
                    problem: "When should you use an Abstract Class instead of an Interface?",
                    example: "Core OOPS concept for design patterns.",
                    solution: "Use Abstract Class for 'is-a' relationships and when you need to share code (fields/non-final methods). Use Interface for 'can-do' abilities and multiple inheritance.",
                    lang: "java"
                },
                {
                    title: "Diamond Problem",
                    problem: "Why does Java not support multiple inheritance with classes?",
                    example: "Ambiguity in method resolution.",
                    solution: "If Class A has two parents B and C, and both have the same method 'test()', A wouldn't know which to inherit. Java avoids this 'Diamond of Death' using Interfaces with default methods.",
                    lang: "java"
                },
                {
                    title: "JVM Architecture",
                    problem: "Explain the difference between Heap and Stack memory in JVM.",
                    example: "Memory management frequently asked in MNCs.",
                    solution: "Stack: Stores local variables and function calls (Fixed size, LIFO). Heap: Stores objects and JRE classes (Dynamic size, Garbage collected).",
                    lang: "java"
                },
                {
                    title: "Find Second Largest",
                    problem: "Find the second largest integer in an array.",
                    example: "Input: [10, 20, 4, 45, 99] => Output: 45",
                    solution: "public int secondLargest(int[] arr) {\n    int first = -1, second = -1;\n    for (int x : arr) {\n        if (x > first) { second = first; first = x; }\n        else if (x > second && x != first) second = x;\n    }\n    return second;\n}",
                    lang: "java"
                },
                {
                    title: "Exception Handling",
                    problem: "Difference between Checked and Unchecked Exceptions.",
                    example: "IOException (Checked) vs ArithmeticException (Unchecked).",
                    solution: "Checked: Checked at compile-time (must be handled or thrown). Unchecked: Occur at runtime (inherits from RuntimeException).",
                    lang: "java"
                }
            ]
        },
        {
            category: "Python",
            questions: [
                {
                    title: "List Comprehension",
                    problem: "Create a list of squares of even numbers from a given list using list comprehension.",
                    example: "Input: [1, 2, 3, 4] => Output: [4, 16]",
                    solution: "squares = [x**2 for x in nums if x % 2 == 0]",
                    lang: "python"
                },
                {
                    title: "Mutable vs Immutable",
                    problem: "Explain the difference between mutable (List, Dict) and immutable (Tuple, String) types.",
                    example: "Essential for debugging reference issues.",
                    solution: "Mutable: Can be changed after creation (e.g., list.append()).\nImmutable: State cannot be modified; a new object is created during 'changes'.",
                    lang: "python"
                },
                {
                    title: "Global Interpreter Lock (GIL)",
                    problem: "What is GIL and how does it affect multi-threading in Python?",
                    example: "Performance bottleneck for CPU-intensive tasks.",
                    solution: "A mutex that allows only one thread to execute Python bytecode at a time. It prevents race conditions but limits true parallelism in multi-core systems.",
                    lang: "python"
                },
                {
                    title: "Python Decorators",
                    problem: "Write a simple decorator that logs the execution time of a function.",
                    example: "Enables adding behavior to existing code.",
                    solution: "def logger(func):\n    def wrapper(*args, **kwargs):\n        print(f'Calling {func.__name__}')\n        return func(*args, **kwargs)\n    return wrapper",
                    lang: "python"
                },
                {
                    title: "Python Generators",
                    problem: "Explain the 'yield' keyword and how generators save memory.",
                    example: "Processing large files line by line.",
                    solution: "'yield' pauses function execution and returns a value, keeping state. Generators produce items one by one instead of storing the whole list in RAM.",
                    lang: "python"
                },
                {
                    title: "Shallow vs Deep Copy",
                    problem: "Explain the difference between copy.copy() and copy.deepcopy().",
                    example: "Nested lists management.",
                    solution: "Shallow: Copies the top-level object but refers to nested items. Deep: Recursively copies everything, creating a completely independent object.",
                    lang: "python"
                },
                {
                    title: "args and kwargs",
                    problem: "What is the use of *args and **kwargs in functions?",
                    example: "Flexible function arguments.",
                    solution: "*args: Pass variable number of non-keyword arguments (list). **kwargs: Pass variable number of keyword arguments (dict).",
                    lang: "python"
                },
                {
                    title: "Lambda Functions",
                    problem: "Use a lambda function to sort a list of tuples by the second element.",
                    example: "[('App', 10), ('Bat', 5)] => Bat, App",
                    solution: "sorted_list = sorted(data, key=lambda x: x[1])",
                    lang: "python"
                },
                {
                    title: "Python Dictionary Methods",
                    problem: "How to merge two dictionaries in Python 3.9+?",
                    example: "Merging user settings with defaults.",
                    solution: "merged = dict1 | dict2  # Using the | operator",
                    lang: "python"
                },
                {
                    title: "File Handling",
                    problem: "Safest way to open a file for writing in Python.",
                    example: "Ensures file closure even on errors.",
                    solution: "with open('file.txt', 'w') as f:\n    f.write('Hello World')",
                    lang: "python"
                }
            ]
        },
        {
            category: "JavaScript",
            questions: [
                {
                    title: "Closure Example",
                    problem: "Create a counter function using closures that persists state.",
                    example: "const c = counter(); c(); // 1, c(); // 2",
                    solution: "function createCounter() {\n    let count = 0;\n    return () => ++count;\n}",
                    lang: "javascript"
                },
                {
                    title: "Async/Await API Call",
                    problem: "Fetch data from a URL using async/await and handle errors.",
                    example: "Modern JS standard for networking.",
                    solution: "async function fetchData(url) {\n    try {\n        const res = await fetch(url);\n        return await res.json();\n    } catch (err) { console.error(err); }\n}",
                    lang: "javascript"
                },
                {
                    title: "Hoisting in JS",
                    problem: "Explain hoisting and the difference between var, let, and const.",
                    example: "Variable lifecycle management.",
                    solution: "JS moves declarations to top. 'var' is initialized as 'undefined'. 'let' and 'const' are hoisted but stay in 'Temporal Dead Zone' until initialized.",
                    lang: "javascript"
                },
                {
                    title: "Event Loop Concept",
                    problem: "Explain the relationship between Call Stack, Task Queue, and Microtask Queue.",
                    example: "Execution order of script vs promises.",
                    solution: "1. Execute Stack code. 2. Execute Microtasks (Promises). 3. Process Task Queue (setTimeout). 4. Repeat (Event Loop).",
                    lang: "javascript"
                },
                {
                    title: "Debouncing vs Throttling",
                    problem: "Explain the difference in usage for page resize vs search bar input.",
                    example: "Performance optimization for events.",
                    solution: "Debouncing: Wait for silence (e.g., search after typing stops). Throttling: Limit rate (e.g., call scroll handler at most every 100ms).",
                    lang: "javascript"
                },
                {
                    title: "Prototypes",
                    problem: "How does prototypical inheritance work in JavaScript?",
                    example: "Methods shared across class instances.",
                    solution: "Every object has a hidden [[Prototype]]. If a property isn't found on an object, JS looks up the prototype chain until null is reached.",
                    lang: "javascript"
                },
                {
                    title: "Promise.all vs allSettled",
                    problem: "What happens if one promise fails in Promise.all?",
                    example: "Batching multiple API requests.",
                    solution: "Promise.all: Rejects immediately if ANY promise fails. Promise.allSettled: Waits for ALL to complete and returns status (fulfilled/rejected) for each.",
                    lang: "javascript"
                },
                {
                    title: "Arrow vs Regular Func",
                    problem: "Difference in 'this' binding between arrow and regular functions.",
                    example: "Callback context issues.",
                    solution: "Regular function: 'this' is dynamic (depends on caller). Arrow function: 'this' is lexical (inherited from surrounding scope).",
                    lang: "javascript"
                },
                {
                    title: "Strict Mode",
                    problem: "What is 'use strict' and why should we use it?",
                    example: "Catching common coding mistakes early.",
                    solution: "Prevents use of undeclared variables, throws errors for silent failures, and secures JS by hiding global 'this'.",
                    lang: "javascript"
                },
                {
                    title: "Map/Filter/Reduce",
                    problem: "Use reduce() to find the sum of all prices in an array of objects.",
                    example: "Data aggregation patterns.",
                    solution: "const total = items.reduce((acc, curr) => acc + curr.price, 0);",
                    lang: "javascript"
                }
            ]
        },
        {
            category: "React",
            questions: [
                {
                    title: "Custom Hook (useToggle)",
                    problem: "Create a custom hook to toggle boolean state.",
                    example: "Reusable logic for modals/dropdowns.",
                    solution: "function useToggle(init = false) {\n    const [s, setS] = useState(init);\n    const toggle = () => setS(!s);\n    return [s, toggle];\n}",
                    lang: "javascript"
                },
                {
                    title: "useEffect Cleanup",
                    problem: "Demonstrate why and how to use the cleanup function in useEffect.",
                    example: "Avoiding memory leaks in intervals or subscriptions.",
                    solution: "useEffect(() => {\n    const timer = setInterval(() => console.log('Tick'), 1000);\n    return () => clearInterval(timer); // Cleanup\n}, []);",
                    lang: "javascript"
                },
                {
                    title: "Virtual DOM",
                    problem: "How does React's Virtual DOM improve performance?",
                    example: "Efficient UI updates.",
                    solution: "React keeps a lightweight copy of the DOM. When state changes, it 'diffs' the new V-DOM with the old one and only updates changed parts in the 'Real' DOM.",
                    lang: "javascript"
                },
                {
                    title: "State vs Props",
                    problem: "Difference between state and props in React.",
                    example: "Data flow in components.",
                    solution: "Props: Passed from parent (immutable). State: Managed internally by component (mutable via useState).",
                    lang: "javascript"
                },
                {
                    title: "React Fragments",
                    problem: "Why use <>...</> instead of <div>...</div> for wrapping elements?",
                    example: "Keeping DOM structure clean.",
                    solution: "Fragments allow grouping elements without adding extra nodes to the DOM, preventing issues with CSS flex/grid layouts.",
                    lang: "javascript"
                },
                {
                    title: "Hooks Rules",
                    problem: "State the two main 'Rules of Hooks' in React.",
                    example: "Ensuring hook consistency.",
                    solution: "1. Only call hooks at the top level (not in loops/ifs). 2. Only call hooks from React function components or custom hooks.",
                    lang: "javascript"
                },
                {
                    title: "Higher-Order Components",
                    problem: "What is an HOC and give a real-use case.",
                    example: "Adding Authentication check to multiple pages.",
                    solution: "An HOC is a function that takes a component and returns a new component with enhanced features. Example: withAuth(Dashboard).",
                    lang: "javascript"
                },
                {
                    title: "Context API vs Redux",
                    problem: "When should you choose Context over a state library like Redux?",
                    example: "Managing global app theme or user language.",
                    solution: "Use Context for static/low-frequency updates (theme, auth). Use Redux for complex, high-frequency state updates and large-scale data management.",
                    lang: "javascript"
                },
                {
                    title: "Controlled Components",
                    problem: "What makes an input element 'controlled' in React?",
                    example: "Form validation and real-time state sync.",
                    solution: "An input where the value is driven by React state and updated via an onChange handler.",
                    lang: "javascript"
                },
                {
                    title: "Key Prop Importance",
                    problem: "Why is a unique 'key' required when rendering lists?",
                    example: "Render performance and item state persistence.",
                    solution: "Keys help React identify which items have changed, been added, or removed, enabling efficient DOM reordering instead of full re-renders.",
                    lang: "javascript"
                }
            ]
        },
        {
            category: "SQL",
            questions: [
                {
                    title: "Nth Highest Salary",
                    problem: "Write a query to find the 2nd highest salary from an Employee table.",
                    example: "Frequently asked in SQL interview rounds.",
                    solution: "SELECT DISTINCT Salary FROM Employee \nORDER BY Salary DESC \nLIMIT 1 OFFSET 1;",
                    lang: "sql"
                },
                {
                    title: "Inner vs Left Join",
                    problem: "Explain with a query example when to use Left Join over Inner Join.",
                    example: "Customers table and Orders table.",
                    solution: "-- Inner: Only customers WITH orders\nSELECT Name, OrderID FROM Customers \nINNER JOIN Orders ON Customers.ID = Orders.CID;\n\n-- Left: ALL customers, even those WITHOUT orders\nSELECT Name, OrderID FROM Customers \nLEFT JOIN Orders ON Customers.ID = Orders.CID;",
                    lang: "sql"
                },
                {
                    title: "Group By vs Having",
                    problem: "What is the difference between WHERE and HAVING clauses?",
                    example: "Filtering aggregated data.",
                    solution: "WHERE filters rows before aggregation. HAVING filters aggregated data (must be used with GROUP BY).",
                    lang: "sql"
                },
                {
                    title: "Clustered Index",
                    problem: "Difference between Clustered and Non-Clustered indexing.",
                    example: "Database performance tuning.",
                    solution: "Clustered: Defines physical order of data on disk (Only 1 per table). Non-Clustered: A separate structure with pointers to the data (Multiple allowed).",
                    lang: "sql"
                },
                {
                    title: "Normalization (3NF)",
                    problem: "Briefly explain 1NF, 2NF, and 3NF.",
                    example: "Reducing database redundancy.",
                    solution: "1NF: Atomic values. 2NF: No partial dependency. 3NF: No transitive dependency.",
                    lang: "sql"
                },
                {
                    title: "ACID Properties",
                    problem: "Explain ACID properties in the context of database transactions.",
                    example: "Ensuring data integrity in banking apps.",
                    solution: "Atomicity, Consistency, Isolation, Durability.",
                    lang: "sql"
                },
                {
                    title: "Primary vs Unique Key",
                    problem: "Can a table have multiple Unique Keys? Can a Primary Key be null?",
                    example: "Entity relationship design.",
                    solution: "1. Yes, multiple Unique keys allowed. 2. No, Primary Key must be NOT NULL and unique.",
                    lang: "sql"
                },
                {
                    title: "SQL Injections",
                    problem: "How can you prevent SQL Injection in your backend code?",
                    example: "Web security best practices.",
                    solution: "Use Prepared Statements (Parameterized Queries) instead of string concatenation for query building.",
                    lang: "sql"
                },
                {
                    title: "Union vs Union All",
                    problem: "Which one is faster and why?",
                    example: "Merging two table results.",
                    solution: "Union All is faster because it doesn't check for duplicates. Union performs a distinct sort to remove duplicates.",
                    lang: "sql"
                },
                {
                    title: "Window Functions",
                    problem: "Write a query using ROW_NUMBER() to find the top earner in each department.",
                    example: "Advanced data reporting.",
                    solution: "SELECT * FROM (\n  SELECT Name, Salary, Dept, \n  ROW_NUMBER() OVER(PARTITION BY Dept ORDER BY Salary DESC) as rnk\n  FROM Emp\n) t WHERE rnk = 1;",
                    lang: "sql"
                }
            ]
        },
        {
            category: "Logical reasoning",
            questions: [
                {
                    title: "Number Series Patterns",
                    problem: "Complete the series: 2, 6, 12, 20, 30, ?",
                    example: "Checks for logical pattern recognition.",
                    solution: "Pattern: n^2 + n or adding +4, +6, +8, +10...\nNext addition: +12\nResult: 30 + 12 = 42",
                    lang: "logic"
                },
                {
                    title: "Blood Relations",
                    problem: "A is the father of B. C is the daughter of B. D is the brother of B. E is the son of A. What is the relationship between C and E?",
                    example: "Tests relationship deduction.",
                    solution: "A is father of B. B is parent of C. E is son of A.\nSo E and B are siblings. \nRelationship: E is the Maternal/Paternal Uncle of C.",
                    lang: "logic"
                },
                {
                    title: "Coding-Decoding",
                    problem: "If 'PRINTER' is coded as 'RPIUTRE', how is 'UPGRADE' coded?",
                    example: "Checks character shifting and pattern logic.",
                    solution: "Logic: Reverse every pair. P R -> R P, I N -> N I...\nResult: UP-GR-AD-E => PU-RG-DA-E (Swapping pairs in the target string).",
                    lang: "logic"
                },
                {
                    title: "Syllogisms",
                    problem: "Statements: All cats are dogs. All dogs are lions. Conclusion: 1. All cats are lions. 2. Some lions are cats.",
                    example: "Logical deduction from premises.",
                    solution: "Both 1 and 2 follow. Cats are inside Dogs, which are inside Lions. So Cats are inside Lions.",
                    lang: "logic"
                },
                {
                    title: "Seating Arrangement",
                    problem: "A, B, C, D, E are sitting in a row. A is next to B, C is next to D. D is not next to E. E is on the far left. C is second from the right.",
                    example: "Spatial arrangement logic.",
                    solution: "Order from Left: E, A, B, C, D (or E, B, A, C, D).",
                    lang: "logic"
                },
                {
                    title: "Directions Sense",
                    problem: "A man starts walking North. After 3km, he turns Right and walks 4km. How far is he from the starting point?",
                    example: "Pythagoras theorem application.",
                    solution: "Distance = sqrt(3^2 + 4^2) = sqrt(9 + 16) = 5km.",
                    lang: "logic"
                },
                {
                    title: "Clock Angles",
                    problem: "What is the angle between the hour hand and minute hand at 3:30?",
                    example: "Formula-based logic.",
                    solution: "Angle = |30H - (11/2)M| = |30(3) - (11/2)(30)| = |90 - 165| = 75 degrees.",
                    lang: "logic"
                },
                {
                    title: "Calendar Logic",
                    problem: "If today is Monday, what day will it be after 61 days?",
                    example: "Remainder/Modulus logic.",
                    solution: "61 % 7 = 5 (remainder). 5 days after Monday is Saturday.",
                    lang: "logic"
                },
                {
                    title: "Data Sufficiency",
                    problem: "What is the age of Ravi? 1. Ravi is 3 years older than Sunil. 2. Sunil is 25 years old.",
                    example: "Evaluating if information is enough.",
                    solution: "Both statements 1 and 2 together are sufficient to find Ravi's age (28).",
                    lang: "logic"
                },
                {
                    title: "Analogies",
                    problem: "Bird : Fly :: Fish : ?",
                    example: "Relationship matching.",
                    solution: "Relationship: Movement. Fish : Swim.",
                    lang: "logic"
                }
            ]
        }
    ];

    const practiceArena = [
        {
            category: "Arrays & Sorting",
            problems: [
                {
                    title: "Sort an Array of 0s, 1s, and 2s",
                    difficulty: "Easy",
                    statement: "Given an array containing only 0s, 1s, and 2s, sort it in ascending order without using built-in sort functions.",
                    constraints: "O(n) time, O(1) space.",
                    input: "[0, 1, 2, 1, 0]",
                    output: "[0, 0, 1, 1, 2]"
                },
                {
                    title: "Find Kth Largest Element",
                    difficulty: "Medium",
                    statement: "Find the Kth largest element in an unsorted array.",
                    constraints: "O(n log k) or O(n) average time.",
                    input: "arr=[3,2,3,1,2,4,5,5,6], k=4",
                    output: "4"
                },
                {
                    title: "Trapping Rain Water",
                    difficulty: "Hard",
                    statement: "Given n non-negative integers representing an elevation map where the width of each bar is 1, compute how much water it can trap after raining.",
                    constraints: "O(n) time, O(1) space.",
                    input: "[0,1,0,2,1,0,1,3,2,1,2,1]",
                    output: "6"
                }
            ]
        },
        {
            category: "String Algorithms",
            problems: [
                {
                    title: "Longest Substring Without Repeating Characters",
                    difficulty: "Medium",
                    statement: "Find the length of the longest substring without repeating characters.",
                    constraints: "O(n) time.",
                    input: "'abcabcbb'",
                    output: "3 ('abc')"
                },
                {
                    title: "KMP Algorithm (Pattern Matching)",
                    difficulty: "Medium",
                    statement: "Find the first occurrence of a pattern in a text string.",
                    constraints: "O(n + m) time.",
                    input: "text='ABC ABCDAB ABCDABCDABDE', pattern='ABCDABD'",
                    output: "15"
                }
            ]
        },
        {
            category: "Dynamic Programming",
            problems: [
                {
                    title: "0/1 Knapsack Problem",
                    difficulty: "Medium",
                    statement: "Given weights and values of n items, put these items in a knapsack of capacity W to get the maximum total value.",
                    constraints: "O(n*W) time and space.",
                    input: "W=50, wts=[10,20,30], vals=[60,100,120]",
                    output: "220"
                },
                {
                    title: "Climbing Stairs",
                    difficulty: "Easy",
                    statement: "You are climbing a staircase. It takes n steps to reach the top. Each time you can either take 1 or 2 steps. In how many distinct ways can you climb to the top?",
                    constraints: "O(n) time, O(1) space.",
                    input: "n=3",
                    output: "3"
                }
            ]
        }
    ];

    const [activePracticeCat, setActivePracticeCat] = useState("Arrays & Sorting");
    const [selectedProblem, setSelectedProblem] = useState(null);

    const handlePracticePlayground = (problem) => {
        if (!problem) return;

        // Define high-quality online IDEs for various needs
        const compilers = {
            "Arrays & Sorting": "https://www.onlinegdb.com/online_c_compiler",
            "String Algorithms": "https://www.programiz.com/javascript/online-compiler/",
            "Dynamic Programming": "https://leetcode.com/problemset/all/"
        };

        const targetUrl = compilers[activePracticeCat] || "https://www.onlinegdb.com/";
        window.open(targetUrl, "_blank");
    };

    const [activeCodingCat, setActiveCodingCat] = useState("Java");
    const [activeCodingSol, setActiveCodingSol] = useState(null);

    return (
        <>
            <NavBar />
            <div className="career-page">
                {/* HERO SECTION */}
                <section className="career-hero">
                    <div className="container">
                        <div className="hero-content">
                            <div className="badge-elite"><ShieldCheck size={16} /> Verified Preparation Partner</div>
                            <h1>The 1000+ Placement Suite</h1>
                            <p>Exhaustive MNC preparation with 80+ Premium Templates and 15+ Advanced Guides.</p>
                            <div className="hero-stats">
                                <div className="stat-item"><span>1000+</span> Real Questions</div>
                                <div className="stat-item"><span>80+</span> Pro Templates</div>
                                <div className="stat-item"><span>15+</span> MNC Guides</div>
                            </div>
                            <button className="cta-btn" onClick={() => document.getElementById('roadmap-section').scrollIntoView({ behavior: 'smooth' })}>
                                Get Started Now <ArrowRight size={18} />
                            </button>
                        </div>
                    </div>
                </section>

                {/* ROADMAP SECTION */}
                <section id="roadmap-section" className="roadmap-section">
                    <div className="container">
                        <div className="section-header">
                            <span className="section-subtitle">STRATEGY 01</span>
                            <h2>Recruitment Roadmap</h2>
                            <p>Your step-by-step masterplan to land a top placement.</p>
                        </div>
                        <div className="timeline">
                            {mncRoadmap.map((step, index) => (
                                <div key={index} className="timeline-item">
                                    <div className="timeline-icon">{step.icon}</div>
                                    <div className="timeline-content">
                                        <span className="step-label">{step.subtitle}</span>
                                        <h3 className="step-title">{step.title}</h3>
                                        <p>{step.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* PLACEMENT PATTERN HUB */}
                <section className="company-section">
                    <div className="container">
                        <div className="section-header">
                            <span className="section-subtitle">STRATEGY 02</span>
                            <h2>Placement Pattern Hub</h2>
                            <p>High-level testing patterns for global giants.</p>
                        </div>
                        <div className="tabs-container">
                            <div className="tabs-sidebar">
                                {Object.keys(companyPatterns).map((company) => (
                                    <button key={company} className={`tab-btn ${activeCompany === company ? 'active' : ''}`} onClick={() => setActiveCompany(company)}>
                                        <Building2 size={16} /> {company}
                                    </button>
                                ))}
                            </div>
                            <div className="tab-content">
                                <div className="content-inner animate-fade">
                                    <div className="content-header">
                                        <h3>{activeCompany} Placement Pattern</h3>
                                        <span className="badge">Drive 2024-25</span>
                                    </div>
                                    <div className="pattern-grid">
                                        <div className="pattern-box">
                                            <Target color="#9f1239" />
                                            <div><strong>Exam Name</strong><p>{companyPatterns[activeCompany].exam}</p></div>
                                        </div>
                                        <div className="pattern-box">
                                            <Cpu color="#9f1239" />
                                            <div><strong>Tech Focus</strong><p>{companyPatterns[activeCompany].tech}</p></div>
                                        </div>
                                        <div className="pattern-box">
                                            <UserCheck color="#9f1239" />
                                            <div><strong>HR Expectation</strong><p>{companyPatterns[activeCompany].hr}</p></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* NEW DEDICATED QUESTION BANK SECTION */}
                <section className="qb-section">
                    <div className="container">
                        <div className="section-header">
                            <span className="section-subtitle">STRATEGY 03</span>
                            <h2>Separate MNC Question Bank</h2>
                            <p>Exhaustive technical & HR question banks organized by company.</p>
                        </div>

                        <div className="qb-container">
                            <div className="qb-selector">
                                <label>Select Company:</label>
                                <select value={qbCompany} onChange={(e) => setQbCompany(e.target.value)}>
                                    {Object.keys(companyPatterns).map(c => <option key={c} value={c}>{c} Full Bank</option>)}
                                </select>
                            </div>

                            <div className="qb-grid animate-fade">
                                {getQB(qbCompany).map((item, idx) => (
                                    <div key={idx} className="q-card">
                                        <div className="q-header" onClick={() => setActiveQuestion(activeQuestion === idx ? null : idx)}>
                                            <div className="q-title"><Zap size={16} color="#f59e0b" /> Question {idx + 1}</div>
                                            {activeQuestion === idx ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                                        </div>
                                        <div className="q-content-text">{item.q}</div>
                                        {activeQuestion === idx && (
                                            <div className="q-body">
                                                <strong>Suggested Expert Answer:</strong>
                                                <p>{item.a}</p>
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* ELITE PREP GUIDES SECTION */}
                <section className="guides-section">
                    <div className="container">
                        <div className="section-header">
                            <span className="section-subtitle">STRATEGY 04</span>
                            <h2>Elite Placement Guides</h2>
                            <p>In-depth strategies covering every round of a typical MNC drive.</p>
                        </div>
                        <div className="guides-grid">
                            {recruitmentGuides.map((guide, i) => (
                                <div key={i} className="guide-card">
                                    <span className="guide-type">{guide.type}</span>
                                    <h3>{guide.title}</h3>
                                    <p>{guide.desc}</p>
                                    <ul>
                                        {guide.tips.map((tip, j) => <li key={j}><CheckCircle size={14} color="#9f1239" /> {tip}</li>)}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ELITE CODING HUB SECTION */}
                <section className="coding-section">
                    <div className="container">
                        <div className="section-header">
                            <span className="section-subtitle">STRATEGY 05</span>
                            <h2>Elite Coding Hub</h2>
                            <p>Master the most frequent MNC coding problems with optimized solutions.</p>
                        </div>

                        <div className="coding-container">
                            <div className="coding-tabs">
                                {codingQuestions.map(cat => (
                                    <button
                                        key={cat.category}
                                        className={`coding-tab ${activeCodingCat === cat.category ? 'active' : ''}`}
                                        onClick={() => { setActiveCodingCat(cat.category); setActiveCodingSol(null); }}
                                    >
                                        {cat.category}
                                    </button>
                                ))}
                            </div>

                            <div className="coding-grid animate-fade">
                                {codingQuestions.find(c => c.category === activeCodingCat).questions.map((q, idx) => (
                                    <div key={idx} className="coding-card">
                                        <div className="coding-header">
                                            <div className="coding-title-row">
                                                <div className="coding-icon-box"><Cpu size={20} /></div>
                                                <h3>{q.title}</h3>
                                            </div>
                                            <span className={`lang-badge ${q.lang}`}>{q.lang.toUpperCase()}</span>
                                        </div>
                                        <div className="coding-body">
                                            <p className="prob-desc"><strong>Problem:</strong> {q.problem}</p>
                                            <p className="prob-example"><strong>Example:</strong> {q.example}</p>
                                            <button className="view-sol-btn" onClick={() => setActiveCodingSol(activeCodingSol === idx ? null : idx)}>
                                                {activeCodingSol === idx ? 'Hide Solution' : 'View Optimized Solution'}
                                            </button>
                                            {activeCodingSol === idx && (
                                                <div className="sol-preview">
                                                    <CodeHighlighter code={q.solution} lang={q.lang} />
                                                    <div className="sol-footer">
                                                        <ShieldCheck size={14} /> Recommended Optimized Approach
                                                    </div>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* ELITE CODING ARENA */}
                <section id="arena-section" className="arena-section">
                    <div className="container">
                        <div className="section-header">
                            <span className="section-subtitle">STRATEGY 06</span>
                            <h2>Elite Coding Arena</h2>
                            <p>Challenge yourself with high-impact algorithmic problems. Level up your solving skills.</p>
                        </div>

                        <div className="arena-container">
                            <div className="arena-sidebar">
                                {practiceArena.map(cat => (
                                    <div key={cat.category} className="arena-cat-group">
                                        <div className="arena-cat-title">{cat.category}</div>
                                        <div className="arena-prob-list">
                                            {cat.problems.map((p, idx) => (
                                                <button
                                                    key={idx}
                                                    className={`arena-prob-item ${selectedProblem?.title === p.title ? 'active' : ''}`}
                                                    onClick={() => setSelectedProblem(p)}
                                                >
                                                    <div className={`status-dot ${p.difficulty.toLowerCase()}`}></div>
                                                    {p.title}
                                                </button>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className="arena-main">
                                {selectedProblem ? (
                                    <div className="problem-view animate-fade">
                                        <div className="prob-view-header">
                                            <h3>{selectedProblem.title}</h3>
                                            <span className={`diff-badge ${selectedProblem.difficulty.toLowerCase()}`}>{selectedProblem.difficulty}</span>
                                        </div>
                                        <div className="prob-view-body">
                                            <div className="prob-section">
                                                <h4>Problem Statement</h4>
                                                <p>{selectedProblem.statement}</p>
                                            </div>
                                            <div className="prob-section">
                                                <h4>Constraints</h4>
                                                <div className="constraints-box">{selectedProblem.constraints}</div>
                                            </div>
                                            <div className="prob-grid">
                                                <div className="prob-section">
                                                    <h4>Sample Input</h4>
                                                    <CodeHighlighter code={selectedProblem.input} lang="text" />
                                                </div>
                                                <div className="prob-section">
                                                    <h4>Sample Output</h4>
                                                    <CodeHighlighter code={selectedProblem.output} lang="text" />
                                                </div>
                                            </div>
                                            <div className="prob-actions">
                                                <button className="practice-btn" onClick={() => handlePracticePlayground(selectedProblem)}>Practice in Playground <Zap size={16} /></button>
                                                <button className="submit-btn" onClick={() => alert("Problem marked as completed! Keep going.")}>Mark as Completed <ShieldCheck size={16} /></button>
                                            </div>
                                        </div>
                                    </div>
                                ) : (
                                    <div className="arena-placeholder">
                                        <Terminal size={48} />
                                        <h3>Select a problem to start practicing</h3>
                                        <p>Choose from Arrays, Strings, or DP to test your skills.</p>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </section>

                {/* RESUME GALLERY */}
                <section id="resume-section" className="resume-section">
                    <div className="container">
                        <div className="section-header">
                            <span className="section-subtitle">STRATEGY 07</span>
                            <h2>Elite Resume Architect</h2>
                            <p>80+ Industry-vetted templates designed to pass ATS filters effortlessly.</p>
                        </div>

                        <div className="template-grid">
                            {templates.map((tpl) => (
                                <div key={tpl.id} className="template-card-modern">
                                    <div className="template-thumb" onClick={() => setSelectedTemplate(tpl)}>
                                        <img src={tpl.image} alt={tpl.name} />
                                        <div className="thumb-overlay">
                                            <span><Search size={20} /> Preview Template</span>
                                        </div>
                                    </div>
                                    <div className="template-info">
                                        <div className="tpl-head">
                                            <span className="tpl-type">{tpl.type}</span>
                                            <div className="stars">★★★★★</div>
                                        </div>
                                        <h3>{tpl.name}</h3>
                                        <p>{tpl.desc}</p>
                                        <button className="download-btn-small" onClick={() => handleDownload(tpl.name)}>
                                            <Download size={16} /> Download .DOCX
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* MODAL */}
                {selectedTemplate && (
                    <div className="template-modal" onClick={() => setSelectedTemplate(null)}>
                        <div className="modal-inner" onClick={(e) => e.stopPropagation()}>
                            <button className="close-modal" onClick={() => setSelectedTemplate(null)}><X size={24} /></button>
                            <div className="modal-scroll">
                                <img src={selectedTemplate.image} alt={selectedTemplate.name} className="full-preview" />
                            </div>
                            <div className="modal-footer">
                                <div className="tpl-meta">
                                    <h3>{selectedTemplate.name}</h3>
                                    <p>{selectedTemplate.type} Layout • ATS Optimized</p>
                                </div>
                                <button className="modal-download-btn" onClick={() => handleDownload(selectedTemplate.name)}>
                                    <Download size={18} /> Download Now
                                </button>
                            </div>
                        </div>
                    </div>
                )}

                {/* CTA SECTION */}
                <section className="career-cta">
                    <div className="container">
                        <h2>Launch Your Career Today</h2>
                        <p>Join 10,000+ students who cleared MNC drives using our materials.</p>
                        <button onClick={() => navigate('/Courses')}>Browse Courses</button>
                    </div>
                </section>
            </div>
        </>
    );
};

export default CareerSupport;
