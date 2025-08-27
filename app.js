// Hacker Terminal Portfolio - Advanced Interactive System

class HackerTerminalPortfolio {
    constructor() {
        this.commandHistory = [];
        this.historyIndex = -1;
        this.startTime = Date.now();
        this.matrixChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%^&*()";
        this.matrixDrops = [];
        
        this.portfolioData = {
            user_info: {
                name: "Adithya Ashok Menashinakai",
                username: "adithya@portfolio",
                title: "Full Stack Developer & Web development",
                email: "adithya.ashok.menashinakai@gmail.com",
                phone: "+91-9731572531",
                linkedin: "Adithya Menashinakai",
                location: "Dharwad, Karnataka-580007"
            },
            sections: {
                about: [
                    "ABOUT_ME.TXT",
                    " ",
                    "PROFILE: Detail-oriented and highly motivated Data Analyst & Full Stack",
                    "Developer with hands-on experience in data cleaning, dashboard design,",
                    "and converting SQL queries. Proficient in Excel, Tableau, PostgreSQL,",
                    "and web development technologies.",
                    " ",
                    "EXPERIENCE: Completed internship at Vistaar Financial Services where",
                    "  optimized queries and supported large-scale data analysis. Good",
                    "  communication and problem-solving skills with a proven academic",
                    "  background in computer applications and full stack development",
                    "  certification.",
                    " ",
                    "STATUS: Ready for new challenges and opportunities                       ",
                    " ",
                ],
                skills: [
                        "SKILLS.DAT:",
                        "🛠️ TECHNICAL_SKILLS:",
                        "   ► Excel              : ████████████             60%",
                        "   ► Power BI           : ████████                 40%",
                        "   ► Tableau            : ████████                 40%",
                        "   ► MySQL              : ██████████████           68%",
                        "   ► PostgreSQL         : █████████                45%",
                        "   ► Python             : ██████████████           70%",
                        "   ► Full Stack Dev     : ████████████████         80%",
                        "---------------------------------------------------",
                        " ",
                        "🤝 SOFT_SKILLS:",
                        "   ► Communication      : ████████████████         80%",
                        "   ► Problem-Solving    : █████████████████        86%",
                        "   ► Teamwork           : ███████████████████      94%",
                ],
                experience: [
                    "WORK_HISTORY.LOG:",
                    " ",
                    "💼 POSITION_HELD      : Data Analytics Intern",
                    "🏢 COMPANY_NAME       : Vistaar Financial Services Pvt. Ltd.",
                    "📅 DURATION           : Feb 2025 – Apr 2025",
                    "📌 STATUS             : Successfully Completed",
                    " ",
                    "---------------------------------------------------",
                    " ",
                    "🏆 ACHIEVEMENTS_UNLOCKED:",
                    "   ► Cleaned and prepared large datasets for analysis",
                    "   ► Translated and optimized Oracle queries into PostgreSQL",
                    "   ► Improved query performance by 30% ",
                    "   ► Enhanced real-time business insights through visualization",
                    " ",
                    ">>> Work protocol completed... Experience validated <<<"
                ],
                education: [
                    "ACADEMIC_RECORDS.EDU:",
                    " ",
                    "🎓 DEGREE_PROGRAM     : Bachelor's of Computer Applications",
                    "🏛️ INSTITUTION        : KLE Society's BBA and BCA College, Dharwad",
                    "📅 DURATION           : 2021 – 2024",
                    "📊 PERFORMANCE        : CGPA 8.32 / 10",
                    " ",
                    "---------------------------------------------------",
                    " ",
                    "🎓 FOUNDATION_COURSE  : Pre-University Course (PUC)",
                    "🏛️ INSTITUTION        : Karnataka University, Dharwad",
                    "📌 STATUS             : Successfully Completed",
                    "---------------------------------------------------",
                    " ",
                    "📚 ACADEMIC_FOCUS     :",
                    "   ► Computer Applications Development",
                    "   ► Database Management Systems",
                ],
                certifications: [
                                "CERTIFICATION_VAULT.CERT:",
                                                            " ",
                                                            "🎓 VERIFIED_CREDENTIAL  : Data Mining",
                                                            "🏢 PROVIDER             : Great Learning Academy",
                                                            "📅 YEAR_OBTAINED        : 2022",
                                                            "---------------------------------------------------",
                                                            " ",
                                                            "🎓 VERIFIED_CREDENTIAL  : Full Stack Development for Beginners",
                                                            "🏢 PROVIDER             : Simplilearn",
                                                            "📅 YEAR_OBTAINED        : 2022",
                                                            "---------------------------------------------------",
                                                            " ",
                                                            "📊 CERTIFICATION_COUNT  : 3 Active Credentials",
                                                            "✅ VERIFICATION_STATUS  : All certificates validated",
                                                            " ",
                                                            ">>> Certification protocol active... Credentials confirmed <<<"
                ],
                contact: [
                        "CONTACT_PROTOCOL.NET:",
                        " ",                       
                                                "📱 MOBILE_SECURE    : +91-9731572531",                                
                                                "💼 LINKEDIN_HANDLE  : Adithya Menashinakai",                             
                                                "📍 LOCATION_BASE    : Dharwad, Karnataka-580007",
                                                " ",                       
                                                "CONNECTION_STATUS   : [●] ONLINE - Ready to Connect",
                                                " ",                     
                                                "RESPONSE_TIME       : Usually within 24 hours",                           
                                                "AVAILABILITY        : Open to opportunities",                              
                                                "SECURE_CHANNELS     : Email preferred for initial contact",              
                                                "SOCIAL_NETWORKS     : LinkedIn for professional networking",             
                                                " ",                                              
                                                ">>> Initiating contact protocol... Ready to receive transmission <<<",   
                    
                ],
                hobbies: [
                    "PERSONAL_INTERESTS.DAT:",
                    " ",
                    "🧠 CODE_CHALLENGES     : Practicing SQL and Python on LeetCode",
                    "📅 ACTIVITY_LEVEL      : Daily problem-solving sessions",
                    "---------------------------------------------------",
                    " ",
                    "🤖 AI_EXPLORATION      : Exploring emerging AI tools and technologies",
                    "🎯 GOAL                : BUILDING OWN AI VOICE ASSISTANT LIKE SIRI (IOS)",
                    "---------------------------------------------------",
                    " ",
                    "📈 MARKET_ANALYSIS     : Analyzing stock market trends and patterns",
                    "📊 SPECIALIZATION      : Technical analysis & data interpretation",
                    "---------------------------------------------------",
                    " ",
                    "📊 CONTINUOUS_LEARNING : Advancing Excel, Tableau, and Power BI skills",
                    "🛠️ METHOD              : Real-world datasets & practical projects",
                    "---------------------------------------------------",
                    " ",
                    "📌 LEARNING_STATUS     : 100% Committed [████████████████████]",
                    "🌱 GROWTH_MINDSET      : Always seeking new challenges",
                    " ",
                    ">>> Hobby protocol activated... Interests logged successfully <<<"
                ]
            }
        };
        
        this.init();
    }

    init() {
        this.setupMatrixEffect();
        this.setupInstructionScreen();
        this.setupTimeUpdaters();
        this.setupProfileImage();
    }

    setupMatrixEffect() {
        const canvas = document.getElementById('matrix-canvas');
        const ctx = canvas.getContext('2d');
        
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        
        const columns = Math.floor(canvas.width / 20);
        
        // Initialize matrix drops
        for (let i = 0; i < columns; i++) {
            this.matrixDrops[i] = {
                y: Math.random() * canvas.height,
                speed: Math.random() * 3 + 2
            };
        }
        
        const drawMatrix = () => {
            ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
            ctx.fillRect(0, 0, canvas.width, canvas.height);
            
            ctx.fillStyle = '#00FF41';
            ctx.font = '15px JetBrains Mono, monospace';
            
            for (let i = 0; i < this.matrixDrops.length; i++) {
                const drop = this.matrixDrops[i];
                const char = this.matrixChars[Math.floor(Math.random() * this.matrixChars.length)];
                
                ctx.fillText(char, i * 20, drop.y);
                
                drop.y += drop.speed;
                
                if (drop.y > canvas.height && Math.random() > 0.975) {
                    drop.y = 0;
                }
            }
        };
        
        setInterval(drawMatrix, 50);
        
        // Resize handler
        window.addEventListener('resize', () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        });
    }

    setupInstructionScreen() {
        const instructionScreen = document.getElementById('instruction-screen');
        const mainTerminal = document.getElementById('main-terminal');
        
        // Start the terminal on any key press or click
        const startTerminal = () => {
            instructionScreen.style.opacity = '0';
            setTimeout(() => {
                instructionScreen.style.display = 'none';
                mainTerminal.classList.remove('hidden');
                this.initializeTerminal();
            }, 500);
        };
        
        document.addEventListener('keydown', startTerminal, { once: true });
        document.addEventListener('click', startTerminal, { once: true });
    }

    setupTimeUpdaters() {
        // Update system time in instruction screen
        const updateSystemTime = () => {
            const now = new Date();
            const timeString = now.toLocaleTimeString('en-US', { 
                hour12: false,
                hour: '2-digit',
                minute: '2-digit',
                second: '2-digit'
            });
            const systemTime = document.getElementById('system-time');
            if (systemTime) {
                systemTime.textContent = `SYSTEM TIME: ${timeString}`;
            }
        };
        
        // Update current time in terminal header
        const updateCurrentTime = () => {
            const now = new Date();
            const timeString = now.toLocaleString('en-US', {
                month: '2-digit',
                day: '2-digit',
                year: 'numeric',
                hour: '2-digit',
                minute: '2-digit',
                second: '2-digit',
                hour12: false
            });
            const currentTime = document.getElementById('current-time');
            if (currentTime) {
                currentTime.textContent = timeString;
            }
        };
        
        // Update uptime
        const updateUptime = () => {
            const uptime = Date.now() - this.startTime;
            const hours = Math.floor(uptime / 3600000).toString().padStart(2, '0');
            const minutes = Math.floor((uptime % 3600000) / 60000).toString().padStart(2, '0');
            const seconds = Math.floor((uptime % 60000) / 1000).toString().padStart(2, '0');
            const uptimeElement = document.getElementById('uptime');
            if (uptimeElement) {
                uptimeElement.textContent = `${hours}:${minutes}:${seconds}`;
            }
        };
        
        setInterval(updateSystemTime, 1000);
        setInterval(updateCurrentTime, 1000);
        setInterval(updateUptime, 1000);
        
        // Initial update
        updateSystemTime();
        updateCurrentTime();
        updateUptime();
    }

    setupProfileImage() {
        // Set the profile image background
        const profileImage = document.getElementById('profile-image');
        if (profileImage) {
            // The image will be set via CSS background-image from the attached file
            profileImage.style.backgroundImage = "url('data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 200 250%22><rect width=%22200%22 height=%22250%22 fill=%22%23001100%22/><text x=%22100%22 y=%22120%22 text-anchor=%22middle%22 fill=%22%2300FF41%22 font-family=%22monospace%22 font-size=%2210%22>ADITHYA</text><text x=%22100%22 y=%22140%22 text-anchor=%22middle%22 fill=%22%2300FFFF%22 font-family=%22monospace%22 font-size=%228%22>PROFILE IMAGE</text></svg>')";
        }
    }

    initializeTerminal() {
        this.terminalOutput = document.getElementById('terminal-output');
        this.commandInput = document.getElementById('command-input');
        
        this.setupTerminalEventListeners();
        this.showWelcomeMessage();
        this.focusInput();
    }

    setupTerminalEventListeners() {
        this.commandInput.addEventListener('keydown', (e) => {
            if (e.key === 'Enter') {
                e.preventDefault();
                this.executeCommand();
            } else if (e.key === 'ArrowUp') {
                e.preventDefault();
                this.navigateHistory('up');
            } else if (e.key === 'ArrowDown') {
                e.preventDefault();
                this.navigateHistory('down');
            } else if (e.key === 'Tab') {
                e.preventDefault();
                this.autoComplete();
            } else if (e.ctrlKey && e.key === 'l') {
                e.preventDefault();
                this.clearTerminal();
            }
        });

        // Keep input focused
        document.addEventListener('click', () => {
            this.focusInput();
        });
    }

    focusInput() {
        if (this.commandInput) {
            this.commandInput.focus();
        }
    }

    showWelcomeMessage() {
        const welcome = `
                       SYSTEM INITIALIZATION COMPLETE                   
                         WELCOME TO FRESHER WORLD

  > Terminal Access Granted                                             
  > User: ${this.portfolioData.user_info.name}                                    
  > Role: ${this.portfolioData.user_info.title}                        
  > Location: ${this.portfolioData.user_info.location}                                 
                                                                        
  Available commands: help, about, skills, experience, education,       
                      certifications, contact, hobbies, clear           
                                                                        
  Type 'help' for a complete list of commands.                          
  Type 'about' to begin exploring my profile.                           
                                                                        
  >>> System ready for command input <<<                                
`;
        this.addOutput(welcome, 'success');
    }

    executeCommand() {
        const command = this.commandInput.value.trim();
        if (command === '') return;

        // Add command to history
        this.commandHistory.push(command);
        this.historyIndex = this.commandHistory.length;

        // Display command
        this.addOutput(`adithya@portfolio:~$ ${command}`, 'command');

        // Process command with typing animation
        this.processCommandWithAnimation(command);

        // Clear input
        this.commandInput.value = '';
        this.scrollToBottom();
    }

    processCommandWithAnimation(command) {
        const args = command.toLowerCase().split(' ');
        const cmd = args[0];
        const param = args[1];

        // Show processing animation
        this.showProcessingAnimation();

        setTimeout(() => {
            this.processCommand(cmd, param);
        }, 800);
    }

    showProcessingAnimation() {
        const processing = this.addOutput('Processing command', 'info');
        let dots = 0;
        const maxDots = 3;
        
        const animate = () => {
            dots = (dots + 1) % (maxDots + 1);
            processing.textContent = `Processing command${'.'.repeat(dots)}`;
        };
        
        const interval = setInterval(animate, 200);
        
        setTimeout(() => {
            clearInterval(interval);
            processing.remove();
        }, 800);
        
        return processing;
    }

    processCommand(cmd, param) {
        switch (cmd) {
            case 'help':
                this.showHelp();
                break;
            case 'about':
                this.showSection('about');
                break;
            case 'skills':
                this.showSection('skills');
                break;
            case 'experience':
                this.showSection('experience');
                break;
            case 'education':
                this.showSection('education');
                break;
            case 'certifications':
                this.showSection('certifications');
                break;
            case 'contact':
                this.showSection('contact');
                break;
            case 'hobbies':
                this.showSection('hobbies');
                break;
            case 'clear':
                this.clearTerminal();
                break;
            case 'whoami':
                this.addOutput(this.portfolioData.user_info.name, 'info');
                break;
            case 'pwd':
                this.addOutput('/home/adithya/portfolio', 'info');
                break;
            case 'ls':
                this.showLS();
                break;
            case 'cat':
                this.showCat(param);
                break;
            case 'echo':
                this.addOutput(command.substring(5) || '', 'output');
                break;
            case 'date':
                this.addOutput(new Date().toString(), 'info');
                break;
            case 'status':
                this.showStatus();
                break;
            case 'scan':
                this.runSystemScan();
                break;
            case 'matrix':
                this.addOutput('Matrix mode already active. Welcome to the real world.', 'success');
                break;
            case 'exit':
                this.showExit();
                break;
            default:
                this.addOutput(`Command not found: ${cmd}\nType 'help' for available commands.`, 'error');
        }
    }

    showHelp() {
        const help = `

                              COMMAND REFERENCE                        

>>> PORTFOLIO COMMANDS:                                                   
  ├─ help           → Display this help message                         
  ├─ about          → Personal information and background               
  ├─ skills         → Technical and soft skills                         
  ├─ experience     → Work history and achievements                     
  ├─ education      → Academic background and qualifications            
  ├─ certifications → Professional certifications vault                 
  ├─ contact        → Communication channels and availability           
  └─ hobbies        → Personal interests and activities                 
                                                                        
>>> SYSTEM COMMANDS:                                                      
  ├─ clear          → Clear terminal screen                             
  ├─ pwd            → Show current directory                            
  ├─ ls             → List available files                              
  ├─ cat [file]     → Display file content                              
  ├─ echo [text]    → Display text message                              
  ├─ date           → Show current date and time                        
  ├─ status         → System status report                              
  ├─ scan           → Run system diagnostic scan                        
  └─ exit           → Exit terminal session                             
                                                                        
>>> KEYBOARD SHORTCUTS:                                                   
  ├─ ↑↓ Arrow Keys  → Navigate command history                          
  ├─ Tab            → Auto-complete commands                            
  └─ Ctrl+L         → Clear terminal (alternative)                     
`;
        this.addOutput(help, 'info');
    }

    showSection(sectionName) {
        if (this.portfolioData.sections[sectionName]) {
            const content = this.portfolioData.sections[sectionName].join('\n');
            this.addOutput(content, 'output');
        } else {
            this.addOutput(`Section '${sectionName}' not found.`, 'error');
        }
    }

    showLS() {
        const files = `
  about.txt          skills.dat         experience.log
  education.edu      certifications.cert contact.net
  hobbies.dat        profile.img        system.cfg
  
  Total: 9 files available
  Use 'cat [filename]' to view content (e.g., cat about)
`;
        this.addOutput(files, 'info');
    }

    showCat(param) {
        if (!param) {
            this.addOutput('Usage: cat [filename]\nExample: cat about, cat skills, cat contact', 'error');
            return;
        }

        const fileMap = {
            'about': 'about',
            'about.txt': 'about',
            'skills': 'skills',
            'skills.dat': 'skills',
            'experience': 'experience',
            'experience.log': 'experience',
            'education': 'education',
            'education.edu': 'education',
            'certifications': 'certifications',
            'certifications.cert': 'certifications',
            'contact': 'contact',
            'contact.net': 'contact',
            'hobbies': 'hobbies',
            'hobbies.dat': 'hobbies'
        };

        const section = fileMap[param.toLowerCase()];
        if (section) {
            this.showSection(section);
        } else {
            this.addOutput(`cat: ${param}: No such file or directory`, 'error');
        }
    }

    showStatus() {
        const uptime = Date.now() - this.startTime;
        const hours = Math.floor(uptime / 3600000);
        const minutes = Math.floor((uptime % 3600000) / 60000);
        const seconds = Math.floor((uptime % 60000) / 1000);

        const status = `
                               SYSTEM STATUS

>>> SYSTEM INFORMATION:                                                          
  ├─ Terminal Version    : Hacker Terminal v2.1                               
  ├─ User Session        : ${this.portfolioData.user_info.username}                            
  ├─ Uptime              : ${hours}h ${minutes}m ${seconds}s                             
  ├─ Status              : [●] ONLINE                                         
  └─ Security Level      : LEVEL 5 CLEARANCE                                  

>>> NETWORK CONNECTIVITY:                                                        
  ├─ Connection Status   : ████████████████████ SECURE                        
  ├─ Signal Strength     : ████████████████████ EXCELLENT                    
  └─ Data Transmission   : ENCRYPTED                                           
                                                                               
>>> PORTFOLIO METRICS:                                                           
  ├─ Commands Executed   : ${this.commandHistory.length}                                      
  ├─ Sections Available  : ${Object.keys(this.portfolioData.sections).length}                                      
  └─ User Engagement     : HIGH                                               

`;
        this.addOutput(status, 'info');
    }

    runSystemScan() {
        this.addOutput('Initiating system diagnostic scan...', 'info');
        
        const scanSteps = [
            'Scanning portfolio integrity... ████████████████████ 100%',
            'Checking data authenticity... ████████████████████ 100%',
            'Verifying skill matrices... ████████████████████ 100%',
            'Analyzing contact protocols... ████████████████████ 100%',
            'Testing security clearance... ████████████████████ 100%'
        ];
        
        let step = 0;
        const scanInterval = setInterval(() => {
            if (step < scanSteps.length) {
                this.addOutput(scanSteps[step], 'success');
                step++;
            } else {
                clearInterval(scanInterval);
                this.addOutput('\n✓ SCAN COMPLETE: All systems operational\n✓ Portfolio data integrity verified\n✓ Ready for professional engagement', 'success');
            }
        }, 800);
    }

    showExit() {
        const exitMessage = `
                            CONNECTION TERMINATION                             
                                                                     
  Thank you for accessing Adithya's Portfolio Terminal                         
                                                                               
  📧 For opportunities: adithya.ashok.menashinakai@gmail.com                  
  💼 Professional network: Adithya Menashinakai (LinkedIn)                     
  📱 Direct contact: +91-9731572531                                            
                                                                               
  Connection status: READY FOR NEW OPPORTUNITIES                              
                                                                               
  >>> Session will remain active for continuous access <<<                    
  >>> Type any command to continue exploration <<<                            

`;
        this.addOutput(exitMessage, 'info');
    }

    clearTerminal() {
        this.terminalOutput.innerHTML = '';
    }

    navigateHistory(direction) {
        if (this.commandHistory.length === 0) return;

        if (direction === 'up') {
            if (this.historyIndex > 0) {
                this.historyIndex--;
            }
        } else if (direction === 'down') {
            if (this.historyIndex < this.commandHistory.length - 1) {
                this.historyIndex++;
            } else {
                this.historyIndex = this.commandHistory.length;
                this.commandInput.value = '';
                return;
            }
        }

        this.commandInput.value = this.commandHistory[this.historyIndex] || '';
    }

    autoComplete() {
        const currentInput = this.commandInput.value.toLowerCase();
        const commands = [
            'help', 'about', 'skills', 'experience', 'education', 'certifications',
            'contact', 'hobbies', 'clear', 'whoami', 'pwd', 'ls', 'cat', 'echo',
            'date', 'status', 'scan', 'matrix', 'exit'
        ];

        const matches = commands.filter(cmd => cmd.startsWith(currentInput));
        
        if (matches.length === 1) {
            this.commandInput.value = matches[0];
        } else if (matches.length > 1) {
            this.addOutput(`\nPossible completions: ${matches.join(', ')}`, 'info');
            this.addOutput(`adithya@portfolio:~$ ${currentInput}`, 'command');
        }
    }

    addOutput(text, className = 'output') {
        const div = document.createElement('div');
        div.className = `command-line ${className}`;
        div.textContent = text;
        this.terminalOutput.appendChild(div);
        return div;
    }

    scrollToBottom() {
        const terminalBody = document.getElementById('terminal-body');
        terminalBody.scrollTop = terminalBody.scrollHeight;
    }
}

// Initialize the hacker terminal portfolio
document.addEventListener('DOMContentLoaded', () => {
    new HackerTerminalPortfolio();
});

// Export for potential external use
if (typeof module !== 'undefined' && module.exports) {
    module.exports = HackerTerminalPortfolio;
}