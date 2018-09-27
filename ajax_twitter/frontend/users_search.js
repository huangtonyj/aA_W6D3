class UsersSearch {
  constructor(el) {
    this.$el = $(el);   
    this.$input = $(".search"); 
    
    this.$el.on('keydown', 
      (event) => this.handleKeyDown(event));
    this.$input.on('keyDown', 
      (event) => this.handleKeyDown(event));
  }
  
  handleKeyDown(event){
    console.log("KEY WAS DOWN");
    // event.preventDefault();
    // 
    // let input = $(".search");
    // console.log(input);
  }
  
  
  
  
  
  
  
  
  
  
}

module.exports = UsersSearch;