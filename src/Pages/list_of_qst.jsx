const list_of_qst = [
    {
        Question: "What does HTML stand for?",
        Answers: [
            'Hyper Text Markup Language',
            'High Tech Modular Language',
            'Hyperlinks and Text Management Language',
            'Hyper Transfer Mode Language'
        ],
        CorrectAnswer: "Hyper Text Markup Language"  
    },
    {
        Question: "What is the primary purpose of CSS?",
        Answers: [
            'To create dynamic web pages',
            'To style the structure of a web page',
            'To handle server-side logic',
            'To manage database connections'
        ],
        CorrectAnswer: "To style the structure of a web page"
    },
    {
        Question: "Which of the following languages is NOT a programming language?",
        Answers: [
            'HTML',
            'CSS',
            'JavaScript',
            'SQL'
        ],
        CorrectAnswer: "CSS"
    },
    {
        Question: "What is the output of the following Python code snippet?\nprint(2 ** 3)",
        Answers: [
            '5',
            '6',
            '8',
            '16'
        ],
        CorrectAnswer: "8"
    },
    {
        Question: "What is the term for a data structure that follows the Last In, First Out (LIFO) principle?",
        Answers: [
            'Queue',
            'Stack',
            'Array',
            'Linked List'
        ],
        CorrectAnswer: "Stack"
    },
    {
        Question: "What does the acronym SQL stand for?",
        Answers: [
            'Structured Query Language',
            'Simple Question Language',
            'Standard Query Loop',
            'Sequential Query Logic'
        ],
        CorrectAnswer: "Structured Query Language"
    },
    {
        Question: "In binary, what does the number 1010 represent in decimal?",
        Answers: [
            '8',
            '9',
            '10',
            '11'
        ],
        CorrectAnswer: "10"
    },
    {
        Question: "What does the acronym HTTP stand for?",
        Answers: [
            'Hyper Text Transfer Protocol',
            'High Tech Transmission Protocol',
            'Hyperlink Transfer Process',
            'Host Transmission Transfer Protocol'
        ],
        CorrectAnswer: "Hyper Text Transfer Protocol"
    },
    {
        Question: "Which of the following is NOT a valid HTTP status code?",
        Answers: [
            '200',
            '404',
            '503',
            '600'
        ],
        CorrectAnswer: "600"
    },
    {
        Question: "Which of the following is a type of cybersecurity attack that involves tricking individuals into revealing sensitive information?",
        Answers: [
            'DDoS attack',
            'Phishing attack',
            'SQL injection attack',
            'Man-in-the-middle attack'
        ],
        CorrectAnswer: "Phishing attack"
    },
    {
        Question: "What is the maximum value that can be represented by a byte?",
        Answers: [
            '128',
            '255',
            '512',
            '1024'
        ],
        CorrectAnswer: "255"
    },
    {
        Question: "What does the acronym URL stand for?",
        Answers: [
            'Universal Resource Locator',
            'Uniform Resource Locator',
            'Universal Resource Link',
            'Uniform Resource Link'
        ],
        CorrectAnswer: "Uniform Resource Locator"
    },
    {
        Question: "Which of the following is NOT a valid HTTP request method?",
        Answers: [
            'GET',
            'PUT',
            'SEND',
            'DELETE'
        ],
        CorrectAnswer: "SEND"
    },
    {
        Question: "What is the binary representation of the decimal number 15?",
        Answers: [
            '1110',
            '1010',
            '1101',
            '1111'
        ],
        CorrectAnswer: "1111"
    },
    {
        Question: "Which of the following is NOT a type of cloud computing service?",
        Answers: [
            'Infrastructure as a Service (IaaS)',
            'Platform as a Service (PaaS)',
            'Software as a Solution (SaaS)',
            'Data as a Service (DaaS)'
        ],
        CorrectAnswer: "Software as a Solution (SaaS)"
    },
    {
        Question: "Which of the following is a valid IP address format?",
        Answers: [
            '256.168.0.1',
            '192.168.1.256',
            '192.168.0.1',
            '192.168.0.256'
        ],
        CorrectAnswer: "192.168.0.1"
    },
    {
        Question: "Which of the following is a valid CSS selector?",
        Answers: [
            '#myElement {}',
            '.myElement {}',
            '$myElement {}',
            '@myElement {}'
        ],
        CorrectAnswer: ".myElement {}"
    },
    {
        Question: "Which of the following is NOT a valid data type in Python?",
        Answers: [
            'Integer',
            'Float',
            'String',
            'Character'
        ],
        CorrectAnswer: "Character"
    },
    {
        Question: "Which of the following is a type of network attack where an attacker intercepts communication between two parties and relays messages between them?",
        Answers: [
            'Man-in-the-middle (MITM) attack',
            'Phishing attack',
            'Denial-of-Service (DoS) attack',
            'SQL injection attack'
        ],
        CorrectAnswer: "Man-in-the-middle (MITM) attack"
    },
    {
        Question: "What is the term used to describe a software vulnerability that allows attackers to gain unauthorized access or control over a system?",
        Answers: [
            'Firewall',
            'Phishing',
            'Exploit',
            'Malware'
        ],
        CorrectAnswer: "Exploit"
    },
    {
        Question: "Which of the following is NOT a feature of object-oriented programming?",
        Answers: [
            'Encapsulation',
            'Polymorphism',
            'Inheritance',
            'Compilation'
        ],
        CorrectAnswer: "Compilation"
    },
    {
        Question: "What does the acronym VPN stand for?",
        Answers: [
            'Virtual Private Network',
            'Visual Private Network',
            'Virtual Public Network',
            'Visual Public Network'
        ],
        CorrectAnswer: "Virtual Private Network"
    },
    {
        Question: "What is the primary purpose of an SSL certificate?",
        Answers: [
            'To encrypt data between the client and server',
            'To manage server-side sessions',
            'To optimize web page load times',
            'To handle client-side scripting'
        ],
        CorrectAnswer: "To encrypt data between the client and server"
    },
    {
        Question: "Which of the following is a common hashing algorithm?",
        Answers: [
            'AES',
            'RSA',
            'SHA-256',
            'DES'
        ],
        CorrectAnswer: "SHA-256"
    },
    {
        Question: "Which protocol is used to send email?",
        Answers: [
            'HTTP',
            'FTP',
            'SMTP',
            'SNMP'
        ],
        CorrectAnswer: "SMTP"
    },
    {
        Question: "What does the acronym RAM stand for?",
        Answers: [
            'Readily Accessible Memory',
            'Random Access Memory',
            'Rapid Application Memory',
            'Read-Only Access Memory'
        ],
        CorrectAnswer: "Random Access Memory"
    },
    {
        Question: "Which of the following is an example of a front-end JavaScript framework?",
        Answers: [
            'Node.js',
            'Django',
            'React',
            'Flask'
        ],
        CorrectAnswer: "React"
    },
    {
        Question: "Which command is used to change the current directory in a Unix-based system?",
        Answers: [
            'cd',
            'ls',
            'mkdir',
            'rm'
        ],
        CorrectAnswer: "cd"
    }
];

export default list_of_qst;
