document.addEventListener('DOMContentLoaded', () => {
    loadProjectData('data/project1.json');

    async function loadProjectData(filePath) {
        try {
            const response = await fetch(filePath);
            if (response.ok) {
                const data = await response.json();
                const tasks = data.project.tasks;
                renderTasks(tasks);
            } else {
                console.error('Failed to load project data.');
            }
        } catch (error) {
            console.error('Error loading project data:', error);
        }
    }

    function createAssetContainer(asset) {
        const assetContainer = document.createElement('div');
        assetContainer.className = 'asset-container';

        const assetName = document.createElement('h4');
        assetName.textContent = asset.assetName;
        assetContainer.appendChild(assetName);

        return assetContainer;
    }

    function renderTasks(tasks) {
        const taskContainer = document.getElementById('taskContainer');
        taskContainer.innerHTML = '';

        tasks.forEach(task => {
            const taskSection = document.createElement('section');
            taskSection.className = 'task-section';

            const taskTitle = document.createElement('h3');
            taskTitle.textContent = task.taskName;
            taskSection.appendChild(taskTitle);

            task.assets.forEach(asset => {
                const assetContainer = createAssetContainer(asset);
                taskSection.appendChild(assetContainer);
            });

            taskContainer.appendChild(taskSection);
        });
    }

    window.toggleJourneyBoard = function() {
        const journeyBoard = document.getElementById("journeyBoard");
        const mainContent = document.getElementById("mainContent");

        if (journeyBoard.classList.contains("expanded")) {
            journeyBoard.classList.remove("expanded");
            mainContent.classList.remove("expanded");
        } else {
            journeyBoard.classList.add("expanded");
            mainContent.classList.add("expanded");
        }
    };
});
