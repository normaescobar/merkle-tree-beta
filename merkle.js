class MerkleTree{
    constructor(data){
      this.data = data;
      this.nodes = [];
      this.root = null;
    }
}
  
    create(){
      let data = this.data;
      for (let i = 0; i < data.length; i++) {
        let node = new Node(data[i]);
        this.nodes.push(node);
      }
      while (this.nodes.length > 1) {
         let newNodes = [];
         for (let i = 0; i < this.nodes.length; i += 2)
      }
}
