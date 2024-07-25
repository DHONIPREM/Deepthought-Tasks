const config = {
    "header": {
      "title": "Deep Thought",
      "buttons": [
        {
          "text": "Submit Task",
          "class": "submit-task"
        }
      ]
    },
    "sidebar": {
      "title": "Journey Board",
      "nav": [
        {
          "title": "Explore the world of management",
          "subItems": [
            "Technical Project Management",
            "Threadbuild",
            "Structure your pointers",
            "4SA Method"
          ]
        }
      ]
    },
    "mainContent": [
      {
        "sectionClass": "intro",
        "title": "Explore the world of management",
        "content": "Do you want to play an important role in leading a project through initiation, planning, execution, monitoring, controlling and completion. How? Do you want to explore the depths of your life?"
      },
      {
        "sectionClass": "content",
        "subSections": [
          {
            "subSectionClass": "video-section",
            "title": "Technical Project Management",
            "iframeSrc": "https://www.youtube.com/embed/dQw4w9WgXcQ"
          },
          {
            "subSectionClass": "threadbuild-section",
            "title": "Threadbuild",
            "description": "Description: Watch the video and thread build, and jot out key threads while watching that video.",
            "threads": [
              {
                "title": "Thread A",
                "textAreas": 2,
                "buttons": ["Summary for Thread A", "+ Sub thread"]
              }
            ]
          },
          {
            "subSectionClass": "structure-section",
            "title": "Structure Your Pointers",
            "description": "Description: Write a 400-500 word article, from your thread. Publish your understanding, and showcase your learning to the entire world.",
            "inputs": [
              {
                "type": "text",
                "placeholder": "Title"
              },
              {
                "type": "textarea",
                "placeholder": "Content",
                "rows": 5
              }
            ]
          },
          {
            "subSectionClass": "method-section",
            "title": "4SA Method",
            "description": "Description: To explore more read more",
            "content": [
              {
                "title": "Introduction",
                "text": "The 4SA Method, How to bring an idea into process?"
              },
              {
                "title": "Thread A",
                "text": "How are you going to develop your strategy? Which method are you going to use to develop a strategy? What if the project is lengthy?"
              },
              {
                "title": "Example 1",
                "text": "You have a concept; how will you put it into process?"
              }
            ]
          }
        ]
      }
    ],
    "footerButtons": [
      "?",
      "📊",
      "📅"
    ]
  };
  
  // Function to generate HTML content from JSON configuration
  function generateHTMLFromConfig(config) {
    const container = document.querySelector('.container');
  
    // Create Header
    const header = document.createElement('header');
    const headerTitle = document.createElement('h1');
    headerTitle.textContent = config.header.title;
    header.appendChild(headerTitle);
  
    config.header.buttons.forEach(buttonConfig => {
      const button = document.createElement('button');
      button.textContent = buttonConfig.text;
      button.className = buttonConfig.class;
      header.appendChild(button);
    });
  
    container.appendChild(header);
  
    // Create Sidebar
    const sidebar = document.createElement('aside');
    sidebar.className = 'journey-board collapsed';
    sidebar.id = 'journeyBoard';
  
    const sidebarContent = document.createElement('div');
    sidebarContent.className = 'journey-board-content';
  
    const sidebarTitle = document.createElement('h2');
    sidebarTitle.textContent = config.sidebar.title;
    sidebarContent.appendChild(sidebarTitle);
  
    const nav = document.createElement('nav');
    const ul = document.createElement('ul');
  
    config.sidebar.nav.forEach(navItem => {
      const li = document.createElement('li');
      li.textContent = navItem.title;
  
      const subUl = document.createElement('ul');
      navItem.subItems.forEach(subItem => {
        const subLi = document.createElement('li');
        subLi.textContent = subItem;
        subUl.appendChild(subLi);
      });
  
      li.appendChild(subUl);
      ul.appendChild(li);
    });
  
    nav.appendChild(ul);
    sidebarContent.appendChild(nav);
    sidebar.appendChild(sidebarContent);
    container.appendChild(sidebar);
  
    // Create Toggle Button
    const toggleButton = document.createElement('button');
    toggleButton.className = 'toggle-journey-board';
    toggleButton.textContent = '☰';
    toggleButton.onclick = toggleJourneyBoard;
    container.appendChild(toggleButton);
  
    // Create Main Content
    const main = document.createElement('main');
    main.id = 'mainContent';
  
    config.mainContent.forEach(sectionConfig => {
      const section = document.createElement('section');
      section.className = sectionConfig.sectionClass;
  
      const sectionTitle = document.createElement('h2');
      sectionTitle.textContent = sectionConfig.title;
      section.appendChild(sectionTitle);
  
      if (sectionConfig.content) {
        const sectionContent = document.createElement('p');
        sectionContent.textContent = sectionConfig.content;
        section.appendChild(sectionContent);
      }
  
      if (sectionConfig.subSections) {
        sectionConfig.subSections.forEach(subSectionConfig => {
          const subSection = document.createElement('div');
          subSection.className = subSectionConfig.subSectionClass;
  
          const subSectionTitle = document.createElement('h3');
          subSectionTitle.textContent = subSectionConfig.title;
          subSection.appendChild(subSectionTitle);
  
          if (subSectionConfig.iframeSrc) {
            const iframe = document.createElement('iframe');
            iframe.src = subSectionConfig.iframeSrc;
            iframe.frameBorder = '0';
            iframe.allowFullscreen = true;
            subSection.appendChild(iframe);
          }
  
          if (subSectionConfig.description) {
            const description = document.createElement('p');
            description.textContent = subSectionConfig.description;
            subSection.appendChild(description);
          }
  
          if (subSectionConfig.threads) {
            subSectionConfig.threads.forEach(threadConfig => {
              const thread = document.createElement('div');
              thread.className = 'thread';
  
              const threadTitle = document.createElement('h4');
              threadTitle.textContent = threadConfig.title;
              thread.appendChild(threadTitle);
  
              for (let i = 0; i < threadConfig.textAreas; i++) {
                const textarea = document.createElement('textarea');
                textarea.placeholder = 'Enter Text Here';
                textarea.rows = 3;
                thread.appendChild(textarea);
              }
  
              const threadControls = document.createElement('div');
              threadControls.className = 'thread-controls';
  
              threadConfig.buttons.forEach(buttonText => {
                const button = document.createElement('button');
                button.textContent = buttonText;
                threadControls.appendChild(button);
              });
  
              thread.appendChild(threadControls);
              subSection.appendChild(thread);
            });
          }
  
          if (subSectionConfig.inputs) {
            subSectionConfig.inputs.forEach(inputConfig => {
              const input = document.createElement(inputConfig.type === 'textarea' ? 'textarea' : 'input');
              input.placeholder = inputConfig.placeholder;
              if (inputConfig.type === 'textarea') {
                input.rows = inputConfig.rows;
              }
              subSection.appendChild(input);
            });
          }
  
          if (subSectionConfig.content) {
            subSectionConfig.content.forEach(contentConfig => {
              const contentTitle = document.createElement('h4');
              contentTitle.textContent = contentConfig.title;
              subSection.appendChild(contentTitle);
  
              const contentText = document.createElement('p');
              contentText.textContent = contentConfig.text;
              subSection.appendChild(contentText);
            });
          }
  
          section.appendChild(subSection);
        });
      }
  
      main.appendChild(section);
    });
  
    container.appendChild(main);
  
    // Create Footer Buttons
    const sidebarButtons = document.createElement('div');
    sidebarButtons.className = 'sidebar-buttons';
  
    config.footerButtons.forEach(buttonText => {
      const button = document.createElement('button');
      button.textContent = buttonText;
      sidebarButtons.appendChild(button);
    });
  
    container.appendChild(sidebarButtons);
  }
  
  function toggleJourneyBoard() {
    const journeyBoard = document.getElementById('journeyBoard');
    const mainContent = document.getElementById('mainContent');
  
    if (journeyBoard.classList.contains('expanded')) {
      journeyBoard.classList.remove('expanded');
      mainContent.classList.remove('expanded');
    } else {
      journeyBoard.classList.add('expanded');
      mainContent.classList.add('expanded');
    }
  }
  
  // Initialize the HTML content based on the JSON configuration
  document.addEventListener('DOMContentLoaded', () => {
    generateHTMLFromConfig(config);
  });
  