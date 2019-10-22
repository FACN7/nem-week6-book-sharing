
var node = {
    key : null
  , value : null
  , children : []
}
class Trie {
    constructor() {
        this.head = {
			key : ''
		, children: []
    };
}
    add(key){
        var curNode = this.head
		, newNode = null
		, curChar = key.slice(0,1);

	key = key.slice(1);
	
	while(typeof curNode.children[curChar] !== "undefined" 
		&& curChar.length > 0){
		curNode = curNode.children[curChar];
		curChar = key.slice(0,1);
		key = key.slice(1);
	}

	while(curChar.length > 0) {
		newNode = {
				key : curChar
			, value : key.length === 0 ? null : undefined
			, children : []
		};

		curNode.children[curChar] = newNode;

		curNode = newNode;

		curChar = key.slice(0,1);
		key = key.slice(1);
	}
    };

    search(key){
        var curNode = this.head
		, curChar = key.slice(0,1)
		, d = 0;

	key = key.slice(1);
        var prev=curNode;
	while(typeof curNode.children[curChar] !== "undefined" && curChar.length > 0){
        res+=curChar;
        curNode = curNode.children[curChar];
        prev=curNode;
		curChar = key.slice(0,1);
		key = key.slice(1);
		d += 1;
	}

	if (curNode.value === null && key.length === 0) {
		return [d,null];
	} else {
		return [-1,prev];
	}
    }

    remove(key){
        var d = this.search(key);
        if (d > -1){
            removeH(this.head, key, d);
        }
    }
    removeH(node, key, depth){
        if (depth === 0 && Object.keys(node.children).length === 0){
            return true;
        } 
    
        var curChar = key.slice(0,1);
    
        if (removeH(node.children[curChar], key.slice(1), depth-1)) {
            delete node.children[curChar];
            if (Object.keys(node.children).length === 0) {
                return true;
            } else {
                return false;
            }
        } else {
            return false;
        }
    }

  }
var isLastNode=(root)=>{
    for (let i = 0; i < 26; i++) {
        var index = String.fromCharCode(97+i);
    if (root.children[index]!==undefined) 
        return false; 
}
return true; 
}
 var suggestionsRec=(root,currprefex)=>{
    if(root===undefined||root===null||isLastNode(root)){
        arrRes.push(currprefex);
        return;
    }
    


    for(let i=0;i<26;i++){
        var index = String.fromCharCode(97+i);

        if(root.children[index]!==undefined){
            currprefex+=index;
            suggestionsRec(root.children[index],currprefex);
        }
    }
  }

var trie=new Trie();
var res="";
var arrRes=[];
trie.add("ebraheem");
trie.add("ebraheam");

var [a,b]=trie.search("ebrah");

suggestionsRec(b,res)
