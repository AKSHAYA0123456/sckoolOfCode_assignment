const lessons = [
    // Beginner Lessons
    { id: 1, title: "Print Your First Message", level: "Beginner", task: "Print 'Hello, world!'", hint: "Use print('Hello, world!')", solution: "print('Hello, world!')", expectedOutput: "Hello, world!" },
    { id: 2, title: "Variables and Data Types", level: "Beginner", task: "Create a variable named 'name' and assign your name to it.", hint: "Use name = 'Your Name'", solution: "name = 'Alice'", expectedOutput: "Alice" },
    { id: 3, title: "Basic Arithmetic", level: "Beginner", task: "Add two numbers and print the result.", hint: "Use the + operator", solution: "num1 = 5\nnum2 = 3\nprint(num1 + num2)", expectedOutput: "8" },
    { id: 4, title: "String Concatenation", level: "Beginner", task: "Concatenate two strings and print them.", hint: "Use + to combine strings", solution: "greeting = 'Hello, '\nname = 'Alice'\nprint(greeting + name)", expectedOutput: "Hello, Alice" },

    // Intermediate Lessons
    { id: 5, title: "If Statements", level: "Intermediate", task: "Write an if statement that prints 'Even' if a number is even.", hint: "Use if num % 2 == 0:", solution: "num = 4\nif num % 2 == 0:\n    print('Even')", expectedOutput: "Even" },
    { id: 6, title: "For Loops", level: "Intermediate", task: "Write a loop that prints numbers from 1 to 5.", hint: "Use a for loop with range(1, 6)", solution: "for i in range(1, 6):\n    print(i)", expectedOutput: "1\n2\n3\n4\n5" },
    { id: 7, title: "Lists and Loops", level: "Intermediate", task: "Write a loop to print each item in a list.", hint: "Use a for loop to iterate over a list", solution: "fruits = ['apple', 'banana', 'cherry']\nfor fruit in fruits:\n    print(fruit)", expectedOutput: "apple\nbanana\ncherry" },
    { id: 8, title: "Functions", level: "Intermediate", task: "Write a function that adds two numbers.", hint: "Use def function_name(param1, param2)", solution: "def add(a, b):\n    return a + b", expectedOutput: "Function add() defined" },

    // Advanced Lessons
    { id: 9, title: "Classes and Objects", level: "Advanced", task: "Create a class named 'Person' with a name attribute.", hint: "Use class Person:", solution: "class Person:\n    def __init__(self, name):\n        self.name = name", expectedOutput: "Class Person defined" },
    { id: 10, title: "Inheritance", level: "Advanced", task: "Create a subclass of 'Person' called 'Employee' with an additional 'job_title' attribute.", hint: "Use class Employee(Person):", solution: "class Person:\n    def __init__(self, name):\n        self.name = name\n\nclass Employee(Person):\n    def __init__(self, name, job_title):\n        super().__init__(name)\n        self.job_title = job_title", expectedOutput: "Class Employee defined" },
    { id: 11, title: "Lambda Functions", level: "Advanced", task: "Write a lambda function to square a number.", hint: "Use lambda x: x**2", solution: "square = lambda x: x**2\nprint(square(4))", expectedOutput: "16" },
    { id: 12, title: "Decorators", level: "Advanced", task: "Write a decorator function that logs the execution time of a function.", hint: "Use time module and a decorator", solution: "import time\n\ndef timing_decorator(func):\n    def wrapper():\n        start = time.time()\n        func()\n        end = time.time()\n        print(f'Execution time: {end - start} seconds')\n    return wrapper\n\n@timing_decorator\ndef some_function():\n    time.sleep(2)\nsome_function()", expectedOutput: "Execution time: 2.xxxx seconds" }
];

function loadLessons() {
    const lessonCardsContainer = document.querySelector('.lesson-cards-container');
    lessonCardsContainer.innerHTML = '';
    lessons.forEach(lesson => {
        const card = document.createElement('div');
        card.classList.add('lesson-card');
        card.innerHTML = `
            <h3>${lesson.title}</h3>
            <p>${lesson.level} - ${lesson.task}</p>
            <span class="${lesson.level.toLowerCase()}">${lesson.level}</span>
        `;
        card.addEventListener('click', () => openLesson(lesson));
        lessonCardsContainer.appendChild(card);
    });
}

function openLesson(lesson) {
    document.querySelector('.welcome-page').style.display = 'none';
    document.querySelector('.lesson-page').style.display = 'none';
    document.querySelector('.lesson-view').style.display = 'block';
    document.getElementById("lesson-title").textContent = lesson.title;
    document.getElementById("lesson-task").textContent = lesson.task;
    document.getElementById("code-area").value = '';
    document.getElementById("output").textContent = '';
    currentLesson = lesson;
}

function goBack() {
    document.querySelector('.lesson-view').style.display = 'none';
    document.querySelector('.lesson-page').style.display = 'block';
}

function checkCode() {
    const code = document.getElementById("code-area").value.trim();
    if (code === currentLesson.solution) {
        document.getElementById("output").textContent = `✅ Correct! Output: ${currentLesson.expectedOutput}`;
    } else {
        document.getElementById("output").textContent = "❌ Try again!";
    }
}

function showHint() {
    document.getElementById("hint").style.display = "block";
    document.getElementById("hint").textContent = `Hint: ${currentLesson.hint}`;
}

let currentLesson;
document.getElementById('start-btn').addEventListener('click', () => {
    document.querySelector('.welcome-page').style.display = 'none';
    document.querySelector('.lesson-page').style.display = 'block';
    loadLessons();
});
