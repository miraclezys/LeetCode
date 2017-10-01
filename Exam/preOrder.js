function preOrder(obj) {
  // root left right
  if(obj) {
    console.log(obj.value);
    preOrder(obj.left);
    preOrder(obj.right);
  }
}

function midOrder(obj) {
  // left root right
  if(obj) {
    midOrder(obj.left);
    console.log(obj.value);
    midOrder(obj.right);
  } 
}

function postOrder(obj) {
  // left right root
  if(obj) {
    postOrder(obj.left);
    postOrder(obj.right);
    console.log(obj.value);
  }
}

(function() {
  var tree = {
    value: 'G',
    left: {
      value: 'D',
      left: {
        value: 'A',
      },
      right: {
        value: 'F',
        left: {
          value: 'E',
        }
      }
    },
    right: {
      value: 'M',
      left: {
        value: 'H',
      },
      right: {
        value: 'Z',
      },
    },
  };

  postOrder(tree);
})();
