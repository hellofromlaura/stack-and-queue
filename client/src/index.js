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

console.log(isMatching('{[]}'), '{[]}');
console.log(isMatching('{[}'), '{[}');
console.log(isMatching('{[]][}'), '{[]][}');
console.log(isMatching('{[]}'), '{[]}');
console.log(isMatching('{)'), '{)');
console.log(isMatching('(('), '((');
console.log(isMatching('(x'), '(x');
console.log(isMatching('{(})'), '{(})');
console.log(isMatching('(hello)'), '(hello)');
