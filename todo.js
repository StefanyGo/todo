class App {
    constructor() {
        
        const form = document.querySelector('form#taskForm')
        form.addEventListener('submit', (ev) => {
            ev.preventDefault()
            this.handleSubmit(ev)
            
        })
    }
    renderProperty(key, value) {
        const span = document.createElement('span')
        span.classList.add(key)
        span.textContent = value
        return span
    }
    
    renderItem(taskDetail) {
        const listing = document.createElement('li')
        listing.classList.add('taskDetail')
    
        const keys = Object.keys(taskDetail)
    
        keys.forEach((key) => {
          const span = this.renderProperty(key, taskDetail[key])
          listing.appendChild(span)
        })
        const button = document.createElement('button')
        button.name = "completeButton"
        const label = document.createTextNode("Delete Task")
        button.appendChild(label)
        button.onclick = function(){
            
            const taskList = document.querySelector('#taskList')
            taskList.removeChild(listing)
            alert('Removed task from list'); return false;
        };

        listing.appendChild(button)
    
        return listing
    }
    handleSubmit(ev) {
        const f = ev.target

        const taskDetail = {
            taskName: f.taskName.value,
            deadline: f.deadline.value
        }

        const array = [f.taskName.value, f.deadline.value]
        console.log(array)
       
        const item = this.renderItem(taskDetail)
        
        const taskList = document.querySelector('#taskList')
        taskList.appendChild(item)
    }
}

const app = new App()