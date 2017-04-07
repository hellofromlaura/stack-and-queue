/*
function createNode(data=null, next=null) {
    return {
        data,
        next
    };
}

class Stack {
    constructor() {
        this.top = null;
    }

    push(data) {
       //if the top of the stack is empty, then the data will be the
       //top of the stack
       if (this.top === null) {
           this.top = createNode(data);
           return;
       }

       //if the top already has something then create a new node
       //add data to the new node
       // have the pointer point to the top
       const node = createNode(data, this.top);
       this.top = node;
   }

   pop() {
    //in order to remove the top of the stack, you have to point
    //the pointer to the next item and that next item becomes the
    //top of the stack
    const node = this.top;
    this.top = node.next;
    return node.data;
  }
}

function peek(s) {
    //if the top of the stack does not have anything
    //then the stack is empty
    //otherwise return what's on the top
    if (s.top === null) {
        return null;
    }
    return s.top.data;
}

function display(s) {
    // displays the entire contents of the stack
    let node = s.top;
    while (node !== null) {
        console.log(node.data);
        node = node.next;
    }
}

function palindrome(string) {
  let stack = new Stack();
  const re = /[^A-Za-z0-9]/g;
  let palindrome = true;
  string = string.toLowerCase().replace(re, '');
  for(let i = 0; i < string.length; i++) {
     stack.push(string[i]);
   }
  for (let i = 0; i < string.length; i++) {
    if (stack.pop() !== string[i]) {
      palindrome = false;
    }
  }
  console.log(palindrome);
  return palindrome;
}

function isMatching(str) {
  let stack = new Stack();
  for (let i = 0; i < str.length; i++) {
    if (str[i] === '(' || str[i] === '[' || str[i] === '{') {
      stack.push(str[i]);
    } else {
      if (str[i] === ')'){
        if (peek(stack) === '(') {
          stack.pop();
        }
      }
      if (str[i] === ']'){
        if (peek(stack) === '[') {
          stack.pop();
        }
      }
      if (str[i] === '}'){
        if (peek(stack) === '{') {
          stack.pop();
        }
      }
    }
  }
  return (peek(stack) === null);
}

let s = new Stack();

s.push(1);
s.push(2);
s.push("Tauhida");
//console.log("Top of stack:", peek(s));

s.pop();
s.push("joe");
//console.log("Top of stack:", peek(s));

//display(s);

//palindrome('A car, a man, a maraca.');

// console.log(isMatching('{[]}'), '{[]}');
// console.log(isMatching('{[}'), '{[}');
// console.log(isMatching('{[]][}'), '{[]][}');
// console.log(isMatching('{[]}'), '{[]}');
// console.log(isMatching('{)'), '{)');
// console.log(isMatching('(('), '((');
// console.log(isMatching('(x'), '(x');
// console.log(isMatching('{(})'), '{(})');
// console.log(isMatching('(hello)'), '(hello)');



*/
// ========================================================================
// ========================================================================
// ========================================================================
// ========================================================================
// ========================================================================
// ========================================================================
// ========================================================================
// ========================================================================
// ========================================================================
// ========================================================================
// QUEUES

function createNode(data=null, next=null, prev=null) {
    return {
        data,
        next,
        prev
    };
}

class Queue {
    constructor() {
        this.first = null;
        this.last = null;
    }

    enqueue(data) {
        const node = createNode(data);

        if (this.last) {
            node.next = this.last;
            this.last.prev = node;
        }

        this.last = node;

        if (this.first === null) {
            this.first = node;
        }
    }

    dequeue() {
        if (this.first === null) {
            return;
        }

        const node = this.first;
        this.first = node.prev;

        if (node === this.last) {
            this.last = null;
        }

        return node.data;
    }
}

//other functions that uses the queue class

function display(q) {
    let node = q.first;
    while (node !== null) {
        console.log(node.data);
        node = node.prev;
    }
}

// let q = new Queue();
// q.enqueue("Tauhida");
// q.enqueue("Joe");
// q.enqueue("Tim");
// display(q);
// console.log(q.dequeue());
// display(q);
// q.enqueue("Alison");
// q.enqueue("Chris");
// console.log(q.dequeue());
// display(q);

const dancers = [
  {
    name: 'Jane',
    gender: 'f'
  },
  {
    name: 'Frank',
    gender: 'm'
  },
  {
    name: 'John',
    gender: 'm'
  },
  {
    name: 'Sherlock',
    gender: 'm'
  },
  {
    name: 'Madonna',
    gender: 'f'
  },
  {
    name: 'David',
    gender: 'm'
  },
  {
    name: 'Christopher',
    gender: 'm'
  },
  {
    name: 'Beyonce',
    gender: 'f'
  },
]

function squareDance(dancers) {
  let sparesQ = new Queue();
  for (let i=0; i<dancers.length; i++){
    if (sparesQ.last === null){
      sparesQ.enqueue(dancers[i]);
    }
    else if (dancers[i].gender != sparesQ.first.data.gender){
      console.log(`Matched dancers: ${dancers[i].name} and ${sparesQ.first.data.name}`);
      sparesQ.dequeue();
    }
    else {
      sparesQ.enqueue(dancers[i]);
    }
  }
  console.log(`The remaining spare dancer queue: `);
  display(sparesQ);
}
//squareDance(dancers);


const people = ['Beyonce', 'Christopher', 'David', 'Madonna', 'Sherlock', 'John', 'Frank', 'Jane', 'Bill', 'Tom'];

function bankLine(people) {
  let bankQ = new Queue();
  for (let i=0; i<people.length; i++){
    bankQ.enqueue(people[i]);
  }
  while (bankQ.last != null) {
    if (Math.random() > .75){
      console.log(`${bankQ.first.data} to the back of the line!`);
      bankQ.enqueue(bankQ.dequeue());
    }
    else {
      console.log(`${bankQ.first.data} has all their paperwork!`);
      bankQ.dequeue();
    }
  }
}

bankLine(people);
