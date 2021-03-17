// ローディング画面
var bg = document.getElementById('loader-bg'),
loader = document.getElementById('loader');

bg.classList.remove('is-hide');
loader.classList.remove('is-hide');

window.addEventListener('load', stopload);

// setTimeout('stopload()');

function stopload() {
    bg.classList.add('fadeout-bg');
    loader.classList.add('fadeout-loader');
}

// app
new Vue ({
    el: '#app',
    data: {
        // REVERSE
        title: 'Emmy Hayashi',
        // STATIONARY PICS pc
        imagePlus: 'images/plus.png',
        imagePencil: 'images/pencil.png',
        imageEraser: 'images/eraser.png',
        imageRuler: 'images/ruler.png',
        imageScissors: 'images/scissors.png',
        imageTriangle: 'images/triangle.png',
        imageClip: 'images/clip.png',
        imageClip2: 'images/clip2.png',
        // v BUTTON
        imageScrollDown: 'images/scrollDown.png',
        // TO DO LIST
        imageAdd: 'images/add-button.png',
        imageClose: 'images/close-button.png',
        number: 0,
        newTask: '',
        todos: [
            {task: 'Study JavaScript.', isCompleted: false}
        ]
    },
    methods: {
        // REVERSE
        reverseTitle: function() {
            this.title = this.title.split('').reverse().join('')
        },
        // COUNT UP
        countUp: function() {
            this.number += 1
        },
        // TO DO LIST
        addTodo: function() {
            if (this.newTask == '')
            return;
            this.todos.push (
                { task: this.newTask, isCompleted: false}
            );
            this.newTask = '';
        },
        deleteTodo: function(todo) {
            var index = this.todos.indexOf(todo)
            this.todos.splice(index, 1)
        }
    }
});

// CALCULATOR
myTotal = 0;
myInput = "";
myCalc = "+";
myFlg = 1;

function myValue(myData) {
    myFlg = 0;
    myInput += myData;
    document.myForm.myLine.value = myInput;
}

function myCalculate(myData) {
    if (myFlg == 0) {
        myFlg = 1;
        myWork = myTotal + myCalc + myInput;
        myTotal = eval(myWork);
        myInput = "";
        document.myForm.myLine.value = myTotal;
    }
    if (myData == "=") {
        myTotal = 0;
        myCalc = "+";
    } else {
        myCalc = myData;
    }
}

function myC() {
    myTotal = 0;
    myCalc = "+";
    myInput = "";
    document.myForm.myLine.value = myTotal;
}

// app2
new Vue ({
    el: '#app2',
    data: {
     // SKILL SET ICONS
     imageHtml: 'images/html.png',
     imageCss: 'images/css.png',
     imageSass: 'images/sass.png',
     imageBs: 'images/bs.png',
     imageJs: 'images/js.png',
     imageVue: 'images/vue.png',
     imageNodejs: 'images/nodejs.png',
     imageGithub: 'images/github.png',
     imageVs: 'images/vs.png',
     imageGimp: 'images/gimp.png',
     // ^ TOP BUTTON
     imageTop: 'images/top.png'
  }
});


