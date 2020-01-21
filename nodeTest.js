// Construct Single Node
class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

// Create/Get/Remove Nodes From Linked List
class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  // Insert first node
  insertFirst(data) {
    this.head = new Node(data, this.head);
    this.size++;
  }

  // Insert last node
  insertLast(data) {
    let node = new Node(data);
    let current;

    // If empty, make head
    if (!this.head) {
      this.head = node;
    } else {
      current = this.head;

      while (current.next) {
        current = current.next;
      }

      current.next = node;
    }

    this.size++;
  }

  // Insert at index
  insertAt(data, index) {
    //  If index is out of range
    if (index > 0 && index > this.size) {
      return;
    }

    // If first index
    if (index === 0) {
      this.insertFirst(data);
      return;
    }

    const node = new Node(data);
    let current, previous;

    // Set current to first
    current = this.head;
    let count = 0;

    while (count < index) {
      previous = current; // Node before index
      count++;
      current = current.next; // Node after index
    }

    node.next = current;
    previous.next = node;

    this.size++;
  }

  // Get at index
  getAt(index) {
    let current = this.head;
    let count = 0;

    while (current) {
      if (count == index) {
        document.getElementById("demo1").innerHTML = current.data;
        
      }
      count++;
      current = current.next;
    }

    return null;
  }

  // Remove at index
  removeAt(index) {
    if (index > 0 && index > this.size) {
      return;
    }

    let current = this.head;
    let previous;
    let count = 0;

    // Remove first
    if (index === 0) {
      this.head = current.next;
    } else {
      while (count < index) {
        count++;
        previous = current;
        current = current.next;
      }

      previous.next = current.next;
    }

    this.size--;
  }

  // Clear list
  clearList() {
    this.head = null;
    this.size = 0;
  }

  // Print list data
  printListData() {
    let current = this.head;
     var listName = []
    while (current) {
      listName.push(current.data);
      current = current.next;
    }
    return listName;
  }
}

const ll = new LinkedList();


function addFirst(){
    var nam = document.getElementById('Nom').value;
    ll.insertFirst(nam);
   
}
function addlast(){
    var nam = document.getElementById('Nom').value;
    ll.insertLast(nam);
}
function insertAt(){
    var nam = document.getElementById('Nom').value;
    var index = document.getElementById('indice').value;
    ll.insertAt(nam,index);
}
function affichAt() {
            var index = document.getElementById('indice').value;
            ll.getAt(index);
        }
        function affichAll(){
            var names, text, fLen, i;
            names = ll.printListData();
        fLen = names.length;

        text = "<ol>";
        for (i = 0; i < fLen; i++) {
        text += "<li>" + names[i] + "</li>";
        }
        text += "</ol>";

document.getElementById("demo").innerHTML = text;
}
function supAt(){
    var index = document.getElementById("indice").value;
    ll.removeAt(index)
}
function supAll(){
    ll.clearList();
} 
 

 
